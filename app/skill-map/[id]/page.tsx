'use client'

import AnalyticsPanel from "@/components/analytics-panel"
import CharacterProfile from "@/components/character-profile"
import Cheat from "@/components/cheat"
import DashboardHeader from "@/components/dashboard-header"
import EvidenceTracker from "@/components/evidence-tracker"
import InterviewRecap from "@/components/interview-recap"
import NodeDetailModal from "@/components/node-detail-modal"
import SkillNodeMap from "@/components/skill-node-map"
import { absentApi } from "@/lib/api/absent.api"
import { caseSolvingApi } from "@/lib/api/case-solving.api"
import { cheatApi } from "@/lib/api/cheat.api"
import { hardSkillPointApi } from "@/lib/api/hard-skill-point.api"
import { questionApi } from "@/lib/api/question.api"
import { socialMediaScrapper } from "@/lib/api/social-media-scrapper.api"
import { softSkillPointApi } from "@/lib/api/soft-skill-point.api"
import { traineeApi } from "@/lib/api/trainee.api"
import { trainingApi } from "@/lib/api/training.api"
import { useEffect, useState } from "react"

export default function SkillMap({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { search?: string; page?: string };
}) {
  const [activeTab, setActiveTab] = useState("overview")
  const [selectedNode, setSelectedNode] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [traineeData, setTraineeData] = useState(null)
  const [absentTrainingData, setAbsentTrainingData] = useState(null)
  const [traineeScoreData, setTraineeScoreData] = useState(null)
  const [lastScrappedData, setLastScrappedData] = useState(null)
  const [submissionData, setSubmissionData] = useState(null)
  const [softSkillData, setSoftSkillData] = useState(null)
  const [hardSkillData, setHardSkillData] = useState(null)
  const [softSkillPoint, setSoftSkillPoint] = useState(null)
  const [hardSkillPoint, setHardSkillPoint] = useState(null)
  const [radarData, setRadarData] = useState(null)
  const [questionData, setQuestionData] = useState(null)
  const [cheatData, setCheatData] = useState(null)

  const handleNodeClick = (node) => {
    setSelectedNode(node)
    setIsModalOpen(true)
  }

  const { id } = params; 

  useEffect(() => {
    traineeApi.getTrainee(id).then((res) => {
      console.log(res)
        setTraineeData(res);
    });

    trainingApi.getTrainingCount().then((res) => {
      absentApi.getValidAbsents(id).then((res2) => {
        const data = {"trainingSession": res, "absent": res2}
        setAbsentTrainingData(data)
        console.log(id)
      })
    })

    caseSolvingApi.getScore(id).then((res) => {
      setTraineeScoreData(res)
      console.log(res)
    })

    socialMediaScrapper.getLastScrapped(id).then((res) => {
      setLastScrappedData(res)
    })

    caseSolvingApi.getSubmission(id).then((res) => {
      setSubmissionData(res)
    })

    softSkillPointApi.getDetail(id).then((res) => {
      setSoftSkillData(res)
    })

    hardSkillPointApi.getDetail(id).then((res) => {
      setHardSkillData(res)
    })

    softSkillPointApi.getPoint(id).then((res) => {
      setSoftSkillPoint(res)
    })

    hardSkillPointApi.getPoint(id).then((res) => {
      setHardSkillPoint(res)
    })

    hardSkillPointApi.getRadarData(id).then((res) => {
      setRadarData(res)
    })

    questionApi.getDetail(id).then((res) => {
      setQuestionData(res)
    })

    cheatApi.getDetail(id).then((res) => {
      setCheatData(res)
    })

  }, []);

  return (
    <div className="min-h-screen bg-background grid-bg">
      <DashboardHeader activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="p-6 space-y-6">
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Panel - Character Profile */}
            <div className="lg:col-span-3">
              <CharacterProfile data={traineeData} absentTrainingData={absentTrainingData} traineeScore={traineeScoreData} traineeHardSkillPoint={hardSkillPoint} traineeSoftSkillPoint={softSkillPoint}/>
            </div>

            {/* Center Panel - Skill Node Map */}
            <div className="lg:col-span-6">
              <SkillNodeMap softSkillData={softSkillPoint} hardSkillData={hardSkillData} />
            </div>

            {/* Right Panel - Analytics */}
            <div className="lg:col-span-3">
              <AnalyticsPanel traineeScore={traineeScoreData} radarData={radarData}/>
            </div>
          </div>
        )}

        {activeTab === "interview" && (
          <div className="max-w-4xl mx-auto">
            <InterviewRecap questionData={questionData}/>
          </div>
        )}

        {/* Evidence Tab Rendering */}
        {activeTab === "evidence" && (
          <div className="max-w-6xl mx-auto">
            <EvidenceTracker userData={traineeData} lastScrappedData={lastScrappedData} submissionData={submissionData} softSkillData={softSkillData} hardSkillData={hardSkillData}/>
          </div>
        )}

        {activeTab === "cheat" && (
          <div className="max-w-6xl mx-auto">
            <Cheat cheatData={cheatData}/>
          </div>
        )}

        {/* Placeholder for other tabs */}
        {["timeline", "mentornotes", "settings"].includes(activeTab) && (
          <div className="max-w-4xl mx-auto">
            <div className="p-8 text-center text-muted-foreground rounded-lg border border-border/50 bg-secondary/20">
              <p className="text-lg font-semibold">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Tab</p>
              <p className="text-sm mt-2">Coming soon...</p>
            </div>
          </div>
        )}
      </main>

      {/* Node Detail Modal */}
      <NodeDetailModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} node={selectedNode} />
    </div>
  )
}

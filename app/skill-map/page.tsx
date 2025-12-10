'use client'

import AnalyticsPanel from "@/components/analytics-panel"
import CharacterProfile from "@/components/character-profile"
import DashboardHeader from "@/components/dashboard-header"
import EvidenceTracker from "@/components/evidence-tracker"
import InterviewRecap from "@/components/interview-recap"
import NodeDetailModal from "@/components/node-detail-modal"
import SkillNodeMap from "@/components/skill-node-map"
import { traineeApi } from "@/lib/api/trainee.api"
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

  const handleNodeClick = (node) => {
    setSelectedNode(node)
    setIsModalOpen(true)
  }

  useEffect(() => {
    traineeApi.getTrainee().then((res) => {
        setTraineeData(res);
        console.log(res)
    });
  }, []);

  return (
    <div className="min-h-screen bg-background grid-bg">
      <DashboardHeader activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="p-6 space-y-6">
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Panel - Character Profile */}
            <div className="lg:col-span-3">
              <CharacterProfile data={traineeData} />
            </div>

            {/* Center Panel - Skill Node Map */}
            <div className="lg:col-span-6">
              <SkillNodeMap onNodeClick={handleNodeClick} />
            </div>

            {/* Right Panel - Analytics */}
            <div className="lg:col-span-3">
              <AnalyticsPanel />
            </div>
          </div>
        )}

        {activeTab === "interview" && (
          <div className="max-w-4xl mx-auto">
            <InterviewRecap />
          </div>
        )}

        {/* Evidence Tab Rendering */}
        {activeTab === "evidence" && (
          <div className="max-w-6xl mx-auto">
            <EvidenceTracker userData={traineeData} />
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

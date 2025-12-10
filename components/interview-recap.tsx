"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2, TrendingUp } from "lucide-react"

export default function InterviewRecap() {
  const traineeData = {
    name: "Alex Johnson",
    level: 5,
    completionPercentage: 42,
    totalScore: 88,
    programmingSkill: 92,
    communicationSkill: 85,
    leadershipSkill: 78,
    problemSolving: 88,
    consistency: 95,
    daysActive: 12,
    casesCompleted: 12,
    attendance: "100%",
  }

  const recommendedQuestions = [
    {
      category: "Programming Skills",
      questions: [
        "Walk us through how you approached the 'Arrays & Collections' problem. What was your methodology?",
        "Can you explain the difference between functions and methods? How have you used them in your recent cases?",
        "Describe a challenging bug you encountered and how you debugged it.",
        "What programming concepts have you found most difficult, and how did you overcome them?",
      ],
    },
    {
      category: "Soft Skills & Collaboration",
      questions: [
        "Tell us about your experience in the group discussions. What did you learn from your peers?",
        "How do you handle feedback? Give an example from your peer review sessions.",
        "Describe a time you had to collaborate with someone who had a different approach than yours.",
        "What does accountability mean to you, and how have you demonstrated it this past week?",
      ],
    },
    {
      category: "Growth & Learning Mindset",
      questions: [
        "What's one skill you feel you've improved the most on, and how did you do it?",
        "How do you stay motivated when facing challenging problems?",
        "What would you do differently if you could restart the training program?",
        "Where do you see yourself in your learning journey after this month?",
      ],
    },
    {
      category: "Problem Solving & Critical Thinking",
      questions: [
        "Walk through your problem-solving process when tackling a new case.",
        "Can you describe a solution you came up with that surprised you?",
        "How do you know when you need to ask for help versus continuing to try?",
      ],
    },
  ]

  return (
    <div className="space-y-6">
      {/* Profile Recap Card */}
      <Card className="p-6 border-accent/30 bg-card/80 backdrop-blur">
        <div className="space-y-6">
          {/* Header with name and level */}
          <div className="flex items-start justify-between border-b border-border/50 pb-4">
            <div>
              <h2 className="text-3xl font-bold text-accent">{traineeData.name}</h2>
              <p className="text-sm text-muted-foreground mt-1">Training Program - Month 1</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-accent">LV {traineeData.level}</div>
              <p className="text-xs text-muted-foreground mt-1">{traineeData.completionPercentage}% Complete</p>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-secondary/50 rounded-lg p-4 border border-border/50">
              <p className="text-xs text-muted-foreground mb-2">Overall Score</p>
              <p className="text-2xl font-bold text-accent">{traineeData.totalScore}%</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 border border-border/50">
              <p className="text-xs text-muted-foreground mb-2">Cases Completed</p>
              <p className="text-2xl font-bold text-green-400">{traineeData.casesCompleted}</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 border border-border/50">
              <p className="text-xs text-muted-foreground mb-2">Days Active</p>
              <p className="text-2xl font-bold text-blue-400">{traineeData.daysActive}</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 border border-border/50">
              <p className="text-xs text-muted-foreground mb-2">Attendance</p>
              <p className="text-2xl font-bold text-purple-400">{traineeData.attendance}</p>
            </div>
          </div>

          {/* Skill Breakdown */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">Skill Assessment</p>
            <div className="space-y-3">
              {[
                { label: "Programming Skill", value: traineeData.programmingSkill, color: "bg-red-500" },
                { label: "Communication Skill", value: traineeData.communicationSkill, color: "bg-green-500" },
                { label: "Leadership Skill", value: traineeData.leadershipSkill, color: "bg-cyan-500" },
                { label: "Problem Solving", value: traineeData.problemSolving, color: "bg-blue-500" },
                { label: "Consistency", value: traineeData.consistency, color: "bg-purple-500" },
              ].map((skill) => (
                <div key={skill.label} className="space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-muted-foreground">{skill.label}</span>
                    <span className="font-semibold text-foreground">{skill.value}%</span>
                  </div>
                  <div className="w-full bg-secondary/50 rounded-full h-2">
                    <div className={`h-full rounded-full ${skill.color}`} style={{ width: `${skill.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 gap-4 border-t border-border/50 pt-4">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Strength</p>
                <p className="text-xs text-muted-foreground mt-0.5">Consistent attendance and submission pattern</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-sm">Growth Area</p>
                <p className="text-xs text-muted-foreground mt-0.5">Leadership & team collaboration skills</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Interview Questions */}
      <Card className="p-6 border-accent/30 bg-card/80 backdrop-blur">
        <h3 className="text-xl font-bold mb-6">Recommended Interview Questions</h3>

        <div className="space-y-8">
          {recommendedQuestions.map((section, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <h4 className="text-sm font-bold text-accent uppercase tracking-wider">{section.category}</h4>
              </div>
              <div className="space-y-3 ml-5">
                {section.questions.map((question, qIdx) => (
                  <div
                    key={qIdx}
                    className="flex gap-4 p-3 rounded-lg bg-secondary/30 border border-border/50 hover:border-accent/50 transition-colors"
                  >
                    <div className="text-xs font-semibold text-accent/70 flex-shrink-0 pt-1">Q{qIdx + 1}</div>
                    <p className="text-sm text-foreground leading-relaxed">{question}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Interview Tips */}
        <div className="mt-8 p-4 bg-accent/10 border border-accent/30 rounded-lg">
          <p className="text-xs font-semibold text-accent mb-2">💡 Interview Tip</p>
          <p className="text-xs text-muted-foreground">
            Focus on specific examples from case submissions. Use the STAR method (Situation, Task, Action, Result) to
            structure responses. Highlight growth mindset and willingness to learn.
          </p>
        </div>
      </Card>
    </div>
  )
}

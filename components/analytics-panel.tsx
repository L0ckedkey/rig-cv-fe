"use client"

import { Card } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"

export default function AnalyticsPanel() {
  const progressData = [
    { day: "1", progress: 20 },
    { day: "3", progress: 35 },
    { day: "5", progress: 45 },
    { day: "7", progress: 55 },
    { day: "10", progress: 68 },
    { day: "14", progress: 78 },
  ]

  const skillBalanceData = [
    { skill: "Hard", value: 78 },
    { skill: "Soft", value: 65 },
    { skill: "Growth", value: 82 },
  ]

  const weeklyData = [
    { week: "W1", value: 65 },
    { week: "W2", value: 78 },
  ]

  const heatmapDays = Array.from({ length: 14 }, (_, i) => ({
    day: i + 1,
    activity: Math.floor(Math.random() * 5),
  }))

  const getHeatmapColor = (activity: number) => {
    const colors = ["#1f2937", "#10b981", "#34d399", "#6ee7b7", "#a7f3d0"]
    return colors[activity] || colors[0]
  }

  return (
    <div className="space-y-4">
      {/* 30-Day Progress */}
      <Card className="p-4 border-accent/30 bg-card/80 backdrop-blur">
        <h4 className="text-sm font-bold mb-4">30-Day Progress</h4>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={progressData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="day" stroke="rgba(255,255,255,0.5)" />
            <YAxis stroke="rgba(255,255,255,0.5)" />
            <Tooltip
              contentStyle={{ backgroundColor: "rgba(20,20,30,0.9)", border: "1px solid rgba(255,255,255,0.2)" }}
            />
            <Line type="monotone" dataKey="progress" stroke="#a78bfa" strokeWidth={2} dot={{ fill: "#a78bfa" }} />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Radar Chart */}
      <Card className="p-4 border-accent/30 bg-card/80 backdrop-blur">
        <h4 className="text-sm font-bold mb-4">Skill Balance</h4>
        <ResponsiveContainer width="100%" height={200}>
          <RadarChart data={skillBalanceData}>
            <PolarGrid stroke="rgba(255,255,255,0.1)" />
            <PolarAngleAxis dataKey="skill" stroke="rgba(255,255,255,0.5)" />
            <PolarRadiusAxis stroke="rgba(255,255,255,0.3)" />
            <Radar name="Score" dataKey="value" stroke="#a78bfa" fill="#a78bfa" fillOpacity={0.3} />
            <Tooltip
              contentStyle={{ backgroundColor: "rgba(20,20,30,0.9)", border: "1px solid rgba(255,255,255,0.2)" }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </Card>

      {/* Weekly Performance */}
      <Card className="p-4 border-accent/30 bg-card/80 backdrop-blur">
        <h4 className="text-sm font-bold mb-4">Weekly Performance</h4>
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
            <XAxis dataKey="week" stroke="rgba(255,255,255,0.5)" />
            <YAxis stroke="rgba(255,255,255,0.5)" />
            <Tooltip
              contentStyle={{ backgroundColor: "rgba(20,20,30,0.9)", border: "1px solid rgba(255,255,255,0.2)" }}
            />
            <Bar dataKey="value" fill="#a78bfa" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Activity Heatmap */}
      <Card className="p-4 border-accent/30 bg-card/80 backdrop-blur">
        <h4 className="text-sm font-bold mb-3">Activity Heatmap</h4>
        <div className="grid grid-cols-7 gap-2">
          {heatmapDays.map((day) => (
            <div
              key={day.day}
              className="aspect-square rounded border border-border/30"
              style={{ backgroundColor: getHeatmapColor(day.activity) }}
              title={`Day ${day.day}: ${day.activity} activities`}
            />
          ))}
        </div>
      </Card>

      {/* Milestones */}
      <Card className="p-4 border-accent/30 bg-card/80 backdrop-blur">
        <h4 className="text-sm font-bold mb-3">Upcoming Milestones</h4>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between items-center p-2 rounded bg-secondary/30 border border-border/30">
            <span>Project 1 Due</span>
            <span className="text-accent">Day 15</span>
          </div>
          <div className="flex justify-between items-center p-2 rounded bg-secondary/30 border border-border/30">
            <span>Mid-Month Review</span>
            <span className="text-soft-skill">Day 16</span>
          </div>
        </div>
      </Card>
    </div>
  )
}

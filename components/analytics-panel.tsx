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
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip
} from "recharts"

export default function AnalyticsPanel({traineeScore, radarData}) {
  
  const MIN_AXIS = 3;

  const normalizedRadarData = (() => {
    if (!radarData || radarData.length >= MIN_AXIS) return radarData;

    const dummyCount = MIN_AXIS - radarData.length;

    const dummyData = Array.from({ length: dummyCount }, (_, i) => ({
      subjectName: "",
      point: 0
    }));

    return [...radarData, ...dummyData];
  })();

  return (
    <div className="space-y-4">
      {/* 30-Day Progress */}
      <Card className="p-4 border-accent/30 bg-card/80 backdrop-blur">
        <h4 className="text-sm font-bold mb-4">Pre Training Score</h4>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={traineeScore}>
            <CartesianGrid strokeDasharray="3 3" />
            <YAxis
              domain={[0, 100]}
              ticks={[0, 20, 40, 60, 80, 100]}
              tick={false}
              hide
            />
            <XAxis dataKey="subjectName" tickFormatter={(value) =>
              value.length > 10 ? `${value.slice(0, 10)}…` : value
            } />
            {/* <YAxis /> */}
            <Tooltip
              contentStyle={{ backgroundColor: "rgba(239, 239, 240,1)", border: "1px solid rgba(255,255,255,0.2)" }}
            />
            <Bar dataKey="averageScore" fill="#a78bfa" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Radar Chart */}
      <Card className="p-4 border-accent/30 bg-card/80 backdrop-blur">
        <h4 className="text-sm font-bold mb-4">Top 5 Skills</h4>
        <ResponsiveContainer width="100%" height={200}>
          <RadarChart data={normalizedRadarData} style={{ aspectRatio: 1 }}>
            <PolarGrid/>
            <PolarAngleAxis dataKey="subjectName"  />
            <Radar name="Score" dataKey="point" stroke="#a78bfa" fill="#a78bfa" fillOpacity={0.3} />
            <Tooltip
              contentStyle={{ backgroundColor: "rgba(239, 239, 240,1)", border: "1px solid rgba(255,255,255,0.2)" }}
            />
          </RadarChart>
        </ResponsiveContainer>
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

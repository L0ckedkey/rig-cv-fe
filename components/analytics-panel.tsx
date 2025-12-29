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

  const uniqueRadarData = Object.values(
    (radarData ?? []).reduce((acc, item) => {
      acc[item.subjectName] = item;
      return acc;
    }, {})
  );

  const normalizedRadarData =
    uniqueRadarData.length >= MIN_AXIS
      ? uniqueRadarData
      : [
        ...uniqueRadarData,
        ...Array.from({ length: MIN_AXIS - uniqueRadarData.length }, () => ({
          subjectName: "",
          point: 0
        }))
      ];


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
            <Radar name="Score" dataKey="point" stroke="#a78bfa" fill="#a78bfa" fillOpacity={1} />
            <Tooltip
              contentStyle={{ backgroundColor: "rgba(239, 239, 240,1)", border: "1px solid rgba(255,255,255,0.2)" }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </Card>


    </div>
  )
}

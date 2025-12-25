"use client"

import { Card } from "@/components/ui/card"
import { Flame, CheckCircle2 } from "lucide-react"
import AchievementBadges from "./achievement-badges"
import { useState } from "react"

export default function CharacterProfile({ data, absentTrainingData, traineeScore, traineeHardSkillPoint, traineeSoftSkillPoint, traineeDetail }) {
  const stats = [
    { label: "Programming", value: 78, color: "text-hard-skill" },
    { label: "Communication", value: 65, color: "text-soft-skill" },
    { label: "Leadership", value: 82, color: "text-other-skill" },
    { label: "Problem Solving", value: 71, color: "text-accent" },
    { label: "Consistency", value: 88, color: "text-primary" },
  ]

  const level = 2
  
  if (!data || !absentTrainingData) {
    return <div className="p-4">Loading profile...</div>;
  }

  const progressPercent =
    ((absentTrainingData?.absent ?? 0) /
      (absentTrainingData?.trainingSession ?? 1)) *
    100;
  
  return (
    <Card className="p-6 border-accent/30 bg-card/80 backdrop-blur space-y-6">
      {/* Character Portrait */}
      <div className="relative group">
        <div className="aspect-square rounded-lg bg-gradient-to-b from-accent/20 to-primary/20 border-2 border-accent/50 flex items-center justify-center overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="text-6xl"><img src={data.profpic}></img></div>
        </div>
        <div className="absolute -top-3 -right-3 level-badge border-accent bg-background text-accent">LV {level}</div>
      </div>

      {/* Character Name */}
      <div>
        <h2 className="text-xl font-bold tracking-wide">{data.code}</h2>
        <p className="text-sm text-muted-foreground">OTW isi nama trainee</p>
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-muted-foreground">TOTAL SESSION ATTENDED</span>
          <span className="text-xs text-accent">
            {absentTrainingData.absent} / {absentTrainingData.trainingSession} Sessions
          </span>
        </div>
        <div className="stat-bar">
          <div
            className="stat-bar-fill bg-gradient-to-r from-accent to-primary"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2">Complete c  ase submissions to level up</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        <div key={"Programming"} className="p-3 rounded bg-secondary/50 border border-border/50">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs font-bold tracking-wide text-muted-foreground">Programming</span>
            <span className={`font-bold text-soft-skill`}>Lvl {Math.floor(traineeHardSkillPoint.point / 5)}</span>
          </div>
          <div className="stat-bar">
            <div
              className="stat-bar-fill bg-gradient-to-r from-accent to-primary"
              style={{ width: `${(traineeHardSkillPoint.point / 5) * 100}%` }}
            />
          </div>
        </div>
        {traineeSoftSkillPoint.map((stat) => (
          <div key={stat.subjectName} className="p-3 rounded bg-secondary/50 border border-border/50">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold tracking-wide text-muted-foreground">{stat.subjectName}</span>
              <span className={`font-bold text-soft-skill`}>Lvl {Math.floor(stat.point / 5)}</span>
            </div>
            <div className="stat-bar">
              <div
                className="stat-bar-fill bg-gradient-to-r from-accent to-primary"
                style={{ width: `${(stat.point / 5) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}

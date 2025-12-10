"use client"

import { Card } from "@/components/ui/card"
import { Flame, CheckCircle2 } from "lucide-react"
import AchievementBadges from "./achievement-badges"

export default function CharacterProfile({data}) {
  const stats = [
    { label: "Programming", value: 78, color: "text-hard-skill" },
    { label: "Communication", value: 65, color: "text-soft-skill" },
    { label: "Leadership", value: 82, color: "text-other-skill" },
    { label: "Problem Solving", value: 71, color: "text-accent" },
    { label: "Consistency", value: 88, color: "text-primary" },
  ]

  // Daily case submissions track progress toward the next level
  const level = 2
  const casesSubmitted = 12
  const casesForNextLevel = 15
  const progressPercent = (casesSubmitted / casesForNextLevel) * 100
  if (!data) {
    return <div className="p-4">Loading profile...</div>;
  }
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
        <p className="text-sm text-muted-foreground">1-Month Training Program</p>
      </div>

      <div>
        <div className="flex justify-between items-center mb-2">
          <span className="text-xs font-semibold text-muted-foreground">TRAINING PROGRESS</span>
          <span className="text-xs text-accent">
            {casesSubmitted} / {casesForNextLevel} Cases
          </span>
        </div>
        <div className="stat-bar">
          <div
            className="stat-bar-fill bg-gradient-to-r from-accent to-primary"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <p className="text-xs text-muted-foreground mt-2">Complete case submissions to level up</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat) => (
          <div key={stat.label} className="p-3 rounded bg-secondary/50 border border-border/50">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold tracking-wide text-muted-foreground">{stat.label}</span>
              <span className={`font-bold ${stat.color}`}>{stat.value}</span>
            </div>
            <div className="stat-bar">
              <div
                className="stat-bar-fill bg-gradient-to-r from-accent to-primary"
                style={{ width: `${(stat.value / 100) * 100}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-border/50 pt-4">
        <p className="text-xs font-semibold text-muted-foreground mb-3">STREAKS & ACHIEVEMENTS</p>
        <div className="flex gap-2">
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-secondary/50 border border-border/50">
            <Flame className="w-4 h-4 text-hard-skill" />
            <span className="text-xs font-bold">12 Days Active</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-secondary/50 border border-border/50">
            <CheckCircle2 className="w-4 h-4 text-soft-skill" />
            <span className="text-xs font-bold">12 Submitted</span>
          </div>
        </div>
      </div>

      {/* Achievement Badges */}
      <div className="border-t border-border/50 pt-4">
        <p className="text-xs font-semibold text-muted-foreground mb-3">BADGES</p>
        <AchievementBadges />
      </div>
    </Card>
  )
}

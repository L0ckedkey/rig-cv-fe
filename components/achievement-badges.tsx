"use client"

interface Badge {
  id: string
  name: string
  icon: string
  color: string
  earned: boolean
}

export default function AchievementBadges() {
  const badges: Badge[] = [
    { id: "1", name: "First Blood", icon: "⚔️", color: "hard-skill", earned: true },
    { id: "2", name: "Team Player", icon: "🤝", color: "soft-skill", earned: true },
    { id: "3", name: "Speed Demon", icon: "⚡", color: "accent", earned: false },
    { id: "4", name: "Consistent", icon: "📈", color: "other-skill", earned: false },
    { id: "5", name: "Code Master", icon: "💻", color: "primary", earned: true },
    { id: "6", name: "Collaborator", icon: "🌟", color: "soft-skill", earned: false },
  ]

  return (
    <div className="grid grid-cols-3 gap-2">
      {badges.map((badge) => (
        <div
          key={badge.id}
          className={`aspect-square rounded-lg flex flex-col items-center justify-center border-2 transition-all ${
            badge.earned
              ? `border-${badge.color}/50 bg-${badge.color}/10 opacity-100 hover:scale-110`
              : "border-border/30 bg-secondary/30 opacity-50"
          }`}
          title={badge.name}
        >
          <span className="text-2xl">{badge.icon}</span>
        </div>
      ))}
    </div>
  )
}

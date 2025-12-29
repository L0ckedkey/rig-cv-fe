"use client"

import { Zap, Map, TrendingUp, FileText, MessageSquare, Settings, Briefcase, EyeOff } from "lucide-react"

interface DashboardHeaderProps {
  activeTab: string
  onTabChange: (tab: string) => void
}

export default function DashboardHeader({ activeTab, onTabChange }: DashboardHeaderProps) {
  const tabs = [
    { id: "overview", label: "Overview", icon: Zap },
    { id: "evidence", label: "Evidence", icon: FileText },
    { id: "interview", label: "Interview", icon: Briefcase },
    { id: "mentornotes", label: "Mentor Notes", icon: MessageSquare },
    { id: "cheat", label: "Cheat", icon: EyeOff },
  ]


  return (
    <header className="border-b border-border bg-card/50 backdrop-blur">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-accent/20 flex items-center justify-center border border-accent/50">
              <Zap className="w-5 h-5 text-accent" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight">Training Quest</h1>
          </div>
          <div className="text-sm text-muted-foreground">Month 1 • Week 2</div>
        </div>

        <nav className="flex gap-1 overflow-x-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-4 py-2 rounded text-sm font-medium flex items-center gap-2 transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "bg-accent/20 text-accent border border-accent/50"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </nav>
      </div>
    </header>
  )
}

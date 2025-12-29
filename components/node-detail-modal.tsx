"use client"
import { Card } from "@/components/ui/card"
import { X, GitBranch, FileText, User } from "lucide-react"

interface SkillNode {
  id?: string
  name?: string
  type?: "hard" | "soft" | "other"
  score?: number
  status?: "locked" | "available" | "completed"
}

interface NodeDetailModalProps {
  isOpen: boolean
  onClose: () => void
  node: SkillNode | null
}

export default function NodeDetailModal({ isOpen, onClose, node }: NodeDetailModalProps) {
  if (!isOpen || !node) return null

  const nodeDetails = {
    name: node.name || "Skill Node",
    type: node.type || "hard",
    score: node.score || 0,
    status: node.status || "available",
    description:
      node.type === "hard"
        ? "Complete technical assessments and practical coding challenges."
        : node.type === "soft"
          ? "Develop interpersonal and communication skills."
          : "Track growth metrics and consistency.",
    evidence: ["assignment_v1.pdf", "github_commit_hash_123abc"],
    mentorNotes: "Great progress! Keep focusing on error handling in edge cases.",
    linkedRepo: "https://github.com/example/repo",
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "hard":
        return "text-hard-skill"
      case "soft":
        return "text-soft-skill"
      default:
        return "text-other-skill"
    }
  }

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur" />

      <Card
        className="relative w-full max-w-md border-accent/50 bg-card/95 backdrop-blur shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${getTypeColor(nodeDetails.type)}`} />
            <h3 className="text-lg font-bold">{nodeDetails.name}</h3>
          </div>
          <button onClick={onClose} className="p-1 rounded hover:bg-secondary/50 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Status & Score */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-1">STATUS</p>
              <p className="text-sm capitalize font-medium text-accent">{nodeDetails.status}</p>
            </div>
            {nodeDetails.score > 0 && (
              <div>
                <p className="text-xs font-semibold text-muted-foreground mb-1">SCORE</p>
                <p className="text-sm font-medium text-primary">{nodeDetails.score}%</p>
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <p className="text-xs font-semibold text-muted-foreground mb-2">DESCRIPTION</p>
            <p className="text-sm text-foreground/80">{nodeDetails.description}</p>
          </div>

          {/* Evidence */}
          {nodeDetails.evidence.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                <FileText className="w-3 h-3" />
                EVIDENCE
              </p>
              <div className="space-y-2">
                {nodeDetails.evidence.map((file, idx) => (
                  <div
                    key={idx}
                    className="p-2 rounded border border-border/50 bg-secondary/30 text-xs hover:bg-secondary/50 cursor-pointer transition-colors flex items-center gap-2"
                  >
                    <FileText className="w-3 h-3 text-muted-foreground" />
                    {file}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Linked Repository */}
          {nodeDetails.linkedRepo && (
            <div>
              <p className="text-xs font-semibold text-muted-foreground mb-2 flex items-center gap-2">
                <GitBranch className="w-3 h-3" />
                LINKED REPO
              </p>
              <a
                href={nodeDetails.linkedRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-accent hover:text-primary transition-colors break-all"
              >
                {nodeDetails.linkedRepo}
              </a>
            </div>
          )}

          {/* Mentor Notes */}
         

          {/* Action Buttons */}
          {nodeDetails.status === "available" && (
            <div className="flex gap-2 pt-4 border-t border-border/50">
              <button className="flex-1 px-4 py-2 rounded bg-accent/20 text-accent hover:bg-accent/30 transition-colors text-sm font-medium">
                Start Node
              </button>
              <button className="flex-1 px-4 py-2 rounded border border-border/50 hover:bg-secondary/50 transition-colors text-sm font-medium">
                More Info
              </button>
            </div>
          )}
        </div>
      </Card>
    </div>
  )
}

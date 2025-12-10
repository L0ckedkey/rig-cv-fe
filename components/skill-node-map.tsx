"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { ZoomIn, ZoomOut } from "lucide-react"

interface SkillNode {
  id: string
  name: string
  type: "hard" | "soft" | "other"
  x: number
  y: number
  score?: number
  status: "locked" | "available" | "completed"
}

const CENTER_X = 250
const CENTER_Y = 250
const RADIUS = 140

const SKILL_NODES: SkillNode[] = [
  // Hard Skills - Right side (Red)
  {
    id: "prog-var",
    name: "Variables & Types",
    type: "hard",
    x: CENTER_X + RADIUS,
    y: CENTER_Y - 40,
    score: 92,
    status: "completed",
  },
  {
    id: "prog-func",
    name: "Functions Basics",
    type: "hard",
    x: CENTER_X + 120,
    y: CENTER_Y - 90,
    score: 100,
    status: "completed",
  },
  {
    id: "prog-loop",
    name: "Loops & Iteration",
    type: "hard",
    x: CENTER_X + 100,
    y: CENTER_Y + 110,
    status: "available",
  },
  {
    id: "prog-array",
    name: "Arrays & Collections",
    type: "hard",
    x: CENTER_X + 50,
    y: CENTER_Y + 140,
    status: "locked",
  },
  { id: "prog-obj", name: "Objects & Classes", type: "hard", x: CENTER_X - 50, y: CENTER_Y + 140, status: "locked" },

  // Soft Skills - Left side (Green)
  {
    id: "soft-discuss",
    name: "Group Discussion 1",
    type: "soft",
    x: CENTER_X - RADIUS,
    y: CENTER_Y - 40,
    score: 85,
    status: "available",
  },
  { id: "soft-team", name: "Team Project Week 1", type: "soft", x: CENTER_X - 120, y: CENTER_Y - 90, status: "locked" },
  {
    id: "soft-peer",
    name: "Peer Review Session",
    type: "soft",
    x: CENTER_X - 100,
    y: CENTER_Y + 110,
    status: "locked",
  },
  {
    id: "soft-account",
    name: "Weekly Accountability",
    type: "soft",
    x: CENTER_X - 50,
    y: CENTER_Y + 140,
    status: "locked",
  },
  { id: "soft-lead", name: "Leadership Day", type: "soft", x: CENTER_X - 120, y: CENTER_Y + 90, status: "locked" },

  // Other Skills - Top/Bottom (Blue)
  {
    id: "other-attend",
    name: "Daily Attendance",
    type: "other",
    x: CENTER_X,
    y: CENTER_Y - RADIUS,
    score: 95,
    status: "completed",
  },
  {
    id: "other-log",
    name: "Learning Log",
    type: "other",
    x: CENTER_X + 90,
    y: CENTER_Y - 120,
    score: 88,
    status: "completed",
  },
  {
    id: "other-growth",
    name: "Growth Reflection",
    type: "other",
    x: CENTER_X - 90,
    y: CENTER_Y - 120,
    status: "available",
  },
]

const NODE_CONNECTIONS = [
  // From center to all nodes
  ["prog-var", "soft-discuss"],
  ["prog-func", "soft-team"],
  ["prog-loop", "soft-peer"],
  ["prog-array", "soft-account"],
  ["other-attend", "other-log"],
  ["other-growth", "soft-lead"],
]

interface SkillNodeMapProps {
  onNodeClick: (node: SkillNode) => void
}

export default function SkillNodeMap({ onNodeClick }: SkillNodeMapProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [zoom, setZoom] = useState(1)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const dpr = window.devicePixelRatio || 1
    canvas.width = canvas.offsetWidth * dpr
    canvas.height = canvas.offsetHeight * dpr
    ctx.scale(dpr, dpr)

    const width = canvas.offsetWidth
    const height = canvas.offsetHeight

    ctx.fillStyle = "transparent"
    ctx.fillRect(0, 0, width, height)

    NODE_CONNECTIONS.forEach((connection) => {
      const from = SKILL_NODES.find((n) => n.id === connection[0])
      const to = SKILL_NODES.find((n) => n.id === connection[1])
      if (from && to) {
        const isActive = from.status !== "locked" && to.status !== "locked"

        // Main line
        ctx.strokeStyle = isActive ? "rgba(168, 85, 247, 0.3)" : "rgba(168, 85, 247, 0.1)"
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)
        ctx.stroke()

        // Neon glow
        ctx.strokeStyle = isActive ? "rgba(168, 85, 247, 0.4)" : "rgba(168, 85, 247, 0.15)"
        ctx.lineWidth = 8
        ctx.globalAlpha = 0.4
        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)
        ctx.stroke()
        ctx.globalAlpha = 1
      }
    })
  }, [zoom])

  const getNodeColor = (node: SkillNode) => {
    if (node.status === "completed") {
      return "#22c55e"
    }
    if (node.status === "locked") {
      return node.type === "hard" ? "#7f1d1d" : node.type === "soft" ? "#064e3b" : "#1e3a8a"
    }
    if (node.type === "hard") return "#ef4444"
    if (node.type === "soft") return "#10b981"
    return "#3b82f6"
  }

  const handleNodeClick = (e: React.MouseEvent<HTMLCanvasElement>, node: SkillNode) => {
    if (node.status !== "locked") {
      onNodeClick(node)
    }
  }

  return (
    <Card className="p-6 border-accent/30 bg-card/80 backdrop-blur h-full min-h-[600px] flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold">Skill Development Path</h3>
        <div className="flex gap-2">
          <button
            onClick={() => setZoom(Math.max(0.5, zoom - 0.1))}
            className="p-2 rounded hover:bg-secondary/50 transition-colors"
            aria-label="Zoom out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoom(Math.min(2, zoom + 0.1))}
            className="p-2 rounded hover:bg-secondary/50 transition-colors"
            aria-label="Zoom in"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="relative flex-1 bg-secondary/20 rounded-lg border border-border/50 overflow-hidden">
        <canvas ref={canvasRef} className="w-full h-full absolute inset-0" />

        {/* Interactive Nodes */}
        <svg className="w-full h-full absolute inset-0" style={{ pointerEvents: "none" }}>
          {SKILL_NODES.map((node) => {
            const isHovered = node.id === hoveredNode
            const nodeColor = getNodeColor(node)

            return (
              <g key={node.id} style={{ pointerEvents: "auto" }}>
                {/* Outer glow ring for hovered nodes */}
                {isHovered && (
                  <circle
                    cx={node.x}
                    cy={node.y}
                    r={42}
                    fill="none"
                    stroke={nodeColor}
                    strokeWidth="2"
                    opacity="0.3"
                    className="animate-pulse"
                  />
                )}

                {/* Main node circle */}
                <circle
                  cx={node.x}
                  cy={node.y}
                  r={isHovered ? 28 : 24}
                  fill={nodeColor}
                  opacity={node.status === "locked" ? 0.5 : 1}
                  className="transition-all duration-200 cursor-pointer skill-node"
                  style={{
                    filter: isHovered ? `drop-shadow(0 0 24px ${nodeColor})` : `drop-shadow(0 0 8px ${nodeColor})`,
                  }}
                  onMouseEnter={() => setHoveredNode(node.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                  onClick={(e) => handleNodeClick(e as any, node)}
                />

                {/* Completion checkmark */}
                {node.status === "completed" && (
                  <text
                    x={node.x + 18}
                    y={node.y - 18}
                    className="text-lg select-none font-bold"
                    fill="white"
                    pointerEvents="none"
                  >
                    ✓
                  </text>
                )}

                {/* Lock icon for locked nodes */}
                {node.status === "locked" && (
                  <text x={node.x} y={node.y + 1} className="text-xs select-none" fill="white" pointerEvents="none">
                    🔒
                  </text>
                )}

                {/* Node name tooltip on hover */}
                {isHovered && (
                  <>
                    <rect
                      x={node.x - 60}
                      y={node.y - 52}
                      width="120"
                      height="38"
                      rx="6"
                      fill="rgba(0, 0, 0, 0.95)"
                      stroke={nodeColor}
                      strokeWidth="1"
                    />
                    <text
                      x={node.x}
                      y={node.y - 28}
                      textAnchor="middle"
                      className="text-xs font-semibold select-none fill-white"
                      pointerEvents="none"
                    >
                      {node.name}
                    </text>
                    {node.score && (
                      <text
                        x={node.x}
                        y={node.y - 14}
                        textAnchor="middle"
                        className="text-xs select-none fill-accent"
                        pointerEvents="none"
                      >
                        {node.score}%
                      </text>
                    )}
                  </>
                )}
              </g>
            )
          })}
        </svg>

        {/* Legend - Color Map Guide */}
        <div className="absolute top-4 right-4 space-y-3 text-xs bg-background/95 border border-border/50 rounded-lg p-4 backdrop-blur max-w-xs">
          <p className="font-bold text-accent mb-2">Node Guide</p>

          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground">Categories</p>
            <div className="flex items-center gap-2">
              <div
                className="w-5 h-5 rounded-full bg-red-500"
                style={{ boxShadow: "0 0 12px rgba(239, 68, 68, 0.6)" }}
              />
              <span>Hard Skills (Right)</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-5 h-5 rounded-full bg-emerald-500"
                style={{ boxShadow: "0 0 12px rgba(16, 185, 129, 0.6)" }}
              />
              <span>Soft Skills (Left)</span>
            </div>
            <div className="flex items-center gap-2">
              <div
                className="w-5 h-5 rounded-full bg-blue-500"
                style={{ boxShadow: "0 0 12px rgba(59, 130, 246, 0.6)" }}
              />
              <span>Growth & Other (Top)</span>
            </div>
          </div>

          <div className="border-t border-border/50 pt-2 mt-2">
            <p className="font-semibold text-xs mb-2">Status</p>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-green-500" />
                <span className="text-xs">Completed</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-current border border-border/50" />
                <span className="text-xs">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gray-600" />
                <span className="text-xs">Locked</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center profile reference */}
        <div className="absolute top-4 left-4 text-xs bg-background/90 border border-border/50 rounded px-3 py-2 backdrop-blur text-muted-foreground">
          Profile • Hard Skills (Right) • Soft Skills (Left)
        </div>
      </div>
    </Card>
  )
}

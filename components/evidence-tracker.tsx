"use client"

import { Card } from "@/components/ui/card"
import { ExternalLink, GitBranch, Smartphone, Zap } from "lucide-react"

function extractUsername(url:String) {
  try {
    const parts = url.split("/");
    let username = parts[parts.length - 1];

    // Hapus query params kalau ada
    username = username.split("?")[0];

    // Hapus tanda @ kalau ada (misal di Twitter)
    if (username.startsWith("@")) {
      username = username.substring(1);
    }

    return username;
  } catch (e) {
    return null; 
  }
}

export default function EvidenceTracker({userData}) {
  // Table 1: Social Media Scraping Data
  const socialMediaData = [
    {
      id: 1,
      platform: "GitHub",
      username: "alex-dev",
      profileUrl: "https://github.com/alex-dev",
      scrapedDate: "2025-01-10",
      status: "Active",
      dataPoints: 24,
    },
    {
      id: 2,
      platform: "LinkedIn",
      username: "alex-johnson-dev",
      profileUrl: "https://linkedin.com/in/alex-johnson-dev",
      scrapedDate: "2025-01-10",
      status: "Active",
      dataPoints: 8,
    },
    {
      id: 3,
      platform: "Twitter",
      username: "@alexcodes",
      profileUrl: "https://twitter.com/alexcodes",
      scrapedDate: "2025-01-09",
      status: "Active",
      dataPoints: 12,
    },
    {
      id: 4,
      platform: "Instagram",
      username: "alex.dev.journey",
      profileUrl: "https://instagram.com/alex.dev.journey",
      scrapedDate: "2025-01-08",
      status: "Active",
      dataPoints: 5,
    },
  ]

  // Table 2: Soft Skill Points (Extracted from Social Media)
  const softSkillPointsData = [
    {
      id: 1,
      source: "GitHub Comments",
      skill: "Communication",
      evidence: "Clear commit messages and PR documentation",
      confidence: 92,
      points: 45,
    },
    {
      id: 2,
      source: "LinkedIn Posts",
      skill: "Leadership",
      evidence: "Shared team project management experiences",
      confidence: 78,
      points: 38,
    },
    {
      id: 3,
      source: "GitHub Collaboration",
      skill: "Teamwork",
      evidence: "Active code reviews and team contributions",
      confidence: 85,
      points: 42,
    },
    {
      id: 4,
      source: "Twitter Engagement",
      skill: "Knowledge Sharing",
      evidence: "Regular tech posts and community engagement",
      confidence: 88,
      points: 44,
    },
    {
      id: 5,
      source: "LinkedIn Profile",
      skill: "Responsibility",
      evidence: "Consistent project completion history",
      confidence: 90,
      points: 45,
    },
    {
      id: 6,
      source: "GitHub Issues",
      skill: "Problem Solving",
      evidence: "Active issue resolution and debugging examples",
      confidence: 94,
      points: 47,
    },
  ]

  // Table 3: Hard Skill Points (Extracted from Social Media & GitHub)
  const hardSkillPointsData = [
    {
      id: 1,
      skill: "JavaScript/TypeScript",
      source: "GitHub Repositories",
      evidence: "15 commits with JS/TS code",
      proficiency: "Advanced",
      points: 50,
    },
    {
      id: 2,
      skill: "React",
      source: "GitHub Projects",
      evidence: "3 active React projects maintained",
      proficiency: "Intermediate",
      points: 42,
    },
    {
      id: 3,
      skill: "Node.js",
      source: "GitHub Repositories",
      evidence: "Backend API implementations",
      proficiency: "Intermediate",
      points: 40,
    },
    {
      id: 4,
      skill: "Python",
      source: "GitHub & LinkedIn",
      evidence: "Data processing scripts and automation",
      proficiency: "Beginner",
      points: 28,
    },
    {
      id: 5,
      skill: "Database Design",
      source: "GitHub Code Review",
      evidence: "SQL optimization patterns in PRs",
      proficiency: "Intermediate",
      points: 38,
    },
    {
      id: 6,
      skill: "CSS/Tailwind",
      source: "GitHub Projects",
      evidence: "Responsive design implementations",
      proficiency: "Advanced",
      points: 45,
    },
    {
      id: 7,
      skill: "Git/Version Control",
      source: "GitHub Activity",
      evidence: "Clean commit history and branch management",
      proficiency: "Advanced",
      points: 48,
    },
  ]

  // Table 4: Case Points (Daily Submissions & Corrections)
  const casePointsData = [
    {
      id: 1,
      date: "2025-01-10",
      caseName: "Variables & Types",
      submitted: true,
      corrected: true,
      baseScore: 95,
      bonusPoints: 5,
      totalScore: 100,
      feedback: "Excellent code clarity",
    },
    {
      id: 2,
      date: "2025-01-09",
      caseName: "Functions & Scope",
      submitted: true,
      corrected: true,
      baseScore: 88,
      bonusPoints: 0,
      totalScore: 88,
      feedback: "Good logic, refactor suggestions included",
    },
    {
      id: 3,
      date: "2025-01-08",
      caseName: "Arrays & Collections",
      submitted: true,
      corrected: true,
      baseScore: 92,
      bonusPoints: 3,
      totalScore: 95,
      feedback: "Efficient solution with good edge case handling",
    },
    {
      id: 4,
      date: "2025-01-07",
      caseName: "Loops & Iteration",
      submitted: true,
      corrected: true,
      baseScore: 85,
      bonusPoints: 0,
      totalScore: 85,
      feedback: "Correct implementation, consider optimization",
    },
    {
      id: 5,
      date: "2025-01-06",
      caseName: "Conditionals",
      submitted: true,
      corrected: true,
      baseScore: 90,
      bonusPoints: 2,
      totalScore: 92,
      feedback: "Well-structured logic flow",
    },
    {
      id: 6,
      date: "2025-01-05",
      caseName: "Data Structures",
      submitted: true,
      corrected: true,
      baseScore: 88,
      bonusPoints: 0,
      totalScore: 88,
      feedback: "Solid implementation, consider performance",
    },
  ]

  return (
    <div className="space-y-6">
      {/* Table 1: Social Media Scrapping */}
      <Card className="p-6 border-accent/30 bg-card/80 backdrop-blur">
        <div className="flex items-center gap-3 mb-6">
          <Smartphone className="w-5 h-5 text-blue-400" />
          <h3 className="text-xl font-bold">Social Media & Data Sources</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Platform</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Username</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Profile</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Last Scraped</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Status</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Data Points</th>
              </tr>
            </thead>
            <tbody>
              {socialMediaData.map((row) => (
                <tr key={row.id} className="border-b border-border/30 hover:bg-secondary/30 transition-colors">
                  <td className="px-4 py-3">
                    <span className="font-semibold text-foreground">{row.platform}</span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{row.username}</td>
                  <td className="px-4 py-3">
                    <a
                      href={row.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline flex items-center gap-1"
                    >
                      Visit <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{row.scrapedDate}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center gap-2 px-2 py-1 rounded bg-green-500/20 text-green-400 text-xs font-semibold border border-green-500/30">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-semibold text-foreground">{row.dataPoints}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Table 2: Soft Skill Points */}
      <Card className="p-6 border-accent/30 bg-card/80 backdrop-blur">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-5 h-5 text-green-400" />
          <h3 className="text-xl font-bold">Soft Skill Points (from Social Media Translation)</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Data Source</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Skill</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Evidence</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Confidence</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Points</th>
              </tr>
            </thead>
            <tbody>
              {softSkillPointsData.map((row) => (
                <tr key={row.id} className="border-b border-border/30 hover:bg-secondary/30 transition-colors">
                  <td className="px-4 py-3 text-muted-foreground">{row.source}</td>
                  <td className="px-4 py-3">
                    <span className="font-semibold text-green-400">{row.skill}</span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground max-w-xs truncate">{row.evidence}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-2 bg-secondary/50 rounded-full overflow-hidden">
                        <div className="h-full bg-green-500 rounded-full" style={{ width: `${row.confidence}%` }} />
                      </div>
                      <span className="font-semibold text-xs whitespace-nowrap">{row.confidence}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 font-bold text-green-400">{row.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Table 3: Hard Skill Points */}
      <Card className="p-6 border-accent/30 bg-card/80 backdrop-blur">
        <div className="flex items-center gap-3 mb-6">
          <GitBranch className="w-5 h-5 text-red-400" />
          <h3 className="text-xl font-bold">Hard Skill Points (from GitHub, LinkedIn, Twitter, Instagram)</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Skill</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Source</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Evidence</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Proficiency</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Points</th>
              </tr>
            </thead>
            <tbody>
              {hardSkillPointsData.map((row) => (
                <tr key={row.id} className="border-b border-border/30 hover:bg-secondary/30 transition-colors">
                  <td className="px-4 py-3">
                    <span className="font-semibold text-red-400">{row.skill}</span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{row.source}</td>
                  <td className="px-4 py-3 text-muted-foreground max-w-xs">{row.evidence}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex px-2 py-1 rounded text-xs font-semibold border ${
                        row.proficiency === "Advanced"
                          ? "bg-red-500/20 text-red-400 border-red-500/30"
                          : row.proficiency === "Intermediate"
                            ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                            : "bg-blue-500/20 text-blue-400 border-blue-500/30"
                      }`}
                    >
                      {row.proficiency}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-bold text-red-400">{row.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Table 4: Case Points (Daily Submissions & Corrections) */}
      <Card className="p-6 border-accent/30 bg-card/80 backdrop-blur">
        <div className="flex items-center gap-3 mb-6">
          <Zap className="w-5 h-5 text-cyan-400" />
          <h3 className="text-xl font-bold">Daily Case Submissions & Scores</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border/50">
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Date</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Case Name</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Submitted</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Corrected</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Base Score</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Bonus</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Total</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Feedback</th>
              </tr>
            </thead>
            <tbody>
              {casePointsData.map((row) => (
                <tr key={row.id} className="border-b border-border/30 hover:bg-secondary/30 transition-colors">
                  <td className="px-4 py-3 text-muted-foreground">{row.date}</td>
                  <td className="px-4 py-3 font-semibold text-foreground">{row.caseName}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-green-500/20 text-green-400 text-xs">
                      ✓
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-blue-500/20 text-blue-400 text-xs">
                      ✓
                    </span>
                  </td>
                  <td className="px-4 py-3 font-semibold text-foreground">{row.baseScore}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`font-semibold ${row.bonusPoints > 0 ? "text-yellow-400" : "text-muted-foreground"}`}
                    >
                      +{row.bonusPoints}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-bold text-cyan-400">{row.totalScore}</td>
                  <td className="px-4 py-3 text-muted-foreground max-w-xs truncate">{row.feedback}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Summary Stats */}
      <Card className="p-6 border-accent/30 bg-card/80 backdrop-blur">
        <h3 className="text-lg font-bold mb-4">Evidence Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-secondary/50 rounded-lg p-4 border border-border/50">
            <p className="text-xs text-muted-foreground mb-2">Total Data Sources</p>
            <p className="text-2xl font-bold text-blue-400">4</p>
          </div>
          <div className="bg-secondary/50 rounded-lg p-4 border border-border/50">
            <p className="text-xs text-muted-foreground mb-2">Soft Skills Identified</p>
            <p className="text-2xl font-bold text-green-400">6</p>
          </div>
          <div className="bg-secondary/50 rounded-lg p-4 border border-border/50">
            <p className="text-xs text-muted-foreground mb-2">Hard Skills Identified</p>
            <p className="text-2xl font-bold text-red-400">7</p>
          </div>
          <div className="bg-secondary/50 rounded-lg p-4 border border-border/50">
            <p className="text-xs text-muted-foreground mb-2">Cases Completed</p>
            <p className="text-2xl font-bold text-cyan-400">6/30</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

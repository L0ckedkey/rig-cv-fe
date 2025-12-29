"use client"

import { Card } from "@/components/ui/card"
import { ExternalLink, GitBranch, Smartphone, Zap } from "lucide-react"

function extractUsername(url: String) {
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

const SocialRow = ({ label, url, lastScrapped }) => {
  const username = url ? extractUsername(url) : "-";
  const isActive = Boolean(url);

  return (
    <tr className="border-b border-border/30 hover:bg-secondary/30 transition-colors">
      <td className="px-4 py-3 font-semibold text-foreground">{label}</td>

      <td className="px-4 py-3 text-muted-foreground">{username}</td>

      <td className="px-4 py-3">
        <a
          href={isActive ? url : undefined}
          aria-disabled={!isActive}
          className={`flex items-center gap-1 ${isActive
            ? "text-accent hover:underline"
            : "text-muted-foreground opacity-50 pointer-events-none cursor-default"
            }`}
        >
          Visit <ExternalLink className="w-3 h-3" />
        </a>
      </td>

      <td className="px-4 py-3 text-muted-foreground">{lastScrapped ? new Date(lastScrapped).toLocaleDateString('en-GB', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }) : "No Scrape Data"}</td>

      <td className="px-4 py-3 font-semibold text-foreground">OTW</td>
    </tr>
  );
};


export default function EvidenceTracker({ userData, lastScrappedData, submissionData, softSkillData, hardSkillData }) {
  // Table 1: Social Media Scraping Data

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
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Data Points</th>
              </tr>
            </thead>
            <tbody>
              <SocialRow label="Github" url={userData.urlgithub} lastScrapped={lastScrappedData.github} />
              <SocialRow label="LinkedIn" url={userData.urllinkedin} lastScrapped={lastScrappedData.linkedin} />
              <SocialRow label="X" url={userData.urlx} lastScrapped={lastScrappedData.x} />
              <SocialRow label="Instagram" url={userData.urlinstagram} lastScrapped={lastScrappedData.instagram} />
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
              {softSkillData.map((row) => (
                <tr key={row.id} className="border-b border-border/30 hover:bg-secondary/30 transition-colors">
                  <td className="px-4 py-3 text-muted-foreground">{row.type}</td>
                  <td className="px-4 py-3">
                    <a
                      href={row.url}
                      className={"flex items-center gap-1 text-accent hover:underline"}
                    >
                      Visit <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground max-w-xs">{row.notes}</td>
                  <td className="px-4 py-3 text-muted-foreground max-w-xs">{row.subjectName}</td>
                  <td className="px-4 py-3 font-bold text-red-400">OTW</td>
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
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Source</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Link</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Comment</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Skill</th>
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Points</th>
              </tr>
            </thead>
            <tbody>
              {hardSkillData.map((row) => (
                <tr key={row.url} className="border-b border-border/30 hover:bg-secondary/30 transition-colors">
                  <td className="px-4 py-3 text-muted-foreground">{row.type}</td>
                  <td className="px-4 py-3">
                    <a
                      href={row.url}
                      className={"flex items-center gap-1 text-accent hover:underline"}
                    >
                      Visit <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground max-w-xs">{row.notes}</td>
                  <td className="px-4 py-3 text-muted-foreground max-w-xs">{row.subjectName}</td>
                  <td className="px-4 py-3 font-bold text-red-400">OTW</td>
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
                <th className="text-left px-4 py-3 text-muted-foreground font-semibold">Feedback</th>
              </tr>
            </thead>
            <tbody>
              {submissionData.map((row) => (
                <tr key={row.id} className="border-b border-border/30 hover:bg-secondary/30 transition-colors">
                  <td className="px-4 py-3 text-muted-foreground">{row.date
                    ? new Date(row.date).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'long',
                      year: 'numeric',
                    })
                    : '-'}</td>
                  <td className="px-4 py-3 font-semibold text-foreground">{row.subjectName}</td>
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
                  <td className="px-4 py-3 font-semibold text-foreground">{row.score}</td>
                  <td className="px-4 py-3 text-muted-foreground max-w-xs truncate">{row.feedback}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

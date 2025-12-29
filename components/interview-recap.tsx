"use client"

import { Card } from "@/components/ui/card"
import { CheckCircle2, TrendingUp } from "lucide-react"

export default function InterviewRecap({ traineeData, questionData, absentDetail, caseSolvingScore }) {
  const parsedReason = questionData?.reason
    ? JSON.parse(questionData.reason)
    : []
 

  // const questionData = [
  //   {
  //     category: "Adaptability",
  //     questions: [
  //       {
  //         question: "Ceritakan pengalaman Anda ketika harus cepat beradaptasi dengan perubahan mendadak di tempat kerja.",
  //         reason: "Untuk menilai kemampuan kandidat dalam menyesuaikan diri dengan situasi baru yang berpotensi mengganggu keseimbangan kerja."
  //       },
  //       {
  //         question: "Bagaimana Anda menghadapi situasi saat prioritas pekerjaan tiba-tiba berubah?",
  //         reason: "Untuk memahami bagaimana kandidat mengelola perubahan dalam prioritas dan tetap efektif."
  //       },
  //       {
  //         question: "Bisakah Anda memberikan contoh saat Anda harus belajar keterampilan baru di luar zona nyaman Anda?",
  //         reason: "Untuk mengevaluasi kesiapan kandidat dalam mengembangkan diri menghadapi kebutuhan baru."
  //       }
  //     ]
  //   },
  //   {
  //     category: "Communication",
  //     questions: [
  //       {
  //         question: "Bagaimana cara Anda menyampaikan ide ke tim?",
  //         reason: "Menilai kemampuan komunikasi."
  //       }
  //     ]
  //   }
  // ];


  const recommendedQuestions = [
    {
      category: "Programming Skills",
      questions: [
        "Walk us through how you approached the 'Arrays & Collections' problem. What was your methodology?",
        "Can you explain the difference between functions and methods? How have you used them in your recent cases?",
        "Describe a challenging bug you encountered and how you debugged it.",
        "What programming concepts have you found most difficult, and how did you overcome them?",
      ],
    },
    {
      category: "Soft Skills & Collaboration",
      questions: [
        "Tell us about your experience in the group discussions. What did you learn from your peers?",
        "How do you handle feedback? Give an example from your peer review sessions.",
        "Describe a time you had to collaborate with someone who had a different approach than yours.",
        "What does accountability mean to you, and how have you demonstrated it this past week?",
      ],
    },
    {
      category: "Growth & Learning Mindset",
      questions: [
        "What's one skill you feel you've improved the most on, and how did you do it?",
        "How do you stay motivated when facing challenging problems?",
        "What would you do differently if you could restart the training program?",
        "Where do you see yourself in your learning journey after this month?",
      ],
    },
    {
      category: "Problem Solving & Critical Thinking",
      questions: [
        "Walk through your problem-solving process when tackling a new case.",
        "Can you describe a solution you came up with that surprised you?",
        "How do you know when you need to ask for help versus continuing to try?",
      ],
    },
  ]

  return (
    <div className="space-y-6">
      {/* Profile Recap Card */}
      <Card className="p-6 border-accent/30 bg-card/80 backdrop-blur">
        <div className="space-y-6">
          {/* Header with name and level */}
          <div className="flex items-start justify-between border-b border-border/50 pb-4">
            <div>
              <h2 className="text-3xl font-bold text-accent">{traineeData.username}</h2>
              <p className="text-xs text-muted-foreground mt-1">{traineeData.nim}</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-accent">{traineeData.code}</div>
            </div>
              
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-secondary/50 rounded-lg p-4 border border-border/50">
              <p className="text-xs text-muted-foreground mb-2">Attendance Rate</p>
              <p className="text-2xl font-bold text-accent">{absentDetail.attandance}%</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 border border-border/50">
              <p className="text-xs text-muted-foreground mb-2">Suspected Cheating Cases</p>
              <p className="text-2xl font-bold text-green-400">{absentDetail.cheat}</p>
            </div>
            <div className="bg-secondary/50 rounded-lg p-4 border border-border/50">
              <p className="text-xs text-muted-foreground mb-2">Top Subject (Highest Average Score)</p>
              <p className="text-xl font-bold text-blue-400">{absentDetail.subject}</p>
            </div>
          </div>

          {/* Skill Breakdown */}
          <div className="space-y-3">
            <p className="text-sm font-semibold text-foreground">Skill Assessment</p>
            <div className="space-y-3">
              {caseSolvingScore.map((skill) => (
                <div key={skill.label} className="space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-muted-foreground">{skill.subjectName}</span>
                    <span className="font-semibold text-foreground">{skill.averageScore}</span>
                  </div>
                  <div className="w-full bg-secondary/50 rounded-full h-2">
                    <div className={`h-full rounded-full bg-blue-500`} style={{ width: `${skill.averageScore}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
        
        </div>
      </Card>

      {/* Interview Questions */}
      <Card className="p-6 border-accent/30 bg-card/80 backdrop-blur">
        <h3 className="text-xl font-bold mb-6">Recommended Interview Questions</h3>

        <div className="space-y-8">
          {parsedReason.map((cat, idx) => (
            <div key={idx}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <h4 className="text-sm font-bold text-accent uppercase tracking-wider">
                  {cat.category}
                </h4>
              </div>

              {console.log(cat)}

              <div className="space-y-3 ml-5">
                {cat.questions?.map((q, qIdx) => (
                  <div
                    key={qIdx}
                    className="flex gap-4 p-3 rounded-lg bg-secondary/30 border border-border/50 hover:border-accent/50 transition-colors"
                  >
                    <div className="text-xs font-semibold text-accent/70 flex-shrink-0 pt-1">
                      Q{qIdx + 1}
                    </div>

                    <p className="text-sm text-foreground leading-relaxed">
                      {q.question}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>



        {/* Interview Tips */}
        <div className="mt-8 p-4 bg-accent/10 border border-accent/30 rounded-lg">
          <p className="text-xs font-semibold text-accent mb-2">💡 Interview Tip</p>
          <p className="text-xs text-muted-foreground">
            Focus on specific examples from case submissions. Use the STAR method (Situation, Task, Action, Result) to
            structure responses. Highlight growth mindset and willingness to learn.
          </p>
        </div>
      </Card>
    </div>
  )
}

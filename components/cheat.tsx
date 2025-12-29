import { Card } from "./ui/card"

export default function Cheat({cheatData}){
console.log(cheatData)
    const traineeData = {
        name: "Alex Johnson",
        level: 5,
        completionPercentage: 42,
        totalScore: 88,
        programmingSkill: 92,
        communicationSkill: 85,
        leadershipSkill: 78,
        problemSolving: 88,
        consistency: 95,
        daysActive: 12,
        casesCompleted: 12,
        attendance: "100%",
    }
    const content = "<h1>Hello</h1><p>Ini dari database</p>";

    return (
        <div>
            <Card className="p-6 border-accent/30 bg-card/80 backdrop-blur">
                <div className="space-y-6">
                    {/* Header with name and level */}
                    <div className="flex items-start justify-between border-b border-border/50 pb-4">
                        <div>
                            <h2 className="text-3xl font-bold text-accent">Sandyka Bala</h2>
                            <p className="text-sm text-muted-foreground mt-1">2540118536</p>
                        </div>
                        <div className="text-right">
                            <div className="text-4xl font-bold text-accent">LV 0</div>
                            <p className="text-xs text-muted-foreground mt-1">{traineeData.completionPercentage}% Complete</p>
                        </div>
                    </div>

                    {/* Key Metrics Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="bg-secondary/50 rounded-lg p-4 border border-border/50">
                            <p className="text-xs text-muted-foreground mb-2">Total Cheating Cases</p>
                            <p className="text-2xl font-bold text-accent">{traineeData.totalScore}%</p>
                        </div>
                        <div className="bg-secondary/50 rounded-lg p-4 border border-border/50">
                            <p className="text-xs text-muted-foreground mb-2">Subjects Involved</p>
                            <p className="text-2xl font-bold text-green-400">{traineeData.casesCompleted}</p>
                        </div>
                        <div className="bg-secondary/50 rounded-lg p-4 border border-border/50">
                            <p className="text-xs text-muted-foreground mb-2">Most Cheated Subject</p>
                            <p className="text-2xl font-bold text-blue-400">{traineeData.daysActive}</p>
                        </div>
                    </div>

                    <div
                        dangerouslySetInnerHTML={{ __html: cheatData.reason }}
                    />
                </div>
            </Card> 
        </div>
    )
}
import { Card } from "./ui/card"

export default function Cheat({cheatData, cheatInfo}){

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
                            <p className="text-2xl font-bold text-accent">{cheatInfo.cheatCase}</p>
                        </div>
                        <div className="bg-secondary/50 rounded-lg p-4 border border-border/50">
                            <p className="text-xs text-muted-foreground mb-2">Subjects Involved</p>
                            <p className="text-2xl font-bold text-green-400">{cheatInfo.count}</p>
                        </div>
                        <div className="bg-secondary/50 rounded-lg p-4 border border-border/50">
                            <p className="text-xs text-muted-foreground mb-2">Most Cheated Subject</p>
                            <p className="text-2xl font-bold text-blue-400">{cheatInfo.highestSubject}</p>
                        </div>
            
                    </div>

                    {cheatData?.map((cheat, idx) => (
                        <div
                            key={idx}
                            className="mt-6 border border-border/50 rounded-lg overflow-hidden"
                        >
                            <h3 className="p-4 text-xl font-bold bg-secondary/40">{cheat.subject.name}</h3>
                            {/* Header */}
                            <div className="p-4 text-sm bg-secondary/40">
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: cheat.reason
                                            .split("<div class=\"row\">")[0]
                                    }}
                                />
                            </div>

                            {/* Code compare */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-background">
                                {cheat.reason
                                    .match(/<pre><code>[\s\S]*?<\/code><\/pre>/g)
                                    ?.map((block, i) => (
                                        <div
                                            key={i}
                                            className="bg-black/90 text-green-400 text-xs rounded-lg p-4 overflow-auto"
                                            dangerouslySetInnerHTML={{ __html: block }}
                                        />
                                    ))}
                            </div>
                        </div>
                    ))}


                </div>
            </Card> 
        </div>
    )
}
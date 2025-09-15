"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ConsentModal } from "@/components/consent-modal"
import { Header } from "@/components/header"

export default function HomePage() {
  const [showModal, setShowModal] = useState(true)
  const [userLinks, setUserLinks] = useState({
    linkedin: "",
    github: "",
    instagram: "",
    certificates: [],
  })

  const handleModalComplete = (links: any) => {
    setUserLinks(links)
    setShowModal(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-gray-700">Trainee Statistic</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <label className="text-sm text-gray-600 mb-2 block">Phase</label>
                  <select className="w-full max-w-xs p-2 border border-gray-300 rounded-md bg-white">
                    <option>Junior Laboratory Assistant</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Gender Statistics */}
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">Gender</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Male</span>
                        <span className="font-medium">5</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Total</span>
                        <span className="font-medium">5</span>
                      </div>
                    </div>
                  </div>

                  {/* Semester Statistics */}
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">Semester</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>2</span>
                        <span className="font-medium">3</span>
                      </div>
                      <div className="flex justify-between">
                        <span>4</span>
                        <span className="font-medium">1</span>
                      </div>
                      <div className="flex justify-between">
                        <span>5</span>
                        <span className="font-medium">1</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span>Total</span>
                        <span className="font-medium">5</span>
                      </div>
                    </div>
                  </div>

                  {/* Information Source */}
                  <div>
                    <h4 className="font-medium text-gray-700 mb-3">Information Source</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>First Year Program (FYP)</span>
                        <span className="font-medium">2</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Friends</span>
                        <span className="font-medium">2</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Instagram</span>
                        <span className="font-medium">3</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Laboratory Assistant</span>
                        <span className="font-medium">3</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span>Total</span>
                        <span className="font-medium">5</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Major Statistics */}
                <div className="mt-6">
                  <h4 className="font-medium text-gray-700 mb-3">Major</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex justify-between">
                      <span>Computer Science</span>
                      <span className="font-medium">1</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cyber Security</span>
                      <span className="font-medium">3</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Data Science</span>
                      <span className="font-medium">1</span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span>Total</span>
                      <span className="font-medium">5</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Teaching Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="text-gray-700">Your Teaching Schedule</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-4 text-sm font-medium text-gray-600 mb-4">
                  <div>Teaching Date</div>
                  <div>Shift</div>
                  <div>Room</div>
                  <div>Trainer</div>
                  <div>Topic</div>
                </div>
                <div className="text-center text-gray-500 py-8 italic">No training schedules</div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-gray-700">Announcements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Presentation After Acceptance</h4>
                  <a href="#" className="text-blue-500 hover:underline text-sm">
                    Link Zoom
                  </a>
                  <p className="text-xs text-gray-500 mt-1">by DJ24-1</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Resource for Trainer</h4>
                  <div className="space-y-1">
                    <a href="#" className="text-blue-500 hover:underline text-sm block">
                      For Trainer Folder
                    </a>
                    <a href="#" className="text-blue-500 hover:underline text-sm block">
                      jetx
                    </a>
                    <a href="#" className="text-blue-500 hover:underline text-sm block">
                      Kamus Pertanyaan
                    </a>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">by VT22-1</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Core Training NAR25-2 Groups</h4>
                  <div className="space-y-1">
                    <a href="#" className="text-blue-500 hover:underline text-sm block">
                      Discord
                    </a>
                    <a href="#" className="text-blue-500 hover:underline text-sm block">
                      Line Group [INFO]
                    </a>
                    <a href="#" className="text-blue-500 hover:underline text-sm block">
                      Line Group [CHAT]
                    </a>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">by VT22-1</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Calendar & Course Outline NAR25-2</h4>
                  <p className="text-xs text-gray-500 mt-1">by VT22-1</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-gray-700">Trainee Comment History</CardTitle>
                <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white">
                  Export Excel
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div>
      </main>

      {showModal && <ConsentModal onComplete={handleModalComplete} />}
    </div>
  )
}

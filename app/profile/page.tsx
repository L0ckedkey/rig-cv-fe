"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { ProfileInfoCard } from "@/components/profile-info-card"
import { CertificateList } from "@/components/certificate-list"

export default function ProfilePage() {
  const [userProfile] = useState({
    name: "HANS INDRAWAN SUCIPTO",
    nim: "2540123456",
    instagram: "https://instagram.com/hans.indrawan",
    linkedin: "https://linkedin.com/in/hans-indrawan",
    github: "https://github.com/hansindrawan",
  })

  const [certificates, setCertificates] = useState([
    "https://certificate1.example.com",
    "https://certificate2.example.com",
  ])

  const handleAddCertificate = (newCertificate: string) => {
    setCertificates((prev) => [...prev, newCertificate])
  }

  const handleRemoveCertificate = (index: number) => {
    setCertificates((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Profile</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ProfileInfoCard profile={userProfile} />
            <CertificateList
              certificates={certificates}
              onAddCertificate={handleAddCertificate}
              onRemoveCertificate={handleRemoveCertificate}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

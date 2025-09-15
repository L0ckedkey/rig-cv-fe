import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import { useState } from "react"
import { Input } from "./ui/input"

interface ProfileInfoCardProps {
  profile: {
    name: string
    nim: string
    instagram?: string
    linkedin?: string
    github?: string
  }
}

export function ProfileInfoCard({ profile }: ProfileInfoCardProps) {
  const [formData, setFormData] = useState(profile)

  const socialLinks = [
    { label: "Instagram", key: "instagram", url: formData.instagram, color: "text-pink-600" },
    { label: "LinkedIn", key: "linkedin", url: formData.linkedin, color: "text-blue-600" },
    { label: "GitHub", key: "github", url: formData.github, color: "text-gray-800" },
  ].filter((link) => link.url !== undefined)

  return (
    <Card className="h-fit">
      <CardHeader>
        <CardTitle className="text-gray-700">Profile Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-600">Name</label>
          <p className="text-gray-800 font-medium">{formData.name}</p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-600">NIM (Student ID)</label>
          <p className="text-gray-800 font-medium">{formData.nim}</p>
        </div>

        {socialLinks.length > 0 && (
          <div>
            <label className="text-sm font-medium text-gray-600 mb-2 block">
              Social Media Links
            </label>
            <div className="space-y-2">
              {socialLinks.map((link) => (
                <div key={link.key} className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600 w-20">{link.label}:</span>
                  <Input
                    id={link.key}
                    type="url"
                    value={link.url ?? ""}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, [link.key]: e.target.value }))
                    }
                  />
                  {link.url && (
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${link.color} hover:underline text-sm flex items-center space-x-1`}
                    >
                      <span>View</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

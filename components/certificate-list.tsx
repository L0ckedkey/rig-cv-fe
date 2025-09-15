"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, ExternalLink, Trash2 } from "lucide-react"

interface CertificateListProps {
  certificates: string[]
  onAddCertificate: (certificate: string) => void
  onRemoveCertificate: (index: number) => void
}

export function CertificateList({ certificates, onAddCertificate, onRemoveCertificate }: CertificateListProps) {
  const [newCertificate, setNewCertificate] = useState("")
  const [isAdding, setIsAdding] = useState(false)

  const handleAddCertificate = () => {
    if (newCertificate.trim()) {
      onAddCertificate(newCertificate.trim())
      setNewCertificate("")
      setIsAdding(false)
    }
  }

  const handleCancel = () => {
    setNewCertificate("")
    setIsAdding(false)
  }

  const isValidUrl = (url: string) => {
    try {
      new URL(url)
      return true
    } catch {
      return false
    }
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-gray-700">Certificates</CardTitle>
          {!isAdding && (
            <Button onClick={() => setIsAdding(true)} size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Plus className="w-4 h-4 mr-1" />
              Add Certificate
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Add Certificate Form */}
        {isAdding && (
          <div className="p-4 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
            <Label htmlFor="new-certificate" className="text-sm font-medium text-gray-700">
              Certificate Link
            </Label>
            <div className="mt-2 space-y-3">
              <Input
                id="new-certificate"
                type="url"
                placeholder="https://certificate-link.com"
                value={newCertificate}
                onChange={(e) => setNewCertificate(e.target.value)}
                className="w-full"
              />
              <div className="flex space-x-2">
                <Button
                  onClick={handleAddCertificate}
                  disabled={!newCertificate.trim() || !isValidUrl(newCertificate)}
                  size="sm"
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Add
                </Button>
                <Button onClick={handleCancel} variant="outline" size="sm">
                  Cancel
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Certificate List */}
        {certificates.length > 0 ? (
          <div className="space-y-3">
            {certificates.map((certificate, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:shadow-sm transition-shadow"
              >
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-600 mb-1">Certificate {index + 1}</p>
                  <a
                    href={certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline text-sm flex items-center space-x-1 truncate"
                  >
                    <span className="truncate">{certificate}</span>
                    <ExternalLink className="w-3 h-3 flex-shrink-0" />
                  </a>
                </div>
                <Button
                  onClick={() => onRemoveCertificate(index)}
                  variant="ghost"
                  size="sm"
                  className="text-red-600 hover:text-red-800 hover:bg-red-50 ml-2"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-gray-500">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <ExternalLink className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-sm">No certificates added yet</p>
            <p className="text-xs text-gray-400 mt-1">Click "Add Certificate" to add your first certificate link</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, X } from "lucide-react"

interface ConsentModalProps {
  onComplete: (links: {
    linkedin: string
    github: string
    instagram: string
    certificates: string[]
  }) => void
}

export function ConsentModal({ onComplete }: ConsentModalProps) {
  const [step, setStep] = useState<"consent" | "form">("consent")
  const [agreed, setAgreed] = useState(false)
  const [formData, setFormData] = useState({
    linkedin: "",
    github: "",
    instagram: "",
    x: "",
    certificates: [""],
    consent: agreed
  })

  const handleConsentNext = () => {
    if (agreed) {
      setStep("form")
    }
  }

  const handleAddCertificate = () => {
    setFormData((prev) => ({
      ...prev,
      certificates: [...prev.certificates, ""],
    }))
  }

  const handleRemoveCertificate = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      certificates: prev.certificates.filter((_, i) => i !== index),
    }))
  }

  const handleCertificateChange = (index: number, value: string) => {
    setFormData((prev) => ({
      ...prev,
      certificates: prev.certificates.map((cert, i) => (i === index ? value : cert)),
    }))
  }

  const handleSubmit = () => {
    const cleanedData = {
      ...formData,
      consent: agreed,
      certificates: formData.certificates.filter((cert) => cert.trim() !== ""),
    }
    onComplete(cleanedData)
  }

  return (
    <Dialog open={true} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-md">
        {step === "consent" ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-center text-lg font-semibold text-gray-800">Terms & Conditions</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <div className="max-h-64 overflow-y-auto bg-gray-50 p-4 rounded-md text-sm text-gray-700 leading-relaxed">
                <h3 className="font-semibold mb-2">BINUS University New Assistant Recruitment Terms</h3>
                <p className="mb-3">
                  By participating in the BINUS University New Assistant Recruitment program, you agree to the following
                  terms and conditions:
                </p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>You must be a current BINUS University student in good academic standing.</li>
                  <li>You commit to fulfilling all training requirements and schedules.</li>
                  <li>You understand that this position requires dedication and professional conduct.</li>
                  <li>You agree to maintain confidentiality regarding university matters.</li>
                  <li>You consent to the collection and processing of your personal data for recruitment purposes.</li>
                  <li>You understand that false information may result in disqualification.</li>
                </ul>
                <p className="mt-3">These terms are subject to university policies and may be updated as needed.</p>
              </div>

              <div className="flex items-center space-x-2 mt-4">
                <Checkbox id="agree" checked={agreed} onCheckedChange={(checked) => setAgreed(checked as boolean)} />
                <Label htmlFor="agree" className="text-sm text-gray-700">
                  I agree to the Terms and Conditions
                </Label>
              </div>
            </div>
            <div className="flex justify-end">
              <Button
                onClick={handleConsentNext}
                disabled={!agreed}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                Continue
              </Button>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-center text-lg font-semibold text-gray-800">
                Optional Profile Links
              </DialogTitle>
              <p className="text-center text-sm text-gray-600">
                Add your social media and certificate links (all fields are optional)
              </p>
            </DialogHeader>
            <div className="py-4 space-y-4">
              <div>
                <Label htmlFor="linkedin" className="text-sm font-medium text-gray-700">
                  LinkedIn Profile
                </Label>
                <Input
                  id="linkedin"
                  type="url"
                  placeholder="https://linkedin.com/in/your-profile"
                  value={formData.linkedin}
                  onChange={(e) => setFormData((prev) => ({ ...prev, linkedin: e.target.value }))}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="github" className="text-sm font-medium text-gray-700">
                  GitHub Profile
                </Label>
                <Input
                  id="github"
                  type="url"
                  placeholder="https://github.com/your-username"
                  value={formData.github}
                  onChange={(e) => setFormData((prev) => ({ ...prev, github: e.target.value }))}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="instagram" className="text-sm font-medium text-gray-700">
                  Instagram Profile
                </Label>
                <Input
                  id="instagram"
                  type="url"
                  placeholder="https://instagram.com/your-username"
                  value={formData.instagram}
                  onChange={(e) => setFormData((prev) => ({ ...prev, instagram: e.target.value }))}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="x" className="text-sm font-medium text-gray-700">
                  X Profile
                </Label>
                <Input
                  id="x"
                  type="url"
                  placeholder="https://x.com/your-username"
                  value={formData.x}
                  onChange={(e) => setFormData((prev) => ({ ...prev, x: e.target.value }))}
                  className="mt-1"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label className="text-sm font-medium text-gray-700">Certificate Links</Label>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={handleAddCertificate}
                    className="text-xs bg-transparent"
                  >
                    <Plus className="w-3 h-3 mr-1" />
                    Add Certificate
                  </Button>
                </div>
                <div className="space-y-2">
                  {formData.certificates.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Input
                        type="url"
                        placeholder="https://certificate-link.com"
                        value={cert}
                        onChange={(e) => handleCertificateChange(index, e.target.value)}
                        className="flex-1"
                      />
                      {formData.certificates.length > 1 && (
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => handleRemoveCertificate(index)}
                          className="p-2"
                        >
                          <X className="w-3 h-3" />
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep("consent")} className="text-gray-600">
                Back
              </Button>
              <Button onClick={handleSubmit} className="bg-blue-600 hover:bg-blue-700 text-white">
                Complete Setup
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

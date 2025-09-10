"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, DollarSign, Clock, Briefcase, MessageCircle, CheckCircle, Gift } from "lucide-react"

interface Job {
  id: number
  title: string
  company: string
  location: string
  salary: string
  shift: string
  experience: string
  description: string
  requirements: string[]
  benefits: string[]
  whatsapp: string
}

interface JobDetailsModalProps {
  job: Job | null
  isOpen: boolean
  onClose: () => void
}

export function JobDetailsModal({ job, isOpen, onClose }: JobDetailsModalProps) {
  if (!job) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-foreground pr-8">{job.title}</DialogTitle>
          <p className="text-lg text-primary font-medium">{job.company}</p>
        </DialogHeader>

        <div className="space-y-6">
          {/* Job Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-muted-foreground" />
              <span className="text-foreground">{job.location}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <DollarSign className="h-4 w-4 text-accent" />
              <span className="font-medium text-foreground">{job.salary}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <Badge
                variant="secondary"
                className={`
                  ${job.shift === "Day" ? "bg-green-100 text-green-800 hover:bg-green-100" : ""}
                  ${job.shift === "Night" ? "bg-blue-100 text-blue-800 hover:bg-blue-100" : ""}
                  ${job.shift === "Rotational" ? "bg-orange-100 text-orange-800 hover:bg-orange-100" : ""}
                `}
              >
                {job.shift} Shift
              </Badge>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Briefcase className="h-4 w-4 text-muted-foreground" />
              <span className="text-foreground">{job.experience}</span>
            </div>
          </div>

          <Separator />

          {/* Job Description */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Job Description</h3>
            <p className="text-muted-foreground leading-relaxed">{job.description}</p>
          </div>

          <Separator />

          {/* Requirements */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Requirements</h3>
            <ul className="space-y-2">
              {job.requirements.map((requirement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* Benefits */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Benefits</h3>
            <ul className="space-y-2">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Gift className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          {/* Apply Button */}
          <div className="flex gap-3">
            <Button asChild className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground">
              <a href={job.whatsapp} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                Apply on WhatsApp
              </a>
            </Button>
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

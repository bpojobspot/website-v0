"use client"

import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { JobDetailsModal } from "@/components/job-details-modal"
import { Search, MapPin, DollarSign, Clock, MessageCircle, Building2 } from "lucide-react"

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

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedShift, setSelectedShift] = useState<string>("All")
  const [loading, setLoading] = useState(true)
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/jobs.json")
        const jobsData = await response.json()
        setJobs(jobsData)
      } catch (error) {
        console.error("Error fetching jobs:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchJobs()
  }, [])

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesShift = selectedShift === "All" || job.shift === selectedShift
      return matchesSearch && matchesShift
    })
  }, [jobs, searchTerm, selectedShift])

  const shifts = ["All", "Day", "Night", "Rotational"]

  const handleJobClick = (job: Job) => {
    setSelectedJob(job)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedJob(null)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading jobs...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header Section */}
      <section className="bg-gradient-to-r from-primary/5 to-accent/5 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground text-balance mb-4">BPO Jobs in Delhi NCR</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Find your perfect BPO job and apply instantly via WhatsApp
            </p>
          </div>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search jobs by title..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Shift Filter */}
              <div className="flex gap-2">
                {shifts.map((shift) => (
                  <Button
                    key={shift}
                    variant={selectedShift === shift ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedShift(shift)}
                    className={
                      selectedShift === shift
                        ? "bg-primary hover:bg-primary/90"
                        : "hover:bg-primary/10 hover:text-primary"
                    }
                  >
                    {shift}
                  </Button>
                ))}
              </div>
            </div>

            {/* Results Count */}
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                Showing {filteredJobs.length} of {jobs.length} jobs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Listing */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredJobs.length === 0 ? (
            <div className="text-center py-12">
              <div className="max-w-md mx-auto">
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">No jobs found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your search terms or filters to find more jobs.
                </p>
                <Button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedShift("All")
                  }}
                  variant="outline"
                >
                  Clear Filters
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredJobs.map((job) => (
                <Card
                  key={job.id}
                  className="hover:shadow-lg transition-all duration-200 border-border/50 hover:border-primary/20 group cursor-pointer"
                  onClick={() => handleJobClick(job)}
                >
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                      {job.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span>{job.company}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Location */}
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>

                    {/* Salary */}
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="h-4 w-4 text-accent" />
                      <span className="font-medium text-foreground">{job.salary}</span>
                    </div>

                    {/* Shift */}
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

                    {/* Apply Button */}
                    <div className="pt-2">
                      <Button
                        asChild
                        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                        size="sm"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <a href={job.whatsapp} target="_blank" rel="noopener noreferrer">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Apply on WhatsApp
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <JobDetailsModal job={selectedJob} isOpen={isModalOpen} onClose={handleCloseModal} />

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground text-balance mb-4">Don't see the right job for you?</h2>
          <p className="text-muted-foreground text-pretty mb-6 max-w-2xl mx-auto">
            Contact us directly on WhatsApp and we'll help you find the perfect BPO opportunity that matches your skills
            and preferences.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
            <a
              href="https://wa.me/919311594259?text=Hi,%20I%20need%20help%20finding%20a%20specific%20BPO%20job%20in%20Delhi%20NCR."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4 mr-2" />
              Get Personalized Help
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}

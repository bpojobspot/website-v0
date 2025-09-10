import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { MapPin, Clock, DollarSign, Users } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="absolute inset-0 bg-[url('/professional-office-workers-in-modern-bpo-call-cen.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative container mx-auto px-4 py-16 sm:py-20 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground text-balance">
              Find BPO Jobs in Delhi NCR
              <span className="ml-2 text-primary">🚀</span>
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-8 text-muted-foreground text-pretty">
              Apply instantly via WhatsApp. No registration required.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-x-6">
              <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/jobs">Browse Jobs</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a
                  href="https://wa.me/919311594259?text=Hi,%20I%20need%20help%20finding%20a%20BPO%20job%20in%20Delhi%20NCR."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground text-balance">Why Choose BPO JobSpot?</h2>
            <p className="mt-4 text-muted-foreground text-pretty">
              Your trusted partner for finding the best BPO opportunities in Delhi NCR
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center border-border/50 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Delhi NCR Focus</h3>
                <p className="text-sm text-muted-foreground">
                  Specialized in BPO jobs across Delhi, Gurgaon, and Noida
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Instant Apply</h3>
                <p className="text-sm text-muted-foreground">Apply directly via WhatsApp with just one click</p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Competitive Salary</h3>
                <p className="text-sm text-muted-foreground">
                  Find jobs with attractive salary packages up to ₹35,000/month
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50 hover:border-primary/20 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">No Registration</h3>
                <p className="text-sm text-muted-foreground">Browse and apply without creating an account</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Job Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground text-balance">Popular Job Categories</h2>
            <p className="mt-4 text-muted-foreground text-pretty">Explore the most in-demand BPO positions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-border/50 hover:border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Customer Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Help customers with their queries and provide excellent service
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-primary">₹18,000 - ₹22,000</span>
                  <Button asChild size="sm" variant="outline">
                    <Link href="/jobs">View Jobs</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border/50 hover:border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Chat Process</h3>
                <p className="text-sm text-muted-foreground mb-4">Handle customer inquiries through chat platforms</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-primary">₹17,500 - ₹20,000</span>
                  <Button asChild size="sm" variant="outline">
                    <Link href="/jobs">View Jobs</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-border/50 hover:border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2">Technical Support</h3>
                <p className="text-sm text-muted-foreground mb-4">Provide technical assistance and troubleshooting</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-primary">₹22,000 - ₹25,000</span>
                  <Button asChild size="sm" variant="outline">
                    <Link href="/jobs">View Jobs</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-foreground text-balance mb-4">Ready to Start Your BPO Career?</h2>
          <p className="text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who have found their dream BPO jobs through our platform. Start your journey
            today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/jobs">Browse All Jobs</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href="https://wa.me/919311594259?text=Hi,%20I%20want%20to%20know%20more%20about%20BPO%20job%20opportunities."
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Job Alerts
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold text-primary">BPO JobSpot</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your trusted partner for finding the best BPO jobs in Delhi NCR. Apply instantly via WhatsApp.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="text-slate-600 hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/jobs" className="text-slate-600 hover:text-primary transition-colors">
                    Browse Jobs
                  </Link>
                </li>
                <li>
                  <a
                    href="https://wa.me/919311594259"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-600 hover:text-primary transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact Info</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>WhatsApp: +91 98765 43210</p>
                <p>Email: jobs@bpojobspot.com</p>
                <p>Location: Delhi NCR, India</p>
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center">
            <p className="text-sm text-muted-foreground">© 2024 BPO JobSpot. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

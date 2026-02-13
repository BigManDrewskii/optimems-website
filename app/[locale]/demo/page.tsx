"use client"

import { useState } from "react"
import { AppLayout } from "@/app/app-layout"
import { Container } from "@/components/shared/Container"
import { SectionHeader } from "@/components/shared/SectionHeader"
import { AnimatedSection } from "@/components/shared/AnimatedSection"
import { GlassCard } from "@/components/shared/GlassCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, ArrowRight } from "lucide-react"

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setSubmitted(true)
  }

  return (
    <AppLayout>
      <main className="min-h-screen pb-24">
        <AnimatedSection>
          <div className="relative overflow-hidden mb-16">
            <Container>
              <div className="text-center max-w-4xl mx-auto relative z-10">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Request a Demo
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  See our solutions in action. Fill out the form below and we&apos;ll be in touch to schedule your personalized demo.
                </p>
              </div>
            </Container>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <Container>
            <div className="py-20 md:py-28 max-w-2xl mx-auto">
              <GlassCard className="p-8">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 className="w-10 h-10 text-primary" aria-hidden="true" />
                    </div>
                    <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                    <p className="text-muted-foreground mb-6">
                      We&apos;ll be in touch within 24 hours to schedule your demo.
                    </p>
                    <Button onClick={() => setSubmitted(false)} variant="outline">
                      Submit Another Request
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name *</Label>
                        <Input id="demo-name" name="name" placeholder="Your full name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company *</Label>
                        <Input id="demo-company" name="company" placeholder="Your company name" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="demo-email" name="email" type="email" placeholder="your@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="products">Products of Interest</Label>
                      <div className="flex flex-wrap gap-4 mt-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" name="products" value="solar-control" className="rounded border-input" />
                          <span className="text-sm">+SolarControl</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" name="products" value="mind" className="rounded border-input" />
                          <span className="text-sm">+Mind</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                          <input type="checkbox" name="products" value="both" className="rounded border-input" />
                          <span className="text-sm">Both</span>
                        </label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="demo-message" name="message" placeholder="Tell us about your needs..." rows={4} />
                    </div>
                    <Button type="submit" variant="primary" size="lg" className="w-full">
                      Submit Request
                      <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                    </Button>
                  </form>
                )}
              </GlassCard>
            </div>
          </Container>
        </AnimatedSection>
      </main>
    </AppLayout>
  )
}

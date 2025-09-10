import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "BPO JobSpot - Find BPO Jobs in Delhi NCR",
  description:
    "Find the best BPO jobs in Delhi NCR. Apply instantly via WhatsApp. No registration required. Customer support, chat process, and more opportunities available.",
  keywords:
    "BPO jobs, Delhi NCR jobs, Gurgaon jobs, Noida jobs, customer support jobs, chat process jobs, call center jobs",
  generator: "BPO JobSpot",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}

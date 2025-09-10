import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.jpg" alt="BPO JobSpot" width={40} height={40} className="h-8 w-8" />
          <span className="text-xl font-bold text-emerald-600">BPO JobSpot</span>
        </Link>

        <div className="flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors">
            Home
          </Link>
          <Link href="/jobs" className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors">
            Jobs
          </Link>
          <Button asChild size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white">
            <a
              href="https://wa.me/919311594259?text=Hi,%20I%20need%20help%20finding%20a%20BPO%20job%20in%20Delhi%20NCR."
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
}

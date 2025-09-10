import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-20 md:h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="BPO JobSpot"
            width={200}
            height={100}
            className="h-40 w-auto sm:h-30 md:h-30"
            priority
          />
        </Link>

        <div className="hidden space-x-6">
          <Link href="/" className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors">
            Home
          </Link>
          <Link href="/jobs" className="text-sm font-medium text-slate-700 hover:text-emerald-600 transition-colors">
            Jobs
          </Link>
        </div>

        <Button asChild size="sm" className="bg-emerald-500 hover:bg-emerald-600 text-white">
          <a
            href="https://wa.me/919311594259?text=Hi,%20I%20need%20help%20finding%20a%20BPO%20job%20in%20Delhi%20NCR."
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </Button>
      </div>
    </nav>
  )
}

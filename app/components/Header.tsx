import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Header() {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary">
              Crefy
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link
              href="#features"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="https://crefy-pres.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              About Us
            </Link>
            <Link
              href="https://passports-eight.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              KYC
            </Link>
            <Link
              href="https://crefy-did.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Credentials
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button
              as="a"
              href="https://calendly.com/mulinyafadhil/coffee-chat-s-with-fadhil"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Call
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}


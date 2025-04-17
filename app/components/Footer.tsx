import Link from "next/link"
import { Github, Twitter, DiscIcon as Discord } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold">
              <span className="text-primary">CRE</span>
              <span className="text-foreground">FY</span>
            </Link>
            <p className="ml-4 text-sm text-muted-foreground">Modular identity and credentials infrastructure</p>
          </div>
          <div className="mt-8 md:mt-0">
            <div className="flex space-x-6">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <span className="sr-only">Discord</span>
                <Discord className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 flex justify-center">
          <p className="text-base text-muted-foreground">&copy; 2023 CREFY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}


"use client"

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { NavButton } from "./main/nav-button"
import { Droplet, X } from "lucide-react"
import { useState } from "react"
import { SiteMessage } from "@/lib/utils"
import { Icon } from "@iconify/react"

export function SiteHeader() {
  const [close, setClose] = useState(false)
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      {SiteMessage &&
        <div className={`flex items-center justify-center space-x-2 border-b text-center ${close && "hidden"}`}>
          <div>{SiteMessage}</div>
          <div className="cursor-pointer" onClick={() => setClose(true)}><X /></div>
        </div>}

      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/" className="flex items-center space-x-2">
          <Droplet className="text-primary" />
          <span className="inline-block font-bold">{siteConfig.name}</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div className={buttonVariants({ size: "icon", variant: "ghost", })}>
                <Icon className="h-5 w-5" icon="mingcute:github-line" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div className={buttonVariants({ size: "icon", variant: "ghost", })}>
                <Icon className="h-5 w-5 fill-current" icon="simple-icons:x" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
            <ThemeToggle />
            <NavButton />
          </nav>
        </div>
      </div>
    </header>
  )
}

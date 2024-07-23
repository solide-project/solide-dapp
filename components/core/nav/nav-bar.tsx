"use client"

import { useState } from "react"
import { Icon } from "@iconify/react/dist/iconify.js"

import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/ui/theme/theme-toggle"
import { FeedBackButton } from "@/components/core/nav/feedback-button"
import { NavButton } from "@/components/core/nav/nav-button"

interface NavBarProps extends React.HTMLAttributes<HTMLDivElement> { }

export const NavBar = ({ }: NavBarProps) => {
  const [showNavBar, setShowNavBar] = useState(false)
  const handleNavBar = () => {
    setShowNavBar(!showNavBar)
  }

  return (
    <div className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between py-6">
        <div className="flex gap-6 md:gap-10">
          <a className="hidden items-center space-x-2 md:flex" href="/">
            <Icon icon="lucide:droplet" height={24} className="text-primary" />
            <span className="hidden font-bold sm:inline-block text-2xl">
              Solide
            </span>
          </a>
          <nav className="hidden gap-6 md:flex"></nav>
          <button
            className="flex items-center space-x-2 md:hidden"
            onClick={handleNavBar}
          >
            <Icon icon="lucide:menu" />
            <span className="font-bold">Menu</span>
          </button>
          <div
            className={cn(
              "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden",
              `${showNavBar ? "visible" : "hidden"}`
            )}
          >
            <div className="relative z-20 grid gap-6 rounded-md bg-popover p-4 text-popover-foreground shadow-md">
              <nav className="grid grid-flow-row auto-rows-max text-sm space-y-4">
                <FeedBackButton />
                <div className="flex space-x-4">
                  <NavButton />
                  <ThemeToggle />
                </div>
              </nav>
            </div>
          </div>
        </div>
        <nav
          className="hidden md:flex items-center z-50"
          style={{ zIndex: 999 }}
        >
          <FeedBackButton />
          <ThemeToggle />
          <NavButton />
        </nav>
        <div className="flex md:hidden">
          <a className="flex items-center space-x-2" href="/">
            <Icon icon="lucide:droplet" height={24} className="text-primary" />
            <span className="hidden font-bold sm:inline-block text-2xl">
              Solide
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

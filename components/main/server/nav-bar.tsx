"use client"

import { useState } from "react"
import Link from "next/link"
import { Icon } from "@iconify/react/dist/iconify.js"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme/theme-toggle"

import { FeedBackButton } from "./feedback-button"
import { NavButton } from "./nav-button"

interface NavBarProps extends React.HTMLAttributes<HTMLDivElement> {}

export const NavBar = ({}: NavBarProps) => {
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

// export const NavBar = ({ }: NavBarProps) => {
//     return <div className="flex flex-none items-center py-2 justify-between flex-wrap bg-background sticky top-0 z-40 w-full border-b">
//         <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
//             <Link href="/" className="flex items-center space-x-2">
//                 {/* <Droplet className="text-primary" /> */}
//                 <span className="inline-block font-bold">Solide</span>
//             </Link>
//             <div className="flex flex-1 items-center justify-end space-x-4">
//                 <a
//                     className={buttonVariants({ variant: "default" })}
//                     href="https://forms.gle/RGWgwuvCsGuXh5H29"
//                     target="_blank"
//                     rel="noreferrer"
//                 >
//                     Give Feedback 🌟
//                 </a>
//                 <nav className="flex items-center space-x-1">
//                     {/* <Link
//                         href={"#"}
//                         target="_blank"
//                         rel="noreferrer"
//                     >
//                         <div
//                             className={buttonVariants({ size: "icon", variant: "ghost" })}
//                         >
//                             <Icon className="h-5 w-5" icon="mingcute:github-line" />
//                             <span className="sr-only">GitHub</span>
//                         </div>
//                     </Link> */}
//                     {/* <Link
//                         href={"#"}
//                         target="_blank"
//                         rel="noreferrer"
//                     >
//                         <div
//                             className={buttonVariants({ size: "icon", variant: "ghost" })}
//                         >
//                             <Icon className="h-5 w-5 fill-current" icon="simple-icons:x" />
//                             <span className="sr-only">Twitter</span>
//                         </div>
//                     </Link> */}
//                     <ThemeToggle />
//                     <NavButton />
//                 </nav>
//             </div>
//         </div>
//     </div>
// }

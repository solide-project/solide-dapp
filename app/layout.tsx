import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"

import "./globals.css"

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/ui/theme/theme-provider"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Footer } from "@/components/core/nav/footer"
import { NavBar } from "@/components/core/nav/nav-bar"
import { Provider } from "@/components/provider"

export const fontSpace = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
})

export const metadata: Metadata = {
  title: "Solide",
  description: "Solide - Your goto place for smart contract development",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body
        className={cn(
          "bg-background antialiased",
          fontSpace.variable,
          "font-sans"
        )}
      >
        <Provider>
          <ThemeProvider attribute="class" defaultTheme="light">
            <TooltipProvider delayDuration={0}>
              <NavBar />
              {children}
              <Footer />
              <Analytics />
            </TooltipProvider>
          </ThemeProvider>
        </Provider>
      </body >
    </html >
  )
}

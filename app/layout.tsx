import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"

import "./globals.css"

import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/ui/theme/theme-provider"
import { Footer } from "@/components/main/client/main/footer"
import { NavBar } from "@/components/main/server/nav-bar"

const inter = Inter({ subsets: ["latin"] })
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
          "bg-background font-sans antialiased",
          fontSpace.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

import { JetBrains_Mono as FontMono, Inter as FontSans } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const grayScale025 = (theme: string | undefined) => {
  if (!theme) return "#FAFAFA"
  return theme === "light" ? "#FAFAFA" : "#131417";
}

export const grayScale200 = (theme: string | undefined) => {
  if (!theme) return "#DBDDE0"
  return theme === "light" ? "#DBDDE0" : "#2D3034"
}
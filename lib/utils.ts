import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const SiteMessage = "As Solide is hosting on Hobby tier, be mindful of potential compilation timeouts. If you encounter delays, wait a few minutes for optimal service loading. Our ongoing development efforts aim to improve performance. Thank you for your patience!"
// export const SolideURL = "http://localhost:3001"
export const SolideURL = "https://solide.vercel.app"
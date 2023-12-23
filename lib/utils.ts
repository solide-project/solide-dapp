import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// export const SolideURL = "http://localhost:3001"
export const SolideURL = "https://solide.vercel.app"
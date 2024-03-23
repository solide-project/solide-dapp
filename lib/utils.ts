import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const SiteMessage =
  "As Solide is hosting on Hobby tier, be mindful of potential compilation timeouts. If you encounter delays, wait a few minutes for optimal service loading. Our ongoing development efforts aim to improve performance. Thank you for your patience!"
// export const SOLIDE_URL = "http://localhost:3000"
export const SOLIDE_URL = "https://solidewidget.azurewebsites.net" // Azure deployment fixes timeout issue (that Vercel has)
// export const SOLIDE_URL = "https://solide.vercel.app"

export const REDDIT = "https://reddit.com/r/solide"
export const DISCORD = "https://github.com/solide-project"
export const X_TWITTER = "https://twitter.com/SolideProject"
export const GITHUB = "https://github.com/solide-project"
export const GITHUB_CONTRIBUTION_LINK =
  "https://github.com/solide-project/solide-dapp/issues/1"
export const EMAIL = "solide-project@proton.me"
export const DOCS = "https://solide-project.github.io/doc/"
export const SUBSTACK = "https://substack.com/@0xsolide"
export const SUPPORTED_CHAIN = "https://solide-project.github.io/doc/docs/supported-chains"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Converts a snake_case or kebab-case string to camelCase.
 *
 * @param input - The input string to be converted.
 * @returns The camelCase version of the input string.
 *
 * @example
 * ```typescript
 * const result = camelToWord("sample_input_string");
 * console.log(result); // Output: "sampleInputString"
 * ```
 */
export const snakeToCamel = (input: string): string => {
  const words = input.split("_")
  const camelCase =
    words[0] +
    words
      .slice(1)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("")
  return camelCase
}

export const snakeToWord = (input: string): string => {
  const words = input.split("_")
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  )
  const spaceSeparated = capitalizedWords.join(" ")
  return spaceSeparated
}

/**
 * Splits a camelCase or PascalCase string into separate words.
 *
 * @param input - The input string to be split.
 * @returns The input string with camelCase or PascalCase boundaries separated by spaces.
 *
 * @example
 * ```typescript
 * const result = camelToWord("splitCamelCase");
 * console.log(result); // Output: "Split Camel Case"
 * ```
 */
export const camelToWord = (input: string): string => {
  // Use a regular expression to find the camelCase boundaries
  let words = input.replace(/([a-z])([A-Z])/g, "$1 $2")

  // Capitalize the first letter of the first word
  words = words.charAt(0).toUpperCase() + words.slice(1)

  return words
}

export const minify = (input: string): string => input.replace(/\s+/g, ' ');

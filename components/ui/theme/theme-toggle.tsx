"use client"

import { Icon } from "@iconify/react/dist/iconify.js"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return <Button
    variant="ghost"
    size="icon"
    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
  >
    <Icon className="h-5 w-5 dark:hidden" icon="ph:sun-bold" />
    <Icon className="hidden h-5 w-5 dark:block" icon="tdesign:mode-dark" />
    <span className="sr-only">Toggle theme</span>
  </Button>
}

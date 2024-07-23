"use client"

import * as React from "react"
import { useEffect } from "react"
import { usePathname, useRouter } from "next/navigation"
import { Icon } from "@iconify/react/dist/iconify.js"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { frameworks } from "@/lib/data/nav"

const sortedFrameworks = frameworks
  .slice()
  .sort((a, b) => a.label.localeCompare(b.label))
// .concat({
//   value: "solide",
//   label: "Solide",
// })

interface NavButtonProps extends React.HTMLAttributes<HTMLDivElement> { }

export const NavButton = ({ ...props }: NavButtonProps) => {
  const pathname = usePathname()
  const router = useRouter()

  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  useEffect(() => {
    // (async () => {
    //   const chainId = await (window.ethereum).request({ method: "eth_chainId" })
    //   console.log("chainId", chainId);
    // })()

    const path = pathname.split("/").pop()
    setValue(path || "")

    // console.log(router, path);
  }, [])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)
              ?.label || "Welcome!"
            : "Welcome!"}
          <Icon
            icon="charm:chevrons-down"
            className="ml-2 h-4 w-4 shrink-0 opacity-50"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <ScrollArea className="w-full h-[60vh] rounded-lg">
          <Command>
            <CommandInput placeholder="Search framework..." />
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {sortedFrameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue)
                    setOpen(false)
                    router.push(`/eco/${currentValue}`)
                  }}
                >
                  <div className={`${value === framework.value ? "text-bold" : ""}`}>
                    {framework.label}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </ScrollArea>
      </PopoverContent>
    </Popover>
  )
}

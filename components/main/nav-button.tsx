"use client"

import * as React from "react"
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
import { useTheme } from "next-themes"
import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import Image from "next/image"
import { CHAINLINK_ID } from "@/lib/db"
import { Icon } from "@iconify/react"

const frameworks = [
  {
    value: CHAINLINK_ID,
    label: "Chainlink",
  },
  {
    value: "ethereum",
    label: "Ethereum",
  },
  {
    value: "openzeppelin",
    label: "OpenZeppelin",
  },
  {
    value: "uniswap",
    label: "Uniswap",
  },
  {
    value: "compound",
    label: "Compound",
  },
  {
    value: "arbitrum",
    label: "Arbitrum",
  },
  {
    value: "tableland",
    label: "Tableland",
  },
  {
    value: "metis",
    label: "Metis",
  },
  {
    value: "aave",
    label: "Aave (Coming Soon)",
  },
  // {
  //   value: "0x",
  //   label: "0x (Coming Soon)",
  // },
]

const sortedFrameworks = frameworks.slice().sort((a, b) => a.label.localeCompare(b.label));

interface NavButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {

}

export const NavButton = ({ ...props }: NavButtonProps) => {
  const { theme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  useEffect(() => {
    const path = pathname.split("/").pop();
    setValue(path || "")
    // console.log(router, path);
  }, []);

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
            ? frameworks.find((framework) => framework.value === value)?.label || "Welcome!"
            : "Welcome!"}
          <Icon icon="charm:chevrons-up-down" className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
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
                  router.push(`/${currentValue}`)
                }}
              >
                <Icon icon="lucide:check"
                  className={cn("mr-2 h-4 w-4", value === framework.value ? "opacity-100" : "opacity-0")} />
                {framework.label}
                {/* <Image src={`/icons/${framework.value}.svg` || `/icons/${framework.value}.png`}
                  priority height={32} width={32} alt="Icon" /> */}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}


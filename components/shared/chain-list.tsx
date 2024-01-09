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
import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { Icon } from "@iconify/react"

interface ChainListButtonProps
  extends React.HTMLAttributes<HTMLDivElement> {
  chains: string[];
  setChainId: Function;
}

export const ChainListButton = ({ chains, setChainId, ...props }: ChainListButtonProps) => {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between overflow-x-hidden"
        >
          {value
            ? chains.find((framework) => framework === value)
            : "Change Chain"}
          <Icon icon="charm:chevrons-up-down" className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {chains.map((framework) => (
              <CommandItem
                key={framework}
                value={framework}
                onSelect={(currentValue) => {
                  setValue(framework)
                  setChainId(framework)
                  setOpen(false)
                }}
              >
                <Icon icon="lucide:check"
                  className={cn("mr-2 h-4 w-4", value === framework ? "opacity-100" : "opacity-0")} />
                {getNetworkNameFromChainID(framework) || framework}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}


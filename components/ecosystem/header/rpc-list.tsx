"use client"

import * as React from "react"
import { ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Command,
    CommandGroup,
    CommandItem,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { ChainInfo } from "@/lib/data"
import Image from "next/image"

interface RPCListProps extends React.HTMLAttributes<HTMLDivElement> {
    items: ChainInfo[]
}

export function RPCList({ items }: RPCListProps) {
    const [open, setOpen] = React.useState(false)

    const handleAddToMetamask = async (item: ChainInfo) => {
        if (window.ethereum) {
            await window.ethereum.request({
                "method": "wallet_addEthereumChain",
                "params": [item]
            });
        }
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="justify-between"
                >
                    {"Add to Metamask"}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
                <Command>
                    <CommandGroup>
                        {items.map((item: ChainInfo) => (
                            <CommandItem
                                key={item.chainId}
                                value={item.chainId}
                            >
                                <div>{item.chainName}</div>
                                <Button
                                    variant="outline"
                                    className="ml-2 px-2 flex space-x-2"
                                    onClick={() => handleAddToMetamask(item)}
                                >
                                    <div>Add to Metamask</div>
                                    <Image
                                        src="/others/metamask.svg"
                                        alt="Metamask"
                                        width={24}
                                        height={24} />
                                </Button>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
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
import { useState } from "react"
import { ChainInfo } from "@/lib/db/chain-info"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { CodeBlock } from "./code-block"
import Image from "next/image"
import { Icon } from "@iconify/react"

interface MetamaskChainProps
    extends React.HTMLAttributes<HTMLDivElement> {
    chains?: ChainInfo[];
}

export const MetamaskChain = ({ chains = [] }: MetamaskChainProps) => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState<ChainInfo>(chains?.[0] || {})

    const addToMetaMask = async () => {
        if (!window.ethereum) return
        if (!value) return

        const chainId = await window.ethereum.request({ method: 'eth_chainId' });
        console.log(chainId)
        await window.ethereum.request({
            method: "wallet_addEthereumChain",
            params: [value],
        })
    }

    return (
        <div>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-[200px] justify-between bg-background"
                    >
                        {value
                            ? chains.find((framework) => framework.chainId === value.chainId)?.chainName
                            : "Select framework..."}
                        <Icon icon="charm:chevrons-up-down" className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[200px] p-0">
                    <Command>
                        <CommandInput placeholder="Search framework..." className="h-9" />
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                            {chains.map((framework) => (
                                <CommandItem
                                    key={framework.chainId}
                                    value={framework.chainId}
                                    onSelect={(currentValue) => {
                                        setValue(framework)
                                        setOpen(false)
                                    }}
                                >
                                    {framework.chainName}
                                    <Icon icon="lucide:check"
                                        className={cn("mr-2 h-4 w-4", value.chainId === framework.chainId ? "opacity-100" : "opacity-0")} />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </Command>
                </PopoverContent>
            </Popover>

            <div className="flex justify-center items-center my-2">
                {value &&
                    <Button onClick={addToMetaMask} className="">
                        <Image src="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
                            priority height={32} width={32}
                            alt="Add to Metamask">
                        </Image>
                    </Button>}
                {value &&
                    <Dialog>
                        <DialogTrigger>
                            <Button>
                                Chain Info <Icon icon="carbon:view" className="ml-2 h-4 w-4" />
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-[1024px]">
                            <DialogHeader>
                                <DialogTitle>Chain Info: {value.chainName}</DialogTitle>
                                <DialogDescription>
                                    <CodeBlock code={JSON.stringify(value, null, 2)} />
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>}
            </div>
        </div>
    )
}
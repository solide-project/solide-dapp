"use client"

import { use, useEffect, useState } from "react"
import Link from "next/link"
import { Icon } from "@iconify/react"

import { ContractSchema, SolideIDESchema } from "@/lib/schema/contract"
import { cn, GITHUB_CONTRIBUTION_LINK } from "@/lib/utils"
import { generateUri } from "@/lib/utils/construct-link"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { CopyCode } from "@/components/main/client/shared/copy-code"
import { MarkdownPlayground } from "./markdown-playground"
import { enc } from "@/lib/contracts/utils/hash"
import { ethers } from "ethers"
import { CopyIcon } from "@/components/main/client/shared/copy-icon"

interface LoadPlaygroundProps extends React.HTMLAttributes<HTMLDivElement> {
  item: ContractSchema
  contract: SolideIDESchema
}

export const Playground = ({ item, contract }: LoadPlaygroundProps) => {
  const [uri, setUri] = useState<string>("")

  const [id, setId] = useState<string>("")
  const [hash, setHash] = useState<string>("")

  useEffect(() => {
    setId(enc(JSON.stringify(item)))
    setHash(ethers.id(id))
    setUri(generateUri({ item: contract, type: item.type }))
  }, [item, contract])

  return (
    <Drawer>
      <DrawerTrigger className={cn(buttonVariants({ variant: "default" }))}>
        Open
      </DrawerTrigger>
      <DrawerContent className="h-[95vh]">
        <DrawerHeader className="overflow-auto">
          <div className="flex items-center space-x-4">
            <DrawerTitle>{item.title || uri}</DrawerTitle>
            <Tooltip>
              <TooltipTrigger>
                <CopyIcon payload={uri} />
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy IDE Link</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger>
                <CopyIcon payload={hash} />
              </TooltipTrigger>
              <TooltipContent>
                <p>Copy ID</p>
              </TooltipContent>
            </Tooltip>
            {/* <CopyIcon payload={id} /> */}
          </div>

          <div className="flex items-center justify-center my-4">
            <iframe
              className="rounded-lg"
              src={uri}
              width="100%"
              height="500px"
              allow="clipboard-write"
            />
          </div>
          <div id="doc">
            <MarkdownPlayground tutorials={item.tutorial} />
          </div>
        </DrawerHeader>
        <DrawerFooter>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Button className="space-x-4 w-full">
                Want to contribute?
                <Link href={GITHUB_CONTRIBUTION_LINK} target="_blank">
                  <Icon
                    className="cursor-pointer hover:text-primary"
                    inline={true}
                    height={28}
                    icon="mingcute:github-line"
                  />
                </Link>
              </Button>
            </div>
            <div>
              <Link
                className={cn(buttonVariants({ variant: "outline" }), "w-full")}
                href="#doc"
              >
                Read Guides
              </Link>
            </div>
          </div>
          <DrawerClose>Cancel</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

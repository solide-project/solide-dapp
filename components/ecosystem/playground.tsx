"use client"

import { lazy, Suspense, useEffect, useState } from "react"
import Link from "next/link"
import { Icon } from "@iconify/react"

// import { enc } from "@/lib/contracts/utils/hash"
import { ContractSchema, SolideIDESchema } from "@/lib/contracts"
import { cn, GITHUB_CONTRIBUTION_LINK, SOLIDE_URL } from "@/lib/utils"
import { generateUri } from "@/lib/helpers/construct-link"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { CopyIcon } from "@/components/core/components/copy-icon"

import { MarkdownPlayground } from "../core/markdown/markdown-playground"

const LazyAIChatBot = lazy(() => import("@/components/core/components/ai-chatbot"))

interface LoadPlaygroundProps extends React.HTMLAttributes<HTMLDivElement> {
  item: ContractSchema
  contract: SolideIDESchema
}

export const Playground = ({ item, contract }: LoadPlaygroundProps) => {
  const [uri, setUri] = useState<string>("")

  const [selectedTab, setSelectedTab] = useState('doc');

  useEffect(() => {
    setUri(generateUri({ item: contract, type: item.type }))
  }, [item, contract])

  const [highlighted, setHighlighted] = useState<string>("");

  useEffect(() => {
    const handleMessage = (event: any) => {
      if (event.origin === SOLIDE_URL
        || event.origin === `${SOLIDE_URL}/`
        || event.origin === 'https://solide.vercel.app/'
        || event.origin === 'https://solide.vercel.app'
      ) {
        console.log('Received highlighted text:', event.data.target);
        if (event.data.target && event.data.target === 'solide-highlight') {
          console.log('Received highlighted text 2:', event.data.data.selectedText);
          setHighlighted(`Explain in detail what this does in smart contract snippet: \n ${event.data.data.selectedText}` || "");
        }
      } else {
        console.log('Received message from unexpected origin:', event.origin);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

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
          <div>
            <div className={cn("mx-8 lg:mx-32", `${selectedTab === 'doc' ? "block" : "hidden"}`)} id="doc">
              <MarkdownPlayground tutorials={item.tutorial} />
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <LazyAIChatBot className={`${selectedTab === 'gpt' ? "block" : "hidden"}`}
                prompt={highlighted} />
            </Suspense>
          </div>
        </DrawerHeader>
        <DrawerFooter>
          <div className="grid grid-flow-col justify-stretch space-x-4">
            <Button className="">
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
            <Button onClick={() => setSelectedTab('doc')}>Documentation</Button>
            <Button onClick={() => setSelectedTab('gpt')}>Smart Contract GPT (NEW 🎉)</Button>
          </div>
          <DrawerClose>Cancel</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

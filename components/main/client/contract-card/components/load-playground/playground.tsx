"use client"

import { ContractSchema, SolideIDESchema } from "@/lib/schema/contract";
import { Icon } from "@iconify/react"
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
import { Button, buttonVariants } from "@/components/ui/button";
import { useEffect } from "react";
import { MarkdownPlayground } from "./markdown-playground";
import { generateUri } from "@/lib/utils/construct-link";
import { GITHUB_CONTRIBUTION_LINK, cn } from "@/lib/utils";
import Link from "next/link";
import { CopyCode } from "../../../shared/copy-code";

interface LoadPlaygroundProps extends React.HTMLAttributes<HTMLDivElement> {
    item: ContractSchema;
    contract: SolideIDESchema;
}

export const Playground = ({
    item,
    contract,
}: LoadPlaygroundProps) => {
    return <Drawer>
        <DrawerTrigger className={cn(buttonVariants({ variant: "default" }))}>Open</DrawerTrigger>
        <DrawerContent className="h-[95vh]">
            <DrawerHeader className="overflow-auto">
                <DrawerTitle>
                    {generateUri({ item: contract, type: item.type })}
                </DrawerTitle>

                <div className="flex items-center justify-center my-4">
                    <iframe
                        className="rounded-lg"
                        src={generateUri({ item: contract, type: item.type })}
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
                        <Link className={cn(buttonVariants({ variant: "outline" }), "w-full")} href="#doc">
                            Read Guides
                        </Link>
                    </div>
                </div>
                <DrawerClose>
                    Cancel
                </DrawerClose>
            </DrawerFooter>
        </DrawerContent>
    </Drawer >
}

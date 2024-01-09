"use client";

import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import { GithubMarkDown } from "./github-markdown";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { Icon } from "@iconify/react";

interface PlaygroundDialogProps
    extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    src?: string;
    tutorial?: string;
}

export const PlaygroundDialog = ({
    title,
    src,
    tutorial
}: PlaygroundDialogProps) => {
    return (
        <Dialog>
            <DialogTrigger>
                <Button disabled={src ? false : true}>Load SOLIDE</Button>
            </DialogTrigger>
            <DialogContent className="max-w-full h-4/5 overflow-y-scroll">
                <DialogTitle>{src || "Solide IDE"}</DialogTitle>

                <div className="flex items-center justify-center">
                    <iframe className="rounded-lg" src={src} width="100%" height="500px" allow="clipboard-write" />
                </div>

                {tutorial
                    ? <GithubMarkDown url={tutorial} />
                    : <div className="border-t my-4 py-4">
                        <div className="flex space-x-2">
                            <div>
                                This smart contract doesn&apos;t have any information. Want to contribute?
                            </div>
                            <Link href={siteConfig.links.github} target="_blank">
                                <Icon className="cursor-pointer hover:text-primary" inline={true} height={28} icon="mingcute:github-line" />
                            </Link>
                        </div>
                    </div>}
            </DialogContent>
        </Dialog>
    )
}
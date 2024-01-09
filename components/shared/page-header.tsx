"use client";

import { cn } from "@/lib/utils";
import { Header } from "./header";
import { CopyCode } from "./copy-code";
import { LibrarySchema } from "@/lib/db/library";
import Link from "next/link";
import { useTheme } from "next-themes";
import { MetamaskChain } from "./metamask-chain";
import { Icon } from "@iconify/react";

interface PageHeaderProps
    extends React.HTMLAttributes<HTMLDivElement> {
    item: LibrarySchema;
    chains?: any[];
}

export const PageHeader = ({ item, chains, className }: PageHeaderProps) => {
    const { theme } = useTheme();

    return (
        <div className={cn("py-4", className)}
            style={{ backgroundColor: `${!theme || theme === "light" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}`, }}
        >
            <div className="grid grid-cols-12">
                <div className="col-span-12 lg:col-span-2 order-last">
                    <div className="flex items-center justify-center space-x-2 py-4">
                        {item.github &&
                            <Link href={item.github} target="_blank">
                                <Icon className="cursor-pointer hover:text-primary" height={28} icon="mingcute:github-line" />
                            </Link>}

                        {item.website &&
                            <Link href={item.website} target="_blank">
                                <Icon className="cursor-pointer hover:text-primary" height={28} icon="gg:website" />
                            </Link>}

                        {item.blog &&
                            <Link href={item.blog} target="_blank">
                                <Icon className="cursor-pointer hover:text-primary" height={28} icon="iconamoon:news" />
                            </Link>}

                        {item.discord &&
                            <Link href={item.discord} target="_blank">
                                <Icon className="cursor-pointer hover:text-primary" height={28} icon="mingcute:discord-line" />
                            </Link>}

                        {item.x &&
                            <Link href={item.x} target="_blank">
                                <Icon className="cursor-pointer hover:text-primary" height={24} icon="simple-icons:x" />
                            </Link>}

                    </div>
                    <div className="flex items-center justify-center space-x-2 py-4">
                        {chains &&
                            <MetamaskChain chains={chains} />}
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-10">
                    <Header className="text-center py-4">{item.name}</Header>
                    {item?.library &&
                        <CopyCode className="bg-background" payload={`npm i ${item.library}`} />}

                    {item.description &&
                        <div className="container">
                            <div className="py-8 px-16">{item.description}</div>
                        </div>}
                </div>
            </div>
        </div>
    )
}

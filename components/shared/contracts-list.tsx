"use client";

import { Github } from "lucide-react";
import Link from "next/link"
import { cn } from "@/lib/utils";
import { ContractCard } from "./contract-card";

export interface ContractCardItems {
    source?: string;
    title: string;
    description: string;
    playground: PlaygroundItems;
    reference?: string;
}

export interface ContractInfoItems {
    address: string;
    version?: string;
}
export interface PlaygroundItems {
    default: ContractInfoItems;
    chains?: {
        [key: string]: ContractInfoItems;
    };
}

interface ContractsListProps
    extends React.HTMLAttributes<HTMLDivElement> {
    items?: ContractCardItems[];
}

export const ContractsList = ({ items = [], className }: ContractsListProps) => {

    return (
        <div className={cn("container max-w-[90%] lg:max-w-7xl m-auto py-8 lg:py-16", className)}>
            <div className="grid grid-cols-12 gap-4">
                {items.map((item, index) => {
                    return (
                        <div key={index} className="bg-background col-span-12 md:col-span-6 border rounded-md p-6">
                            <div className="flex items-center justify-between gap-4 space-y-0">
                                <div className="text-xl m-0 font-medium py-2">
                                    {item.title}
                                </div>
                                {item.source
                                    ? <Link href={item.source} target="_blank">
                                        <Github />
                                    </Link>
                                    : <>Code not available</>}
                            </div>

                            <p className="my-2">{item.description}</p>

                            <ContractCard item={item} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

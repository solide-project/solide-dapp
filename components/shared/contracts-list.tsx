"use client";

import { AlertCircle, ChevronLeft, ChevronRight, Github } from "lucide-react";
import Link from "next/link"
import { cn } from "@/lib/utils";
import { ContractCard } from "@/components/shared/contract-card";
import { useEffect, useState } from "react";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"

export interface ContractCardItems {
    source?: string;
    title: string;
    tutorial?: string;
    description: string;
    outdated?: boolean;
    playground: PlaygroundItems;
    tags?: string[];
    reference?: string;
}

export interface ContractInfoItems {
    address: string;
    version?: string;
    chainId?: string;
    displaychain?: string;
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

    const [displayedItems, setDisplayedItems] = useState<ContractCardItems[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [itemsPerPage, setItemsPerPage] = useState<number>(10)
    const [lastPage, setLastPage] = useState<number>(1)

    useEffect(() => {
        setLastPage(Math.ceil(items.length / itemsPerPage))
        paginate(itemsPerPage, currentPage)
    }, [itemsPerPage, currentPage]);

    function paginate(page_size: number, page_number: number) {
        // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
        setDisplayedItems(items.slice((page_number - 1) * page_size, page_number * page_size));
    }

    return (
        <div className="container max-w-[90%] lg:max-w-7xl">
            <div className={cn("m-auto py-8 lg:py-16", className)}>
                <div className="grid grid-cols-12 gap-4">
                    {displayedItems.map((item, index) => {
                        return (
                            <div key={index} className="bg-background col-span-12 md:col-span-6 border rounded-md p-6">
                                <div className="flex items-center justify-between gap-4 space-y-0">
                                    <div className="text-xl m-0 font-medium py-2">
                                        {item.title}
                                    </div>
                                    <div className="flex space-x-4">
                                        {item.playground.default.address
                                            ? <Link href={item.playground.default.address} target="_blank">
                                                <Github className="hover:text-primary cursor-pointer" />
                                            </Link>
                                            : <>Code not available</>}
                                        {item.outdated &&
                                            <HoverCard>
                                                <HoverCardTrigger>
                                                    <AlertCircle className="text-orange-400 cursor-pointer" />
                                                </HoverCardTrigger>
                                                <HoverCardContent>
                                                    This smart contract is considered outdate and not maintained.
                                                </HoverCardContent>
                                            </HoverCard>}
                                    </div>
                                </div>

                                <p className="my-2">{item.description}</p>

                                <ContractCard item={item} />
                            </div>
                        )
                    })}
                </div>
            </div>

            <div className="flex items-center justify-between font-bold py-8 text-2xl">
                <div className="cursor-pointer hover:text-primary" onClick={() => {
                    if (currentPage > 1)
                        setCurrentPage(x => x - 1)
                }}>{currentPage > 1 && <ChevronLeft />}</div>
                <div>{currentPage}</div>
                <div className="cursor-pointer hover:text-primary" onClick={() => {
                    setCurrentPage(x => x + 1)
                }}>{currentPage < lastPage && <ChevronRight />}</div>
            </div>
        </div>
    )
}

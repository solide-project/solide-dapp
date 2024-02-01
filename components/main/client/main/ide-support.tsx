"use client"

import { Button } from "@/components/ui/button";
import { getIconByChainId } from "@/lib/chains/icon";
import { ChainID } from "@/lib/chains/id";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface IDESupportProps
    extends React.HTMLAttributes<HTMLDivElement> {
}

const chains = Object.entries(ChainID)
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

const delays = ["delay-0", "delay-100", "delay-500", "deplay-700", "delay-1000"]
export const IDESupport = ({ }: IDESupportProps) => {
    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () => {
        setShowAll(!showAll);
    };

    return <div className="my-24">
        <div className="text-center my-8">
            <div className="font-bold leading-[1.1] text-6xl">Support on 90+ chains</div>
            <div className="text-xs italic">Including testnets</div>
        </div>
        <div className="grid grid-cols-10 w-full">
            {chains.slice(0, 20).map(([_, value], index: number) => (
                <div
                    key={index}
                    className={`col-span-1`}
                >
                    <div className="flex items-center justify-center">
                        <img
                            src={getIconByChainId(value)}
                            height={32}
                            width={32}
                            className={cn(
                                "animate-jump my-4",
                                delays[Math.floor(Math.random() * delays.length)]
                            )}
                            alt="icon"
                        />
                    </div>
                </div>
            ))}
            {showAll &&
                chains.slice(20).map(([_, value], index: number) => (
                    <div
                        key={index}
                        className={`col-span-1`}
                    >
                        <div className="flex items-center justify-center">
                            <img
                                src={getIconByChainId(value)}
                                height={32}
                                width={32}
                                className={cn(
                                    "animate-jump my-4",
                                    delays[Math.floor(Math.random() * delays.length)]
                                )}
                                alt="icon"
                            />
                        </div>
                    </div>
                ))
            }
            <div className="col-span-10 mt-4 text-center">
                <Button onClick={handleShowAll}>
                    Show All
                </Button>
            </div>
        </div>
    </div>
};
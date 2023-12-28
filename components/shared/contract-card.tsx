"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link"
import { PlaygroundDialog } from "./playground-dialog";
import { SolideURL } from "@/lib/utils";
import { ChainListButton } from "./chain-list";
import { useEffect, useState } from "react";
import { ContractCardItems } from "./contracts-list";
import { ethers } from "ethers";
import { usePathname } from "next/navigation";
import { getChainIdFromPathName } from "@/lib/chains/id";


interface ContractCardProps
    extends React.HTMLAttributes<HTMLDivElement> {
    item: ContractCardItems;
}

export const ContractCard = ({ item }: ContractCardProps) => {
    const [selectedChainId, setSelectedChainId] = useState<string>("")
    const [src, setSRC] = useState<string>("")
    const pathname = usePathname();

    useEffect(() => {
        let uri = `${SolideURL}`;
        if (selectedChainId && item.playground.chains && item.playground.chains[selectedChainId]) {
            if (ethers.utils.isAddress(item.playground.chains[selectedChainId].address)) {
                uri += `/address/${item.playground.chains[selectedChainId].displaychain || selectedChainId}/${item.playground.chains[selectedChainId].address}`        
            } else {
                uri += `/?url=${item.playground.chains[selectedChainId].address}`     
            }

            if (item.playground.chains[selectedChainId].version) {
                uri += `&version=${encodeURIComponent(item.playground.chains[selectedChainId].version || "")}`
            }
        } else {
            uri += `/?url=${item.playground.default.address}`
            if (item.playground.default.version) {
                uri += `&version=${encodeURIComponent(item.playground.default.version)}`
            }
        }

        setSRC(uri)
    }, [selectedChainId])

    useEffect(() => {
        setSelectedChainId("")

        const path = pathname.split("/").pop() || "";
        const chainId = getChainIdFromPathName(path);

        let uri = `${SolideURL}`;
        if (ethers.utils.isAddress(item.playground.default.address)) {
            uri += `/address/${item.playground.default.chainId || chainId}/${item.playground.default.address}`
        } else {
            uri += `/?url=${item.playground.default.address}`
        }

        if (item.playground.default.version) {
            uri += `&version=${encodeURIComponent(item.playground.default.version)}`
        }

        setSRC(uri)
    }, [])

    return (
        <div className="flex items-center space-x-2">
            <PlaygroundDialog src={src} tutorial={item.tutorial} />
            {item.playground.chains &&
                <ChainListButton chains={Object.keys(item.playground.chains)} setChainId={setSelectedChainId} />}
            {item.reference &&
                <Link className={buttonVariants({ variant: "outline" })}
                    href={item.reference}>Resource</Link>}
        </div>
    )
}


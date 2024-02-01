"use client"

import { Icon } from "@iconify/react"
import { ethers } from "ethers";
import { useEffect, useState } from "react";

interface ContractIconProps extends React.HTMLAttributes<HTMLDivElement> {
    link: string;
}

export const isTronAddress = (address: string): boolean =>
    address.substring(0, 1) === "T" && address.length === 34

export const isXDCAddress = (address: string) =>
    address.startsWith("xdc") && address.length === 43

export const ContractIcon = ({
    link,
}: ContractIconProps) => {
    const [icon, setIcon] = useState<string>("bi:box")
    const isContractAddress = (link: string): boolean => ethers.isAddress(link) || isTronAddress(link) || isXDCAddress(link)

    useEffect(() => {
        if (!isContractAddress(link)) {
            setIcon("iconoir:github")
        }
    }, [])

    return <Icon className="cursor-pointer hover:text-primary" height={48} icon={icon} />
}

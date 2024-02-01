"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { ContractsList } from "../../client/contract-list/contract-list"
import { ProtocolHeader } from "../../client/pages/components/protocol-header"
import { ProtocolHeaderSkeleton } from "./component/header-skeleton"


interface ContractPageSkeletonProps
    extends React.HTMLAttributes<HTMLDivElement> {
}

export const ContractPageSkeleton = ({
}: ContractPageSkeletonProps) => {
    const [secondaryColour, setSecondaryColour] = useState<string>("#FAFAFA")
    const { theme } = useTheme()

    useEffect(() => {
        if (!theme) return;
        setSecondaryColour(theme === "light" ? "#FAFAFA" : "#131417")
    }, [theme])

    const styles = {
        backgroundSize: "10px 10px",
        backgroundImage: `radial-gradient(
        ${"black"} 1px, 
        ${secondaryColour} 1px)`,
    }

    return <div className="px-0 md:px-8 lg:px-16" style={styles}>
        <div className="py-4">
            <ProtocolHeaderSkeleton />
        </div>

        {/* <ContractsList protocol={protocol} items={items} /> */}
    </div >
}

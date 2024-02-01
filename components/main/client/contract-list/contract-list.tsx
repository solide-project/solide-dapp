"use client"

import { ContractSchema } from "@/lib/schema/contract"
import { ContractCard } from "../contract-card/contract-card"
import { ProtocolSearch } from "../pages/components/protocol-search"
import { ProtocolSchema } from "@/lib/schema/protocol"
import { useEffect, useState } from "react"
import { Icon } from "@iconify/react"

interface ContractsListProps extends React.HTMLAttributes<HTMLDivElement> {
    protocol: ProtocolSchema,
    items?: ContractSchema[]
}

export const ContractsList = ({
    protocol,
    items = [],
}: ContractsListProps) => {
    // const [searchInput, setSearchInput] = useState<string>("")
    const [displayedItems, setDisplayedItems] = useState<ContractSchema[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [itemsPerPage, setItemsPerPage] = useState<number>(12)
    const [lastPage, setLastPage] = useState<number>(1)

    useEffect(() => {
        setLastPage(Math.ceil(items.length / itemsPerPage))
        paginate(itemsPerPage, currentPage)
    }, [itemsPerPage, currentPage, items])

    function paginate(page_size: number, page_number: number) {
        // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
        setDisplayedItems(
            items.slice((page_number - 1) * page_size, page_number * page_size)
        )
    }

    function handleSearchClick(val: string) {
        if (val.length < 3) {
            setDisplayedItems(items)
            return
        }
        const filterBySearch = items.filter((item) => {
            if (item.title.toLowerCase().includes(val.toLowerCase())) {
                return item
            }
        })
        setDisplayedItems(filterBySearch)
    }

    return (
        <>
            <ProtocolSearch item={protocol}
                counter={items.length || 0}
                onChange={(e: any) => handleSearchClick(e.target.value)} />

            <div className="grid grid-cols-12 gap-4">
                {displayedItems.map((item, index) => (
                    <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4">
                        <ContractCard key={index} item={item} />
                    </div>
                ))}
            </div>

            <div className="flex items-center justify-between font-bold py-8 text-2xl">
                <div
                    className="cursor-pointer hover:text-primary"
                    onClick={() => {
                        if (currentPage > 1) setCurrentPage((x) => x - 1)
                    }}
                >
                    {currentPage > 1 && (
                        <Icon icon="lucide:chevron-left" inline={true} height={28} />
                    )}
                </div>
                <div>{currentPage}</div>
                <div
                    className="cursor-pointer hover:text-primary"
                    onClick={() => {
                        setCurrentPage((x) => x + 1)
                    }}
                >
                    {currentPage < lastPage && (
                        <Icon icon="lucide:chevron-right" inline={true} height={28} />
                    )}
                </div>
            </div>
        </>
    )
}

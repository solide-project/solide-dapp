"use client"

import { LearnContractSchema, LearnInfo, LessonMetadata } from "@/lib/lessons/utils"
import Link from "next/link"
import { usePathname } from 'next/navigation'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useEffect, useState } from "react"
import { HomeIcon } from "lucide-react"
import { MarkdownPlayground } from "../../client/contract-card/components/load-playground/markdown-playground"
import { Playground } from "../../client/contract-card/components/load-playground/playground"
import { generateUri } from "@/lib/helpers"
import { utils } from "ethers"

interface LessonPageProps extends React.HTMLAttributes<HTMLDivElement> {
    data: LearnContractSchema
}

export const LessonPage = ({
    data
}: LessonPageProps) => {
    const pathname = usePathname()
    const [uri, setUri] = useState<string>("")

    const [id, setId] = useState<string>("")
    const [lesson, setLesson] = useState<string>("")

    useEffect(() => {
        const paths = pathname.split("/")
        console.log(paths)

        setId(paths.pop() || "")
        setLesson(paths.pop() || "")

        if (data.playground) {
            setUri(generateUri({ item: data.playground.default, type: data.type }))
        }

    }, [pathname])

    const handleBtn = async () => {
        const abi = [
            {
                "inputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "constant": true,
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "constant": false,
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ]
        abi
            // .filter((item) => item.type === "function")
            .forEach((item) => {
                const hash = utils.keccak256(utils.toUtf8Bytes(item.name || ""))
                console.log(item.name, hash, "0xb281fc8c12954d22544db45de3159a39272895b169a852b314f9cc762e44c53b" === hash)
            })
    }

    return <div className="grid grid-cols-12">
        <div className="col-span-12 lg:col-span-5">
            <div className="p-4 py-12">
                <Breadcrumb className="my-4">
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/learn" className="font-bold"><HomeIcon size={16} /></BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink href={`/learn/${lesson}`} className="font-bold">{lesson}</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className="font-bold">{id}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>

                {data.image && <img src={data.image} alt="learn" className="w-full rounded-lg" />}

                {data.tutorial &&
                    <MarkdownPlayground tutorials={data.tutorial} loadTOC={false} />}
            </div>
        </div>
        <div className="sticky top-[128px] h-screen col-span-12 lg:col-span-7">
            {uri && <iframe
                className="rounded-lg"
                src={uri}
                width="100%"
                height="500px"
                allow="clipboard-write"
            />}
        </div>
    </div>
}
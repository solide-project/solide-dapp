"use client"

import Link from "next/link"
import { Icon } from "@iconify/react/dist/iconify.js"

import {
    cn,
    DISCORD,
    DOCS,
    EMAIL,
    GITHUB,
    GITHUB_CONTRIBUTION_LINK,
    SOLIDE_URL,
    X_TWITTER,
} from "@/lib/utils"
import DotPattern from "@/components/ui/dot-pattern"

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> { }

const items = [
    { icon: "mingcute:github-line", link: GITHUB },
    { icon: "ri:discord-line", link: DISCORD },
    { icon: "bx:party", link: GITHUB_CONTRIBUTION_LINK },
    { icon: "iconoir:x", link: X_TWITTER },
]

const links = [
    { label: "Doc", link: DOCS },
    { label: "Contribute", link: GITHUB_CONTRIBUTION_LINK },
    { label: "Solide IDE", link: SOLIDE_URL },
    { label: "IDE Playground", link: "/play" },
    { label: "Contact", link: `mailto:${EMAIL}` },
]

export const Footer = ({ }: FooterProps) => {
    return <div className="relative w-full flex-col lg:p-8 p-4 flex items-center justify-center text-base mt-16">
        <div className="grid grid-cols-12 lg:gap-8 gap-3 max-w-7xl">
            <div className="col-span-12 lg:col-span-6 flex flex-col">
                <div className="flex flex-col space-y-4">
                    <div className="text-2xl font-extrabold">
                        Contribute the community
                    </div>
                    <p className="lg:w-1/2">
                        Solide: Open-source IDE and Knowledge Hub for seamless smart contract development.
                    </p>
                </div>
            </div>
            <div className="col-span-12 lg:col-span-6">
                <div className="grid grid-cols-12 gap-y-6 gap-x-0 xs:gap-x-6">
                    <div className="flex flex-col col-span-12 sm:col-span-6 space-y-2 font-bold">
                        <p className="m-0 text-primary font-bold">Links</p>
                        {links.map((link, index) => {
                            return (
                                <Link key={index} href={link.link} target="_blank">
                                    {link.label}
                                </Link>
                            )
                        })}
                    </div>
                    <div className="flex flex-col col-span-12 sm:col-span-6 space-y-2">
                        <p className="m-0 text-primary font-bold">Resources</p>
                        <div className="flex space-x-3">
                            {items.map((link, index) => {
                                return (
                                    <Link key={index} href={link.link} target="_blank">
                                        <Icon
                                            className="cursor-pointer hover:text-primary"
                                            inline={true}
                                            height={28}
                                            icon={link.icon}
                                        />
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <DotPattern className="[mask-image:linear-gradient(to_top_right,white,transparent)] fill-primary" />
    </div>
}

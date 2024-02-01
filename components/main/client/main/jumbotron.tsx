"use client"

import { buttonVariants } from "@/components/ui/button"
import { GITHUB_CONTRIBUTION_LINK, cn } from "@/lib/utils"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useEffect, useState } from "react"

interface JumbotronProps extends React.HTMLAttributes<HTMLDivElement> { }

export const Jumbotron = ({
    className,
}: JumbotronProps) => {
    const { theme } = useTheme()

    const [backgroundImage, setBackgroundImage] = useState<string>("svgs/hero-pattern.svg")

    useEffect(() => {
        setBackgroundImage(theme === "light" ? "svgs/hero-pattern.svg" : "svgs/hero-pattern-dark.svg")
    }, [theme])

    return (
        <div className={cn("rounded-lg w-full", className)}>
            <div className="bg-cover" style={{ backgroundImage: `url(${backgroundImage})` }}>
                <div className="grid grid-cols-12 gap-4 py-8 h-full">
                    <div className="col-span-12 lg:col-span-6 flex items-center justify-center mx-8">
                        <div className="">
                            <div className="mt-10 pb-1 text-3xl font-semibold tracking-tight first:mt-0">Want to Contribute?</div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis accusantium tenetur perspiciatis ut unde cupiditate ipsum ipsam maxime enim. Dolorem commodi in obcaecati velit architecto dolorum id libero tempora dignissimos?</div>
                            <Link className={cn(buttonVariants({ size: "lg" }), "text-xl my-4")}
                                href={GITHUB_CONTRIBUTION_LINK}
                            >Get Started
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6 order-first lg:order-last">
                        <div className="flex items-center justify-center">
                            <img src="/svgs/ethereum.svg"
                                height={123}
                                width={123}
                                alt="logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

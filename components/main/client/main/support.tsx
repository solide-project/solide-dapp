"use client"

import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"

interface SupportProps extends React.HTMLAttributes<HTMLDivElement> { }

const items = [
    {
        src: "esp-light.svg",
        dark: "esp-dark.svg",
        alt: "Ethereum Support Program Logo",
        size: 123,
    },
    {
        src: "artela-light.svg",
        dark: "artela-dark.svg",
        alt: "Artela Network",
        size: 196,
    }
]

export const Support = ({ className }: SupportProps) => {
    const { theme } = useTheme()

    return (
        <div className={cn("rounded-lg w-full my-16", className)}>
            <div className="text-xl leading-[1.1] sm:text-2xl md:text-4xl text-center font-bold">Supported by</div>
            <div className="flex items-center justify-center space-x-16 my-8">
                {items.map((item, index) => (
                    <div key={index} >
                        <img
                            src={theme === "light" ? `/images/${item.src}` : `/images/${item.dark}`}
                            height={item.size}
                            width={item.size}
                            alt={item.alt}
                        />
                    </div>
                ))}
            </div>

        </div>
    )
}

"use client"

import { cn } from "@/lib/utils"

interface HeaderProps extends React.HTMLAttributes<HTMLHeadElement> { }

export const Header = ({ children, className }: HeaderProps) => {
    return <div className={cn("font-bold text-center lg:text-left leading-[1.1] text-6xl", className)} >
        {children}
    </div>
}
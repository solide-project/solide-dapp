import { CardDescription } from "@/components/ui/card";
import { ProtocolSchema } from "@/lib/schema/protocol";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface ProtocolHeaderSkeletonProps
    extends React.HTMLAttributes<HTMLDivElement> {

}

export const ProtocolHeaderSkeleton = ({
    className
}: ProtocolHeaderSkeletonProps) => {
    const pathname = usePathname()
    const { theme } = useTheme();

    const [backgroundColor, setBackgroundColor] = useState<string>("")

    const [value, setValue] = useState<string>("")
    useEffect(() => {
        const path = pathname.split("/").pop()
        setValue(path || "")
        setBackgroundColor(theme === "light" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)")
    }, [value, theme])

    return <div className={cn("p-4 rounded-lg", className)} style={{ backgroundColor }}>
        <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-2 order-first">
                <div className="flex items-center justify-center h-full">
                    <div className="h-32 w-32 animate-pulse" />
                </div>
            </div>
            <div className="col-span-12 lg:col-span-10">
                <div className="font-bold text-center lg:text-left leading-[1.1] text-6xl my-4 animate-pulse h-32"></div>

                {/* <div>
                    <div className="font-bold text-center lg:text-left leading-[1.1] text-6xl my-4">{item.name}</div>
                    <CardDescription className="">{item.description}</CardDescription>
                    <ProtocolIcons className="my-4" item={item} />
                </div> */}
            </div>
        </div>
    </div>
}

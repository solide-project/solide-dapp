import { CardDescription } from "@/components/ui/card";
import { ProtocolSchema } from "@/lib/schema/protocol";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IconLink } from "../../shared/icon-link";
import { ProtocolIcons } from "./protocol-icons";
import { CodeBlock } from "../../shared/code-block";
import { CopyCode } from "../../shared/copy-code";

interface ProtocolHeaderProps
    extends React.HTMLAttributes<HTMLDivElement> {
    item: ProtocolSchema
}

export const ProtocolHeader = ({
    item,
    className
}: ProtocolHeaderProps) => {
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
                    {value &&
                        <Image src={`/icons/${value}.svg`} width={100} height={100} alt="logo" />}
                </div>
            </div>
            <div className="col-span-12 lg:col-span-10">
                <div>
                    <div className="font-bold text-center lg:text-left leading-[1.1] text-6xl my-4">{item.name}</div>
                    {item.library
                        && <CopyCode className="my-4" payload={`npm i ${item.library}`} />}
                    <CardDescription className="">{item.description}</CardDescription>
                    <ProtocolIcons className="my-4" item={item} />
                </div>
            </div>
        </div>
    </div>
}

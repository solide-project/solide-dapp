"use client";

import { cn } from "@/lib/utils";
import { Header } from "./header";
import { CopyCode } from "./copy-code";
import { LibrarySchema } from "@/lib/db/library";
import Link from "next/link";
import { Code, Github, Layout, LayoutDashboard } from "lucide-react";
import { useTheme } from "next-themes";

interface PageHeaderProps
    extends React.HTMLAttributes<HTMLDivElement> {
    item: LibrarySchema;
}

export const PageHeader = ({ item, className }: PageHeaderProps) => {
    const { theme } = useTheme();
    return (
        <div className={cn(className)} style={{ backgroundColor: `${theme === "light" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"}`, }}>
            <Header className="text-center py-4">{item.name}</Header>
            {item?.library &&
                <CopyCode payload={`npm i ${item.library}`} />}

            {item.description &&
                <div className="container">
                    <div className="py-8 px-16">{item.description}</div>
                </div>}

            <div className="flex items-center justify-center space-x-2 py-4">
                {item.github &&
                    <Link href={item.github} target="_blank">
                        <Github className="cursor-pointer hover:text-primary" />
                    </Link>}

                {item.source &&
                    <Link href={item.source} target="_blank">
                        <Code className="cursor-pointer hover:text-primary" />
                    </Link>}

                {item.website &&
                    <Link href={item.website} target="_blank">
                        <Layout className="cursor-pointer hover:text-primary" />
                    </Link>}
            </div>
        </div>
    )
}

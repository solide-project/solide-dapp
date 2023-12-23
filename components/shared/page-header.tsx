import { cn } from "@/lib/utils";
import { Header } from "./header";
import { CopyCode } from "./copy-code";
import { LibrarySchema } from "@/lib/db/library";
import Link from "next/link";
import { Code, Github, Layout, LayoutDashboard } from "lucide-react";

interface PageHeaderProps
    extends React.HTMLAttributes<HTMLDivElement> {
    item: LibrarySchema;
}

export const PageHeader = ({ item, className }: PageHeaderProps) => {
    return (
        <div className={cn(className)}>
            <Header className="text-center py-4">{item.name}</Header>
            {item?.library &&
                <CopyCode payload={`npm i ${item.library}`} />}

            <div className="flex items-center justify-center space-x-2 py-4">
                {item.github &&
                    <Link href={item.github} target="_blank">
                        <Github className="cursor-pointer" />
                    </Link>}

                {item.source &&
                    <Link href={item.source} target="_blank">
                        <Code className="cursor-pointer" />
                    </Link>}

                {item.website &&
                    <Link href={item.website} target="_blank">
                        <Layout className="cursor-pointer" />
                    </Link>}
            </div>
        </div>
    )
}

import { cn } from "@/lib/utils";
import { Header } from "./header";
import { CopyCode } from "./copy-code";
import { LibrarySchema } from "@/lib/db/library";
import Link from "next/link";
import { Github } from "lucide-react";

interface PageHeaderProps
    extends React.HTMLAttributes<HTMLDivElement> {
    item: LibrarySchema;
}

export const PageHeader = ({ item, className }: PageHeaderProps) => {
    return (
        <div className={cn(className)}>
            <Header className="text-center py-4">{item.name}</Header>
            {item?.library &&
                <CopyCode payload={item.library} />}
            {item.github &&
                <Link href={item.github}>
                    <Github className="cursor-pointer" />
                </Link>}
        </div>
    )
}

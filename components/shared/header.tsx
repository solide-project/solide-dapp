import { cn } from "@/lib/utils";

interface HeaderProps
    extends React.HTMLAttributes<HTMLDivElement> {
}

export const Header = ({ children, className }: HeaderProps) => {
    return (
        <p className={cn("text-2xl lg:text-4xl text-center font-medium", className)}>{children}</p>
    )
}

import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

interface FeedBackButtonProps extends React.HTMLAttributes<HTMLDivElement> { }

export const FeedBackButton = ({ ...props }: FeedBackButtonProps) => {
    return <Link
        className={buttonVariants({ variant: "default" })}
        href="https://forms.gle/RGWgwuvCsGuXh5H29"
        target="_blank"
        rel="noreferrer"
    >
        Give Feedback 🌟
    </Link>
}
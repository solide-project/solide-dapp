import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"

interface FeedBackButtonProps extends React.HTMLAttributes<HTMLDivElement> { }

export const FeedBackButton = ({ }: FeedBackButtonProps) => {
  return <Link className={buttonVariants({ variant: "default" })}
    href="https://forms.gle/RGWgwuvCsGuXh5H29"
    target="_blank"
    rel="noreferrer"
  >
    Give Feedback 🌟
  </Link>
}

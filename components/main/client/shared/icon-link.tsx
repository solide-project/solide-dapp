import Link from "next/link"
import { Icon } from "@iconify/react"

interface IconLinkProps extends React.HTMLAttributes<HTMLDivElement> {
  href: string
  icon?: string
  target?: string
}

export function IconLink({
  href,
  icon = "mingcute:github-line",
  target = "_blank",
}: IconLinkProps) {
  return (
    <Link href={href} target={target}>
      <Icon
        className="cursor-pointer hover:text-primary"
        height={28}
        icon={icon}
      />
    </Link>
  )
}

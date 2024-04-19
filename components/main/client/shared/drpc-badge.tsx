import { useTheme } from "next-themes"

export interface DRPCBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
}

export const DRPCBadge = ({ }: DRPCBadgeProps) => {
    const { theme } = useTheme()
    return (
        <a href="https://drpc.org?ref=12dbf8" target="_blank">
            <img style={{ width: "160px", }}
                src={`https://drpc.org/images/external/powered-by-drpc-${theme === "light" ? "light" : "dark"}.svg`}
                alt="Powered by dRPC" />
        </a>
    )
}

"use client"

import { Icon } from "@iconify/react"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface ContractInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  info?: string
}

export const ContractInfo = ({ info }: ContractInfoProps) => {
  return <>
    {info && <Tooltip>
      <TooltipTrigger>
        <Icon icon="ion:warning" className="text-orange-500 h-8 w-8" />
      </TooltipTrigger>
      <TooltipContent>
        <p>{info}</p>
      </TooltipContent>
    </Tooltip>}
  </>
}

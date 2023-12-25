import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Front } from "@/components/main/front"
import { Usage } from "@/components/main/usage"
import { Integrated } from "@/components/main/integrated"
import { HowToUse } from "@/components/main/how-to-use"

export default function IndexPage() {
  return (
    <section className="">
      <Front />
      <HowToUse />
      <Usage />
      <Integrated />
    </section>
  )
}

import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"
import { Front } from "@/components/main/front"
import { Usage } from "@/components/main/usage"
import { Integrated } from "@/components/main/integrated"

export default function IndexPage() {
  return (
    <section className="">
      <Front />
      <Integrated />
      <Usage />
    </section>
  )
}

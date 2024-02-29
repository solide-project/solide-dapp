"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"

import { cn, GITHUB_CONTRIBUTION_LINK } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const config = {
  title: "Want to Contribute?",
  description:
    "Contribute to our open-source projects by expanding our knowledge base! Whether it's creating a comprehensive guide for a new smart contract, enhancing an existing one, or introducing innovative features to our website, your contributions make a significant impact. Join us in shaping the future of our project and empowering developers worldwide!",
  linkTitle: "Get Started",
  link: GITHUB_CONTRIBUTION_LINK,
}

interface ContributionCTAProps extends React.HTMLAttributes<HTMLDivElement> {}

export const ContributionCTA = ({ className }: ContributionCTAProps) => {
  const { theme } = useTheme()

  const [backgroundImage, setBackgroundImage] = useState<string>(
    "svgs/hero-pattern.svg"
  )

  useEffect(() => {
    setBackgroundImage(
      theme === "light" ? "svgs/hero-pattern.svg" : "svgs/hero-pattern-dark.svg"
    )
  }, [theme])

  return (
    <section className={cn("rounded-lg w-full", className)}>
      <div
        className="bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="grid grid-cols-12 gap-4 py-8 h-full">
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center mx-8">
            <div className="">
              <div className="mt-10 pb-1 text-3xl font-semibold tracking-tight first:mt-0">
                {config.title}
              </div>
              <div>{config.description}</div>
              <Link
                className={cn(buttonVariants({ size: "lg" }), "text-xl my-4")}
                href={config.link}
              >
                {config.linkTitle}
              </Link>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 order-first lg:order-last">
            <div className="flex items-center justify-center">
              <img
                src="/svgs/ethereum.svg"
                height={123}
                width={123}
                alt="logo"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

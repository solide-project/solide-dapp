"use client"

import { Icon } from "@iconify/react/dist/iconify.js"

import { cn, SOLIDE_URL } from "@/lib/utils"

interface FeatureHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  main: string
  subtitle: string
}

const FeatureHeader = ({ main, subtitle }: FeatureHeaderProps) => {
  return (
    <div>
      {main}
      <span className="gradient-text"> {subtitle}</span>
    </div>
  )
}

const items = [
  {
    id: "ide",
    header: (
      <FeatureHeader main="Integrate with any" subtitle="Smart Contract" />
    ),
    subtitle: "Lightweight IDE",
    description:
      "Solide IDE simplifies blockchain development with user-friendly tools for coding, deploying, and testing smart contracts and decentralized applications, enabling efficient development for all skill levels.",
    children: (
      <iframe
        className="border rounded-lg"
        src={`${SOLIDE_URL}/?url=https://github.com/SovaSniper/contracts/blob/master/chainlink/datafeed/HistoricalDataConsumerV3.sol`}
        height="400"
        width="300"
        style={{ width: "100%", overflow: "hidden" }}
      />
    ),
  },
  {
    id: "hub",
    icon: "ph:scroll",
    header: (
      <FeatureHeader
        main="Explore and discover the vast"
        subtitle="Blockchain ecosystems"
      />
    ),
    subtitle: "Smart Contract Hub",
    description:
      "Solide's Smart Contract Knowledge Hub is a comprehensive resource hub designed to empower developers with in-depth insights, tutorials, and best practices for building secure and efficient smart contracts.",
    children: (
      <img
        src="/images/hub.png"
        className="w-full h-full object-cover rounded-lg transition hover:scale-110"
        alt="icon"
      />
    ),
  },
]

interface FeatureSectionProps extends React.HTMLAttributes<HTMLDivElement> { }

export const FeatureSection = ({ className }: FeatureSectionProps) => {
  return (
    <section className="grid-pattern">
      <div className={cn("container", className)}>
        {items.map((item, index) => (
          <Feature
            id={item.id}
            key={index}
            className="py-8"
            flipped={index % 2 === 0}
            icon={item.icon}
            header={item.header}
            subtitle={item.subtitle}
            description={item.description}
          >
            {item.children}
          </Feature>
        ))}
      </div>
    </section>
  )
}

interface FeatureProps extends React.HTMLAttributes<HTMLDivElement> {
  flipped?: boolean
  icon?: string
  header: JSX.Element
  subtitle?: string
  description?: string
}

const Feature = ({
  flipped,
  icon = "lucide:droplet",
  header,
  subtitle = "Lightweight IDE",
  description = "",
  className,
  children,
}: FeatureProps) => {
  return (
    <div className={cn("grid grid-cols-12 gap-1", className)}>
      <div
        className={cn(
          "col-span-12 lg:col-span-5",
          `${flipped ? "order-last" : ""}`
        )}
      >
        <div className="space-y-6 flex flex-col items-center lg:items-end">
          <div className="flex items-center justify-center lg:flex-col lg:items-start lg:justify-start gap-2 lg:w-4/5 pt-4 lg:pt-0">
            <Icon
              icon={icon}
              inline={true}
              height={32}
              className="text-primary"
            />
            <p className="text-center lg:text-left text-xl m-0 font-light border rounded-full px-2 py-1  bg-purple-600/10 text-purple-600 ring-purple-600/10">
              {subtitle}
            </p>
          </div>
          <div className="lg:w-4/5">
            <h2 className="text-2xl lg:text-4xl lg:w-4/5 text-center lg:text-left font-bold">
              {header}
            </h2>
            <p className="m-auto text-center lg:text-left lg:mx-0 max-w-[300px] lg:max-w-none lg:w-4/5">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-7">{children}</div>
    </div>
  )
}

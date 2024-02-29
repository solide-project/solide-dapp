"use client"

import { useRouter } from "next/navigation"

import { SOLIDE_URL } from "@/lib/utils"
import { Button } from "@/components/ui/button"

import { CopyCode } from "../shared/copy-code"

interface FrontProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Hero = ({}: FrontProps) => {
  const router = useRouter()

  return (
    <div className="isometric-overlay">
      <div className="flex flex-col items-center isometric-pattern h-screen relative">
        <div className="content">
          <div className="flex items-center justify-center h-screen">
            <div>
              <div className="font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-center px-16 lg:px-32">
                Exploring <span className="text-primary">smart contracts</span>{" "}
                one ecosystem at a time
              </div>
              <div className="flex flex-col gap-5 items-center my-16">
                <CopyCode className="bg-background" payload={SOLIDE_URL} />
              </div>
              {/* <div className="flex flex-wrap gap-4 items-center justify-center">
                <Button onClick={() => router.push("#TODO")}>Explore Random Ecosystem</Button>
              </div> */}
              <div className="flex flex-wrap gap-4 items-center justify-center">
                <Button onClick={() => router.push("/play")}>Get Started</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

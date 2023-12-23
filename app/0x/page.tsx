"use client"

import { Header } from "@/components/shared/header";
import { PageHeader } from "@/components/shared/page-header";
import { ZEROX_ID, libraryDB } from "@/lib/db";
import { grayScale025, grayScale200 } from "@/lib/fonts";
import { useTheme } from "next-themes";

const siteConfig = {
  title: "0x",
  library: "npm i @0x/contracts-utils",
}

export default function ZeroXPage() {
  const { theme } = useTheme();
  const styles = {
    "backgroundSize": "10px 10px",
    "backgroundImage": `radial-gradient(
      ${grayScale200(theme)} 1px, 
      ${grayScale025(theme)} 1px)`,
  }

  return (
    <section className="min-h-screen" style={styles}>
      <PageHeader item={libraryDB[ZEROX_ID]} />

      <div className="h-80 flex items-center justify-center">
        <Header>Coming Soon</Header>
      </div>
    </section >
  )
}

"use client"

import { UniswapList } from "@/components/contract-list/uniswap-list";
import { Header } from "@/components/shared/header";
import { PageHeader } from "@/components/shared/page-header";
import { UNISWAP_ID, libraryDB } from "@/lib/db";
import { grayScale025, grayScale200 } from "@/lib/fonts";
import { useTheme } from "next-themes";

export default function ZeroXPage() {
  const { theme } = useTheme();

  const styles = {
    "backgroundSize": "10px 10px",
    "backgroundImage": `radial-gradient(
      ${"rgba(255, 0, 122, 1)"} 1px, 
      ${grayScale025(theme)} 1px)`,
  }

  return (
    <section className="min-h-screen" style={styles}>
      <PageHeader item={libraryDB[UNISWAP_ID]} />

      <UniswapList />
    </section >
  )
}

"use client";

import { ChainlinkList } from "@/components/contract-list/chainlink-list";
import { PageHeader } from "@/components/shared/page-header";
import { CHAINLINK_ID, libraryDB } from "@/lib/db";
import { grayScale025, grayScale200 } from "@/lib/fonts";
import { useTheme } from "next-themes";

export default function ChainlinkPage() {
  const { theme } = useTheme();
  
  const styles = {
    "backgroundSize": "10px 10px",
    "backgroundImage": `radial-gradient(
      ${"rgba(55, 91, 210, 1)"} 1px, 
      ${grayScale025(theme)} 1px)`,
  }
  
  return (
    <section className="min-h-screen" style={styles}>
      <PageHeader item={libraryDB[CHAINLINK_ID]} />

      <ChainlinkList />
    </section>
  )
}



"use client";

import { ArbitrumList } from "@/components/contract-list/arbitrum-list";
import { ChainlinkList } from "@/components/contract-list/chainlink-list";
import { Header } from "@/components/shared/header";
import { PageHeader } from "@/components/shared/page-header";
import { ARBITRUM_ID, libraryDB } from "@/lib/db";
import { chainInfo } from "@/lib/db/chain-info";
import { grayScale025, grayScale200 } from "@/lib/fonts";
import { useTheme } from "next-themes";

export default function ArbitrumPage() {
  const { theme } = useTheme();
  
  const styles = {
    "backgroundSize": "10px 10px",
    "backgroundImage": `radial-gradient(
      ${"rgba(17, 19, 187, 1)"} 1px, 
      ${grayScale025(theme)} 1px)`,
  }
  
  return (
    <section className="min-h-screen" style={styles}>
      <PageHeader item={libraryDB[ARBITRUM_ID]} chains={chainInfo[ARBITRUM_ID]} />

      <ArbitrumList />
    </section>
  )
}



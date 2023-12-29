"use client";

import { ChainlinkList } from "@/components/contract-list/chainlink-list";
import { CompoundList } from "@/components/contract-list/compound-list";
import { Header } from "@/components/shared/header";
import { PageHeader } from "@/components/shared/page-header";
import { CHAINLINK_ID, COMPOUND_ID, libraryDB } from "@/lib/db";
import { grayScale025, grayScale200 } from "@/lib/fonts";
import { useTheme } from "next-themes";

export default function CompoundPage() {
  const { theme } = useTheme();
  
  const styles = {
    "backgroundSize": "10px 10px",
    "backgroundImage": `radial-gradient(
      ${"rgba(0, 211, 149, 1)"} 1px, 
      ${grayScale025(theme)} 1px)`,
  }
  
  return (
    <section className="min-h-screen" style={styles}>
      <PageHeader item={libraryDB[COMPOUND_ID]} />

      <CompoundList />
    </section>
  )
}

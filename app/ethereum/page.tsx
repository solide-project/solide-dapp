"use client";

import { EthereumList } from "@/components/contract-list/ethereum-list";
import { Header } from "@/components/shared/header";
import { PageHeader } from "@/components/shared/page-header";
import { ETHEREUM_ID, libraryDB } from "@/lib/db";
import { grayScale025 } from "@/lib/fonts";
import { useTheme } from "next-themes";

export default function EthereumPage() {
  const { theme } = useTheme();
  
  const styles = {
    "backgroundSize": "10px 10px",
    "backgroundImage": `radial-gradient(
      ${"rgba(98, 126, 234, 1)"} 1px, 
      ${grayScale025(theme)} 1px)`,
  }
  
  return (
    <section className="min-h-screen" style={styles}>
      <PageHeader item={libraryDB[ETHEREUM_ID]} />

      <EthereumList />
    </section>
  )
}
"use client";

import { MetisList } from "@/components/contract-list/metis-list";
import { PageHeader } from "@/components/shared/page-header";
import { METIS_ID, libraryDB } from "@/lib/db";
import { chainInfo } from "@/lib/db/chain-info";
import { grayScale025 } from "@/lib/fonts";
import { useTheme } from "next-themes";

export default function MetisPage() {
  const { theme } = useTheme();

  const styles = {
    "backgroundSize": "10px 10px",
    "backgroundImage": `radial-gradient(
      ${"rgba(0, 210, 255, 1)"} 1px, 
      ${grayScale025(theme)} 1px)`,
  }

  return (
    <section className="min-h-screen" style={styles}>
      <PageHeader item={libraryDB[METIS_ID]} chains={chainInfo[METIS_ID]} />

      <MetisList />
    </section>
  )
}



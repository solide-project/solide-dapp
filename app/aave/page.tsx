"use client";

import { Header } from "@/components/shared/header";
import { PageHeader } from "@/components/shared/page-header";
import { AAVE_ID, libraryDB } from "@/lib/db";
import { grayScale025 } from "@/lib/fonts";
import { useTheme } from "next-themes";

export default function AavePage() {
  const { theme } = useTheme();

  const styles = {
    "backgroundSize": "10px 10px",
    "backgroundImage": `radial-gradient(
      ${"rgba(139,113,170,1)"} 1px, 
      ${grayScale025(theme)} 1px)`,
  }

  return (
    <section className="min-h-screen" style={styles}>
      <PageHeader item={libraryDB[AAVE_ID]} />

      <div className="h-80 flex items-center justify-center">
        <Header>Coming Soon</Header>
      </div>
    </section>
  )
}


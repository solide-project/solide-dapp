"use client";

import { OpenzeppelinList } from "@/components/contract-list/openzeppelin-list";
import { PageHeader } from "@/components/shared/page-header";
import { OPEN_ZEPPELIN_ID, libraryDB } from "@/lib/db";
import { grayScale025 } from "@/lib/fonts";
import { useTheme } from "next-themes";


export default function OpenzeppelinPage() {
  const { theme } = useTheme();

  const styles = {
    "backgroundSize": "10px 10px",
    "backgroundImage": `radial-gradient(
      ${"rgba(78, 94, 228, 1)"} 1px, 
      ${grayScale025(theme)} 1px)`,
  }

  return (
    <section className="min-h-screen" style={styles}>
      <PageHeader item={libraryDB[OPEN_ZEPPELIN_ID]} />

      <OpenzeppelinList />
    </section>
  )
}




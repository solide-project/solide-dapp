"use client";

import { TablelandList } from "@/components/contract-list/tableland-list";
import { Header } from "@/components/shared/header";
import { PageHeader } from "@/components/shared/page-header";
import { TABLELAND_ID, libraryDB } from "@/lib/db";
import { grayScale025, grayScale200 } from "@/lib/fonts";
import { useTheme } from "next-themes";

export default function TablelandPage() {
  const { theme } = useTheme();
  
  const styles = {
    "backgroundSize": "10px 10px",
    "backgroundImage": `radial-gradient(
      ${grayScale200(theme)} 1px, 
      ${grayScale025(theme)} 1px)`,
  }
  
  return (
    <section className="min-h-screen" style={styles}>
      <PageHeader item={libraryDB[TABLELAND_ID]} />
      
      <TablelandList />
    </section>
  )
}



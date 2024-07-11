"use client"

import React, { useState } from "react"
import { ReactMarkdownWrapper } from "@/components/core/markdown/react-markdown-wrapper"

interface MarkdownPlaygroundProps extends React.HTMLAttributes<HTMLDivElement> {
  tutorials?: string
  loadTOC?: boolean
}

export const MarkdownPlayground = ({
  tutorials,
  loadTOC = false,
}: MarkdownPlaygroundProps) => {
  //#region TOC
  const [toc, setToc] = useState<any[]>([]);
  function TOC() {
    return <div>
      <div>What is on this page</div>
      <ul className="table-of-contents">
        {toc.map(({ level, id, title }) => (
          <li key={id} className={`toc - entry - level - ${level} `}>
            <a href={`#${id} `}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  }
  //#endregion

  if (!tutorials) return <div className="my-8 text-center w-[100px] flex items-center justify-center">No Tutorials</div>

  return <div>
    {loadTOC && <TOC />}
    <ReactMarkdownWrapper tutorials={tutorials} />
  </div>
}

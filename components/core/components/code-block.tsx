import { useEffect, useState } from "react"
import { Icon } from "@iconify/react"
import { useTheme } from "next-themes"
import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import html from 'react-syntax-highlighter/dist/esm/languages/prism/markup';
import atomOneDark from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark"
import atomOneLight from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light"

import { cn } from "@/lib/utils"

export interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string
  language?: string
}

SyntaxHighlighter.registerLanguage('html', html);

export const CodeBlock = ({
  className,
  code,
  language,
  style,
}: CodeBlockProps) => {
  const [codeStyle, setCodeStyle] = useState({} as any)
  const { theme } = useTheme()

  useEffect(() => {
    if (theme == "dark") setCodeStyle(atomOneDark)
    else setCodeStyle(atomOneLight)
  }, [theme])

  const [copied, setCopied] = useState<boolean>(false)
  function copyText(entryText: string) {
    setCopied(true)
    navigator.clipboard.writeText(entryText)
    setTimeout(() => {
      setCopied(false)
    }, 1000)
  }

  return (
    <div className="relative">
      <SyntaxHighlighter
        wrapLines={true}
        wrapLongLines={true}
        className={cn("!bg-background rounded-lg w-full", className)}
        language={language || "html"}
        style={{ ...codeStyle, ...style }}
      >
        {code}
      </SyntaxHighlighter>
      <div className="absolute p-4" style={{ top: 0, right: 0 }}>
        {!copied ? (
          <Icon
            icon="lucide:copy"
            className="cursor-pointer"
            onClick={() => copyText(code)}
          />
        ) : (
          <>Copied</>
        )}
      </div>
    </div>
  )
}

"use client"

import path from "path"
import { useEffect, useState } from "react"
import { GithubResolver } from "@resolver-engine/imports/build/resolvers/githubresolver"
import markdownit from "markdown-it"
import Markdown from "react-markdown"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism"
import theme from "react-syntax-highlighter/dist/esm/styles/prism/one-dark"
import remarkGfm from "remark-gfm"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface MarkdownPlaygroundProps extends React.HTMLAttributes<HTMLDivElement> {
  tutorials?: string
}

export const MarkdownPlayground = ({
  tutorials,
  className
}: MarkdownPlaygroundProps) => {
  const [content, setContent] = useState<string>("")
  const [loadSkeleton, setLoadSkeleton] = useState<boolean>(false)

  // convert a github https://github.com/SovaSniper/tutorials/blob/master/compound/cToken.md to its repo url
  const resolve = async (
    tutorials: string
  ): Promise<{ url: string; raw: string }[]> => {
    let output: { url: string; raw: string }[] = []
    const urls = tutorials.split("|")
    for (const url of urls) {
      const resolver = GithubResolver()
      const raw = await resolver(url, { resolver: "" })
      raw && output.push({ url, raw })
    }

    return output
  }

  function findLinksRecursive(
    tokens: markdownit.Token[],
    links: string[] = []
  ): string[] {
    tokens.forEach((token) => {
      if (token.type === "link_open" && token.attrs) {
        const link = token.attrs.find((attr: any) => attr[0] === "href")
        if (link) {
          links.push(link[1])
        }
      } else if (token.type === "image" && token.attrs) {
        const link = token.attrs.find((attr: any) => attr[0] === "src")
        if (link) {
          links.push(link[1])
        }
      }

      // Check if the token has children (nested elements)
      if (token.children && token.children.length > 0) {
        findLinksRecursive(token.children, links)
      }
    })

    return links
  }

  function getDirPath(filePath: any) {
    let index1 = filePath.lastIndexOf(path.sep)
    let index2 = filePath.lastIndexOf("/")
    return filePath.substring(0, Math.max(index1, index2))
  }

  const findLinks = async (
    url: string,
    markdownContent: string
  ): Promise<string> => {
    const md = markdownit()
    const tokens = md.parse(markdownContent, {})

    await Promise.all(
      findLinksRecursive(tokens)
        .filter((link) => link.startsWith("./") || link.startsWith("../"))
        .map(async (link) => {
          const rawPath = url.substring(url.indexOf("//") + 2)
          const href = path.normalize(path.join(getDirPath(rawPath), link))
          let fullUrl = `${url.substring(0, url.indexOf("//") + 2)}${href.replace(/\\/g, "/")}`

          if (
            link.endsWith(".jpg") ||
            link.endsWith(".png") ||
            link.endsWith(".gif")
          ) {
            const resolver = GithubResolver()
            const raw = await resolver(fullUrl, { resolver: "" })
            raw && (fullUrl = raw)
          }
          markdownContent = markdownContent.replace(link, fullUrl)
        })
    )

    return markdownContent
  }

  useEffect(() => {
    ; (async () => {

      const storedEmojis = localStorage.getItem('emojis');
      if (!storedEmojis) {
        // Fetch emoji data from GitHub API if not stored
        fetch('https://api.github.com/emojis')
          .then(response => response.json())
          .then(data => {
            // Store emoji data in localStorage
            localStorage.setItem('emojis', JSON.stringify(data));
          })
          .catch(error => {
            console.error('Error fetching emoji data:', error);
          });
      }

      setLoadSkeleton(true)
      await handleMarkdownGeneration()
      setLoadSkeleton(false)
    })()
  }, [tutorials])

  function getEmojiHeaderInfo(text: string, size: number = 32): { htmlContent: string, htmlId: string } {
    const regex = /:[a-zA-Z0-9_+-]+:/g;

    const htmlContent = text.replace(regex, match => {
      const shortcode = match.replace(/:/g, '').toLowerCase();
      return `<img width="${size}" src="${getEmoji(shortcode)}" />`;
    });

    const htmlId = text
      .replace(regex, match => match.replace(/:/g, ' ').toLowerCase())
      .replace(/\s+/g, ' ')
      .trim()
      .replace(/\s+/g, '-')
      .toLocaleLowerCase();

    return { htmlContent, htmlId }
  }

  /**
   * Note this is an anti-pattern and should be replaced with a better solution the only solution 
   * that works
   * @param id 
   */
  const scroll = (id: string = "#") => {
    const section = document.querySelector(id);
    section?.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
  };

  const getEmoji = (name: string): string => {
    const storedEmojis = JSON.parse(localStorage.getItem('emojis') ?? '{}');
    return storedEmojis[name] ?? '';
  }

  const handleMarkdownGeneration = async () => {
    if (!tutorials) {
      return
    }

    const documentation = await resolve(tutorials)
    if (documentation.length === 0) {
      return
    }

    // console.log(documentation);
    // setRawTutorial(documentation[0] || "")

    let text = ""
    for (const md of documentation) {
      const response = await fetch(md.raw)
      const info = await response.text()
      text += "\n" + (await findLinks(md.url, info))
    }

    setContent(text)
  }

  if (!tutorials) return <div className="my-8 text-center">No Tutorials</div>

  return (
    <>
      {loadSkeleton ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Markdown
            className={cn("w-full m-auto", className)}
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ node, ...props }) => {
                if (props.children) {
                  const { htmlContent, htmlId } = getEmojiHeaderInfo(props.children.toString())
                  return <div className="my-4">
                    <h1 className="text-3xl flex items-center"
                      // @ts-ignore
                      id={htmlId}
                      dangerouslySetInnerHTML={{ __html: htmlContent }} />
                    <hr />
                  </div>
                }

                return <div className="my-4">
                  <h1 className="text-3xl" {...props} />
                  <hr />
                </div>
              },
              h2: ({ node, ...props }) => {
                if (props.children) {
                  const { htmlContent, htmlId } = getEmojiHeaderInfo(props.children.toString(), 32)
                  return <h2 className="flex items-center space-x-2"
                    // @ts-ignore
                    id={htmlId}
                    dangerouslySetInnerHTML={{ __html: htmlContent }} />
                }

                return <h2 id={props.children?.toString()} {...props} />
              },
              h3: ({ node, ...props }) => {
                if (props.children) {
                  const { htmlContent, htmlId } = getEmojiHeaderInfo(props.children.toString())
                  return <h3 className="flex items-center"
                    // @ts-ignore
                    id={htmlId}
                    dangerouslySetInnerHTML={{ __html: htmlContent }} />
                }

                return <h3 id={props.children?.toString()} {...props} />
              },
              h4: ({ node, ...props }) => {
                if (props.children) {
                  const { htmlContent, htmlId } = getEmojiHeaderInfo(props.children.toString())
                  return <h4 className="flex items-center"
                    // @ts-ignore
                    id={htmlId}
                    dangerouslySetInnerHTML={{ __html: htmlContent }} />
                }

                return <h4 id={props.children?.toString()} {...props} />
              },
              code(props) {
                const { children, className, node, ...rest } = props
                const match = /language-(\w+)/.exec(className || "")
                return match ? (
                  <SyntaxHighlighter
                    language={"solidity" || match[1]}
                    style={theme}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code
                    {...rest}
                    className={
                      "py-0.5 px-1.5 bg-secondary rounded-md text-primary"
                    }
                  >
                    {children}
                  </code>
                )
              },
              ol: ({ node, ...props }) => (
                <ol
                  className={cn(
                    props.className,
                    "prose list-decimal list-inside"
                  )}
                  {...props}
                >
                  {props.children}
                </ol>
              ),
              ul: ({ node, ...props }) => (
                <ul
                  className={cn(props.className, "prose list-disc list-inside")}
                  {...props}
                >
                  {props.children}
                </ul>
              ),
              p: ({ node, ...props }) => <p className="" {...props} />,
              a: ({ node, ...props }) => {
                if (props.href?.toString().startsWith("#")) {
                  console.log(props.href?.toString())

                  return <span
                    onClick={() => scroll(props.href?.toString())}
                    className="text-primary underline cursor-pointer"
                  // href={props.href.toString()}
                  >{props.children}</span>
                }

                return <a
                  className="text-primary underline"
                  {...props}
                />
              },
              blockquote: ({ node, ...props }) => (
                <blockquote
                  className="border-l-4 border-primary pl-4 my-4"
                  {...props}
                />
              ),
              // img: ({ node, ...props }) => (
              //   // Looking for a way to make this responsive
              //   <div></div>
              // ),
            }}
          >
            {content}
          </Markdown>
        </div>
      )}
    </>
  )
}

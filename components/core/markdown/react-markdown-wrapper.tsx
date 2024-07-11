"use client"

import { useEffect, useState } from "react"
import Markdown, { ExtraProps } from "react-markdown"
import { cn } from "@/lib/utils"
import React from "react"
import { toString } from 'hast-util-to-string';
import { generateIdFromText, loadMarkdowns, renderId } from "@/lib/utils/markdown"
import { EmojiStore, shortCodeRegex } from "@/lib/utils/emoji"
import rehypeRaw from "rehype-raw";
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from "remark-gfm"
import { CodeSnippet } from "@/components/core/markdown/code-snippet"

interface ReactMarkdownWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
    tutorials?: string
}

export const ReactMarkdownWrapper = ({ tutorials, className }: ReactMarkdownWrapperProps) => {
    const [content, setContent] = useState<string>("")
    const [loadSkeleton, setLoadSkeleton] = useState<boolean>(false)
    const [emojiStore, setEmojiStore] = useState<EmojiStore>({} as EmojiStore)

    const loadPage = async () => {
        const markdownText: string = await loadMarkdowns(tutorials?.split("|") || [])
        setContent(markdownText)
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

    useEffect(() => {
        ; (async () => {
            const emojis = new EmojiStore();
            await emojis.load();
            setEmojiStore(emojis)

            setLoadSkeleton(true)
            try {
                await loadPage()
            } catch (error) {
                console.error(error)
            }
            setLoadSkeleton(false)
        })()
    }, [tutorials])

    /**
     * Convert a raw text with shortcodes to a text with emojis
     * @param text 
     * @returns 
     */
    const renderText = (text: string): string => {
        // text = DOMPurify.sanitize(text);
        // console.log('Text:', text);
        const content = text.replace(shortCodeRegex, match => `${emojiStore.getEmoji(
            match.replace(/:/g, '').toLowerCase()
        )}`
        );

        return content
    }

    const generateHeaderProps = (text: string): { content: string, id: string } => {
        return {
            content: renderText(text),
            id: renderId(text)
        }
    }

    const renderHeader = ({ node, ...props }: React.ClassAttributes<HTMLHeadingElement> &
        React.HTMLAttributes<HTMLHeadingElement> & ExtraProps): JSX.Element => {
        if (node && props.children && typeof props.children !== 'string') {
            const id = generateIdFromText(toString(node));
            return React.createElement(node.tagName, { id }, props.children)
        }

        return React.createElement(node?.tagName || "h4", props.children);
    }

    if (!tutorials) return <div className="my-8 text-center w-[100px] flex items-center justify-center">No Tutorials</div>

    return <Markdown
        className={cn("w-full m-auto", className)}
        remarkPlugins={[remarkGfm, remarkFrontmatter]}
        rehypePlugins={[rehypeRaw]}
        components={{
            h1: ({ node, ...props }) => {
                if (props.children && typeof props.children === 'string') {
                    const { id, content } = generateHeaderProps(props.children.toString())
                    return <div className="my-4">
                        <h1 className="text-3xl flex items-center"
                            // @ts-ignore
                            id={id}
                            dangerouslySetInnerHTML={{ __html: content }} />
                        <hr />
                    </div>
                }

                return <div className="my-4">
                    <h1 className="text-3xl" {...props} />
                    <hr />
                </div>
            },
            h2: ({ node, ...props }) => {
                if (props.children && typeof props.children === 'string') {
                    const { id, content } = generateHeaderProps(props.children.toString())
                    return <h2 className="flex items-center"
                        // @ts-ignore
                        id={id}
                        dangerouslySetInnerHTML={{ __html: content }} />
                }

                return renderHeader({ node, ...props });
            },
            h3: ({ node, ...props }) => {
                if (props.children && typeof props.children === 'string') {
                    const { id, content } = generateHeaderProps(props.children.toString())
                    return <h3 className="flex items-center"
                        // @ts-ignore
                        id={id}
                        dangerouslySetInnerHTML={{ __html: content }} />
                }

                return renderHeader({ node, ...props });
            },
            h4: ({ node, ...props }) => {
                if (props.children && typeof props.children === 'string') {
                    const { id, content } = generateHeaderProps(props.children.toString())
                    return <h4 className="flex items-center"
                        // @ts-ignore
                        id={id}
                        dangerouslySetInnerHTML={{ __html: content }} />
                }

                return renderHeader({ node, ...props });
            },
            code(props) {
                const { children, className, node, ...rest } = props
                const match = /language-(\w+)/.exec(className || "")
                return match
                    ? <CodeSnippet language={match[1]}>
                        {String(children).replace(/\n$/, "")}
                    </CodeSnippet>
                    : (<code {...rest} className="py-0.5 px-1.5 bg-secondary rounded-md text-primary">
                        {children}
                    </code>)
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
            p: ({ node, ...props }) => <p className="my-4" {...props} />,
            a: ({ node, ...props }) => {
                if (props.href?.toString().startsWith("#")) {
                    return <span
                        onClick={() => scroll(props.href?.toString())}
                        className="text-primary underline cursor-pointer"
                    // href={props.href.toString()}
                    >{props.children}</span>
                }

                return <a
                    className="text-primary underline"
                    {...props}
                    target="_blank"
                />
            },
            blockquote: ({ node, ...props }) => (
                <blockquote
                    className="border-l-4 border-primary pl-4 my-4"
                    {...props}
                />
            ),
        }}
    >
        {content}
    </Markdown>
}

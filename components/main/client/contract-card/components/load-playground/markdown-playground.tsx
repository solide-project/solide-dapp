"use client"

import { ContractSchema, SolideIDESchema } from "@/lib/schema/contract";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { GithubResolver } from "@resolver-engine/imports/build/resolvers/githubresolver";
import Markdown from "react-markdown"
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism"
import theme from "react-syntax-highlighter/dist/esm/styles/prism/one-dark"
import remarkGfm from "remark-gfm"
import { cn } from "@/lib/utils";

interface MarkdownPlaygroundProps extends React.HTMLAttributes<HTMLDivElement> {
    tutorials?: string;
}

export const MarkdownPlayground = ({
    tutorials
}: MarkdownPlaygroundProps) => {
    const [content, setContent] = useState<string>("")
    const [loadSkeleton, setLoadSkeleton] = useState<boolean>(false)

    // convert a github https://github.com/SovaSniper/tutorials/blob/master/compound/cToken.md to its repo url
    const resolve = async (tutorial: string): Promise<string[]> => {
        let output: string[] = []
        const elements = tutorial.split("|")
        for (const element of elements) {
            const resolver = GithubResolver()
            const uri = await resolver(element, { resolver: "" })
            uri && output.push(uri)
        }

        return output
    }

    useEffect(() => {
        (async () => {
            setLoadSkeleton(true);
            await handleMarkdownGeneration()
            setLoadSkeleton(false);
        })();
    }, [tutorials])

    const handleMarkdownGeneration = async () => {
        if (!tutorials) { return }

        const documentation = await resolve(tutorials)
        if (documentation.length === 0) { return }

        // console.log(documentation);
        // setRawTutorial(documentation[0] || "")

        let text = ""
        for (const element of documentation) {
            const response = await fetch(element)
            const info = await response.text()
            text += "\n" + info
        }

        setContent(text)
    }

    if (!tutorials)
        return <div>No Tutorials</div>

    return <>{loadSkeleton ? <div>Loading...</div>
        : <div>
            <Markdown
                className={"max-w-[768px] w-full m-auto"}
                remarkPlugins={[remarkGfm]}
                components={{
                    h1: ({ node, ...props }) => (
                        <div className="my-4">
                            <h1 className="text-3xl" {...props} />
                            <hr />
                        </div>
                    ),
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
                    a: ({ node, ...props }) => (
                        <a className="text-primary underline" {...props} />
                    ),
                    blockquote: ({ node, ...props }) => (
                        <blockquote
                            className="border-l-4 border-primary pl-4 my-4"
                            {...props}
                        />
                    ),
                    img: ({ node, ...props }) => (
                        // Looking for a way to make this responsive
                        <div></div>
                    ),
                }}
            >
                {content}
            </Markdown>
        </div>}
    </>
}

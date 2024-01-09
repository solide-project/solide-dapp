"use client";

import { Icon } from "@iconify/react";
import { GithubResolver } from "@resolver-engine/imports/build/resolvers/githubresolver";
import Link from "next/link";
import { useEffect, useState } from "react";
import Markdown from "react-markdown";

interface GithubMarkDownProps
    extends React.HTMLAttributes<HTMLDivElement> {
    url: string;
}

export const GithubMarkDown = ({ url }: GithubMarkDownProps) => {
    const [markdown, setMarkdown] = useState<string>("");
    const [rawTutorial, setRawTutorial] = useState<string>("");

    // convert a github https://raw.githubusercontent.com/SovaSniper/tutorials/master/compound/cToken.md to its repo url
    const resolveTutorial = async (tutorial: string): Promise<string[]> => {
        let actualOutput: string[] = [];
        const elements = tutorial.split("|");

        for (const element of elements) {
            const resolver = GithubResolver();
            const output = await resolver(element, { resolver: "" });
            output && actualOutput.push(output);
        }

        return actualOutput;
    }

    useEffect(() => {
        (async () => {
            if (!url) {
                return;
            }

            const documentation = await resolveTutorial(url);
            // console.log(documentation);
            if (documentation.length === 0) {
                return;
            }
            setRawTutorial(documentation[0] || "");

            console.log(documentation);
            let text = "";
            for (const element of documentation) {
                const response = await fetch(element);
                const info = await response.text();
                text += "\n" + info;
            }

            setMarkdown(text);
        })()
    }, []);

    return (
        <div className="my-8 px-16">
            {markdown
                ? <div>
                    <Markdown>{markdown}</Markdown>

                    <div className="border-t my-4 py-4">
                        <div className="flex space-x-2">
                            <div>
                                Want to contribute?
                            </div>
                            <Link href={url} target="_blank">
                                <Icon className="cursor-pointer hover:text-primary" inline={true} height={28} icon="mingcute:github-line" />
                            </Link>
                        </div>
                    </div>
                </div>
                : <div>
                    Error loading Documentation
                </div>}
        </div>
    )
}

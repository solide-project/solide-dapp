"use client";

import { GithubResolver } from "@resolver-engine/imports/build/resolvers/githubresolver";
import { Divide, Github } from "lucide-react";
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
    const resolveTutorial = async (tutorial: string): Promise<string> => {
        const resolver = GithubResolver();
        const actualOutput = await resolver(tutorial, { resolver: "" });
        return actualOutput || "";
    }

    useEffect(() => {
        (async () => {
            if (!url) {
                return;
            }

            const documentation = await resolveTutorial(url);
            // console.log(documentation);
            setRawTutorial(documentation);

            const response = await fetch(documentation);
            const text = await response.text();
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
                                <Github className="cursor-pointer hover:text-primary" />
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

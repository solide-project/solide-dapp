import { GithubResolver } from '@resolver-engine/imports/build/resolvers/githubresolver';
import DOMPurify from 'dompurify';
import { marked } from 'marked';
import path from "path"
import markdownit from "markdown-it"
import { shortCodeRegex } from './emoji';

/**
 * Converts a string to a valid HTML id 
 * @param text 
 * @returns 
 */
export const generateIdFromText = (text: string) => {
    return text.toLowerCase().replace(/ /g, '-');
}

// const documentation = await resolve("https://github.com/BuildOnViction/gitbook/blob/e5588c075990b2fa9b8c689035b21c1adc5a25da/developer-guide/standards-and-specification/vrc725-specification.md")
export const loadMarkdowns = async (tutorials: string[]) => {
    if (!tutorials || tutorials.length === 0) {
        return ""
    }

    let docs: { url: string; raw: string }[] = []
    const resolver = GithubResolver()
    for (const url of tutorials) {
        const raw = await resolver(url, { resolver: "" })
        raw && docs.push({ url, raw })
    }

    if (docs.length === 0) {
        return ""
    }

    let content = ""
    for (const md of docs) {
        const response = await fetch(md.raw)
        const info = await response.text()
        content += "\n\n" + (await findLinks(md.url, info))
    }

    return content;
}

export interface TOCEntry {
    id: string;
    title: string;
    level: number;
}

export const generateTOC = (markdown: string) => {
    const toc: TOCEntry[] = [];

    const renderer = new marked.Renderer();
    renderer.heading = (text: string, level: number, raw: string) => {
        const title = DOMPurify.sanitize(text);
        const id = renderId(title);
        toc.push({ id, title, level });
        return ``;
    };

    marked(markdown, { renderer });
    return toc;
}

/**
* Convert a raw text with shortcodes to a id with emojis
* @param text 
* @returns 
*/
export const renderId = (text: string): string => text
    .replace(shortCodeRegex, match => match.replace(/:/g, ' ').toLowerCase())
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\s+/g, '-')
    .toLocaleLowerCase()
    .trim();


// #region Utils
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

//#endregion
import { fetchShortcodes, fromCodepointToUnicode, fromHexcodeToCodepoint } from "emojibase";

export const EMOJI_KEY = 'shortcodes';
export const shortCodeRegex = /:[a-zA-Z0-9_+-]+:/g

export class EmojiStore {
    private emojis: Record<string, string> = {};

    constructor() {
    }

    public async load() {
        const dataset: any = localStorage.getItem(EMOJI_KEY);
        if (dataset) {
            this.emojis = JSON.parse(dataset);
            return JSON.parse(dataset);
        }

        const data = await fetchShortcodes('en', 'github', { version: '15.3.0' });

        const ds: Record<string, string> = {}
        Object.entries(data).forEach(([shortcode, emoji]) => {
            if (typeof emoji === 'string') {
                ds[emoji] = shortcode;
            } else {
                emoji.forEach(e => {
                    ds[e] = shortcode;
                })
            }
        })

        this.emojis = ds;
        localStorage.setItem(EMOJI_KEY, JSON.stringify(ds));
        return data
    }

    public async reset() {
        localStorage.removeItem(EMOJI_KEY);
    }

    public getEmoji(name: string): string {
        console.log(name, this.emojis)
        const emomji = this.emojis[name] ?? '';
        console.log(emomji)
        return fromCodepointToUnicode(fromHexcodeToCodepoint(emomji))
    }

}
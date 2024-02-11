import { items } from "./items"

export const getPlayground = (id: string): string => {
    return items[id] || ""
}
import { snakeToCamel } from "@/lib/utils";

export interface GitHubFileInfo {
    name: string;
    path: string;
    sha: string;
    size: number;
    url: string;
    html_url: string;
    git_url: string;
    download_url: string;
    type: string;
    _links: {
        self: string;
        git: string;
        html: string;
    };
}

/**
 * Filters an array of GitHub file information objects based on specified criteria.
 * 
 * @param directory - The array of GitHub file information objects to be filtered.
 * @param type - The file type to filter by (default is ".json").
 * @returns The filtered array of GitHub file information objects.
 * 
 * @example
 * ```typescript
 * const filteredFiles = filterFiles(gitHubFileInfoArray, ".json");
 * console.log(filteredFiles);
 * ```
 */
export const filterFiles = (directory: GitHubFileInfo[], type: string = ".json"): GitHubFileInfo[] =>
    directory.filter(file =>
        !(file.name.startsWith(".") || file.name.startsWith("I") || file.name.startsWith("Lib") || file.name.startsWith("Test")) &&    // Ignore hidden files and interfaces
        file.name.endsWith(type) &&
        file.type === "file" &&
        !file.name.includes("Migration"));

export const getRepoInfo = (repo: string): {
    entity: string;
    repo: string;
} => {
    const url = new URL(repo);
    const pathnameParts = url.pathname.split("/");

    return {
        entity: pathnameParts[1],
        repo: pathnameParts[2],
    }
}

export const generateContractSchemaTitle = (title: string, name: string): string => {
    return `${title}: ${snakeToCamel(name)}`;
}

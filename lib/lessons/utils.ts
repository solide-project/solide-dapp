import { GitHubFileInfo } from '../contracts/utils/utils';
import { GithubResolver } from "@resolver-engine/imports/build/resolvers/githubresolver"
import { ContractSchema } from '../contracts';

const repo = "https://github.com/solide-project/awesome-learn-solidity/blob/master"

export const getLearnMetadata = async (lesson: string): Promise<LessonMetadata> => {
    const resolver = GithubResolver()

    const url = `${repo}/main/${lesson}/metadata.json`
    const raw = await resolver(url, { resolver: "" }) || ""

    if (!raw) {
        return {} as LessonMetadata
    }

    const response = await fetch(raw);

    if (!response.ok) {
        return {} as LessonMetadata
    }

    return response.json();
}

export const loadLearnData = async (page: number = 1, pageSize: number = 10) => {
    // const url = "https://api.github.com/repos/solide-project/awesome-learn-solidity/contents/main"
    // const response = await fetch(url)
    // const data: GitHubFileInfo[] = await response.json()
    const data: GitHubFileInfo[] = [
        {
            "name": "exploring-viction-ecosystem",
            "path": "main/exploring-viction-ecosystem",
            "sha": "37812a22a7930438162bc8d2e47ed4df24318008",
            "size": 0,
            "url": "https://api.github.com/repos/solide-project/awesome-learn-solidity/contents/main/exploring-viction-ecosystem?ref=master",
            "html_url": "https://github.com/solide-project/awesome-learn-solidity/tree/master/main/exploring-viction-ecosystem",
            "git_url": "https://api.github.com/repos/solide-project/awesome-learn-solidity/git/trees/37812a22a7930438162bc8d2e47ed4df24318008",
            "download_url": "",
            "type": "dir",
            "_links": {
                "self": "https://api.github.com/repos/solide-project/awesome-learn-solidity/contents/main/exploring-viction-ecosystem?ref=master",
                "git": "https://api.github.com/repos/solide-project/awesome-learn-solidity/git/trees/37812a22a7930438162bc8d2e47ed4df24318008",
                "html": "https://github.com/solide-project/awesome-learn-solidity/tree/master/main/exploring-viction-ecosystem"
            }
        },
        {
            "name": "smart-contracts-on-rootstock",
            "path": "main/smart-contracts-on-rootstock",
            "sha": "308871d82cc216cbb77f24c50deb14f02a6e4f0b",
            "size": 0,
            "url": "https://api.github.com/repos/solide-project/awesome-learn-solidity/contents/main/smart-contracts-on-rootstock?ref=master",
            "html_url": "https://github.com/solide-project/awesome-learn-solidity/tree/master/main/smart-contracts-on-rootstock",
            "git_url": "https://api.github.com/repos/solide-project/awesome-learn-solidity/git/trees/308871d82cc216cbb77f24c50deb14f02a6e4f0b",
            "download_url": "",
            "type": "dir",
            "_links": {
                "self": "https://api.github.com/repos/solide-project/awesome-learn-solidity/contents/main/smart-contracts-on-rootstock?ref=master",
                "git": "https://api.github.com/repos/solide-project/awesome-learn-solidity/git/trees/308871d82cc216cbb77f24c50deb14f02a6e4f0b",
                "html": "https://github.com/solide-project/awesome-learn-solidity/tree/master/main/smart-contracts-on-rootstock"
            }
        }
    ]

    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;

    const paginatedData = data.slice(startIndex, endIndex);

    const results: LearnInfo[] = await Promise.all(paginatedData.map(async item => {
        const metadata: LessonMetadata = await getLearnMetadata(item.name);
        return {
            ...item,
            metadata
        };
    }));

    return results
}

export interface LearnInfo extends GitHubFileInfo {
    metadata: LessonMetadata
}

export interface LearnContractSchema extends ContractSchema {
    id: string
    image: string
}

export interface LessonMetadata {
    lessonId?: string
    title: string
    description: string
    image: string
    content: LearnContractSchema[]
    resources: any[],
    author: any
}
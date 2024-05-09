import { getContractsByGithub } from "@/lib/contracts/utils/get-contracs-by-github"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> => {
    return await getContractsByGithub({
        title: "EAS Proxy",
        url: "https://api.github.com/repos/gitcoinco/eas-proxy/contents/contracts",
        tutorial: "https://github.com/gitcoinco/eas-proxy/blob/main/docs/00-onchain-data.md|https://github.com/gitcoinco/eas-proxy/blob/main/docs/01-onchain-passport-attestation.md|https://github.com/gitcoinco/eas-proxy/blob/main/docs/02-onchain-stamp-attestation.md",
        reference: "https://github.com/gitcoinco/eas-proxy",
        description:
            "The system described revolves around bringing passport data and scores onto the Ethereum blockchain using the Ethereum Attestation Service(EAS).Attestations, representing stamps or data, are recorded on- chain using EAS, which enables storing attestations with specified schemas identified by unique UUIDs.The process involves Gitcoin smart contracts: GitcoinAttester acts as a relay for trusted attestations to EAS, GitcoinVerifier validates and triggers the attestation process based on data signed using EIP-712, and GitcoinResolver optionally tracks and caches user attestations and scores for efficient retrieval",
        version: "v0.8.19+commit.7dd6d404",
        remappings: {
            "@openzeppelin/contracts/": "@openzeppelin/contracts@4.8.3/",
            "@openzeppelin/contracts-upgradeable/": "@openzeppelin/contracts-upgradeable@4.9.3/",
        }
    })
}

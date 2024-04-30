import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> =>
    await getContractsByGithub({
        title: "Lido on Polygon",
        url: "https://api.github.com/repos/lidofinance/polygon-contracts/contents/contracts",
        tutorial:
            "https://github.com/lidofinance/polygon-contracts/blob/main/README.md",
        reference: "https://docs.lido.fi/multisigs/lido-on-x#31-lido-on-polygon",
        description: "Lido On Polygon Liquid Staking Protocol V2 is a DAO-governed system enabling users to stake ERC20 MATIC tokens on Ethereum, generating stMATIC tokens representing their share in staking rewards delegated across validators managed exclusively by Lido on Polygon contracts, facilitating Polygon's decentralization and integration with Ethereum DeFi protocols.",
        version: "v0.8.10+commit.fc410830",
        remappings: {
            "@openzeppelin/contracts/": "@openzeppelin/contracts@4.4.0/",
            "@openzeppelin/contracts-upgradeable/": "@openzeppelin/contracts-upgradeable@4.4.0/"
        },
    })
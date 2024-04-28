import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

const version = "v0.8.9+commit.e5eed63a";
const remappings = {
    "openzeppelin-contracts-04/": "@openzeppelin/contracts@3.4.0/",
    "openzeppelin-contracts-08/": "@openzeppelin/contracts@4.7.0/",
}
const tutorial = "https://github.com/OpenZeppelin/ethernaut/blob/master/README.md"
const reference = "https://ethernaut.openzeppelin.com/"
export const items = async (): Promise<ContractSchema[]> => [
    ...(await getContractsByGithub({
        title: "Ethernauts Attack Contracts",
        url: "https://api.github.com/repos/OpenZeppelin/ethernaut/contents/contracts/src/attacks",
        tutorial,
        reference,
        description: "Ethernauts Attack Contracts designed to simulate and teach about various Ethereum smart contract vulnerabilities and security concepts through specific challenges or puzzles",
        version,
        remappings
    })),
    ...(await getContractsByGithub({
        title: "Ethernauts Levels Contracts",
        url: "https://api.github.com/repos/OpenZeppelin/ethernaut/contents/contracts/src/levels",
        tutorial,
        reference,
        description: "Ethernauts Level Contracts factories are used within the Ethernaut game to simulate various Ethereum smart contract vulnerabilities and challenges, providing players with hands-on experience in identifying and exploiting security issues commonly found in real-world smart contracts",
        version,
        remappings
    })),
    {
        title: "Ethernauts Main Contract",
        tutorial,
        reference,
        description: "Main Ethernauts.sol contract for the Ethernauts game.",
        playground: {
            default: {
                address: "https://github.com/OpenZeppelin/ethernaut/blob/master/contracts/src/Ethernaut.sol",
                version,
                remappings
            },
        },
    }
]

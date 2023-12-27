import { AAVE_ID, ARBITRUM_ID, CHAINLINK_ID, COMPOUND_ID, ENS_ID, ETHEREUM_ID, OPEN_ZEPPELIN_ID, TABLELAND_ID, UNISWAP_ID, ZEROX_ID } from "./ids";

export interface LibrarySchema {
    name: string;
    library?: string;
    description: string;

    github?: string;
    source?: string;
    website?: string;
}

export const libraryDB = {
    [CHAINLINK_ID]: {
        name: "Chainlink",
        library: "@chainlink/contracts",
        description: "Chainlink smart contracts serve as a robust framework, ensuring the secure integration of decentralized applications (DApps) with external data feeds, web APIs, and traditional bank payments. This framework enhances the reliability and functionality of smart contracts by enabling seamless and trustworthy interactions with real-world data and external systems on the blockchain.",
        github: "https://github.com/smartcontractkit",
        source: "https://github.com/smartcontractkit/chainlink/tree/master",
        website: "https://chain.link",
    },
    [ETHEREUM_ID]: {
        name: "Ethereum",
        library: "",
        github: "https://github.com/ethereum",
        website: "https://ethereum.org/en",
        description: "Smart contracts on Ethereum enable a wide range of decentralized applications, from decentralized finance (DeFi) protocols and non-fungible tokens (NFTs) to decentralized exchanges and more. They operate autonomously, executing code when triggered by predefined conditions, without the need for centralized control. Deploy and view popular verified contracts on Ethereum.",
    },
    [OPEN_ZEPPELIN_ID]: {
        name: "OpenZeppelin",
        library: "@openzeppelin/contracts contracts-upgradeable",
        github: "https://github.com/OpenZeppelin",
        source: "https://github.com/OpenZeppelin/openzeppelin-contracts",
        website: "https://openzeppelin.com",
        description: "OpenZeppelin's smart contract templates to enhance security, reduce development time, and adhere to best practices, contributing to a more robust and standardized ecosystem for decentralized applications."
    },
    [UNISWAP_ID]: {
        name: "UniSwap",
        library: "@uniswap/v2-core @uniswap/v3-periphery",
        github: "https://github.com/Uniswap",
        source: "https://github.com/Uniswap/v3-core",
        website: "https://uniswap.org/",
        description: "Uniswap's smart contract, deployed on the Ethereum blockchain, is the core component that powers the protocol's decentralized exchange functionality. Uniswap governs the creation and management of liquidity pools, automated token swaps, and the calculation of token prices based on the automated market maker (AMM) algorithm."
    },
    [COMPOUND_ID]: {
        name: "Compound Finance",
        github: "https://github.com/compound-finance",
        website: "https://compound.finance/",
        description: "Compound Finance, renowned as one of the most secure protocols for managing digital assets, offers a robust framework for decentralized lending and borrowing on the blockchain. The protocol facilitates the creation and utilization of algorithmic interest rates, ensuring efficient and secure financial operations within decentralized finance (DeFi) applications. Compound enables users to lend and borrow various cryptocurrencies, providing a trustworthy platform for optimizing asset utilization and earning interest in a decentralized and transparent manner."
    },
    [ARBITRUM_ID]: {
        name: "Arbitrum",
        library: "@arbitrum/nitro-contracts",
        github: "https://github.com/offchainlabs/nitro-contracts",
        website: "https://arbitrum.io",
        description: "Arbitrum is a highly scalable, low cost, EVM-compatible Optimistic Rollup. A Layer 2 scaling solution for Ethereum, focusing on off-chain transaction processing for improved performance and scalability while upholding security. It comprises smart contracts, libraries, and data structures that collectively handle transaction batching, execution, administrative tasks, and user interactions."
    },

    [AAVE_ID]: {
        name: "Aave",
        library: "@aave/core-v3",
        github: "https://github.com/aave",
        description: "",
    },
    [ZEROX_ID]: {
        name: "0x",
        library: "@0x/contracts-utils",
        github: "https://github.com/0xProject",
        description: "",
    },
    [ENS_ID]: {
        name: "ENS",
        library: "@ensdomains/ens-contracts",
        github: "https://github.com/ensdomains/",
        description: "."
    },
    [TABLELAND_ID]: {
        name: "Tableland",
        library: "@tableland/evm",
        github: "https://github.com/tablelandnetwork",
        sourece: "https://github.com/tablelandnetwork/evm-tableland",
        website: "https://tableland.xyz/",
        description: ""
    },
}
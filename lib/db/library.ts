import { AAVE_ID, ARBITRUM_ID, CHAINLINK_ID, COMPOUND_ID, ENS_ID, ETHEREUM_ID, METIS_ID, OPEN_ZEPPELIN_ID, TABLELAND_ID, UNISWAP_ID, ZEROX_ID } from "./ids";

export interface LibrarySchema {
    name: string;
    library?: string;
    description: string;

    github?: string;
    website?: string;
    blog?: string;
    discord?: string;
    x?: string;
    source?: string;
}

export const libraryDB = {
    [CHAINLINK_ID]: {
        name: "Chainlink",
        library: "@chainlink/contracts @chainlink/contracts-ccip",
        description: "Chainlink smart contracts serve as a robust framework, ensuring the secure integration of decentralized applications (DApps) with external data feeds, web APIs, and traditional bank payments. This framework enhances the reliability and functionality of smart contracts by enabling seamless and trustworthy interactions with real-world data and external systems on the blockchain.",
        github: "https://github.com/smartcontractkit",
        website: "https://chain.link",
        blog: "https://blog.chain.link",
        discord: "https://discord.com/invite/chainlink",
        x: "https://twitter.com/ethereum",
        source: "https://github.com/smartcontractkit/chainlink/tree/master",
    },
    [ETHEREUM_ID]: {
        name: "Ethereum",
        description: "Smart contracts on Ethereum enable a wide range of decentralized applications, from decentralized finance (DeFi) protocols and non-fungible tokens (NFTs) to decentralized exchanges and more. They operate autonomously, executing code when triggered by predefined conditions, without the need for centralized control. Deploy and view popular verified contracts on Ethereum.",
        github: "https://github.com/ethereum",
        website: "https://ethereum.org/en",
        blog: "https://blog.ethereum.org",
        discord: "https://discord.com/invite/ethereum-org",
        x: "https://twitter.com/ethereum",
    },
    [OPEN_ZEPPELIN_ID]: {
        name: "OpenZeppelin",
        library: "@openzeppelin/contracts contracts-upgradeable",
        description: "OpenZeppelin's smart contract templates to enhance security, reduce development time, and adhere to best practices, contributing to a more robust and standardized ecosystem for decentralized applications.",
        github: "https://github.com/OpenZeppelin",
        source: "https://github.com/OpenZeppelin/openzeppelin-contracts",
        website: "https://openzeppelin.com",
    },
    [UNISWAP_ID]: {
        name: "UniSwap",
        library: "@uniswap/v2-core @uniswap/v3-periphery",
        description: "Uniswap's smart contract, deployed on the Ethereum blockchain, is the core component that powers the protocol's decentralized exchange functionality. Uniswap governs the creation and management of liquidity pools, automated token swaps, and the calculation of token prices based on the automated market maker (AMM) algorithm.",
        github: "https://github.com/Uniswap",
        website: "https://uniswap.org",
        blog: "https://blog.uniswap.org",
        discord: "https://discord.com/invite/FCfyBSbCU5",
        x: "https://twitter.com/Uniswap",
    },
    [COMPOUND_ID]: {
        name: "Compound Finance",
        description: "Compound Finance, renowned as one of the most secure protocols for managing digital assets, offers a robust framework for decentralized lending and borrowing on the blockchain. The protocol facilitates the creation and utilization of algorithmic interest rates, ensuring efficient and secure financial operations within decentralized finance (DeFi) applications. Compound enables users to lend and borrow various cryptocurrencies, providing a trustworthy platform for optimizing asset utilization and earning interest in a decentralized and transparent manner.",
        github: "https://github.com/compound-finance",
        website: "https://compound.finance",
        blog: "https://medium.com/compound-finance",
        discord: "https://discord.com/invite/fq6JSPkpJn",
        x: "https://twitter.com/compoundfinance",
    },
    [ARBITRUM_ID]: {
        name: "Arbitrum",
        library: "@arbitrum/nitro-contracts @arbitrum/token-bridge-contracts",
        description: "Arbitrum is a highly scalable, low cost, EVM-compatible Optimistic Rollup. A Layer 2 scaling solution for Ethereum, focusing on off-chain transaction processing for improved performance and scalability while upholding security. It comprises smart contracts, libraries, and data structures that collectively handle transaction batching, execution, administrative tasks, and user interactions.",
        github: "https://github.com/offchainlabs/nitro-contracts",
        website: "https://arbitrum.io",
        blog: "https://arbitrumfoundation.medium.com/",
        discord: "https://discord.com/invite/arbitrum",
        x: "https://twitter.com/arbitrum",
    },
    [METIS_ID]: {
        name: "Metis",
        description: "Metis is a Layer 2 rollup platform built on the Ethereum network, offering solutions to Ethereum's challenges such as scalability, transaction speed, and high gas fees. As an Ethereum Layer 2 solution, it leverages Optimistic rollups to provide users with low gas fees, fast transactions, native storage, and enhanced security. The platform's mission is to create an accessible and user-friendly technical environment, making blockchain technology available to individuals and businesses seeking to initiate or expand decentralized applications (dApps) or communities with scalability.",
        github: "https://github.com/MetisProtocol",
        website: "https://www.metis.io/",
        blog: "https://metisdao.medium.com/",
        discord: "https://discord.com/invite/RqfEJZXnxd",
        x: "https://twitter.com/MetisDAO",
    },

    [AAVE_ID]: {
        name: "Aave",
        library: "@aave/core-v3",
        description: "",
        github: "https://github.com/aave",
    },
    [ZEROX_ID]: {
        name: "0x",
        library: "@0x/contracts-utils",
        description: "",
        github: "https://github.com/0xProject",
    },
    [ENS_ID]: {
        name: "ENS",
        description: "",
        library: "@ensdomains/ens-contracts",
        github: "https://github.com/ensdomains/",
    },
    [TABLELAND_ID]: {
        name: "Tableland",
        library: "@tableland/evm",
        description: "",
        github: "https://github.com/tablelandnetwork",
        source: "https://github.com/tablelandnetwork/evm-tableland",
        website: "https://tableland.xyz/",
    },
}
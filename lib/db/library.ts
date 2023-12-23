import { AAVE_ID, CHAINLINK_ID, ENS_ID, ETHEREUM_ID, OPEN_ZEPPELIN_ID, TABLELAND_ID, UNISWAP_ID, ZEROX_ID } from "./ids";

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
        description: "Chainlink provides a framework for securely connecting smart contracts to external data feeds, web APIs, and traditional bank payments.",
    
        github: "https://github.com/smartcontractkit",
        source: "https://github.com/smartcontractkit/chainlink/tree/master",
        website: "https://chain.link",
    },
    [ETHEREUM_ID]: {
        name: "Ethereum",
        library: "",
        github: "https://github.com/ethereum",
        website: "https://ethereum.org/en",
        description: "Audited contracts from the Ethereum blockchain.",
    },
    [AAVE_ID]: {
        name: "Aave",
        library: "@aave/core-v3",
        github: "https://github.com/aave",
        description: "Core smart contracts of the Aave V3 protocol.",
    },
    [ZEROX_ID]: {
        name: "0x",
        library: "@0x/contracts-utils",
        github: "https://github.com/0xProject",
        description: "0x protocol that facilitates trustless, low friction exchange of Ethereum-based assets.",
    },
    [ENS_ID]: {
        name: "ENS",
        library: "@ensdomains/ens-contracts",
        github: "https://github.com/ensdomains/",
        description: "The Ethereum Name Service (ENS) is a distributed, open, and extensible naming system based on the Ethereum blockchain."
    },
    [OPEN_ZEPPELIN_ID]: {
        name: "OpenZeppelin",
        library: "@openzeppelin/contracts contracts-upgradeable",
        github: "https://github.com/OpenZeppelin",
        source: "https://github.com/OpenZeppelin/openzeppelin-contracts",
        website: "https://openzeppelin.com",
        description: "The Ethereum Name Service (ENS) is a distributed, open, and extensible naming system based on the Ethereum blockchain."
    },
    [TABLELAND_ID]: {
        name: "Tableland",
        library: "@tableland/evm",
        github: "https://github.com/tablelandnetwork",
        sourece: "https://github.com/tablelandnetwork/evm-tableland",
        website: "https://tableland.xyz/",
        description: "The Ethereum Name Service (ENS) is a distributed, open, and extensible naming system based on the Ethereum blockchain."
    },
    [UNISWAP_ID]: {
        name: "UniSwap",
        library: "@uniswap/v2-core @uniswap/v3-periphery",
        github: "https://github.com/Uniswap",
        source: "https://github.com/Uniswap/v3-core",
        website: "https://uniswap.org/",
        description: "Uniswap is a protocol for automated token exchange on Ethereum."
    }
}
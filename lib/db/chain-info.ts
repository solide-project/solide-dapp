import { ARBITRUM_ID, ETHEREUM_ID, METIS_ID } from "./ids"

export interface NativeCurrency {
    name: string;
    symbol: string;
    decimals: number;
};

export interface ChainInfo {
    chainId: string;
    blockExplorerUrls?: string[];
    chainName?: string;
    iconUrls?: string[];
    nativeCurrency: NativeCurrency;
    rpcUrls: string[];
};


export const ARBITRUM_ONE: ChainInfo = {
    chainId: "0xa4b1",
    chainName: "Arbitrum One Mainnet",
    rpcUrls: [
        "https://arb1.arbitrum.io/rpc"
    ],
    iconUrls: [
        "https://raw.githubusercontent.com/solide-project/solide-dapp/master/public/icons/arbitrum.svg"
    ],
    nativeCurrency: {
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18
    },
    blockExplorerUrls: [
        "https://arbiscan.io/"
    ]
}

export const ARBITRUM_NOVA: ChainInfo = {
    chainId: "0xa4ba",
    chainName: "Arbitrum Nova",
    rpcUrls: [
        "https://nova.arbitrum.io/rpc"
    ],
    iconUrls: [
        "https://raw.githubusercontent.com/solide-project/solide-dapp/master/public/icons/arbitrum-nova.svg"
    ],
    nativeCurrency: {
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18
    },
    blockExplorerUrls: [
        "https://nova-explorer.arbitrum.io/"
    ]
}

export const METIS_ANDROMEDA: ChainInfo = {
    chainId: "0x440",
    chainName: "Metis Andromeda",
    rpcUrls: [
        "https://andromeda.metis.io"
    ],
    iconUrls: [
        "https://raw.githubusercontent.com/Cryptofonts/cryptoicons/master/128/metis.png"
    ],
    nativeCurrency: {
        name: "Metis",
        symbol: "METIS",
        decimals: 18
    },
    blockExplorerUrls: [
        "https://andromeda-explorer.metis.io/"
    ]
}

export const METIS_SEPOLIA: ChainInfo = {
    chainId: "0xe9fd",
    chainName: "Metis Sepolia",
    rpcUrls: [
        "https://sepolia.rpc.metisdevops.link"
    ],
    iconUrls: [
        "https://raw.githubusercontent.com/Cryptofonts/cryptoicons/master/128/metis.png"
    ],
    nativeCurrency: {
        name: "tMETIS",
        symbol: "tMETIS",
        decimals: 18
    },
    blockExplorerUrls: [
        "https://sepolia.explorer.metisdevops.link/"
    ]
}

export const ETHEREUM_MAINNET: ChainInfo = {
    chainId: "0x1",
    chainName: "Ethereum Mainnet",
    rpcUrls: [
        "https://mainnet.infura.io/v3"
    ],
    iconUrls: [
        ""
    ],
    nativeCurrency: {
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18
    },
    blockExplorerUrls: [
        "https://etherscan.io/"
    ]
}

export const ETHEREUM_SEPOLIA: ChainInfo = {
    chainId: "0xaa36a7",
    chainName: "Etheruem Sepolia",
    rpcUrls: [
        "https://sepolia.infura.io/v3"
    ],
    iconUrls: [
        ""
    ],
    nativeCurrency: {
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18
    },
    blockExplorerUrls: [
        "https://sepolia.etherscan.io/"
    ]
}

export const ETHEREUM_GOERLI: ChainInfo = {
    chainId: "0x5",
    chainName: "Etheruem Georli",
    rpcUrls: [
        "https://sepolia.infura.io/v3"
    ],
    iconUrls: [
        ""
    ],
    nativeCurrency: {
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18
    },
    blockExplorerUrls: [
        "https://goerli.etherscan.io/"
    ]
}

export const chainInfo = {
    [ARBITRUM_ID]: [ARBITRUM_ONE, ARBITRUM_NOVA],
    [METIS_ID]: [METIS_ANDROMEDA, METIS_SEPOLIA],
    [ETHEREUM_ID]: [ETHEREUM_MAINNET, ETHEREUM_SEPOLIA],
} 
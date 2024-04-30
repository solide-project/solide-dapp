import * as ID from "./id"

export interface ChainInfo {
  chainId: string
  blockExplorerUrls?: string[]
  chainName?: string
  iconUrls?: string[]
  nativeCurrency: {
    name: string
    symbol: string
    decimals: number
  }
  rpcUrls: string[]
}

//#region Arbitrum
export const ARBITRUM_ONE: ChainInfo = {
  chainId: "0xa4b1",
  chainName: "Arbitrum One Mainnet",
  rpcUrls: ["https://arbitrum.drpc.org"],
  iconUrls: [
    "https://github.com/solide-project/solide-dapp/blob/master/public/icons/arbitrum.svg",
  ],
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  blockExplorerUrls: ["https://arbiscan.io/"],
}

export const ARBITRUM_SEPOLIA: ChainInfo = {
  chainId: "0x66eee",
  chainName: "Arbitrum Sepolia",
  rpcUrls: ["https://arbitrum-sepolia.drpc.org"],
  iconUrls: [
    "https://github.com/solide-project/solide-dapp/blob/master/public/icons/arbitrum-nova.svg",
  ],
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  blockExplorerUrls: ["https://sepolia.arbiscan.io/"],
}

export const ARBITRUM_NOVA: ChainInfo = {
  chainId: "0xa4ba",
  chainName: "Arbitrum Nova",
  rpcUrls: ["https://arbitrum-nova.drpc.org"],
  iconUrls: [
    "https://github.com/solide-project/solide-dapp/blob/master/public/icons/arbitrum-nova.svg",
  ],
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  blockExplorerUrls: ["https://nova-explorer.arbitrum.io/"],
}
//#endregion

//#region Metis
export const METIS_ANDROMEDA: ChainInfo = {
  chainId: "0x440",
  chainName: "Metis Andromeda",
  rpcUrls: ["https://metis.drpc.org"],
  iconUrls: [
    "https://github.com/Cryptofonts/cryptoicons/blob/master/128/metis.png",
  ],
  nativeCurrency: {
    name: "Metis",
    symbol: "METIS",
    decimals: 18,
  },
  blockExplorerUrls: ["https://andromeda-explorer.metis.io/"],
}

export const METIS_SEPOLIA: ChainInfo = {
  chainId: "0xe9fd",
  chainName: "Metis Sepolia",
  rpcUrls: ["https://sepolia.rpc.metisdevops.link"],
  iconUrls: [
    "https://github.com/Cryptofonts/cryptoicons/blob/master/128/metis.png",
  ],
  nativeCurrency: {
    name: "tMETIS",
    symbol: "tMETIS",
    decimals: 18,
  },
  blockExplorerUrls: ["https://sepolia.explorer.metisdevops.link/"],
}
//#endregion

//#region Ethereum
export const ETHEREUM_MAINNET: ChainInfo = {
  chainId: "0x1",
  chainName: "Ethereum Mainnet",
  rpcUrls: ["https://eth.drpc.org"],
  iconUrls: [""],
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  blockExplorerUrls: ["https://etherscan.io/"],
}

export const ETHEREUM_SEPOLIA: ChainInfo = {
  chainId: "0xaa36a7",
  chainName: "Etheruem Sepolia",
  rpcUrls: ["https://sepolia.drpc.org"],
  iconUrls: [""],
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  blockExplorerUrls: ["https://sepolia.etherscan.io/"],
}

export const ETHEREUM_GOERLI: ChainInfo = {
  chainId: "0x5",
  chainName: "Etheruem Georli",
  rpcUrls: ["https://goerli.drpc.org"],
  iconUrls: [""],
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  blockExplorerUrls: ["https://goerli.etherscan.io/"],
}

export const ETHEREUM_HOLESKY: ChainInfo = {
  chainId: "0x4268",
  chainName: "Etheruem Holesky",
  rpcUrls: ["https://holesky.drpc.org"],
  iconUrls: [""],
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  blockExplorerUrls: ["https://holesky.etherscan.io/"],
}
//#endregion

//#region Immutable
export const IMMUTABLE_MAINNET: ChainInfo = {
  chainId: "0x343b",
  chainName: "Immutable",
  rpcUrls: ["https://immutable-zkevm.drpc.org"],
  iconUrls: [""],
  nativeCurrency: {
    name: "IMX",
    symbol: "IMX",
    decimals: 18,
  },
  blockExplorerUrls: ["https://explorer.immutable.com"],
}

export const IMMUTABLE_TESTNET: ChainInfo = {
  chainId: "0x34a1",
  chainName: "Immutable Testnet",
  rpcUrls: ["https://immutable-zkevm-testnet.drpc.org"],
  iconUrls: [""],
  nativeCurrency: {
    name: "tIMX",
    symbol: "tIMX",
    decimals: 18,
  },
  blockExplorerUrls: ["https://explorer.testnet.immutable.com"],
}
//#endregion

export const ARTELA_BETANET: ChainInfo = {
  chainId: "0x2e2e",
  chainName: "Artela Network",
  rpcUrls: ["https://betanet-rpc1.artela.network"],
  iconUrls: [""],
  nativeCurrency: {
    name: "Artela",
    symbol: "ART",
    decimals: 18,
  },
  blockExplorerUrls: ["https://betanet-scan.artela.network"],
}

//#region Fuse
export const FUSE_MAINNET: ChainInfo = {
  chainId: "0x7a",
  chainName: "Fuse Mainnet",
  rpcUrls: ["https://fuse.drpc.org"],
  iconUrls: [""],
  nativeCurrency: {
    name: "Fuse Token",
    symbol: "FUSE",
    decimals: 18,
  },
  blockExplorerUrls: ["https://explorer.fuse.io"],
}

export const FUSE_TESTNET: ChainInfo = {
  chainId: "0x7b",
  chainName: "Fuse Sparknet",
  rpcUrls: ["https://rpc.fusespark.io"],
  iconUrls: [""],
  nativeCurrency: {
    name: "Fuse Token",
    symbol: "FUSE",
    decimals: 18,
  },
  blockExplorerUrls: ["https://explorer.fusespark.io"],
}
//#endregion

//#region Ronin
export const RONIN_TESTNET: ChainInfo = {
  chainId: "0x7e5",
  chainName: "Ronin Testnet",
  rpcUrls: ["https://saigon-testnet.roninchain.com/rpc"],
  iconUrls: [""],
  nativeCurrency: {
    name: "RON",
    symbol: "RON",
    decimals: 18,
  },
  blockExplorerUrls: ["https://saigon-app.roninchain.com"],
}

export const RONIN_MAINNET: ChainInfo = {
  chainId: "0x2e2e",
  chainName: "Ronin Mainnet",
  rpcUrls: ["https://ronin.drpc.org"],
  iconUrls: [""],
  nativeCurrency: {
    name: "RON",
    symbol: "RON",
    decimals: 18,
  },
  blockExplorerUrls: ["https://app.roninchain.com"],
}
//#endregion

//#region Berachain
export const BERACHAIN_ARTIO: ChainInfo = {
  chainId: "0x138d5",
  chainName: "Berachain Artio",
  rpcUrls: ["https://artio.drpc.org"],
  iconUrls: [""],
  nativeCurrency: {
    name: "BERA Token",
    symbol: "BERA",
    decimals: 18,
  },
  blockExplorerUrls: ["https://artio.beratrail.io"],
}
//#endregion

//#region Bitlayer
export const BITLAYER_MAINNET: ChainInfo = {
  chainId: "0x310c5",
  chainName: "Bitlayer Mainnet",
  rpcUrls: ["https://testnet-rpc.bitlayer-rpc.com"],
  iconUrls: [""],
  nativeCurrency: {
    name: "Bitcoin",
    symbol: "BTC",
    decimals: 18,
  },
  blockExplorerUrls: ["	https://www.btrscan.com"],
}

export const BITLAYER_TESTNET: ChainInfo = {
  chainId: "0x3106a",
  chainName: "Bitlayer Testnet",
  rpcUrls: ["https://rpc.bitlayer.org"],
  iconUrls: [""],
  nativeCurrency: {
    name: "Bitcoin",
    symbol: "BTC",
    decimals: 18,
  },
  blockExplorerUrls: ["https://testnet-scan.bitlayer.org"],
}
//#endregion

const data: { [key: string]: ChainInfo[] } = {
  [ID.ARBITRUM_ID]: [ARBITRUM_ONE, ARBITRUM_SEPOLIA, ARBITRUM_NOVA],
  [ID.BERACHAIN_ID]: [BERACHAIN_ARTIO],
  [ID.METIS_ID]: [METIS_ANDROMEDA, METIS_SEPOLIA],
  [ID.ETHEREUM_ID]: [ETHEREUM_MAINNET, ETHEREUM_SEPOLIA, ETHEREUM_GOERLI, ETHEREUM_HOLESKY],
  [ID.IMMUTABLE_ID]: [IMMUTABLE_MAINNET, IMMUTABLE_TESTNET],
  [ID.ARTELA_ID]: [ARTELA_BETANET],
  [ID.FUSE_ID]: [FUSE_MAINNET, FUSE_TESTNET],
  [ID.RONIN_ID]: [RONIN_MAINNET, RONIN_TESTNET],
  [ID.BITLAYER_ID]: [BITLAYER_MAINNET, BITLAYER_TESTNET]
}

export const getRPCInfo = (network: string): ChainInfo[] => data[network] || []
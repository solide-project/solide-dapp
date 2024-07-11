import * as ecosystems from "../id"
import { ARBITRUM_ONE, ARBITRUM_SEPOLIA, ARBITRUM_NOVA } from "./arbitrum"
import { BERACHAIN_ARTIO } from "./berachain"
import { METIS_ANDROMEDA, METIS_SEPOLIA } from "./metis"
import { ETHEREUM_MAINNET, ETHEREUM_SEPOLIA, ETHEREUM_GOERLI, ETHEREUM_HOLESKY } from "./ethereum"
import { IMMUTABLE_MAINNET, IMMUTABLE_TESTNET } from "./immutable"
import { ARTELA_BETANET } from "./artela"
import { FUSE_MAINNET, FUSE_TESTNET } from "./fuse"
import { RONIN_MAINNET, RONIN_TESTNET } from "./ronin"
import { BITLAYER_MAINNET, BITLAYER_TESTNET } from "./bitlayer"

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

const data: { [key: string]: ChainInfo[] } = {
    [ecosystems.ARBITRUM_ID]: [ARBITRUM_ONE, ARBITRUM_SEPOLIA, ARBITRUM_NOVA],
    [ecosystems.BERACHAIN_ID]: [BERACHAIN_ARTIO],
    [ecosystems.METIS_ID]: [METIS_ANDROMEDA, METIS_SEPOLIA],
    [ecosystems.ETHEREUM_ID]: [ETHEREUM_MAINNET, ETHEREUM_SEPOLIA, ETHEREUM_GOERLI, ETHEREUM_HOLESKY],
    [ecosystems.IMMUTABLE_ID]: [IMMUTABLE_MAINNET, IMMUTABLE_TESTNET],
    [ecosystems.ARTELA_ID]: [ARTELA_BETANET],
    [ecosystems.FUSE_ID]: [FUSE_MAINNET, FUSE_TESTNET],
    [ecosystems.RONIN_ID]: [RONIN_MAINNET, RONIN_TESTNET],
    [ecosystems.BITLAYER_ID]: [BITLAYER_MAINNET, BITLAYER_TESTNET]
}

export const getRPCInfo = (network: string): ChainInfo[] => data[network] || []
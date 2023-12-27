import { ChainID } from "./id";

/**
 * Converts a network name to a more readable format
 * @param network 
 * @returns 
 */
export const getNetworkName = (network: string) => {
    const networkName = network.split('_').map((word) => {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
    return networkName;
}

export const getNetworkNameFromChainID = (chainId: string) => {
    switch (chainId) {
        case ChainID.ETHEREUM_MAINNET:
            return "Etheruem Mainnet";
        case ChainID.ETHEREUM_GOERLI:
            return "Etheruem Goerli";
        case ChainID.ETHEREUM_SEPOLIA:
            return "Etheruem Seoplia";
        case ChainID.ARBITRUM_NOVA:
            return "Arbitrum Nova";
        case ChainID.ARBITRUM_ONE:
            return "Arbitrum One";
        case ChainID.POLYGON_MAINNET:
            return "Polygon Mainnet";
        case ChainID.POLYGON_MUMBAI:
            return "Polygon Mumbai";
        case ChainID.AVALANCHE_MAINNET:
            return "Avalanche Mainnet";
        case ChainID.AVALANCHE_FUJI:
            return "Avalanche Testnet";
        case ChainID.FANTOM_MAINNET:
            return "Fantom Mainnet";
        case ChainID.FANTOM_TESTNET:
            return "Fantom Testnet";
        default:
            return "";
    }
}

export const getChainIdFromNetwork = (network: string): string => {
    let chainId: string = "";
    const match = Object.entries(ChainID).find(([key, _]) => key === network);
    if (match && match.length > 1) chainId = match[1];
    return chainId;
}
import { ChainID } from "./id";
import { getChainIdFromNetwork } from "./name";

export const getIconByChainName = (chainName: string): string => {
    let chainId: string = getChainIdFromNetwork(chainName);
    return getIconByChainId(chainId);
}

export const getIconByChainId = (chainId: string): string => {
    switch (chainId) {
        case ChainID.ETHEREUM_MAINNET:
        case ChainID.ETHEREUM_GOERLI:
        case ChainID.ETHEREUM_SEPOLIA:
            return "https://www.ankr.com/rpc/static/media/eth.4ca298ae.svg";
        case ChainID.POLYGON_MAINNET:
        case ChainID.POLYGON_MUMBAI:
            return "https://www.ankr.com/rpc/static/media/polygon-zkevm.8c6d01fe.svg";
        case ChainID.AVALANCHE_FUJI:
        case ChainID.AVALANCHE_MAINNET:
            return "https://www.ankr.com/rpc/static/media/avax.04d124b0.svg";
        case ChainID.FANTOM_MAINNET:
        case ChainID.FANTOM_TESTNET:
            return "https://www.ankr.com/rpc/static/media/ftm.c92e9c29.svg";
        default:
            return "";
    }
};
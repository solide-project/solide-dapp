export enum ChainID {
    ETHEREUM_MAINNET = '1',
    ETHEREUM_GOERLI = '5',
    ETHEREUM_SEPOLIA = '11155111',
    ARBITRUM_ONE = '42161',
    ARBITRUM_NOVA = '42170',
    POLYGON_MAINNET = '137',
    POLYGON_MUMBAI = '80001',
    AVALANCHE_MAINNET = '43114',
    AVALANCHE_FUJI = '43113',
    OPTIMISM_MAINNET = '10',
    OPTIMISM_TESTNET = '420',
    FANTOM_MAINNET = '250',
    FANTOM_TESTNET = '4002',
}

export const getChainIdFromPathName = (pathname: string): string => {
    switch (pathname) {
        case "ethereum":
            return ChainID.ETHEREUM_MAINNET;
        default:
            return ChainID.ETHEREUM_MAINNET;
    }
}
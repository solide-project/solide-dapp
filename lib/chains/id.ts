export enum ChainID {
  ETHEREUM_MAINNET = "1",
  ETHEREUM_GOERLI = "5",
  ETHEREUM_SEPOLIA = "11155111",
  ETHEREUM_HOLESKY = "17000",
  METIS_ANDROMEDA = "1088",
  METIS_SEPOLIA = "59901",
  ARBITRUM_ONE = "42161",
  ARBITRUM_GOERLI = "421613",
  ARBITRUM_NOVA = "42170",
  OASIS_EMERALD = "42262",
  OASIS_SAPPHIRE = "23294",
  OASIS_SAPPHIRE_TESTNET = "23295",
  IMMUTABLE_MAINNET = "13371",
  IMMUTABLE_TESTNET = "13473",
  AVALANCHE_MAINNET = "43114",
  AVALANCHE_FUJI = "43113",
  POLYGON_MAINNET = "137",
  POLYGON_MUMBAI = "80001",
  OPTIMISM_MAINNET = "10",
  OPTIMISM_SEPOLIA = "420",
  FANTOM_MAINNET = "250",
  FANTOM_TESTNET = "4002",
  BASE_MAINNET = "8453",
  BASE_SEPOLIA = "84532",
  BNB_MAINNET = "56",
  BNB_TESTNET = "97",
  LINEA_MAINNET = "59144",
  LINEA_TESTNET = "59140",
  MOONBEAM_MAINNET = "1284",
  MOONBASE_ALPHA = "1287",
  MOONRIVER_MAINNET = "1285",
  CELO_MAINNET = "42220",
  CELO_ALFAJORES = "44787",
  GNOSIS_MAINNET = "100",
  CRONOS_MAINNET = "25",
  SCROLL_MAINNET = "534351",
  SCROLL_SEPOLIA = "534352",
  MANTLE_MAINNET = "5000",
  MANTLE_TESTNET = "5001",
  BITTORRENT_MAINNET = "199",
  BITTORRENT_TESTNET = "1029",
  XDC_MAINNET = "50",
  CANTO_MAINNET = "7700",
  CANTO_TESTNET = "7701",
  KAVA_MAINNET = "2222",
  KAVA_TESTNET = "2221",
  ROLLUX_MAINNET = "570",
  ROLLUX_TESTNET = "57000",
  SYSCOIN_MAINNET = "57",
  SYSCOIN_TESTNET = "5700",
  BOBA_ETHEREUM = "288",
  MANTA_PACIFIC = "169",
  MANTA_TESTNET = "3441005",
  WEMIX_MAINNET = "1111",
  WEMIX_TESTNET = "1112",
  ASTAR_MAINNET = "592",
  SHIDEN_MAINNET = "336",
  SHUBIYA_TESTNET = "81",
  ZETACHAIN_MAINNET = "7000", // Currently not live
  ZETACHAIN_TESTNET = "7001",
  FLARE_MAINNET = "14",
  FLARE_COSTON = "16",
  FLARE_COSTON2 = "114",
  FUSE_MAINNET = "122",
  FUSE_SPARK = "123",
  SHIBARIUM_MAINNET = "156",
  PUPPYNET_TESTNET = "157",
  CONFLUX_MAINNET = "1030",
  CONFLUX_TESTNET = "71",
  FILECOIN_MAINNET = "461",
  FILECOIN_CALIBRATION = "314159",
  ENERGY_WEB_CHAIN = "246",
  ENERGY_WEB_CHAIN_TESTNET = "73799",
  LUKSO_MAINNET = "42",
  LUKSO_TESTNET = "4201",
  ACALA_MAINNET = "787",
  MANDALA_TESTNET = "595",
  REI_MAINNET = "47805",
  REI_TESTNET = "12357",
  ZORA_NETWORK_MAINNET = "7777777",
  CALLISTO_MAINNET = "820",
  ZKSYNC_MAINNET = "324",
  ZKSYNC_SEPOLIA = "300",
  NEON_MAINNET = "245022934",
  NEON_TESTNET = "245022935",
  AURORA_MAINNET = "1313161554",
  AURORA_TESTNET = "1313161555",
  RONIN_MAINNET = "2020",
  RONIN_SAIGON_TESTNET = "2021",
  TRON_MAINNET = "tron",
  TRON_SHASTA_TESTNET = "tron_shasta",
  BEAM_MAINNET = "4337",
  CARBON_EVM_MAINNET = "9790",
  CARBON_EVM_TESTNET = "9792",
  ARTELA_TESTNET = "11822",
  BERACHAIN_TESTNET = "80085",
}

export const getChainIdFromPathName = (pathname: string): string => {
  switch (pathname) {
    case "ethereum":
      return ChainID.ETHEREUM_MAINNET
    default:
      return ChainID.ETHEREUM_MAINNET
  }
}

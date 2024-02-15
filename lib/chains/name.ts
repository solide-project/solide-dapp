import { ChainID } from "./id"

/**
 * Converts a network name to a more readable format
 * @param network
 * @returns
 */
export const getNetworkName = (network: string) => {
  const networkName = network
    .split("_")
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1).toLowerCase()
    })
    .join(" ")
  return networkName
}

const data: { [key: string]: string } = {
  [ChainID.ETHEREUM_MAINNET]: "Etheruem Mainnet",
  [ChainID.ETHEREUM_GOERLI]: "Etheruem Goerli",
  [ChainID.ETHEREUM_SEPOLIA]: "Etheruem Seoplia",
  [ChainID.ETHEREUM_HOLESKY]: "Holesky Test Network",
  [ChainID.METIS_ANDROMEDA]: "Metis Andormeda",
  [ChainID.METIS_SEPOLIA]: "Metis Seoplia",
  [ChainID.ARBITRUM_ONE]: "Arbitrum One",
  [ChainID.ARBITRUM_GOERLI]: "Arbitrum Goerli",
  [ChainID.ARBITRUM_NOVA]: "Arbitrum Nova",
  [ChainID.OASIS_EMERALD]: "Oasis Emerald",
  [ChainID.OASIS_SAPPHIRE]: "Oasis Sapphire",
  [ChainID.OASIS_SAPPHIRE_TESTNET]: "Oasis Sapphire Testnet",
  [ChainID.IMMUTABLE_MAINNET]: "Immutable Mainnet",
  [ChainID.IMMUTABLE_TESTNET]: "Immutable Testnet",
  [ChainID.AVALANCHE_MAINNET]: "Avalanche Mainnet",
  [ChainID.AVALANCHE_FUJI]: "Avalanche Testnet",
  [ChainID.POLYGON_MAINNET]: "Polygon Mainnet",
  [ChainID.POLYGON_MUMBAI]: "Polygon Mumbai",
  [ChainID.OPTIMISM_MAINNET]: "Optimism Mainnet",
  [ChainID.OPTIMISM_SEPOLIA]: "Optimism Georli",
  [ChainID.FANTOM_MAINNET]: "Fantom Mainnet",
  [ChainID.FANTOM_TESTNET]: "Fantom Testnet",
  [ChainID.BASE_MAINNET]: "Base Mainnet",
  [ChainID.BASE_SEPOLIA]: "Base Seoplia",
  [ChainID.BNB_MAINNET]: "BNB Smart Chain",
  [ChainID.BNB_TESTNET]: "BNB Smart Chain Testnet",
  [ChainID.LINEA_MAINNET]: "Linea Mainnet",
  [ChainID.LINEA_TESTNET]: "Linea Testnet",
  [ChainID.MOONBEAM_MAINNET]: "Moonbeam Mainnet",
  [ChainID.MOONBASE_ALPHA]: "Moonbase Alpha Testnet",
  [ChainID.MOONRIVER_MAINNET]: "Moonriver",
  [ChainID.CELO_MAINNET]: "Celo Mainnet",
  [ChainID.CELO_ALFAJORES]: "Celo Alfajores Testnet",
  [ChainID.GNOSIS_MAINNET]: "Gnosis Mainnet",
  [ChainID.CRONOS_MAINNET]: "Cronos Mainnet",
  [ChainID.SCROLL_MAINNET]: "Scroll Mainnet",
  [ChainID.SCROLL_SEPOLIA]: "Scroll Seoplia",
  [ChainID.MANTLE_MAINNET]: "Mantle",
  [ChainID.MANTLE_TESTNET]: "Mantle Testnet",
  [ChainID.BITTORRENT_MAINNET]: "BitTorrent Mainnet",
  [ChainID.BITTORRENT_TESTNET]: "Donau Testnet",
  [ChainID.XDC_MAINNET]: "XDC Network",
  [ChainID.CANTO_MAINNET]: "Canto Mainnet",
  [ChainID.CANTO_TESTNET]: "Canto Testnet",
  [ChainID.KAVA_MAINNET]: "Kava Mainnet",
  [ChainID.KAVA_TESTNET]: "Kava Testnet",
  [ChainID.ROLLUX_MAINNET]: "Rollux",
  [ChainID.ROLLUX_TESTNET]: "Rollux Tanenbaum Testnet",
  [ChainID.SYSCOIN_MAINNET]: "Syscoin Mainnet",
  [ChainID.SYSCOIN_TESTNET]: "Syscoin Tanenbaum Testnet",
  [ChainID.BOBA_ETHEREUM]: "Boba Mainnet",
  [ChainID.MANTA_PACIFIC]: "Manta Pacific Mainnet",
  [ChainID.MANTA_TESTNET]: "Manta Pacific Testnet",
  [ChainID.WEMIX_MAINNET]: "Wemix3.0 Mainnet",
  [ChainID.WEMIX_TESTNET]: "Wemix3.0 Testnet",
  [ChainID.ASTAR_MAINNET]: "Astar",
  [ChainID.SHIDEN_MAINNET]: "Shiden",
  [ChainID.SHUBIYA_TESTNET]: "Shubiya",
  [ChainID.ZETACHAIN_MAINNET]: "ZetaChain Mainnet",
  [ChainID.ZETACHAIN_TESTNET]: "ZetaChain Athena 3 Testnet",
  [ChainID.FLARE_MAINNET]: "Flare Mainnet",
  [ChainID.FLARE_COSTON]: "Flare Coston Testnet",
  [ChainID.FLARE_COSTON2]: "Flare Coston 2 Testnet",
  [ChainID.FUSE_MAINNET]: "Fuse Mainnet",
  [ChainID.FUSE_SPARK]: "Fuse Spark Tesnet",
  [ChainID.SHIBARIUM_MAINNET]: "Shibarium Mainnet",
  [ChainID.PUPPYNET_TESTNET]: "Puppynet Testnet",
  [ChainID.CONFLUX_MAINNET]: "Conflux eSpace Mainnet",
  [ChainID.CONFLUX_TESTNET]: "Conflux eSpace Testnet",
  [ChainID.FILECOIN_MAINNET]: "Filecoin Mainnet",
  [ChainID.FILECOIN_CALIBRATION]: "Filecoin Calibration Testnet",
  [ChainID.ENERGY_WEB_CHAIN]: "Energy Web Mainnet",
  [ChainID.ENERGY_WEB_CHAIN_TESTNET]: "Energy Web Volta Testnet",
  [ChainID.LUKSO_MAINNET]: "Lukso Mainnet",
  [ChainID.LUKSO_TESTNET]: "Lukso Testnet",
  [ChainID.ACALA_MAINNET]: "Acala Mainnet",
  [ChainID.MANDALA_TESTNET]: "Mandala Testnet",
  [ChainID.REI_MAINNET]: "Rei Network",
  [ChainID.REI_TESTNET]: "Rei Testnet",
  [ChainID.ZORA_NETWORK_MAINNET]: "Zora Network",
  [ChainID.CALLISTO_MAINNET]: "Callisto Network",
  [ChainID.ZKSYNC_MAINNET]: "zkSync Mainnet",
  [ChainID.ZKSYNC_SEPOLIA]: "zkSync Seoplia",
  [ChainID.NEON_MAINNET]: "Neon Mainnet",
  [ChainID.NEON_TESTNET]: "Neon Devnet",
  [ChainID.AURORA_MAINNET]: "Aurora Mainnet",
  [ChainID.AURORA_TESTNET]: "Aurora Testnet",
  [ChainID.RONIN_MAINNET]: "Ronin Network",
  [ChainID.RONIN_SAIGON_TESTNET]: "Ronin Saigon Testnet",
  [ChainID.TRON_MAINNET]: "Tron Mainnet",
  [ChainID.TRON_SHASTA_TESTNET]: "Tron Shasta Testnet",
  [ChainID.BEAM_MAINNET]: "Beam",
  [ChainID.CARBON_EVM_MAINNET]: "Carbon EVM",
  [ChainID.CARBON_EVM_TESTNET]: "Carbon EVM Testnet",
  [ChainID.ARTELA_TESTNET]: "Artela Testnet",
  [ChainID.BERACHAIN_TESTNET]: "Berachain Artio",
  [ChainID.VICTION_MAINNET]: "Viction",
  [ChainID.VICTION_TESTNET]: "Viction Testnet",
}

export const getNetworkNameFromChainID = (network: string): string =>
  data[network] || ""

export const getChainIdFromNetwork = (network: string): string => {
  let chainId: string = ""
  const match = Object.entries(ChainID).find(([key, _]) => key === network)
  if (match && match.length > 1) chainId = match[1]
  return chainId
}

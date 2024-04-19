import { ChainID } from "@/lib/chains/id"
import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { getContractsByDeployments } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"
import { camelToWord } from "@/lib/utils"

import { filterFiles, GitHubFileInfo } from "../../utils/utils"

const getAPI = (chain: string): string => {
  switch (chain) {
    case ChainID.ETHEREUM_MAINNET:
      return "ethereum"
    case ChainID.ETHEREUM_GOERLI:
      return "goerli"
    case ChainID.RONIN_SAIGON_TESTNET:
      return "ronin-testnet"
    case ChainID.RONIN_MAINNET:
    default:
      return "ronin-mainnet"
  }
}

export const tutorial =
  "https://github.com/axieinfinity/ronin-bridge-contracts/blob/mainnet/docs/README.md|https://github.com/axieinfinity/ronin-documentation/blob/main/docs/apps/ronin-bridge.md|https://github.com/axieinfinity/ronin-bridge-contracts/blob/mainnet/docs/HACK.md"
export const reference =
  "https://github.com/axieinfinity/ronin-bridge-contracts/tree/mainnet/deployments"
export const items = async (chain: string): Promise<ContractSchema[]> => {
  const id = getAPI(chain)
  if (!id) {
    return []
  }

  // const response = await fetch(
  //     `https://api.github.com/repos/axieinfinity/ronin-bridge-contracts/contents/deployments/${id}`
  // )
  // const directory: GitHubFileInfo[] = await response.json()

  // const filteredFiles = filterFiles(directory)
  // const ret: any[] = await Promise.all(
  //     filteredFiles.map((file) =>
  //         getContractsByDeployments({
  //             file,
  //             title: "",
  //             chain,
  //             tutorial,
  //             reference,
  //             description: "",
  //         })
  //     )
  // )

  const networkName = getNetworkNameFromChainID(chain)
  const ret: ContractSchema[] = Object.entries(addresses).map(([key, val]) => {
    const formattedName = camelToWord(key)
    return {
      title: `Ronin Bridge Deployment: ${formattedName}`,
      tutorial,
      reference,
      description: `${formattedName} deployment on ${networkName}. These contracts collectively manage various aspects of the Ronin Bridge, such as staking, slashing, rewards, profile management, governance, and more. The combination of these contracts forms the backbone of the Ronin Bridge ecosystem, enabling secure and efficient cross-chain transactions on the Ronin blockchain.`,
      playground: {
        default: {
          address: val,
          chainId: chain,
        },
      },
    }
  })

  return ret.filter((result) => result !== undefined)
}

/**
 * Cahcing the contract addresses, rather than fetching them from the API every time.
 * This can easily be updated by calling API instead above
 */
const addresses: Record<string, string> = {
  StakingLogic: "0x8Ae952d538e9c25120e9c75FBA0718750f81313a",
  BridgeSlashProxy: "0x273cdA3AFE17eB7BcB028b058382A9010ae82B24",
  FastFinalityTrackingProxy: "0xA30B2932CD8b8A89E34551Cdfa13810af38dA576",
  BridgeRewardProxy: "0x796A163A21e9a659fc9773166e0AfDC1eB01aaD1",
  ProfileProxy: "0x840EBf1CA767CB690029E91856A357a43B85d035",
  RoninGatewayPauseEnforcer: "0x2367cD5468c2b3cD18aA74AdB7e14E43426aF837",
  RoninGatewayV3Proxy: "0x0CF8fF40a508bdBc39fBe1Bb679dCBa64E65C7Df",
  RoninTrustedOrganizationLogic: "0x0AaDA85A2b3c9fb1be158D43e71cdcca6Fe85e02",
  RoninTrustedOrganizationProxy: "0x98D0230884448B3E2f09a177433D60fb1E19C090",
  BridgeSlashLogic: "0x763e39d39a59BE7458147C7129fB044B34Ab4Ca4",
  BridgeRewardLogic: "0x6d457615C1B08ab8d5ec2a0410440E23A17F7c38",
  RoninValidatorSetProxy: "0x617c5d73662282EA7FfD231E020eCa6D2B0D552f",
  SlashIndicatorProxy: "0xEBFFF2b32fA0dF9C5C8C5d5AAa7e8b51d5207bA3",
  StakingProxy: "0x545edb750eB8769C868429BE9586F5857A768758",
  StakingVestingProxy: "0xC768423A2AE2B5024cB58F3d6449A8f5DB6D8816",
  RoninBridgeManager: "0x5FA49E6CA54a9daa8eCa4F403ADBDE5ee075D84a",
  RoninGatewayV3Logic: "0x1477DB6bF449B0eb1191a1F4023867ddCEadc504",
  BridgeTrackingLogic: "0xe4CcF400e99Cb07Eb76D3a169532916069B7DC32",
  FastFinalityTrackingLogic: "0x241e507363d674c77a9930F31ea26BBc8857949c",
  MaintenanceProxy: "0x6F45C1f8d84849D497C6C0Ac4c3842DC82f49894",
  RoninValidatorSetLogic: "0x0C1Dee1b435C464b4E94781f94F991Cb90e3399d",
  BridgeTrackingProxy: "0x3Fb325b251eE80945d3fc8c7692f5aFFCA1B8bC2",
  RoninGovernanceAdmin: "0x946397deDFd2f79b75a72B322944a21C3240c9c3",
  RoninGatewayV2Logic: "0x3036EB56e7e28851a56B87F037101aB3630933ab",
  MaintenanceLogic: "0xca9F10769292F26850333264d618c1B5E91f394D",
  ProfileLogic: "0x3EC92e7a835bb58832Df64E7f8206467e07d54a3",
  SlashIndicatorLogic: "0x440BAF1c4B008EE4D617A83401f06AA80f5163E9",
  StakingVestingLogic: "0x7CcBb3CD1b19BC1f1d5B7048400D41B1b796AbAd",
}

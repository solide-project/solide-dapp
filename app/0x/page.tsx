import { ContractPage } from "@/components/main/client/pages/contract-page";
import { ChainID } from "@/lib/chains/id";

import { items as ZERO_EX_VDF_CONTRACTS } from "@/lib/contracts/src/0x/vdf-contracts"
import { items as ZERO_EX_LP_CONTRACTS } from "@/lib/contracts/src/0x/zero-ex-contracts-lp"
import { items as ZERO_EX_FEATURES_CONTRACTS } from "@/lib/contracts/src/0x/zero-ex-contracts-features"
import { items as ZERO_EX_CORE_CONTRACTS } from "@/lib/contracts/src/0x/zero-ex-contracts-core"
import { items as ZERO_EX_DEPLOYMENTS } from "@/lib/contracts/src/0x/contract-deployments"
import { items as EXCHANGE_V3_EXCHANGE_CONTRACTS } from "@/lib/contracts/src/0x/exchange-v3-exchange"
import { items as EXCHANGE_V3_MULTISIG_CONTRACTS } from "@/lib/contracts/src/0x/exchange-v3-multisig"
import { items as EXCHANGE_V3_DEV_UTILS_CONTRACTS } from "@/lib/contracts/src/0x/exchange-v3-dev-utils"
import { items as GASLESS_APPROVAL_TOKENS } from "@/lib/contracts/src/0x/gasless-approval-token"
import { ZEROX_ID } from "@/lib/db/ids";
import { protcols } from "@/lib/db/library";
import { ContractSchema } from "@/lib/schema/contract";

export default async function Page() {
  let items: ContractSchema[] = [
    {
      title: `Register Upkeep In Contract (programmatically)`,
      tutorial:
        "https://github.com/solide-project/solide-guides/blob/master/src/chainlink/automation/UpkeepIDConditionalExample/README.sol",
      reference:
        "https://docs.chain.link/chainlink-automation/guides/register-upkeep-in-contract",
      description:
        "Practical example demonstrating how to programmatically register conditional upkeeps within the Chainlink Automation Network. By integrating this contract, developers can automate the interaction, funding, and management of upkeeps directly from their own smart contracts, enhancing the efficiency and autonomy of decentralized applications. The provided code showcases the essential steps, including LINK token approvals and upkeepID handling, offering a foundation for developers to seamlessly incorporate automated maintenance features into their projects.",
      playground: {
        default: {
          address:
            "https://github.com/solide-project/solide-guides/blob/master/src/chainlink/automation/UpkeepIDConditionalExample/UpkeepIDConditionalExample.sol",
        },
        chains: {
          ["UpkeepIDConditionalExample.sol"]: {
            address:
              "https://github.com/solide-project/solide-guides/blob/master/src/chainlink/automation/UpkeepIDConditionalExample/UpkeepIDConditionalExample.sol",
          },
          ["UpkeepIDlogTriggerExample.sol"]: {
            address:
              "https://github.com/solide-project/solide-guides/blob/master/src/chainlink/automation/UpkeepIDConditionalExample/UpkeepIDlogTriggerExample.sol",
          },
        },
      },
    },
    {
      title: "Arbitrum (ARB) on Ethereum",
      tutorial:
        "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/ethereum/ArbToken.md",
      reference: "https://arbitrum.io",
      description:
        "Arbitrum native token is Ethereum Layer 1 (L1) token designed to seamlessly connect with both the Arbitrum Nova network. By implementing essential features such as token minting, burning, and registration on both networks, the contract ensures efficient cross-network transactions and facilitates integration between the Arbitrum Layer 2 (L2) and Nova networks. With a focus on security considerations and adherence to ERC-20 standards, this contract serves as a robust foundation for developers aiming to create decentralized applications spanning the Arbitrum Nova ecosystems.",
      playground: {
        default: {
          address: "0xB50721BCf8d664c30412Cfbc6cf7a15145234ad1",
          chainId: ChainID.ETHEREUM_MAINNET,
        },
      },
    },
    {
      title: "Delayed Inbox Proxy (Nova)",
      tutorial:
        "https://github.com/SovaSniper/tutorials/blob/master/arbitrum/ethereum/DelayedInbox.md",
      reference:
        "https://docs.arbitrum.io/tx-lifecycle#1b--or-from-l1-via-the-delayed-inbox",
      description:
        "The Inbox smart contract is an important message contract that facilitates the smooth transfer of messages from Layer 1 to Layer 2. Whether through direct sends or retryable tickets, it ensures secure message delivery and interfaces with sequencers for enhanced reliability.",
      playground: {
        default: {
          address: "0x1b2676d32e2f7430a564dd4560641f990dfe3d6a",
          chainId: ChainID.ETHEREUM_MAINNET,
        },
        chains: {
          ["Inbox.sol"]: {
            address: "0x1b2676d32e2f7430a564dd4560641f990dfe3d6a",
            displaychain: ChainID.ETHEREUM_MAINNET,
          },
          ["TransparentUpgradeableProxy.sol"]: {
            address: "0xc4448b71118c9071bcb9734a0eac55d18a153949",
            displaychain: ChainID.ETHEREUM_MAINNET,
          },
        },
      },
    },
  ]
  items.push(...(await ZERO_EX_VDF_CONTRACTS()))
  items.push(...(await ZERO_EX_LP_CONTRACTS()))
  items.push(...(await ZERO_EX_FEATURES_CONTRACTS()))
  items.push(...(await ZERO_EX_CORE_CONTRACTS()))
  items.push(...(await ZERO_EX_DEPLOYMENTS(ChainID.ETHEREUM_MAINNET)))
  items.push(...(await EXCHANGE_V3_EXCHANGE_CONTRACTS()))
  items.push(...(await EXCHANGE_V3_MULTISIG_CONTRACTS()))
  items.push(...(await EXCHANGE_V3_DEV_UTILS_CONTRACTS()))
  items.push(...(await GASLESS_APPROVAL_TOKENS()))

  return <ContractPage
    protocol={protcols[ZEROX_ID]}
    items={items}
    themeColour={"rgba(38, 39, 43, 1)"} />
}

import { ContractSchema } from "@/lib/schema/contract"

const mainTitle: string = "Automation"
export const items: ContractSchema[] = [
  {
    title: `${mainTitle}: Automation-compatible contract`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/chainlink/automation/Counter/README.sol",
    reference:
      "https://docs.chain.link/chainlink-automation/guides/compatible-contracts",
    description:
      "Chainlink Automation-Compatible Counter Smart Contract is an illustrative example showcasing how to implement Chainlink's Automation-Compatible Interface for decentralized automation. This contract features a customizable counter that automatically increments at user-defined intervals, utilizing the Chainlink Automation Network to trigger and execute the automated upkeep. Developers can leverage this contract as a foundational guide for integrating custom logic triggers and time-based automation into their decentralized applications.",
    playground: {
      default: {
        address:
          "https://github.com/solide-project/solide-guides/blob/master/src/chainlink/automation/Counter/Counter.sol",
      },
    },
  },
  {
    title: `${mainTitle}: Register Upkeep In Contract (programmatically)`,
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
]

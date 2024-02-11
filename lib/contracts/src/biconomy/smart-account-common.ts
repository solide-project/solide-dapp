import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/schema/contract"

export const items = async (): Promise<ContractSchema[]> => await getContractsByGithub({
    title: "Biconomy Smart Account Contracts",
    url: "https://api.github.com/repos/bcnmy/scw-contracts/contents/contracts/smart-account/base?ref=b5be5399ef0e411b62b4342e12a15e34c35bb83c",
    tutorial: "https://raw.githubusercontent.com/bcnmy/docs/master/versioned_docs/version-1.0/biconomy-contracts/Contracts/common_contracts.md",
    reference: "https://github.com/bcnmy/scw-contracts",
    description:
        "The Biconomy Smart Account contract is a comprehensive implementation of Account Abstraction, compliant with ERC-4337 and ERC-6900 standards, and inspired by Gnosis and Argent safes. It comprises several key contracts, including BaseSmartAccount.sol, SmartAccountFactory.sol, SmartAccount.sol and more. These contracts collectively manage various functionalities such as deploying Smart Accounts, managing stakes, facilitating transactions and delegate calls, handling token receipts, and more, making the Biconomy Smart Account a leading solution for implementing Account Abstraction in the Web3 ecosystem.",
})


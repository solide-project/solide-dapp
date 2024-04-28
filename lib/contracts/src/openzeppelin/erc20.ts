import { getContractsByGithub } from "@/lib/contracts"
import { ContractSchema } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> =>
    await getContractsByGithub({
        title: "ERC20 Implementation",
        url: "https://api.github.com/repos/OpenZeppelin/openzeppelin-contracts/contents/contracts/token/ERC20/extensions",
        tutorial: "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/README.adoc",
        reference: "https://docs.openzeppelin.com/contracts/5.x/erc20",
        description: "ERC20 is a standard interface for Ethereum token contracts, representing fungible tokens that can be used for various purposes like currency, voting, or staking, and its implementation allows for easy creation of custom tokens with specified properties like name, symbol, and initial supply.",
    })
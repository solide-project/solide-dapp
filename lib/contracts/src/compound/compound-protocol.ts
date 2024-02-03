import { ContractSchema } from "@/lib/schema/contract"

import { getContractsByGithub } from "@/lib/contracts"

export const items = async (): Promise<ContractSchema[]> => await getContractsByGithub({
    title: "Compound Core Contracts",
    url: "https://api.github.com/repos/compound-finance/compound-protocol/contents/contracts",
    tutorial: "https://github.com/compound-finance/compound-protocol/blob/master/README.md",
    reference: "https://github.com/compound-finance/compound-protocol",
    description:
      "The core contracts include cToken, CErc20, CEther, Comptroller, Comp, Governor Alpha, InterestRateModel, and others. Users can supply assets to earn cTokens or borrow assets by collateralizing other assets. The Comptroller manages risk parameters and ensures users maintain sufficient collateral. The COMP token represents governance rights, allowing holders to propose and vote on changes to the protocol. The protocol uses interest rate models to algorithmically set interest rates based on asset utilization. The codebase includes various libraries for safe math operations, error tracking, and handling ERC-20 interactions.",
  })

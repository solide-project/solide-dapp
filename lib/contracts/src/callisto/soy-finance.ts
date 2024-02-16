import { ChainID } from "@/lib/chains/id";
import { ContractSchema } from "@/lib/schema";

interface FarmInfo {
    pair: string;
    yearlysoyreward: number;
    id: number;
    farm: string;
    multiplier: number;
    multiplier1000: string;
    lptoken: string;
    token0: string;
    token1: string;
    symbol0: string;
    symbol1: string;
}

export const items = async (): Promise<ContractSchema[]> => {
    const response = await fetch("https://raw.githubusercontent.com/CallistoEnterprise/soy-finance/main/src/constants/farmlist.json");
    const data: { farmsInfo: FarmInfo[] } = await response.json();

    const chain = ChainID.CALLISTO_MAINNET;
    const ret: ContractSchema[] = [];
    data.farmsInfo.forEach((farm: FarmInfo) => {
        ret.push(...[
            {
                title: `Soy Finance Farm: ${farm.pair}`,
                tutorial: "https://github.com/CallistoEnterprise/SOY-Smart-Contracts/blob/main/README.md",
                reference: "https://docs.soy.finance/",
                description: `Soy Finance's ${farm.farm} Farm Contract. The contract facilitates staking LP tokens to earn SOY tokens as rewards. It implements functionalities such as depositing LP tokens, withdrawing LP tokens, withdrawing rewards, and emergency withdrawal. Users can stake LP tokens, and in return, they receive SOY tokens as rewards based on their staked amount and duration. The contract also interacts with other contracts such as the SOY token contract, the LP token contract, and a global farm contract for distributing rewards.`,
                playground: {
                    default: {
                        address: farm.farm,
                        chainId: chain
                    }
                }
            },
            {
                title: `Soy Finance LP: ${farm.pair}`,
                tutorial: "https://github.com/CallistoEnterprise/SOY-Smart-Contracts/blob/main/README.md",
                reference: "https://docs.soy.finance/",
                description: `Soy Finance's ${farm.farm} LP Contract. The contracts defines an ERC223-compliant token contract with functionalities for transfers, approvals, and permit signatures. SoyFinancePair represents a Uniswap-like liquidity pool pair contract facilitating token swaps, liquidity provision, and removal. It utilizes a lock modifier to ensure only one transaction can be processed at a time for safety.`,
                playground: {
                    default: {
                        address: farm.lptoken,
                        chainId: chain
                    }
                }
            }
        ]);
    });
    return ret.sort((a, b) => a.title.localeCompare(b.title));
}
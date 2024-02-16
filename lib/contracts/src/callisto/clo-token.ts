import { ChainID } from "@/lib/chains/id";
import { ContractSchema } from "@/lib/schema";
import { items as uniswapTokenListItems } from "@/lib/contracts/src/uniswap/uniswap-token-list";
import { getNetworkNameFromChainID } from "@/lib/chains/name";

export const items = async (): Promise<ContractSchema[]> => {
    const response = await fetch("https://raw.githubusercontent.com/CallistoEnterprise/callisto-wallet-dev/main/app/scripts/tokens/cloTokens.json");
    const data: { address: string, decimal: number, symbol: string }[] = await response.json();

    const unverifiedTokens = ["CYT", "ccBNB", "ccETH"];

    const chain = ChainID.CALLISTO_MAINNET;
    const networkName = getNetworkNameFromChainID(chain);
    const ret: ContractSchema[] = [];
    data
        .filter(token => !unverifiedTokens.some(x => token.symbol.includes(x)))
        .forEach(token => {
            ret.push({
                title: `${token.symbol}`,
                description: `${token.symbol} on ${networkName}. These are verified CLO Tokens on the Callisto Network represent verified tokens provided and authenticated by the Callisto Wallet. These tokens adhere to the standards and protocols set forth by the Callisto Network, ensuring their legitimacy and reliability within the ecosystem.`,
                tutorial: "",
                reference: "https://github.com/CallistoEnterprise/callisto-wallet-dev/blob/main/app/scripts/tokens/cloTokens.json",
                playground: {
                    default: {
                        address: token.address,
                        chainId: chain,
                    },
                },
            });
        });

    return ret;
}

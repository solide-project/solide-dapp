import { ChainID } from "@/lib/chains/id";
import { ContractSchema } from "@/lib/contracts"

const addresses: Record<string, { symbol: string; decimals: number; address: string }> = {
    "Tether USD": { symbol: "USDT", decimals: 6, address: "0xfe9f969faf8ad72a83b761138bf25de87eff9dd2" },
    "USD Coin": { symbol: "USDC", decimals: 6, address: "0x9827431e8b77e87c9894bd50b055d6be56be0030" },
    "Ethereum Token": { symbol: "ETH", decimals: 18, address: "0xef63d4e178b3180beec9b0e143e0f37f4c93f4c2" }
};

const chainId = ChainID.BITLAYER_MAINNET
export const items = async (): Promise<ContractSchema[]> =>
    Object.entries(addresses).map(([name, address]) => ({
        title: `Bitlayer Peg Token ${name}`,
        tutorial: "https://github.com/bitlayer-org/bitlayer-org.github.io/blob/main/docs/BitlayerNetwork/PegTokens.md",
        reference: "https://docs.bitlayer.org/docs/BitlayerNetwork/PegTokens",
        description: `${name} (${address.symbol}) with a symbol of "${address.symbol}", ${address.decimals} decimal places, on Bitlayer mainnet: "${address.address}"`,
        playground: {
            default: {
                address: address.address,
                chainId
            },
        },
    }))

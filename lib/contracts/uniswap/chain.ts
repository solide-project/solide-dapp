import { ContractCardItems } from "@/components/shared/contracts-list";
import { ChainID } from "@/lib/chains/id";

export const items: ContractCardItems[] = [
    {
        title: `Uniswap V3 Staker`,
        tutorial: "",
        reference: "https://github.com/Uniswap/v3-staker/releases/tag/v1.0.2",
        description: "",
        playground: {
            default: {
                address: "0xe34139463ba50bd61336e0c446bd8c0867c6fe65",
                chainId: ChainID.ETHEREUM_MAINNET,
            },
            chains: {
                [ChainID.ETHEREUM_MAINNET]: {
                    address: "0xe34139463ba50bd61336e0c446bd8c0867c6fe65",
                },
                [ChainID.ARBITRUM_ONE]: {
                    address: "0xe34139463bA50bD61336E0c446Bd8C0867c6fE65",
                },
            }
        }, 
    },
    {
        title: `Uniswap TickLens`,
        tutorial: "",
        reference: "https://github.com/Uniswap/v3-periphery/blob/v1.0.0/contracts/lens/TickLens.sol",
        description: "",
        playground: {
            default: {
                address: "0x000000000022d473030f116ddee9f6b43ac78ba3",
                chainId: ChainID.ETHEREUM_MAINNET,
            },
        }, 
    },
    {
        title: `Uniswap Permit2`,
        tutorial: "",
        reference: "https://github.com/Uniswap/permit2",
        description: "",
        playground: {
            default: {
                address: "0xbfd8137f7d1516D3ea5cA83523914859ec47F573",
                chainId: ChainID.ETHEREUM_MAINNET,
            },
        }, 
    },
    {
        title: `Uniswap NFTDescriptor`,
        tutorial: "",
        reference: "https://github.com/Uniswap/v3-periphery/blob/v1.0.0/contracts/libraries/NFTDescriptor.sol",
        description: "",
        playground: {
            default: {
                address: "0x42B24A95702b9986e82d421cC3568932790A48Ec",
                chainId: ChainID.ETHEREUM_MAINNET,
            },
        }, 
    },
]
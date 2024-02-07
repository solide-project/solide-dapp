import { ChainID } from "@/lib/chains/id"
import { getNetworkNameFromChainID } from "@/lib/chains/name"

const chain = ChainID.BERACHAIN_TESTNET
export const items = [
    {
        title: "Deployed Contracts: Honey Token",
        tutorial: "",
        reference: "https://docs.berachain.com/developers/contracts/honey",
        description: `Source code for the HONEY token in ${getNetworkNameFromChainID(ChainID.BERACHAIN_TESTNET)}`,
        playground: {
            default: {
                address: "https://github.com/transmissions11/solmate/blob/main/src/tokens/ERC20.sol",
                chainId: chain,
            },
        },
    },
]
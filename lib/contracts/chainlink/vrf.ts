const mainTitle: string = "VFR"

export const items = [
    {
        title: `${mainTitle}: Chainlink VRF`,
        tutorial: "https://github.com/SovaSniper/tutorials/blob/master/chainlink/VRFD20.md",
        reference: "https://docs.chain.link/vrf/v2/getting-started",
        description: "This contracts illustrates the implementation of Chainlink VRF (Verifiable Random Function) in smart contracts to generate randomness on blockchains, utilizing a Request and Receive cycle.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/VRFD20.sol",
            }
        },
    },
    {
        title: `${mainTitle}: Random Number Generator using Chainlink VRF v2`,
        tutorial: "https://github.com/SovaSniper/tutorials/blob/master/chainlink/VRFv2DirectFundingConsumer.md",
        reference: "https://docs.chain.link/vrf/v2/direct-funding/examples/get-a-random-number",
        description: "A Chainlink VRF v2-compatible smart contract on the Sepolia test network, emphasizing security considerations and providing an example contract for requesting and receiving random values.",
        playground: {
            default: {
                address: "https://raw.githubusercontent.com/SovaSniper/contracts/master/chainlink/VRFv2DirectFundingConsumer.sol",
            }
        },
    },
]
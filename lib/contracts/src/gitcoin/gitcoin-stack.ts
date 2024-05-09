import { ChainID } from "@/lib/chains/id";
import { ContractSchema } from "@/lib/contracts"
import { snakeToWord, camelToWord } from "@/lib/utils";

const addresses: Record<string, string> = {
    "AlloV1/ProjectRegistry/V2": "0x5C5E2D94b107C7691B08E43169fDe76EAAB6D48b",
    "AlloV1/RoundFactory/V2": "0x5ab68dCdcA37A1C2b09c5218e28eB0d9cc3FEb03",
    "AlloV1/QuadraticFundingVotingStrategyFactory/V2": "0xc1a26b0789C3E93b07713e90596Cad8d0442C826",
    "AlloV1/MerklePayoutStrategyFactory/V2": "0xD0e19DBF9b896199F35Df255A1bf8dB3C787531c",
    "AlloV1/DirectPayoutStrategyFactory/V2": "0xF2a07728107B04266015E67b1468cA0a536956C8",
    "AlloV1/ProgramFactory/V1": "0xF7c101A95Ea4cBD5DA0Ab9827D7B2C9857440143",
    "AlloV2/Registry/V1": "0x4aacca72145e1df2aec137e1f3c5e3d75db8b5f3",
    "AlloV2/Allo/V1": "0x1133eA7Af70876e64665ecD07C0A0476d09465a1"
};

const chainId = ChainID.POLYGON_MAINNET
export const items = async (): Promise<ContractSchema[]> =>
    Object.entries(addresses).map(([name, address]) => {
        const [allo, contractName] = name.split("/")

        return {
            title: `${allo} Deployment: ${camelToWord(contractName)}`,
            tutorial: "https://github.com/allo-protocol/allo-contracts",
            reference: "https://github.com/gitcoinco/grants-stack-indexer/tree/331255d594cf71e62ef9e48001a7992a3bc6d5e6",
            description: `${camelToWord(contractName)} for Allo protocol deployed on Polygon designed to facilitate democratic capital allocation and distribution. Originally developed by Gitcoin to support the Grants Stack, these contracts serve broader applications beyond grants and quadratic funding. The protocol addresses the challenge of effectively allocating capital within the crypto ecosystem, leveraging tools like token drops, NFTs, treasury diversification, staking, and yield mechanisms.`,
            playground: {
                default: {
                    address,
                    chainId
                },
            },
        }
    })

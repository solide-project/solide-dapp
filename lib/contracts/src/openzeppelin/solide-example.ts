import { ContractSchema } from "../../utils/interface"
import { camelToWord } from "@/lib/utils";

const reference = "https://github.com/solide-project/solide-guides/tree/master/src/openzeppelin"
const description = "Collection of sample ERC standards from Openzeppelin."
const version = "v0.8.25+commit.b61c2a91"

const baseURL = "https://github.com/solide-project/solide-guides/blob/master/src/openzeppelin"
const data = [
    "MintableERC20",
    "Ownable",
    "SampleERC20",
    "SampleERC721",
    "SampleERC1155",
    "VotingERC20",
    "VotingERC721",
]
export const items = async (): Promise<ContractSchema[]> => {
    const ret: ContractSchema[] = []
    data.forEach((name) => {
        ret.push({
            title: `Openzeppelin Template: ${camelToWord(name)}`,
            reference,
            tutorial: `${baseURL}/${name}/README.md`,
            description,
            playground: {
                default: {
                    address: `${baseURL}/${name}/${name}.sol`,
                    version,
                }
            }
        })
    })

    return ret
}
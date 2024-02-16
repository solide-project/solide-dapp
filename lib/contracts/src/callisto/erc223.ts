import { ContractSchema } from "@/lib/schema/contract"
import { getContractsByGithub } from "@/lib/contracts"

const tutorial = "https://github.com/ethereum/ERCs/blob/master/ERCS/erc-223.md"
const reference = "https://docs.callisto.network/security-department/documentation/erc-223-token-standard"
const description = "he ERC223 token standard presents a significant advancement over ERC20, aiming to address critical issues such as the accidental loss of tokens and the lack of event handling mechanisms. By introducing a more secure and efficient protocol, ERC223 enhances economic abstraction at the contract level, facilitating seamless token transfers within smart contracts while preventing potential losses incurred by the ERC20 standard. Notably, ERC223 tokens offer backward compatibility with ERC20, ensuring seamless integration with existing contracts and services"
export const items = async (): Promise<ContractSchema[]> => [
    ...await getContractsByGithub({
        title: "ERC 223 Token",
        url: "https://api.github.com/repos/Dexaran/ERC223-token-standard/contents/token/ERC223",
        tutorial,
        reference,
        description,
    }),
    ...await getContractsByGithub({
        title: "ERC 223 Token",
        url: "https://api.github.com/repos/Dexaran/ERC223-token-standard/contents/token/ERC223/extensions",
        tutorial,
        reference,
        description,
    })
]
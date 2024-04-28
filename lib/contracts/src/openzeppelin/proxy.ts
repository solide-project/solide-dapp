import path from "path";
import { ContractSchema } from "../../utils/interface"
import { camelToWord } from "@/lib/utils";

const reference = "https://docs.openzeppelin.com/contracts/5.x/api/proxy"
const tutorial = "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/11dc5e3809ebe07d5405fe524385cbe4f890a08b/contracts/proxy/README.adoc"
const data: string[] = [
    'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/ERC1967/ERC1967Proxy.sol',
    'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/beacon/BeaconProxy.sol',
    'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/beacon/UpgradeableBeacon.sol',
    'https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/transparent/TransparentUpgradeableProxy.sol'
];
const description = "Proxy patterns including ERC-1967, Transparent Upgradeable, UUPS (Universal Upgradeable Proxy System), and Beacon proxies, emphasizing best practices and security considerations, with recommendations shifting towards UUPS proxies for efficiency and versatility, alongside detailed explanations of implementation mechanisms and security features."
const version = "v0.8.25+commit.b61c2a91"
export const items = async (): Promise<ContractSchema[]> => {
    const ret: ContractSchema[] = []
    data.forEach((url) => {
        const { name } = path.parse(url)

        ret.push({
            title: `Proxy Implementation: ${camelToWord(name)}`,
            reference,
            tutorial,
            description,
            playground: {
                default: {
                    address: url,
                    version,
                }
            }
        })
    })

    return ret
}
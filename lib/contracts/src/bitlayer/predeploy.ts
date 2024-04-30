import { ChainID } from "@/lib/chains/id";
import { ContractSchema } from "@/lib/contracts"
import { snakeToWord, camelToWord } from "@/lib/utils";

const addresses: Record<string, string> = {
    Staking: "0x000000000000000000000000000000000000f000",
    BTR: "0x0E4cF4Affdb72b39Ea91fA726D291781cBd020bF",
    DeterministicDeploymentProxy: "0x4e59b44847b379578588920ca78fbf26c0b4956c",
    Vault: "0xDDf655d9afd934b4851873ba55A678dc82282D4a",
    Multicall: "0xc8818aaeaBF0dF9f3f3ffF54Ab185705177A6234",
    WBTC: "0xfF204e2681A6fA0e2C3FaDe68a1B28fb90E4Fc5F"
};

const chainId = ChainID.BITLAYER_MAINNET
export const items = async (): Promise<ContractSchema[]> =>
    Object.entries(addresses).map(([name, address]) => ({
      title: `Bitlayer Contracts ${snakeToWord(camelToWord(name))}`,
      tutorial: "https://github.com/bitlayer-org/bitlayer-org.github.io/blob/main/docs/BitlayerNetwork/Contracts.md",
      reference: "https://docs.bitlayer.org/docs/BitlayerNetwork/Contracts",
      description: `${snakeToWord(camelToWord(name))} deployed contract, on Bitlayer mainnet: "${address}"`,
      playground: {
        default: {
          address,
          chainId
        },
      },
    }))
  
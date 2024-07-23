import { getContracts as getContract0x } from './src/0x'
import { getContracts as getContractAave } from './src/aave'
import { getContracts as getContractArbitrum } from './src/arbitrum'
import { getContracts as getContractAzuki } from './src/azuki'
import { getContracts as getContractAspect } from './src/aspect'
import { getContracts as getContractBerachain } from './src/berachain'
import { getContracts as getContractBiconomy } from './src/biconomy'
import { getContracts as getContractBitlayer } from './src/bitlayer'
import { getContracts as getContractCallisto } from './src/callisto'
import { getContracts as getContractChainlink } from './src/chainlink'
import { getContracts as getContractCompound } from './src/compound'
import { getContracts as getContractEigenlayer } from './src/eigenlayer'
import { getContracts as getContractEthereum } from './src/ethereum'
import { getContracts as getContractFuse } from './src/fuse'
import { getContracts as getContractGitcoin } from './src/gitcoin'
import { getContracts as getContractGMX } from './src/gmx'
import { getContracts as getContractImmutable } from './src/immutable'
import { getContracts as getContractJuiceBox } from './src/juice-box'
import { getContracts as getContractLens } from './src/lens'
import { getContracts as getContractLido } from './src/lido'
import { getContracts as getContractMetis } from './src/metis'
import { getContracts as getContractOpenZeppelin } from './src/openzeppelin'
import { getContracts as getContractPush } from './src/push'
import { getContracts as getContractRonin } from './src/ronin'
import { getContracts as getContractTableland } from './src/tableland'
import { getContracts as getContractTheGraph } from './src/the-graph'
import { getContracts as getContractUniswap } from './src/uniswap'
import { getContracts as getContractViction } from './src/viction'

import * as ecosystems from '../data/id'

const contractFetchers: Record<string, Function> = {
    [ecosystems.ZEROX_ID]: getContract0x,
    [ecosystems.AAVE_ID]: getContractAave,
    [ecosystems.ARBITRUM_ID]: getContractArbitrum,
    [ecosystems.AZUKI_ID]: getContractAzuki,
    [ecosystems.ARTELA_ID]: getContractAspect,
    [ecosystems.BERACHAIN_ID]: getContractBerachain,
    [ecosystems.BICONOMY_ID]: getContractBiconomy,
    [ecosystems.BITLAYER_ID]: getContractBitlayer,
    [ecosystems.CALLISTO_ID]: getContractCallisto,
    [ecosystems.CHAINLINK_ID]: getContractChainlink,
    [ecosystems.COMPOUND_ID]: getContractCompound,
    [ecosystems.EIGENLAYER_ID]: getContractEigenlayer,
    [ecosystems.ETHEREUM_ID]: getContractEthereum,
    [ecosystems.FUSE_ID]: getContractFuse,
    [ecosystems.GITCOIN_ID]: getContractGitcoin,
    [ecosystems.GMX_ID]: getContractGMX,
    [ecosystems.IMMUTABLE_ID]: getContractImmutable,
    [ecosystems.JUICE_BOX_DAO_ID]: getContractJuiceBox,
    [ecosystems.LENS_PROTOCOL_ID]: getContractLens,
    [ecosystems.LIDO_ID]: getContractLido,
    [ecosystems.METIS_ID]: getContractMetis,
    [ecosystems.OPEN_ZEPPELIN_ID]: getContractOpenZeppelin,
    [ecosystems.PUSH_PROTOCOL_ID]: getContractPush,
    [ecosystems.RONIN_ID]: getContractRonin,
    [ecosystems.TABLELAND_ID]: getContractTableland,
    [ecosystems.THEGRAPH_ID]: getContractTheGraph,
    [ecosystems.UNISWAP_ID]: getContractUniswap,
    [ecosystems.VICTION_ID]: getContractViction,
};

export const getContracts = async (ecosystem: string) => {
    const fetcher = contractFetchers[ecosystem];
    if (fetcher) {
        return await fetcher();
    } else {
        return [];
    }
};
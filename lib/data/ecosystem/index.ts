import * as ecosystems from "../id";
import { ZEROX } from "./0x";
import { AAVE } from "./aave";
import { ARBITRUM } from "./arbitrum";
import { ARTELA } from "./artela";
import { AZUKI } from "./azuki";
import { BERACHAIN } from "./berachain";
import { BICONOMY } from "./biconomy";
import { BITLAYER } from "./bitlayer";
import { CALLISTO } from "./callisto";
import { CHAINLINK } from "./chainlink";
import { COMPOUND } from "./compound";
import { EIGENLAYER } from "./eigenlayer";
import { ENS } from "./ens";
import { ETHEREUM } from "./ethereum";
import { FUSE } from "./fuse";
import { GITCOIN } from "./gitcoin";
import { GMX } from "./gmx";
import { IMMUTABLE } from "./immutable";
import { JUICE_BOX_DAO } from "./juicebox-dao";
import { LENS_PROTOCOL } from "./lens";
import { LIDO } from "./lido";
import { METIS } from "./metis";
import { OPEN_ZEPPELIN } from "./open-zeppelin";
import { PUSH } from "./push";
import { RONIN } from "./ronin";
import { SOLIDE } from "./solide";
import { TABLELAND } from "./tableland";
import { THEGRAPH } from "./the-graph";
import { UNISWAP } from "./uniswap";
import { VICTION } from "./viction";

export interface ProtocolSchema {
    name: string
    library?: string
    description: string
    themeColour?: string

    github?: string
    website?: string
    blog?: string
    discord?: string
    x?: string
    source?: string
    audit?: string
    documentation?: string
}

export const data: Record<string, ProtocolSchema> = {
    [ecosystems.CHAINLINK_ID]: CHAINLINK,
    [ecosystems.ETHEREUM_ID]: ETHEREUM,
    [ecosystems.OPEN_ZEPPELIN_ID]: OPEN_ZEPPELIN,
    [ecosystems.UNISWAP_ID]: UNISWAP,
    [ecosystems.COMPOUND_ID]: COMPOUND,
    [ecosystems.ARBITRUM_ID]: ARBITRUM,
    [ecosystems.METIS_ID]: METIS,
    [ecosystems.IMMUTABLE_ID]: IMMUTABLE,
    [ecosystems.AAVE_ID]: AAVE,
    [ecosystems.ZEROX_ID]: ZEROX,
    [ecosystems.ENS_ID]: ENS,
    [ecosystems.TABLELAND_ID]: TABLELAND,
    [ecosystems.THEGRAPH_ID]: THEGRAPH,
    [ecosystems.ARTELA_ID]: ARTELA,
    [ecosystems.GMX_ID]: GMX,
    [ecosystems.FUSE_ID]: FUSE,
    [ecosystems.SOLIDE]: SOLIDE,
    [ecosystems.PUSH_PROTOCOL_ID]: PUSH,
    [ecosystems.AZUKI_ID]: AZUKI,
    [ecosystems.RONIN_ID]: RONIN,
    [ecosystems.BERACHAIN_ID]: BERACHAIN,
    [ecosystems.JUICE_BOX_DAO_ID]: JUICE_BOX_DAO,
    [ecosystems.BICONOMY_ID]: BICONOMY,
    [ecosystems.VICTION_ID]: VICTION,
    [ecosystems.CALLISTO_ID]: CALLISTO,
    [ecosystems.LIDO_ID]: LIDO,
    [ecosystems.EIGENLAYER_ID]: EIGENLAYER,
    [ecosystems.BITLAYER_ID]: BITLAYER,
    [ecosystems.GITCOIN_ID]: GITCOIN,
    [ecosystems.LENS_PROTOCOL_ID]: LENS_PROTOCOL,
}

export const getProtcolInfo = (network: string): ProtocolSchema => data[network] || {} as ProtocolSchema
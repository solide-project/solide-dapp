import { ChainID } from "@/lib/chains/id";
import { getNetworkNameFromChainID } from "@/lib/chains/name";
import { ContractSchema } from "@/lib/schema/contract";

/**
 * See list here: https://0x.org/docs/tx-relay-api/gasless-approvals-token-list
 */
const tokens: { [key: string]: string } = {
    "USD Coin (PoS)": "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
    "Wrapped Ether": "0x7ceb23fd6bc0add59e62ac25578270cff1b9f619",
    "(PoS) Tether USD": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    "(PoS) Wrapped BTC": "0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6",
    "(PoS) Dai Stablecoin": "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    "Balancer (PoS)": "0x9a71012b13ca4d3d0cdc72a177df3ef03b0e76a3",
    "Aave (PoS)": "0xd6df932a45c0f255f85145f286ea0b292b21c90b",
    "ChainLink Token": "0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39",
    "(PoS) CRV": "0x172370d5cd63279efa6d502dab29171933a610af",
    "Aavegotchi GHST Token (PoS)": "0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7",
    "Telcoin (PoS)": "0xdf7837de1f2fa4631d716cf2502f8b230f1dcc32",
    "ApeSwapFinance Banana": "0x5d47baba0d66083c52009271faf3f50dcc01023c",
    "Klima DAO": "0x4e78011ce80ee02d2c3e649fb657e45898257815",
    "Uniswap (PoS)": "0xb33eaad8d922b1083446dc23f610c2567fb5180f",
    "(PoS) Decentraland MANA": "0xa1c57f48f0deb89f569dfbe6e2b7f46d33606fd4",
    "Graph Token (PoS)": "0x5fe2b58c013d7601147dcdd68c143a77499f5531",
    "XCAD Token (PoS)": "0xa55870278d6389ec5b524553d03c04f5677c061e",
    "(PoS) Wrapped UST Token": "0x692597b009d13c4049a947cab2239b7d6517875f",
    "Gains Network": "0xe5417af564e4bfda1c483642db72007871397896",
    "(PoS) Staked MATIC": "0x3a58a54c066fdc0f2d55fc9c89f0415c92ebf3c4",
    "Wootrade Network (PoS)": "0x1b815d120b3ef02039ee11dc2d33de7aa4a8c603",
    "(PoS) Decentral Games": "0xef938b6da8576a896f6e0321ef80996f4890f9c4",
    "Frax": "0x45c32fa6df82ead1e2ef74d17b76547eddfaff89",
    "SushiToken (PoS)": "0x0b3f868e0be5597d5db7feb59e1cadbb0fdda50a",
    "(PoS) DFX Token": "0xe7804d91dfcde7f776c90043e03eaa6df87e6395",
    "Alta Finance": "0xe0cca86b254005889ac3a81e737f56a14f4a38f5",
    "(PoS) JPY Coin": "0x6ae7dfc73e0dde2aa99ac063dcf7e8a63265108c",
    "NextEarthToken": "0x0d0b8488222f7f83b23e365320a4021b12ead608",
    "beefy.finance": "0xfbdd194376de19a88118e84e279b977f165d01b8",
    "Governance OHM": "0xd8ca34fd379d9ca3c6ee3b3905678320f5b45195",
    "DeRace Token": "0xb35fcbcf1fd489fce02ee146599e893fdcdc60e6",
    "(PoS) Liquid Staking Matic": "0xfa68fb4628dff1028cfec22b4162fccd0d45efb6",
    "(PoS) TrueUSD": "0x2e1ad108ff1d8c782fcbbb89aad783ac49586756",
    "Route": "0x16eccfdbb4ee1a85a33f3a9b21175cd7ae753db4",
    "(PoS) Metaverse": "0xa3c322ad15218fbfaed26ba7f616249f7705d945",
    "MetalSwap": "0xadbe0eac80f955363f4ff47b0f70189093908c04",
    "(PoS) Moss Carbon Credit": "0xaa7dbd1598251f856c12f63557a4c4397c253cea",
    "(PoS) Wrapped Ether": "0xae740d42e4ff0c5086b2b5b5d149eb2f9e1a754f",
    "Frax Share": "0x1a3acf6d19267e2d3e7f898f42803e90c9219062",
    "(PoS) Kromatika": "0x14af1f2f02dccb1e43402339099a05a5e363b83c",
    "Mechanium": "0xacd4e2d936be9b16c01848a3742a34b3d5a5bdfa",
    "(PoS) OVR": "0x1631244689ec1fecbdd22fb5916e920dfc9b8d30",
    "(PoS) InsurAce": "0x8a0e8b4b0903929f47c3ea30973940d4a9702067",
    "(PoS) Thales DAO Token": "0x692c44990e4f408ba0917f5c78a83160c1557237",
    "Fuse": "0xf915fdda4c882731c0456a4214548cd13a822886",
    "Binance": "0xa649325aa7c5093d12d6f98eb4378deae68ce23f",
    "(PoS) Orbs": "0x614389eaae0a6821dc49062d56bda3d9d45fa2ff",
    "TOWER": "0x2bc07124d8dac638e290f401046ad584546bc47b",
    "(PoS) Wrapped LUNA Token": "0x24834bbec7e39ef42f4a75eaf8e5b6486d3f0e57",
    "(PoS) Metaverse Index": "0xfe712251173a2cd5f5be2b46bb528328ea3565e1",
    "(PoS) TrustSwap Token": "0x3809dcdd5dde24b37abe64a5a339784c3323c44f",
    "Spintop": "0x35f80a39eefe33d0dfd2ad2daa6ad6a9d472cebd",
    "IceToken": "0x4e1581f01046efdd7a1a2cdb0f82cdd7f71f2e59",
    "(PoS) CosplayToken": "0x8d520c8e66091cfd6743fe37fbe3a09505616c4b",
    "(PoS) Melon Token": "0xa9f37d84c856fda3812ad0519dad44fa0a3fe207",
    "Spit Token": "0x5c947eb80d096a5e332bf79bfdc9feb3d0a201d7",
    "(PoS) ApeCoin": "0xb7b31a6bc18e48888545ce79e83e06003be70930",
    "(PoS) SHIBA INU": "0x6f8a06447ff6fcf75d803135a7de15ce88c1d4ec",
    "(PoS) Dogelon": "0xe0339c80ffde91f3e20494df88d4206d86024cdf",
    "GLM": "0x0B220b82F3eA3B7F6d9A1D8ab58930C064A2b5Bf",
};

const mainTitle = "0x Gasless Approval Tokens";
export const items = async (): Promise<ContractSchema[]> => {
    const chain = ChainID.POLYGON_MAINNET
    const ret: ContractSchema[] = []
    Object.entries(tokens).forEach(([key, val]) => {
        ret.push({
            title: `${mainTitle}: ${key}`,
            tutorial: "",
            reference: "https://0x.org/docs/tx-relay-api/gasless-approvals-token-list",
            description: `Token Maker ${key} on ${getNetworkNameFromChainID(chain)}. Powered by the 0x Project, Gasless approvals tokens on Polygon for Tx Relay API.`,
            playground: {
                default: {
                    address: val,
                    chainId: chain,
                },
            },
        })
    })

    return ret;
}
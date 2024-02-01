import { ContractSchema } from "@/lib/schema/contract"
import { getNetworkNameFromChainID } from "@/lib/chains/name"
import { camelToWord } from "@/lib/utils"

/**
 * Note: These contracts are sourced from the gmx-interfaces repository and may undergo changes.
 * For the latest information, refer to:
 * https://github.com/gmx-io/gmx-interface/blob/8ac811bab304131ea3e7b3ae0ff25d61eac1c63f/src/config/contracts.ts
 * Since information is not available through an API or JSON format, manual updates to this file is required and 
 * can be done by submitting a pull request or raising an issue on the Solide GitHub repository.
 * 
 * Developer's Note: An alternative approach could involve utilizing the GitHub raw API to fetch the file content.
 * By using the `typescript` package to parse the file, we can extract the required information.
 * While this offers a more robust solution, it requires additional effort and a node environment, which is feasible in a Next.js app.
 * 
 * Latest Updated: 2024-01-24
 */
const contracts: Record<string, string> = {
    Vault: "0x489ee077994B6658eAfA855C308275EAd8097C4A",
    Router: "0xaBBc5F99639c9B6bCb58544ddf04EFA6802F4064",
    VaultReader: "0xfebB9f4CAC4cD523598fE1C5771181440143F24A",
    Reader: "0x2b43c90D1B727cEe1Df34925bcd5Ace52Ec37694",
    GlpManager: "0x3963FfC9dff443c2A94f21b129D429891E32ec18",
    RewardRouter: "0x159854e14A862Df9E39E1D128b8e5F70B4A3cE9B",
    GlpRewardRouter: "0xB95DB5B167D75e6d04227CfFFA61069348d271F5",
    RewardReader: "0x8BFb8e82Ee4569aee78D03235ff465Bd436D40E0",
    NATIVE_TOKEN: "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1",
    GLP: "0x4277f8F2c384827B5273592FF7CeBd9f2C1ac258",
    GMX: "0xfc5A1A6EB076a2C7aD06eD22C90d7E710E35ad0a",
    ES_GMX: "0xf42Ae1D54fd613C9bb14810b0588FaAa09a426cA",
    BN_GMX: "0x35247165119B69A40edD5304969560D0ef486921",
    USDG: "0x45096e7aA921f27590f8F19e457794EB09678141",
    ES_GMX_IOU: "0x6260101218eC4cCfFF1b778936C6f2400f95A954",
    StakedGmxTracker: "0x908C4D94D34924765f1eDc22A1DD098397c59dD4",
    BonusGmxTracker: "0x4d268a7d4C16ceB5a606c173Bd974984343fea13",
    FeeGmxTracker: "0xd2D1162512F927a7e282Ef43a362659E4F2a728F",
    StakedGlpTracker: "0x1aDDD80E6039594eE970E5872D247bf0414C8903",
    FeeGlpTracker: "0x4e971a87900b931fF39d1Aad67697F49835400b6",

    StakedGmxDistributor: "0x23208B91A98c7C1CD9FE63085BFf68311494F193",
    StakedGlpDistributor: "0x60519b48ec4183a61ca2B8e37869E675FD203b34",

    GmxVester: "0x199070DDfd1CFb69173aa2F7e20906F26B363004",
    GlpVester: "0xA75287d2f8b217273E7FCD7E86eF07D33972042E",

    OrderBook: "0x09f77E8A13De9a35a7231028187e9fD5DB8a2ACB",
    OrderExecutor: "0x7257ac5D0a0aaC04AA7bA2AC0A6Eb742E332c3fB",
    OrderBookReader: "0xa27C20A7CF0e1C68C0460706bB674f98F362Bc21",

    PositionRouter: "0xb87a436B93fFE9D75c5cFA7bAcFff96430b09868",
    PositionManager: "0x75E42e6f01baf1D6022bEa862A28774a9f8a4A0C",

    UniswapGmxEthPool: "0x80A9ae39310abf666A87C743d6ebBD0E8C42158E",
    ReferralStorage: "0xe6fab3f0c7199b0d34d7fbe83394fc0e0d06e99d",
    ReferralReader: "0x8Aa382760BCdCe8644C33e6C2D52f6304A76F5c8",
    Timelock: "0xaa50bD556CE0Fe61D4A57718BA43177a3aB6A597",

    DataStore: "0xFD70de6b91282D8017aA4E741e9Ae325CAb992d8",
    EventEmitter: "0xC8ee91A54287DB53897056e12D9819156D3822Fb",
    SubaccountRouter: "0x78F414436148B8588BDEe4771EA5eB75148668aa",
    ExchangeRouter: "0x7C68C7866A64FA2160F78EEaE12217FFbf871fa8",
    DepositVault: "0xF89e77e8Dc11691C9e8757e84aaFbCD8A67d7A55",
    WithdrawalVault: "0x0628D46b5D145f183AdB6Ef1f2c97eD1C4701C55",
    OrderVault: "0x31eF83a530Fde1B38EE9A18093A333D8Bbbc40D5",
    SyntheticsReader: "0xf60becbba223EEA9495Da3f606753867eC10d139",
    SyntheticsRouter: "0x7452c558d45f8afC8c83dAe62C3f8A5BE19c71f6",

    Multicall: "0xcA11bde05977b3631167028862bE2a173976CA11",
}

const mainTitle = "GMX Contracts"
export const items = async (chain: string): Promise<ContractSchema[]> => {
    const ret: ContractSchema[] = []
    Object.entries(contracts).forEach(([key, val]) => {
        const formattedName = camelToWord(key);
        ret.push({
            title: `${mainTitle}: ${formattedName}`,
            tutorial: "https://github.com/solide-project/solide-guides/blob/master/src/gmx/contracts/README.md",
            reference: "https://gmxio.gitbook.io/gmx/contracts",
            description: `GMX ${key} Contract on ${getNetworkNameFromChainID(chain)}. The GMX contracts are core components and functionalities of the GMX protocol. With a focus on stability and decentralized governance, GMX aims to create a robust ecosystem for users to seamlessly engage in trading and yield farming activities.`,
            playground: {
                default: {
                    address: val,
                    chainId: chain,
                },
            },
        });
    })

    return ret
}


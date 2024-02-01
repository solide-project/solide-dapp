const ETHRegistrarController_CONTRACT =
  "0x253553366da8546fc250f225fe3d25d0c782303b"
const SandBoxLandV3_CONTRACT = "0x976f91d5e0a1eba30ec778965ef4701904fe28ca"
const BoredApeYachtClub_CONTRACT = "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d"
const LilPudgys_CONTRACT = "0x524cab2ec69124574082676e6f654a18df49a048"
const AzukiFloorDataFeed_CONTRACT = "0xa8b9a447c73191744d5b79bce864f343455e1150"

export const items = [
  {
    title: "ETH Registrar Controller (ENS)",
    description:
      "The Arbitrum Bridge facilitates interoperability between the Ethereum and Arbitrum blockchains, allowing users to seamlessly transfer assets and interact with decentralized applications (DApps) across both networks.",
    playground: {
      default: {
        address: ETHRegistrarController_CONTRACT,
      },
    },
  },
  {
    title: "SandBox Land NFT",
    tutorial:
      "https://github.com/SovaSniper/tutorials/blob/master/ethereum/SandboxLandV3.md",
    description:
      "The official Sandbox LAND NFT in The Sandbox's metaverse. Serves as digital real estate for publishing experiences and populating them with assets, with each unique LAND represented as a non-fungible ERC-721 token on the Ethereum blockchain.",
    playground: {
      default: {
        address: SandBoxLandV3_CONTRACT,
      },
    },
  },
  {
    title: "Bored Ape Yacht Club NFT",
    tutorial: "",
    description: "",
    playground: {
      default: {
        address: BoredApeYachtClub_CONTRACT,
      },
    },
  },
  {
    title: "Lil Pudgys NFT",
    tutorial: "",
    description: "",
    playground: {
      default: {
        address: LilPudgys_CONTRACT,
      },
    },
  },
  {
    title: "Chainlink NFT Floor Data Feed: (Azuki NFT)",
    tutorial: "",
    description: "",
    playground: {
      default: {
        address: AzukiFloorDataFeed_CONTRACT,
      },
    },
  },
]

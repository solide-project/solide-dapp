import { ProtocolSchema } from "../schema/protocol"
import { SOLIDE_URL } from "../utils"
import {
  AAVE_ID,
  ARBITRUM_ID,
  ARTELA_ID,
  AZUKI_ID,
  BERACHAIN_ID,
  CHAINLINK_ID,
  COMPOUND_ID,
  ENS_ID,
  ETHEREUM_ID,
  FUSE_ID,
  GMX_ID,
  IMMUTABLE_ID,
  JUICE_BOX_DAO_ID,
  METIS_ID,
  OPEN_ZEPPELIN_ID,
  PUSH_PROTOCOL_ID,
  RONIN_ID,
  TABLELAND_ID,
  THEGRAPH_ID,
  UNISWAP_ID,
  ZEROX_ID,
} from "./ids"

export const protcols: Record<string, ProtocolSchema> = {
  [CHAINLINK_ID]: {
    name: "Chainlink",
    library: "@chainlink/contracts @chainlink/contracts-ccip",
    description:
      "Chainlink smart contracts serve as a robust framework, ensuring the secure integration of decentralized applications (DApps) with external data feeds, web APIs, and traditional bank payments. This framework enhances the reliability and functionality of smart contracts by enabling seamless and trustworthy interactions with real-world data and external systems on the blockchain.",
    github: "https://github.com/smartcontractkit",
    website: "https://chain.link",
    blog: "https://blog.chain.link",
    discord: "https://discord.com/invite/chainlink",
    x: "https://twitter.com/ethereum",
    source: "https://github.com/smartcontractkit/chainlink/tree/master",
  },
  [ETHEREUM_ID]: {
    name: "Ethereum",
    description:
      "Smart contracts on Ethereum enable a wide range of decentralized applications, from decentralized finance (DeFi) protocols and non-fungible tokens (NFTs) to decentralized exchanges and more. They operate autonomously, executing code when triggered by predefined conditions, without the need for centralized control. Deploy and view popular verified contracts on Ethereum.",
    github: "https://github.com/ethereum",
    website: "https://ethereum.org/en",
    blog: "https://blog.ethereum.org",
    discord: "https://discord.com/invite/ethereum-org",
    x: "https://twitter.com/ethereum",
  },
  [OPEN_ZEPPELIN_ID]: {
    name: "OpenZeppelin",
    library: "@openzeppelin/contracts contracts-upgradeable",
    description:
      "OpenZeppelin's smart contract templates to enhance security, reduce development time, and adhere to best practices, contributing to a more robust and standardized ecosystem for decentralized applications.",
    github: "https://github.com/OpenZeppelin",
    source: "https://github.com/OpenZeppelin/openzeppelin-contracts",
    website: "https://openzeppelin.com",
  },
  [UNISWAP_ID]: {
    name: "UniSwap",
    library: "@uniswap/v3-core @uniswap/v3-periphery",
    description:
      "Uniswap's smart contract, deployed on the Ethereum blockchain, is the core component that powers the protocol's decentralized exchange functionality. Uniswap governs the creation and management of liquidity pools, automated token swaps, and the calculation of token prices based on the automated market maker (AMM) algorithm.",
    github: "https://github.com/Uniswap",
    website: "https://uniswap.org",
    blog: "https://blog.uniswap.org",
    discord: "https://discord.com/invite/FCfyBSbCU5",
    x: "https://twitter.com/Uniswap",
  },
  [COMPOUND_ID]: {
    name: "Compound Finance",
    description:
      "Compound Finance, renowned as one of the most secure protocols for managing digital assets, offers a robust framework for decentralized lending and borrowing on the blockchain. The protocol facilitates the creation and utilization of algorithmic interest rates, ensuring efficient and secure financial operations within decentralized finance (DeFi) applications. Compound enables users to lend and borrow various cryptocurrencies, providing a trustworthy platform for optimizing asset utilization and earning interest in a decentralized and transparent manner.",
    github: "https://github.com/compound-finance",
    website: "https://compound.finance",
    blog: "https://medium.com/compound-finance",
    discord: "https://discord.com/invite/fq6JSPkpJn",
    x: "https://twitter.com/compoundfinance",
    documentation: "https://docs.compound.finance",
    audit: "https://docs.compound.finance/v2/security/#audits"
  },
  [ARBITRUM_ID]: {
    name: "Arbitrum",
    library: "@arbitrum/nitro-contracts @arbitrum/token-bridge-contracts",
    description:
      "Arbitrum is a highly scalable, low cost, EVM-compatible Optimistic Rollup. A Layer 2 scaling solution for Ethereum, focusing on off-chain transaction processing for improved performance and scalability while upholding security. It comprises smart contracts, libraries, and data structures that collectively handle transaction batching, execution, administrative tasks, and user interactions.",
    github: "https://github.com/offchainlabs/nitro-contracts",
    website: "https://arbitrum.io",
    blog: "https://arbitrumfoundation.medium.com/",
    discord: "https://discord.com/invite/arbitrum",
    x: "https://twitter.com/arbitrum",
  },
  [METIS_ID]: {
    name: "Metis",
    description:
      "Metis is a Layer 2 rollup platform built on the Ethereum network, offering solutions to Ethereum's challenges such as scalability, transaction speed, and high gas fees. As an Ethereum Layer 2 solution, it leverages Optimistic rollups to provide users with low gas fees, fast transactions, native storage, and enhanced security. The platform's mission is to create an accessible and user-friendly technical environment, making blockchain technology available to individuals and businesses seeking to initiate or expand decentralized applications (dApps) or communities with scalability.",
    github: "https://github.com/MetisProtocol",
    website: "https://www.metis.io/",
    blog: "https://metisdao.medium.com/",
    discord: "https://discord.com/invite/RqfEJZXnxd",
    x: "https://twitter.com/MetisDAO",
  },
  [IMMUTABLE_ID]: {
    name: "Immuntable",
    library: "@imtbl/contracts",
    description:
      "Immutable offers end-to-end Web3 solutions for game development, promising unmatched speed, scale, and flexibility. Their platform, featuring partnerships with prominent gaming entities and support for mainstream gamers, enables easy creation of carbon-neutral NFTs, rapid game development with APIs, and global distribution through an order book. Immutable emphasizes scalability, Ethereum-grade security, and a commitment to carbon neutrality, positioning itself as a key player in the future of Web3 gaming.",
    github: "https://github.com/immutable",
    website: "https://www.immutable.com",
    blog: "https://www.immutable.com/blog",
    discord: "https://discord.com/invite/CYsjMdctsP",
    x: "https://twitter.com/Immutable",
  },
  [AAVE_ID]: {
    name: "Aave",
    library: "@aave/core-v3 @aave/periphery-v3 @aave/safety-module",
    description: "Aave is a decentralized and permissionless DeFi protocol that enables users to instantly lend and borrow cryptocurrencies through liquidity pools, eliminating the need for centralized intermediaries. Aave utilizes smart contracts to automate lending and borrowing processes, with lenders supplying liquidity to earn interest and borrowers accessing overcollateralized loans. The protocol supports various assets and operates across multiple blockchains, emphasizing user control and transparency. Aave also has implemented flash loans contracts, allowing uncollateralized instant loans used for crypto arbitrage trading.",
    github: "https://github.com/aave",
    website: "https://aave.com",
    blog: "https://aave.mirror.xyz",
    documentation: "https://docs.aave.com/developers/getting-started/readme",
    discord: "https://discord.com/invite/aave",
    x: "https://twitter.com/aave",
    audit: "https://docs.aave.com/developers/deployed-contracts/security-and-audits",
  },
  [ZEROX_ID]: {
    name: "0x",
    library:
      "@0x/contracts-utils @0x/contracts-treasury @0x/contracts-erc20 @0x/contracts-zero-ex",
    description:
      "The 0x Protocol is a decentralized exchange infrastructure within the Ethereum ecosystem, providing a foundation for the creation and execution of smart contracts that facilitate tokenized asset exchange. As a leading DeFi protocol, 0x enables developers to integrate decentralized exchange functionalities seamlessly, allowing for the incorporation of token exchange capabilities within their smart contracts.",
    github: "https://github.com/0xProject",
    website: "https://0x.org",
    blog: "https://0x.org/content-hub",
    documentation: "https://0x.org/docs",
    discord: "https://discord.com/invite/official0x",
    x: "https://twitter.com/0xproject",
    audit: "https://0x.org/docs/developer-resources/audits",
  },
  [ENS_ID]: {
    name: "ENS",
    description: "",
    library: "@ensdomains/ens-contracts",
    github: "https://github.com/ensdomains/",
  },
  [TABLELAND_ID]: {
    name: "Tableland",
    library: "@tableland/evm",
    description: "",
    github: "https://github.com/tablelandnetwork",
    source: "https://github.com/tablelandnetwork/evm-tableland",
    website: "https://tableland.xyz/",
  },
  [THEGRAPH_ID]: {
    name: "The Graph",
    library: "@graphprotocol/contracts",
    description:
      "The Graph is an indexing protocol for organizing and accessing data from blockchains and storage networks. It allows developers to search, find, publish, and use the public data they need to build decentralized applications.",
    github: "https://github.com/graphprotocol",
    website: "https://thegraph.com",
    blog: "https://thegraph.com/blog",
    documentation: "https://thegraph.com/docs/en",
    discord: "https://discord.com/invite/graphprotocol",
    x: "https://twitter.com/graphprotocol",
  },
  [ARTELA_ID]: {
    name: "Artela Network",
    library: "@artela/aspect-libs",
    description:
      "The Artela Network is a blockchain ecosystem focused on enhancing the programmability and extensibility of decentralized applications (dApps). Through its innovative Aspect Programming framework, Artela aims to overcome limitations in existing smart contract platforms, allowing for native extensions that provide modular and customizable solutions for developers.",
    github: "https://github.com/artela-network",
    website: "https://artela.network/",
    blog: "https://artela.network/blog",
    documentation: "https://docs.artela.network/develop",
    discord: "https://discord.com/invite/artela",
    x: "https://twitter.com/artela_network",
  },
  [GMX_ID]: {
    name: "GMX",
    library: "",
    description:
      "GMX is a decentralized spot and perpetual exchange platform designed to facilitate low swap fees and minimize price impact for trades. The platform operates through unique multi-asset pools, allowing liquidity providers to earn fees from market making, swap fees, and leverage trading activities.",
    github: "https://github.com/gmx-io",
    website: "https://gmx.io",
    blog: "https://gmxio.substack.com",
    documentation: "https://docs.gmx.io/docs",
    discord: "https://discord.com/invite/H5PeQru3Aa",
    x: "https://twitter.com/GMX_IO",
    audit: "https://github.com/gmx-io/gmx-contracts/tree/master/audits",
  },
  [FUSE_ID]: {
    name: "Fuse Network",
    library: "",
    description:
      "Fuse Network, established in 2019, is a pioneering force in the Web3 landscape, offering an enterprise-grade, reliable, and secure decentralized EVM-compatible public blockchain. Fuse is positioned as a game-changer for entrepreneurs and organizations looking to experiment, launch, and scale Web3 apps.",
    github: "https://github.com/fuseio",
    website: "https://www.fuse.io",
    blog: "https://news.fuse.io",
    documentation: "https://docs.fuse.io",
    discord: "https://discord.com/invite/jpPMeSZ",
    x: "https://twitter.com/Fuse_network",
    audit: "https://github.com/fuseio/fuse-network/tree/master/audits",
  },
  [SOLIDE_URL]: {
    name: "Solide",
    library: "",
    description: "Hehehe",
    github: "",
    website: "",
    blog: "",
    documentation: "",
    discord: "",
    x: "https://twitter.com/SolideProject",
    audit: "",
  },
  [PUSH_PROTOCOL_ID]: {
    name: "Push Protocol",
    library: "",
    description:
      "Push Protocol serves as a revolutionary web3 communication network that facilitates cross-chain notifications and messaging for decentralized applications (dApps), wallets, and various services. Functioning as the world's first blockchain-agnostic decentralized communication protocol for Web3, Push enables the validation and indexing of diverse communications, including notifications and chats.",
    github: "https://github.com/ethereum-push-notification-service",
    website: "https://push.org",
    blog: "https://push.org/blog",
    documentation: "https://push.org/docs",
    discord: "https://discord.com/invite/pushprotocol",
    x: "https://twitter.com/pushprotocol",
    audit:
      "https://push.org/docs/notifications/push-smart-contracts/security-audits",
  },
  [AZUKI_ID]: {
    name: "Chiru Lab (Azuki)",
    library: "erc721a erc721a-upgradeable @chiru-labs/pbt",
    description:
      "Azuki is an anime brand that operates at the crossroads of art, technology, and community, crafting immersive stories and experiences that transcend the boundaries between the physical and digital realms. Chiru Lab's ERC721A, exemplified by the implementation in extension the typical ERC721 NFTs. ERC721A, offers an optimized version of the ERC721 Non-Fungible Token Standard, including the Metadata extension. This contract focuses on minimizing gas usage during batch mints, sequentially assigning token IDs starting from a specified point.",
    github: "https://github.com/chiru-labs",
    website: "https://www.azuki.com",
    documentation: "https://chiru-labs.github.io/ERC721A/#/",
    discord: "https://discord.com/invite/azuki",
    x: "https://twitter.com/azuki"
  },
  [RONIN_ID]: {
    name: "Ronin Chain",
    library: "",
    description:
      "Ronin, an EVM blockchain designed for gaming, introduces technical aspects that distinguish it in the blockchain space. Initially utilizing Proof of Authority (PoA) consensus, Ronin enhanced decentralization by integrating Delegated Proof of Stake (DPoS). In DPoS, anyone holding sufficient RON can become a validator, contributing to transaction verification, block production, and earning rewards. Token holders can delegate their stake to validators, with higher-staked validators having increased chances of selection. The implementation of slashing rules penalizes malicious behavior, ensuring accountability among validators. Ronin's shift to DPoS maintains the advantages of PoA, such as swift transaction speeds and low fees, while addressing concerns about centralization through a more inclusive validator selection process. The technical evolution aligns with Ronin's commitment to optimizing blockchain functionality for gaming applications.",
    github: "https://github.com/axieinfinity",
    website: "https://roninchain.com",
    documentation: "https://docs.roninchain.com",
    blog: "https://roninchain.com/blog",
    discord: "https://discord.com/invite/roninnetwork",
    x: "https://twitter.com/Ronin_Network", 
    audit: "https://docs.skymavis.com/basics/audits"
  },
  [BERACHAIN_ID]: {
    name: "Berachain",
    library: "",
    description:
      "Berachain is a high-performance blockchain, utilizing the Proof-of-Liquidity consensus mechanism, designed to be EVM-compatible and built on the Polaris framework. The innovative Proof-of-Liquidity consensus aligns incentives between Berachain validators and ecosystem projects. Berachain distinguishes itself by being EVM-compatible while providing a modular stack through Polaris EVM for enhanced flexibility and separation of the EVM runtime layer. his makes it easier for developers to transition from Ethereum, although Berachain introduces additional functionalities optimized for proof-of-liquidity and abstracted use cases like decentralized exchanges (DEXs) and oracles.",
    github: "https://github.com/berachain",
    website: "https://www.berachain.com",
    documentation: "https://docs.berachain.com",
    blog: "https://medium.com/berachain-foundation",
    discord: "https://discord.com/invite/berachain",
    x: "https://twitter.com/berachain", 
    audit: ""
  },
  [JUICE_BOX_DAO_ID]: {
    name: "Juice Box DAO",
    library: "@jbx-protocol/juice-contracts-v3 @jbx-protocol/juice-delegates-registry",
    description: "Juicebox (DAO) is a Ethereum funding protocol, acting as a programmable treasury that empowers project creators to efficiently fund, operate, and scale their initiatives on the blockchain. This innovative protocol allows users to configure the rules governing token minting upon fund reception and the conditions for distributing funds to predetermined addresses or reclaiming them by the project's community.",
    github: "https://github.com/jbx-protocol",
    website: "https://juicebox.money",
    documentation: "https://docs.juicebox.money",
    blog: "https://subscribepage.io/juicenews",
    discord: "https://discord.com/invite/wFTh4QnDzk",
    x: "https://twitter.com/juiceboxETH",
    audit: "https://docs.juicebox.money/dev/resources/security"
  },
}

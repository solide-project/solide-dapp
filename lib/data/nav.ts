export const frameworks = [
    {
        value: "chainlink",
        label: "Chainlink",
    },
    {
        value: "ethereum",
        label: "Ethereum",
    },
    {
        value: "openzeppelin",
        label: "OpenZeppelin",
    },
    {
        value: "uniswap",
        label: "Uniswap",
    },
    {
        value: "compound",
        label: "Compound",
    },
    {
        value: "arbitrum",
        label: "Arbitrum",
    },
    {
        value: "tableland",
        label: "Tableland",
    },
    {
        value: "metis",
        label: "Metis",
    },
    {
        value: "aave",
        label: "Aave",
    },
    {
        value: "immutable",
        label: "Immutable",
    },
    {
        value: "the-graph",
        label: "The Graph",
    },
    {
        value: "artela",
        label: "Artela",
    },
    {
        value: "gmx",
        label: "GMX",
    },
    {
        value: "fuse",
        label: "Fuse",
    },
    {
        value: "0x",
        label: "0x",
    },
    {
        value: "push",
        label: "Push Protocol",
    },
    {
        value: "azuki",
        label: "Chiru Labs (Azuki)",
    },
    {
        value: "ronin",
        label: "Ronin",
    },
    {
        value: "juice-box",
        label: "Juice Box DAO",
    },
    {
        value: "berachain",
        label: "Berachain",
    },
    {
        value: "biconomy",
        label: "Biconomy",
    },
    {
        value: "viction",
        label: "Viction",
    },
    {
        value: "callisto",
        label: "Callisto Network",
    },
    {
        value: "lido",
        label: "Lido",
    },
    {
        value: "eigenlayer",
        label: "Eigenlayer",
    },
    {
        value: "bitlayer",
        label: "Bitlayer",
    },
    {
        value: "gitcoin",
        label: "Gitcoin",
    },
    {
        value: "lens",
        label: "Lens",
    },
]


export const getRandomFramework = () => {
    const randomIndex = Math.floor(Math.random() * frameworks.length);
    return frameworks[randomIndex].value || "ethereum";
}
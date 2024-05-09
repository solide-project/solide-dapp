import { reference, tutorial } from "../ronin/ronin-bridge-contracts-deployments";

/**
 * These are single file contracts, so manually add instead of Github call
 */
export const items = [
    {
        title: "Id Staking V2: IdentityStaking",
        tutorial: "https://github.com/gitcoinco/id-staking-v2/blob/main/README.md",
        reference: "https://github.com/gitcoinco/id-staking-v2",
        description:
            "The Identity Staking V2 contract is designed to enable users to stake GTC (Gitcoin) tokens on themselves or others for specific durations, supporting efficient staking and re-staking operations while ensuring gas efficiency. Users can stake on themselves or community members and extend or withdraw their stakes based on unlock times. The contract allows slashing of users for commiting slash-able offenses, with provisions for appealing slash decisions after a minimum appeal period of 90 days. Slashed GTC can potentially be released upon successful appeal",
        playground: {
            default: {
                address: "https://github.com/gitcoinco/id-staking-v2/blob/main/contracts/IdentityStaking.sol",
                remappings: {
                    "@openzeppelin/contracts/": "@openzeppelin/contracts@4.9.3/",
                    "@openzeppelin/contracts-upgradeable/": "@openzeppelin/contracts-upgradeable@4.9.3/"
                }
            },
        },
    },
    {
        title: "Allo Multi Round Checkout: MultiRoundCheckout",
        tutorial: "https://github.com/gitcoinco/allo-multi-round-checkout/blob/main/README.md",
        reference: "https://github.com/gitcoinco/allo-multi-round-checkout",
        description:
            "The MultiRoundCheckout contract simplifies the process of donating to multiple rounds and voting with ERC20 tokens on the Allo V1 protocol by allowing users to perform these actions in a single transaction. Users can donate to multiple rounds with one transaction, streamlining the process and reducing gas fees. Additionally, the contract supports ERC20 permit-compatible tokens, enabling users to sign a permit message in the same transaction as the donation, thereby simplifying the token approval process and further reducing transaction costs.",
        playground: {
            default: {
                address: "https://github.com/gitcoinco/allo-multi-round-checkout/blob/main/contracts/MultiRoundCheckout.sol",
                remappings: {
                    "@openzeppelin/contracts/": "@openzeppelin/contracts@4.9.3/",
                    "@openzeppelin/contracts-upgradeable/": "@openzeppelin/contracts-upgradeable@4.9.3/"
                }
            },
        },
    },
    {
        title: "EasyRetroPGF Allo2 Strategy: EasyRPGFStrategy",
        tutorial: "https://github.com/gitcoinco/easy-retro-pgf-allo2-strategy/blob/main/README.md",
        reference: "https://github.com/gitcoinco/easy-retro-pgf-allo2-strategy",
        description:
            "The EasyRPGFStrategy contract extends BaseStrategy from the Allo V2 protocol, providing functionality for handling pool funds distribution and withdrawal. It initializes with a specified Allo protocol address and strategy name. The withdraw function allows the pool manager to transfer pool funds to a designated recipient address, resetting the pool amount to zero. The _distribute function is used internally by pool managers to distribute funds to specified recipients based on provided amounts. It decodes recipient amounts from a memory parameter and transfers the corresponding amounts to recipients.",
        playground: {
            default: {
                address: "https://github.com/gitcoinco/easy-retro-pgf-allo2-strategy/blob/master/contracts/EasyRPGFStrategy.sol",
                remappings: {
                    "@openzeppelin/contracts/": "@openzeppelin/contracts@4.9.3/",
                    "@openzeppelin/contracts-upgradeable/": "@openzeppelin/contracts-upgradeable@4.9.3/"
                }
            },
        },
    },
]
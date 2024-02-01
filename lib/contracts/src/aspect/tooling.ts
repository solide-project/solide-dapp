import { ContractSchema } from "@/lib/schema/contract"

const mainTitle: string = "Aspect Tooling"

export const items: ContractSchema[] = [
  {
    title: `${mainTitle}: Context`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/aspect/tooling/ContentAspect/README.md",
    reference:
      "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/tests/context-aspect.test.js",
    description:
      "The ContextAspect is an Aspect contract that focused on capturing and logging crucial contextual information during the pre-contract call phase. This aspect provides detailed insights into the blockchain environment, including block details, transaction parameters, and environmental settings. Its integration involves instantiation, setting it as an aspect for the entry point, and exporting necessary functions. While the aspect doesn't alter contract logic, it enhances visibility into the execution environment, aiding developers in debugging, monitoring, and auditing during smart contract development and deployment. The impact on the smart contract depends on how the logged information is leveraged within the broader application.",
    playground: {
      default: {
        address:
          "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/aspect/context-aspect.ts",
      },
    },
    type: "aspect",
  },
  {
    title: `${mainTitle}: Cross Phase State`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/aspect/tooling/CrossPhaseState/README.md",
    reference:
      "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/aspect/cross-phase-state.ts",
    description:
      "The CrossPhaseState Aspect introduces advanced functionality for enhancing the capabilities of smart contracts. Through ownership validation, cross-consensus state management, and transaction execution validation, developers gain a powerful toolset to optimize storage, retrieval, and data integrity. The Aspect ensures that only authorized entities can execute operations, streamlines state updates during pre-transaction execution using transient and mutable storage, and validates the consistency of data post-transaction.",
    playground: {
      default: {
        address:
          "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/aspect/cross-phase-state.ts",
      },
    },
    type: "aspect",
  },
  {
    title: `${mainTitle}: Crypto ECRecover Aspect`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/aspect/tooling/CryptoECRecoverAspect/README.md",
    reference:
      "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/aspect/crypto-ecrecover-aspect.ts",
    description:
      "The CryptoECRecoverAspect is a powerful tool for enhancing smart contract security through advanced signature verification. Leveraging the `IAspectOperation` interface, this contract facilitates the validation of cryptographic signatures embedded in transaction data. Its robust functionality includes Ethereum's elliptic curve recovery mechanism, ensuring secure and reliable authentication of the transaction origin. With input validation checks, transparent logging, and seamless integration into the smart contract development lifecycle, the Aspect empowers developers to fortify the security measures of their decentralized applications.",
    playground: {
      default: {
        address:
          "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/aspect/crypto-ecrecover-aspect.ts",
      },
    },
    type: "aspect",
  },
  {
    title: `${mainTitle}: Crypto Hash Aspect`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/aspect/tooling/CryptoHashAspect/README.md",
    reference:
      "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/aspect/crypto-hash-aspect.ts",
    description:
      "The CryptoHash Aspect is a valuable Aspect enhancing smart contract security through advanced cryptographic operations provided by the IAspectOperation interface. Developers can employ Keccak, SHA-256, and RIPEMD-160 hashing algorithms on transaction data, bolstering data integrity and privacy. The contract facilitates logging for transparent debugging and analysis of cryptographic outputs. Seamlessly integrated into the smart contract development lifecycle, it allows developers to register the Aspect instance, enabling direct access to cryptographic operations during execution.",
    playground: {
      default: {
        address:
          "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/aspect/crypto-hash-aspect.ts",
      },
    },
    type: "aspect",
  },
  {
    title: `${mainTitle}: Guard By Count Aspect`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/aspect/tooling/GuardByCount/README.md",
    reference:
      "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/aspect/guard-by-count.ts",
    description:
      "GuardByCountAspect is an Aspect, that introduces enhanced security measures to fortify smart contracts against reentrancy attacks. Through ownership validation, the Aspect ensures that only authorized entities execute operations, adding a crucial layer of security. Its distinctive feature is the implementation of a call count mechanism within the preContractCall and postContractCall joints, tracked in transient storage, to detect and prevent multiple inner transaction calls. By marking transactions as failed when the call count exceeds 1, this Aspect provides developers with a powerful tool to mitigate reentrancy vulnerabilities.",
    playground: {
      default: {
        address:
          "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/aspect/guard-by-count.ts",
      },
    },
    type: "aspect",
  },
  {
    title: `${mainTitle}: Guard By Lock Aspect`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/aspect/tooling/GuardByLock/README.md",
    reference:
      "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/aspect/guard-by-lock.ts",
    description:
      "The GuardByLock Aspect is a security-focused Aspect designed to fortify smart contracts against reentrancy attacks. It incorporates ownership validation, ensuring that only authorized entities execute operations. The Aspect implements a robust reentrancy protection mechanism through a counting system, utilizing transient storage to manage reentrant locks. By checking and setting these locks before and after contract calls, it effectively prevents unauthorized reentrant access, enhancing the overall security of decentralized applications.",
    playground: {
      default: {
        address:
          "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/aspect/guard-by-lock.ts",
      },
    },
    type: "aspect",
  },
  {
    title: `${mainTitle}: Guard By Trace Aspect`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/aspect/tooling/GuardByTrace/README.md",
    reference:
      "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/aspect/guard-by-trace.ts",
    description:
      "The GuardBTraceAspect contract is a pivotal security enhancement for decentralized finance (DeFi) smart contracts within the Artela blockchain. With a strong focus on transaction integrity and security, this Aspect employs sophisticated mechanisms such as ownership validation, meticulous transaction verification, and comprehensive property checks. The Aspect's post-contract call method meticulously examines balance changes, guaranteeing consistency between system and user financial alterations and triggering proactive reversals in case of discrepancies. Additionally, the contract enforces property validation, contributing to a comprehensive security framework.",
    playground: {
      default: {
        address:
          "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/aspect/guard-by-trace.ts",
      },
    },
    type: "aspect",
  },
  {
    title: `${mainTitle}: Invalid JIT Call Aspect`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/aspect/tooling/InvalidJITCallAspect/README.md",
    reference:
      "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/aspect/invalid-jit-call-aspect.ts",
    description:
      "The InvalidJitCall Aspect introduces dynamic Just-In-Time (JIT) calls for ownership validation, transaction verification, and conditional contract execution. Leveraging JIT calls during various phases via the operation joint point, the contract allows developers to dynamically interact with contract properties, enhancing security and control. By preventing undesired states and unauthorized activities, the InvalidJitCallAspect significantly advances the security, predictability, and reliability of smart contract environments on the Artela blockchain.",
    playground: {
      default: {
        address:
          "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/aspect/invalid-jit-call-aspect.ts",
      },
    },
    type: "aspect",
  },
  {
    title: `${mainTitle}: Multi Read Write Check`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/aspect/tooling/MultiReadWriteCheck/README.md",
    reference:
      "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/aspect/multi-read-write-check.ts",
    description:
      "The MultiReadWriteCheck Aspect introduces advanced integrity verification mechanisms for multi-read and multi-write operations. The core feature, checkMultiReadWriteForContext, meticulously tests single, duplicate, and batch writes, along with multiple reads, guaranteeing the context's integrity under diverse conditions. While a similar mechanism for mutable state, checkMultiReadWriteForState provides developers to customize and employ the smart contract for robust validation.",
    playground: {
      default: {
        address:
          "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/aspect/multi-read-write-check.ts",
      },
    },
    type: "aspect",
  },
  {
    title: `${mainTitle}: State DB Aspect`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/aspect/tooling/StorageAspect/README.md",
    reference:
      "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/aspect/statedb-aspect.ts",
    description:
      "The StateDBAspect contract integration with the contract execution lifecycle, facilitated by the preContractCall and postContractCall joints, enhances understanding and control over the smart contract's behavior. Additionally, the ITransactionVerifier interface enables dynamic interactions with transaction properties, conducting thorough checks for parameters critical to transaction integrity.",
    playground: {
      default: {
        address:
          "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/aspect/statedb-aspect.ts",
      },
    },
    type: "aspect",
  },
  {
    title: `${mainTitle}: Static Call Aspect`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/aspect/tooling/StaticCallAspect/README.md",
    reference:
      "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/aspect/static-call-aspect.ts",
    description:
      "The Static Call Aspect contract is a feature-rich component that significantly enhances the capabilities of smart contracts. By incorporating various joint points such as preTxExecute, preContractCall, postTxExecute and postContractCall, it provides developers with powerful tools. Notably, it enables dynamic static calls during post-contract execution, aiding in testing and debugging. Integration with transaction verification enhances overall security, and the flexibility offered through `IAspectOperation` promotes observability and efficient DApp development.",
    playground: {
      default: {
        address:
          "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/aspect/static-call-aspect.ts",
      },
    },
    type: "aspect",
  },
  {
    title: `${mainTitle}: Storage Aspect`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/aspect/tooling/StorageAspect/README.md",
    reference:
      "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/aspect/storage-aspect.ts",
    description:
      "The StoreAspect contract enhances the functionality and security of smart contracts on Artela by implementing ownership verification and introducing advanced features during different phases of contract execution. During the transaction lifecycle, the Aspect allows developers to manipulate transaction contexts before and after execution, facilitating dynamic modification of transaction parameters and persistent storage of information. Additionally, the contract showcases interactions with mutable state during contract calls, enabling developers to dynamically modify contract states before and after their execution. This Aspect contributes to the flexibility, security, and observability of smart contracts on the Artela blockchain.",
    playground: {
      default: {
        address:
          "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/aspect/storage-aspect.ts",
      },
    },
    type: "aspect",
  },
  {
    title: `${mainTitle}: Type Check Aspect`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/aspect/tooling/TypeCheckAspect/README.md",
    reference:
      "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/aspect/type-check-aspect.ts",
    description:
      "The TypeCheckAspect is a critical component enhancing smart contract security and reliability by enforcing rigorous type checks on various data types and robust numeric handling, the TypeCheckAspect significantly reduces the risk of vulnerabilities, enhances the overall security of smart contract. Executed on the Aspect-Runtime through WebAssembly, this Aspect verifies ownership, performs comprehensive pre-transaction execution checks for strings, booleans, Uint8Arrays, BigInts, and numeric types, and ensures correct storage and retrieval operations.",
    playground: {
      default: {
        address:
          "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/aspect/type-check-aspect.ts",
      },
    },
    type: "aspect",
  },
  {
    title: `${mainTitle}: Verify Aspect`,
    tutorial:
      "https://github.com/solide-project/solide-guides/blob/master/src/aspect/tooling/VerifyAspect/README.md",
    reference:
      "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/aspect/verify-aspect.ts",
    description:
      "The Verify Aspect, serves as a Transaction-Level Aspect that enhances smart contract security by providing transaction verification through the verifyTx method and governance operation ownership checks via the isOwner method. The contract's registration in the Artela framework, along with the export of essential functions like execute and allocate, ensures seamless integration and proper execution of transactions, contributing to a robust and secure smart contract environment on the Artela blockchain.",
    playground: {
      default: {
        address:
          "https://github.com/artela-network/aspect-tooling/blob/main/packages/testcases/aspect/verify-aspect.ts",
      },
    },
    type: "aspect",
  },
]
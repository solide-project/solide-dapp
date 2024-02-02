/**
 * Represents the schema for a contract.
 */
export interface ContractSchema {
  /**
   * The name of the contract (required).
   */
  title: string

  /**
   * Playground configuration for the contract.
   */
  playground: PlaygroundSchema

  /**
   * Optional tutorial information for the contract.
   */
  tutorial?: string

  /**
   * Description of the contract.
   */
  description: string

  /**
   * Optional information indicating that the contract is outdated.
   */
  outdated?: string

  /**
   * Optional array of tags associated with the contract.
   */
  tags?: string[]

  /**
   * Optional type information for the contract.
   */
  type?: string

  /**
   * Optional reference information for the contract.
   */
  reference?: string
}

/**
 * Represents configuration for the playground associated with the contract.
 */
export interface PlaygroundSchema {
  /**
   * Default information for the contract's playground.
   */
  default: SolideIDESchema

  /**
   * Optional information for different chains associated with the contract.
   */
  chains?: {
    [key: string]: SolideIDESchema
  }
}

/**
 * Represents information related to a contract.
 */
export interface SolideIDESchema {
  /**
   * The address of the contract.
   */
  address: string

  /**
   * Optional version information for the contract.
   */
  version?: string

  /**
   * Optional chain ID information for the contract.
   */
  chainId?: string

  /**
   * Optional display chain information for the contract.
   */
  displaychain?: string

  /**
   * Optional remappings for the contract.
   */
  remappings?: Record<string, string>
}

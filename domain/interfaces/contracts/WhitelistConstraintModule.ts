import {
  ContractTransaction,
  ContractInterface,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  WhitelistConstraintModule,
  WhitelistConstraintModuleMethodNames,
  WhitelistConstraintModuleEventsContext,
  WhitelistConstraintModuleEvents
>;

export declare type EventFilter = {
  address?: string;
  topics?: Array<string>;
  fromBlock?: string | number;
  toBlock?: string | number;
};

export interface ContractTransactionOverrides {
  /**
   * The maximum units of gas for the transaction to use
   */
  gasLimit?: number;
  /**
   * The price (in wei) per unit of gas
   */
  gasPrice?: BigNumber | string | number | Promise<any>;
  /**
   * The nonce to use in the transaction
   */
  nonce?: number;
  /**
   * The amount to send with the transaction (i.e. msg.value)
   */
  value?: BigNumber | string | number | Promise<any>;
  /**
   * The chain ID (or network ID) to use
   */
  chainId?: number;
}

export interface ContractCallOverrides {
  /**
   * The address to execute the call as
   */
  from?: string;
  /**
   * The maximum units of gas for the transaction to use
   */
  gasLimit?: number;
}
export type WhitelistConstraintModuleEvents = 'WhitelistEdit';
export interface WhitelistConstraintModuleEventsContext {
  WhitelistEdit(...parameters: any): EventFilter;
}
export type WhitelistConstraintModuleMethodNames =
  | 'new'
  | 'isWhitelisted'
  | 'editWhitelist'
  | 'bulkEditWhitelist'
  | 'executeTransfer'
  | 'getModuleName';
export interface WhitelistEditEventEmittedResponse {
  account: string;
  whitelisted: boolean;
}
export interface WhitelistConstraintModule {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: constructor
   * @param tokenAddress Type: address, Indexed: false
   */
  'new'(
    tokenAddress: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param account Type: address, Indexed: false
   */
  isWhitelisted(
    account: string,
    overrides?: ContractCallOverrides
  ): Promise<boolean>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param account Type: address, Indexed: false
   * @param whitelisted Type: bool, Indexed: false
   */
  editWhitelist(
    account: string,
    whitelisted: boolean,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param accounts Type: address[], Indexed: false
   * @param whitelisted Type: bool, Indexed: false
   */
  bulkEditWhitelist(
    accounts: string[],
    whitelisted: boolean,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   * @param parameter1 Type: bytes32, Indexed: false
   * @param parameter2 Type: address, Indexed: false
   * @param from Type: address, Indexed: false
   * @param to Type: address, Indexed: false
   * @param parameter5 Type: uint256, Indexed: false
   * @param parameter6 Type: bytes, Indexed: false
   * @param parameter7 Type: bytes, Indexed: false
   */
  executeTransfer(
    parameter0: string,
    parameter1: Arrayish,
    parameter2: string,
    from: string,
    to: string,
    parameter5: BigNumberish,
    parameter6: Arrayish,
    parameter7: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getModuleName(overrides?: ContractCallOverrides): Promise<string>;
}

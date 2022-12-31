import {
  ContractTransaction,
  ContractInterface,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  SpendingLimitsConstraintModule,
  SpendingLimitsConstraintModuleMethodNames,
  SpendingLimitsConstraintModuleEventsContext,
  SpendingLimitsConstraintModuleEvents
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
export type SpendingLimitsConstraintModuleEvents =
  | 'TimelockAdded'
  | 'TimelockDeleted'
  | 'TimelockSet';
export interface SpendingLimitsConstraintModuleEventsContext {
  TimelockAdded(...parameters: any): EventFilter;
  TimelockDeleted(...parameters: any): EventFilter;
  TimelockSet(...parameters: any): EventFilter;
}
export type SpendingLimitsConstraintModuleMethodNames =
  | 'new'
  | 'addTimelock'
  | 'setTimelock'
  | 'deleteTimelock'
  | 'executeTransfer'
  | 'getModuleName';
export interface TimelockAddedEventEmittedResponse {
  periodLength: BigNumberish;
  amountAllowed: BigNumberish;
}
export interface TimelockDeletedEventEmittedResponse {
  index: BigNumberish;
}
export interface TimelockSetEventEmittedResponse {
  index: BigNumberish;
  periodLength: BigNumberish;
  amountAllowed: BigNumberish;
}
export interface SpendingLimitsConstraintModule {
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
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param periodLength Type: uint256, Indexed: false
   * @param amountAllowed Type: uint256, Indexed: false
   */
  addTimelock(
    periodLength: BigNumberish,
    amountAllowed: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param index Type: uint256, Indexed: false
   * @param periodLength Type: uint256, Indexed: false
   * @param amountAllowed Type: uint256, Indexed: false
   */
  setTimelock(
    index: BigNumberish,
    periodLength: BigNumberish,
    amountAllowed: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param index Type: uint256, Indexed: false
   */
  deleteTimelock(
    index: BigNumberish,
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
   * @param parameter4 Type: address, Indexed: false
   * @param value Type: uint256, Indexed: false
   * @param parameter6 Type: bytes, Indexed: false
   * @param parameter7 Type: bytes, Indexed: false
   */
  executeTransfer(
    parameter0: string,
    parameter1: Arrayish,
    parameter2: string,
    from: string,
    parameter4: string,
    value: BigNumberish,
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

import {
  ContractTransaction,
  ContractInterface,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  TimeLockConstraintModule,
  TimeLockConstraintModuleMethodNames,
  TimeLockConstraintModuleEventsContext,
  TimeLockConstraintModuleEvents
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
export type TimeLockConstraintModuleEvents =
  | 'AccountTimeLockEdit'
  | 'AmountTimeLockEdit'
  | 'TimeLockEdit';
export interface TimeLockConstraintModuleEventsContext {
  AccountTimeLockEdit(...parameters: any): EventFilter;
  AmountTimeLockEdit(...parameters: any): EventFilter;
  TimeLockEdit(...parameters: any): EventFilter;
}
export type TimeLockConstraintModuleMethodNames =
  | 'new'
  | 'editAmountTimeLock'
  | 'editAccountTimeLock'
  | 'editTimeLock'
  | 'executeTransfer'
  | 'getModuleName'
  | 'getTimeLock'
  | 'getAccountTimeLock'
  | 'getAmountTimeLock';
export interface AccountTimeLockEditEventEmittedResponse {
  account: string;
  time: BigNumberish;
}
export interface AmountTimeLockEditEventEmittedResponse {
  account: string;
  time: BigNumberish;
  amount: BigNumberish;
}
export interface TimeLockEditEventEmittedResponse {
  time: BigNumberish;
}
export interface GetAmountTimeLockResponse {
  time: BigNumber;
  0: BigNumber;
  amount: BigNumber;
  1: BigNumber;
  length: 2;
}
export interface TimeLockConstraintModule {
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
   * @param account Type: address, Indexed: false
   * @param time Type: uint256, Indexed: false
   * @param amount Type: uint256, Indexed: false
   */
  editAmountTimeLock(
    account: string,
    time: BigNumberish,
    amount: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param account Type: address, Indexed: false
   * @param time Type: uint256, Indexed: false
   */
  editAccountTimeLock(
    account: string,
    time: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param time Type: uint256, Indexed: false
   */
  editTimeLock(
    time: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param msg_sender Type: address, Indexed: false
   * @param partition Type: bytes32, Indexed: false
   * @param parameter2 Type: address, Indexed: false
   * @param from Type: address, Indexed: false
   * @param parameter4 Type: address, Indexed: false
   * @param parameter5 Type: uint256, Indexed: false
   * @param parameter6 Type: bytes, Indexed: false
   * @param parameter7 Type: bytes, Indexed: false
   */
  executeTransfer(
    msg_sender: string,
    partition: Arrayish,
    parameter2: string,
    from: string,
    parameter4: string,
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
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getTimeLock(overrides?: ContractCallOverrides): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param account Type: address, Indexed: false
   */
  getAccountTimeLock(
    account: string,
    overrides?: ContractCallOverrides
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param account Type: address, Indexed: false
   */
  getAmountTimeLock(
    account: string,
    overrides?: ContractCallOverrides
  ): Promise<GetAmountTimeLockResponse>;
}

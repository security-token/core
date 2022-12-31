import {
  ContractTransaction,
  ContractInterface,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  VestingPeriodConstraintModule,
  VestingPeriodConstraintModuleMethodNames,
  VestingPeriodConstraintModuleEventsContext,
  VestingPeriodConstraintModuleEvents
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
export type VestingPeriodConstraintModuleEvents = 'VestingOptionsSet';
export interface VestingPeriodConstraintModuleEventsContext {
  VestingOptionsSet(...parameters: any): EventFilter;
}
export type VestingPeriodConstraintModuleMethodNames =
  | 'new'
  | 'setVestingOptions'
  | 'executeTransfer'
  | 'getVestingStart'
  | 'getVestedFractionAfterStart'
  | 'getVestingRatio'
  | 'getAmountSpentByUser'
  | 'getModuleName';
export interface VestingOptionsSetEventEmittedResponse {
  vestingStart: BigNumberish;
  vestedFractionAfterStart: BigNumberish;
  vestingRatio: BigNumberish;
}
export interface VestingPeriodConstraintModule {
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
   * @param vestingStart Type: uint256, Indexed: false
   * @param vestedFractionAfterStart Type: uint256, Indexed: false
   * @param vestingRatio Type: uint256, Indexed: false
   */
  setVestingOptions(
    vestingStart: BigNumberish,
    vestedFractionAfterStart: BigNumberish,
    vestingRatio: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param parameter0 Type: address, Indexed: false
   * @param partition Type: bytes32, Indexed: false
   * @param parameter2 Type: address, Indexed: false
   * @param from Type: address, Indexed: false
   * @param parameter4 Type: address, Indexed: false
   * @param value Type: uint256, Indexed: false
   * @param parameter6 Type: bytes, Indexed: false
   * @param parameter7 Type: bytes, Indexed: false
   */
  executeTransfer(
    parameter0: string,
    partition: Arrayish,
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
  getVestingStart(overrides?: ContractCallOverrides): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getVestedFractionAfterStart(
    overrides?: ContractCallOverrides
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getVestingRatio(overrides?: ContractCallOverrides): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param user Type: address, Indexed: false
   */
  getAmountSpentByUser(
    user: string,
    overrides?: ContractCallOverrides
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getModuleName(overrides?: ContractCallOverrides): Promise<string>;
}

import {
  ContractTransaction,
  ContractInterface,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  IConstrainable,
  IConstrainableMethodNames,
  IConstrainableEventsContext,
  IConstrainableEvents
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
export type IConstrainableEvents = 'ModulesByPartitionSet';
export interface IConstrainableEventsContext {
  ModulesByPartitionSet(...parameters: any): EventFilter;
}
export type IConstrainableMethodNames =
  | 'getModulesByPartition'
  | 'setModulesByPartition';
export interface ModulesByPartitionSetEventEmittedResponse {
  caller: string;
  partition: Arrayish;
  newModules: string[];
}
export interface IConstrainable {
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param partition Type: bytes32, Indexed: false
   */
  getModulesByPartition(
    partition: Arrayish,
    overrides?: ContractCallOverrides
  ): Promise<string[]>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param partition Type: bytes32, Indexed: false
   * @param newModules Type: address[], Indexed: false
   */
  setModulesByPartition(
    partition: Arrayish,
    newModules: string[],
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
}

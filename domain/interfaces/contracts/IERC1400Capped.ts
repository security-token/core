import {
  ContractTransaction,
  ContractInterface,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  IERC1400Capped,
  IERC1400CappedMethodNames,
  IERC1400CappedEventsContext,
  IERC1400CappedEvents
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
export type IERC1400CappedEvents = 'CapSet';
export interface IERC1400CappedEventsContext {
  CapSet(...parameters: any): EventFilter;
}
export type IERC1400CappedMethodNames = 'cap' | 'setCap';
export interface CapSetEventEmittedResponse {
  newCap: BigNumberish;
}
export interface IERC1400Capped {
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  cap(overrides?: ContractCallOverrides): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newCap Type: uint256, Indexed: false
   */
  setCap(
    newCap: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
}

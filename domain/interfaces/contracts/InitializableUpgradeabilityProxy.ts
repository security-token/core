import {
  ContractTransaction,
  ContractInterface,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  InitializableUpgradeabilityProxy,
  InitializableUpgradeabilityProxyMethodNames,
  InitializableUpgradeabilityProxyEventsContext,
  InitializableUpgradeabilityProxyEvents
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
export type InitializableUpgradeabilityProxyEvents = 'Upgraded';
export interface InitializableUpgradeabilityProxyEventsContext {
  Upgraded(...parameters: any): EventFilter;
}
export type InitializableUpgradeabilityProxyMethodNames = 'initialize';
export interface UpgradedEventEmittedResponse {
  implementation: string;
}
export interface InitializableUpgradeabilityProxy {
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param _logic Type: address, Indexed: false
   * @param _data Type: bytes, Indexed: false
   */
  initialize(
    _logic: string,
    _data: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
}

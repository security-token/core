import {
  ContractTransaction,
  ContractInterface,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  InitializableAdminUpgradeabilityProxy,
  InitializableAdminUpgradeabilityProxyMethodNames,
  InitializableAdminUpgradeabilityProxyEventsContext,
  InitializableAdminUpgradeabilityProxyEvents
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
export type InitializableAdminUpgradeabilityProxyEvents =
  | 'AdminChanged'
  | 'Upgraded';
export interface InitializableAdminUpgradeabilityProxyEventsContext {
  AdminChanged(...parameters: any): EventFilter;
  Upgraded(...parameters: any): EventFilter;
}
export type InitializableAdminUpgradeabilityProxyMethodNames =
  | 'admin'
  | 'changeAdmin'
  | 'implementation'
  | 'upgradeTo'
  | 'upgradeToAndCall'
  | 'initialize'
  | 'initialize';
export interface AdminChangedEventEmittedResponse {
  previousAdmin: string;
  newAdmin: string;
}
export interface UpgradedEventEmittedResponse {
  implementation: string;
}
export interface InitializableAdminUpgradeabilityProxy {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  admin(overrides?: ContractTransactionOverrides): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newAdmin Type: address, Indexed: false
   */
  changeAdmin(
    newAdmin: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  implementation(
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param newImplementation Type: address, Indexed: false
   */
  upgradeTo(
    newImplementation: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param newImplementation Type: address, Indexed: false
   * @param data Type: bytes, Indexed: false
   */
  upgradeToAndCall(
    newImplementation: string,
    data: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param _logic Type: address, Indexed: false
   * @param _admin Type: address, Indexed: false
   * @param _data Type: bytes, Indexed: false
   */
  initialize(
    _logic: string,
    _admin: string,
    _data: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
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

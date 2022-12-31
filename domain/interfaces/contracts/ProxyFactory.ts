import {
  ContractTransaction,
  ContractInterface,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  ProxyFactory,
  ProxyFactoryMethodNames,
  ProxyFactoryEventsContext,
  ProxyFactoryEvents
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
export type ProxyFactoryEvents = 'ProxyCreated';
export interface ProxyFactoryEventsContext {
  ProxyCreated(...parameters: any): EventFilter;
}
export type ProxyFactoryMethodNames =
  | 'new'
  | 'deployMinimal'
  | 'deploy'
  | 'deploySigned'
  | 'getDeploymentAddress'
  | 'getSigner';
export interface ProxyCreatedEventEmittedResponse {
  proxy: string;
}
export interface ProxyFactory {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: constructor
   */
  'new'(overrides?: ContractTransactionOverrides): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _logic Type: address, Indexed: false
   * @param _data Type: bytes, Indexed: false
   */
  deployMinimal(
    _logic: string,
    _data: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _salt Type: uint256, Indexed: false
   * @param _logic Type: address, Indexed: false
   * @param _admin Type: address, Indexed: false
   * @param _data Type: bytes, Indexed: false
   */
  deploy(
    _salt: BigNumberish,
    _logic: string,
    _admin: string,
    _data: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _salt Type: uint256, Indexed: false
   * @param _logic Type: address, Indexed: false
   * @param _admin Type: address, Indexed: false
   * @param _data Type: bytes, Indexed: false
   * @param _signature Type: bytes, Indexed: false
   */
  deploySigned(
    _salt: BigNumberish,
    _logic: string,
    _admin: string,
    _data: Arrayish,
    _signature: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _salt Type: uint256, Indexed: false
   * @param _sender Type: address, Indexed: false
   */
  getDeploymentAddress(
    _salt: BigNumberish,
    _sender: string,
    overrides?: ContractCallOverrides
  ): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _salt Type: uint256, Indexed: false
   * @param _logic Type: address, Indexed: false
   * @param _admin Type: address, Indexed: false
   * @param _data Type: bytes, Indexed: false
   * @param _signature Type: bytes, Indexed: false
   */
  getSigner(
    _salt: BigNumberish,
    _logic: string,
    _admin: string,
    _data: Arrayish,
    _signature: Arrayish,
    overrides?: ContractCallOverrides
  ): Promise<string>;
}

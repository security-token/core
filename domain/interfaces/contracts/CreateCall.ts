import {
  ContractTransaction,
  ContractInterface,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  CreateCall,
  CreateCallMethodNames,
  CreateCallEventsContext,
  CreateCallEvents
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
export type CreateCallEvents = 'ContractCreation';
export interface CreateCallEventsContext {
  ContractCreation(...parameters: any): EventFilter;
}
export type CreateCallMethodNames = 'performCreate2' | 'performCreate';
export interface ContractCreationEventEmittedResponse {
  newContract: string;
}
export interface CreateCall {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param value Type: uint256, Indexed: false
   * @param deploymentData Type: bytes, Indexed: false
   * @param salt Type: bytes32, Indexed: false
   */
  performCreate2(
    value: BigNumberish,
    deploymentData: Arrayish,
    salt: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param value Type: uint256, Indexed: false
   * @param deploymentData Type: bytes, Indexed: false
   */
  performCreate(
    value: BigNumberish,
    deploymentData: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
}

import {
  ContractTransaction,
  ContractInterface,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  IERC1400Raw,
  IERC1400RawMethodNames,
  IERC1400RawEventsContext,
  IERC1400RawEvents
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
export type IERC1400RawEvents =
  | 'AuthorizedOperator'
  | 'Issued'
  | 'Redeemed'
  | 'RevokedOperator'
  | 'TransferWithData';
export interface IERC1400RawEventsContext {
  AuthorizedOperator(...parameters: any): EventFilter;
  Issued(...parameters: any): EventFilter;
  Redeemed(...parameters: any): EventFilter;
  RevokedOperator(...parameters: any): EventFilter;
  TransferWithData(...parameters: any): EventFilter;
}
export type IERC1400RawMethodNames =
  | 'name'
  | 'symbol'
  | 'granularity'
  | 'authorizeOperator'
  | 'revokeOperator'
  | 'isOperator';
export interface AuthorizedOperatorEventEmittedResponse {
  operator: string;
  tokenHolder: string;
}
export interface IssuedEventEmittedResponse {
  operator: string;
  to: string;
  value: BigNumberish;
  data: Arrayish;
  operatorData: Arrayish;
}
export interface RedeemedEventEmittedResponse {
  operator: string;
  from: string;
  value: BigNumberish;
  data: Arrayish;
  operatorData: Arrayish;
}
export interface RevokedOperatorEventEmittedResponse {
  operator: string;
  tokenHolder: string;
}
export interface TransferWithDataEventEmittedResponse {
  operator: string;
  from: string;
  to: string;
  value: BigNumberish;
  data: Arrayish;
  operatorData: Arrayish;
}
export interface IERC1400Raw {
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  name(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  symbol(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  granularity(overrides?: ContractCallOverrides): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param operator Type: address, Indexed: false
   */
  authorizeOperator(
    operator: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param operator Type: address, Indexed: false
   */
  revokeOperator(
    operator: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param operator Type: address, Indexed: false
   * @param tokenHolder Type: address, Indexed: false
   */
  isOperator(
    operator: string,
    tokenHolder: string,
    overrides?: ContractCallOverrides
  ): Promise<boolean>;
}

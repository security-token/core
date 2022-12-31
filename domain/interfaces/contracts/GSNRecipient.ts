import {
  ContractTransaction,
  ContractInterface,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  GSNRecipient,
  GSNRecipientMethodNames,
  GSNRecipientEventsContext,
  GSNRecipientEvents
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
export type GSNRecipientEvents = 'RelayHubChanged';
export interface GSNRecipientEventsContext {
  RelayHubChanged(...parameters: any): EventFilter;
}
export type GSNRecipientMethodNames =
  | 'acceptRelayedCall'
  | 'getHubAddr'
  | 'relayHubVersion'
  | 'preRelayedCall'
  | 'postRelayedCall';
export interface RelayHubChangedEventEmittedResponse {
  oldRelayHub: string;
  newRelayHub: string;
}
export interface AcceptRelayedCallResponse {
  result0: BigNumber;
  0: BigNumber;
  result1: string;
  1: string;
  length: 2;
}
export interface GSNRecipient {
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param relay Type: address, Indexed: false
   * @param from Type: address, Indexed: false
   * @param encodedFunction Type: bytes, Indexed: false
   * @param transactionFee Type: uint256, Indexed: false
   * @param gasPrice Type: uint256, Indexed: false
   * @param gasLimit Type: uint256, Indexed: false
   * @param nonce Type: uint256, Indexed: false
   * @param approvalData Type: bytes, Indexed: false
   * @param maxPossibleCharge Type: uint256, Indexed: false
   */
  acceptRelayedCall(
    relay: string,
    from: string,
    encodedFunction: Arrayish,
    transactionFee: BigNumberish,
    gasPrice: BigNumberish,
    gasLimit: BigNumberish,
    nonce: BigNumberish,
    approvalData: Arrayish,
    maxPossibleCharge: BigNumberish,
    overrides?: ContractCallOverrides
  ): Promise<AcceptRelayedCallResponse>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getHubAddr(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  relayHubVersion(overrides?: ContractCallOverrides): Promise<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param context Type: bytes, Indexed: false
   */
  preRelayedCall(
    context: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param context Type: bytes, Indexed: false
   * @param success Type: bool, Indexed: false
   * @param actualCharge Type: uint256, Indexed: false
   * @param preRetVal Type: bytes32, Indexed: false
   */
  postRelayedCall(
    context: Arrayish,
    success: boolean,
    actualCharge: BigNumberish,
    preRetVal: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
}

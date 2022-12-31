import {
  ContractTransaction,
  ContractInterface,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  IERC1400,
  IERC1400MethodNames,
  IERC1400EventsContext,
  IERC1400Events
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
export type IERC1400Events =
  | 'Document'
  | 'IssuedByPartition'
  | 'RedeemedByPartition';
export interface IERC1400EventsContext {
  Document(...parameters: any): EventFilter;
  IssuedByPartition(...parameters: any): EventFilter;
  RedeemedByPartition(...parameters: any): EventFilter;
}
export type IERC1400MethodNames =
  | 'getDocument'
  | 'setDocument'
  | 'isControllable'
  | 'isIssuable'
  | 'issueByPartition'
  | 'redeemByPartition'
  | 'operatorRedeemByPartition'
  | 'renounceControl'
  | 'renounceIssuance';
export interface DocumentEventEmittedResponse {
  name: Arrayish;
  uri: string;
  documentHash: Arrayish;
}
export interface IssuedByPartitionEventEmittedResponse {
  partition: Arrayish;
  operator: string;
  to: string;
  value: BigNumberish;
  data: Arrayish;
  operatorData: Arrayish;
}
export interface RedeemedByPartitionEventEmittedResponse {
  partition: Arrayish;
  operator: string;
  from: string;
  value: BigNumberish;
  data: Arrayish;
  operatorData: Arrayish;
}
export interface GetDocumentResponse {
  result0: string;
  0: string;
  result1: string;
  1: string;
  length: 2;
}
export interface IERC1400 {
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param documentName Type: bytes32, Indexed: false
   */
  getDocument(
    documentName: Arrayish,
    overrides?: ContractCallOverrides
  ): Promise<GetDocumentResponse>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param documentName Type: bytes32, Indexed: false
   * @param uri Type: string, Indexed: false
   * @param documentHash Type: bytes32, Indexed: false
   */
  setDocument(
    documentName: Arrayish,
    uri: string,
    documentHash: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  isControllable(overrides?: ContractCallOverrides): Promise<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  isIssuable(overrides?: ContractCallOverrides): Promise<boolean>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param partition Type: bytes32, Indexed: false
   * @param tokenHolder Type: address, Indexed: false
   * @param value Type: uint256, Indexed: false
   * @param data Type: bytes, Indexed: false
   */
  issueByPartition(
    partition: Arrayish,
    tokenHolder: string,
    value: BigNumberish,
    data: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param partition Type: bytes32, Indexed: false
   * @param value Type: uint256, Indexed: false
   * @param data Type: bytes, Indexed: false
   */
  redeemByPartition(
    partition: Arrayish,
    value: BigNumberish,
    data: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param partition Type: bytes32, Indexed: false
   * @param tokenHolder Type: address, Indexed: false
   * @param value Type: uint256, Indexed: false
   * @param data Type: bytes, Indexed: false
   * @param operatorData Type: bytes, Indexed: false
   */
  operatorRedeemByPartition(
    partition: Arrayish,
    tokenHolder: string,
    value: BigNumberish,
    data: Arrayish,
    operatorData: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  renounceControl(
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   */
  renounceIssuance(
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
}

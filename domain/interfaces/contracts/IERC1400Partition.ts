import {
  ContractTransaction,
  ContractInterface,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  IERC1400Partition,
  IERC1400PartitionMethodNames,
  IERC1400PartitionEventsContext,
  IERC1400PartitionEvents
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
export type IERC1400PartitionEvents =
  | 'AuthorizedOperatorByPartition'
  | 'ChangedPartition'
  | 'RevokedOperatorByPartition'
  | 'Transfer'
  | 'TransferByPartition';
export interface IERC1400PartitionEventsContext {
  AuthorizedOperatorByPartition(...parameters: any): EventFilter;
  ChangedPartition(...parameters: any): EventFilter;
  RevokedOperatorByPartition(...parameters: any): EventFilter;
  Transfer(...parameters: any): EventFilter;
  TransferByPartition(...parameters: any): EventFilter;
}
export type IERC1400PartitionMethodNames =
  | 'totalSupplyByPartition'
  | 'balanceOfByPartition'
  | 'partitionsOf'
  | 'transferByPartition'
  | 'operatorTransferByPartition'
  | 'controllersByPartition'
  | 'authorizeOperatorByPartition'
  | 'revokeOperatorByPartition'
  | 'isOperatorForPartition'
  | 'totalPartitions'
  | 'transferWithData'
  | 'transferFromWithData';
export interface AuthorizedOperatorByPartitionEventEmittedResponse {
  partition: Arrayish;
  operator: string;
  tokenHolder: string;
}
export interface ChangedPartitionEventEmittedResponse {
  fromPartition: Arrayish;
  toPartition: Arrayish;
  value: BigNumberish;
}
export interface RevokedOperatorByPartitionEventEmittedResponse {
  partition: Arrayish;
  operator: string;
  tokenHolder: string;
}
export interface TransferEventEmittedResponse {
  from: string;
  to: string;
  value: BigNumberish;
}
export interface TransferByPartitionEventEmittedResponse {
  fromPartition: Arrayish;
  operator: string;
  from: string;
  to: string;
  value: BigNumberish;
  data: Arrayish;
  operatorData: Arrayish;
}
export interface IERC1400Partition {
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param partition Type: bytes32, Indexed: false
   */
  totalSupplyByPartition(
    partition: Arrayish,
    overrides?: ContractCallOverrides
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param partition Type: bytes32, Indexed: false
   * @param tokenHolder Type: address, Indexed: false
   */
  balanceOfByPartition(
    partition: Arrayish,
    tokenHolder: string,
    overrides?: ContractCallOverrides
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param tokenHolder Type: address, Indexed: false
   */
  partitionsOf(
    tokenHolder: string,
    overrides?: ContractCallOverrides
  ): Promise<string[]>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param partition Type: bytes32, Indexed: false
   * @param to Type: address, Indexed: false
   * @param value Type: uint256, Indexed: false
   * @param data Type: bytes, Indexed: false
   */
  transferByPartition(
    partition: Arrayish,
    to: string,
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
   * @param from Type: address, Indexed: false
   * @param to Type: address, Indexed: false
   * @param value Type: uint256, Indexed: false
   * @param data Type: bytes, Indexed: false
   * @param operatorData Type: bytes, Indexed: false
   */
  operatorTransferByPartition(
    partition: Arrayish,
    from: string,
    to: string,
    value: BigNumberish,
    data: Arrayish,
    operatorData: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param partition Type: bytes32, Indexed: false
   */
  controllersByPartition(
    partition: Arrayish,
    overrides?: ContractCallOverrides
  ): Promise<string[]>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param partition Type: bytes32, Indexed: false
   * @param operator Type: address, Indexed: false
   */
  authorizeOperatorByPartition(
    partition: Arrayish,
    operator: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param partition Type: bytes32, Indexed: false
   * @param operator Type: address, Indexed: false
   */
  revokeOperatorByPartition(
    partition: Arrayish,
    operator: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param partition Type: bytes32, Indexed: false
   * @param operator Type: address, Indexed: false
   * @param tokenHolder Type: address, Indexed: false
   */
  isOperatorForPartition(
    partition: Arrayish,
    operator: string,
    tokenHolder: string,
    overrides?: ContractCallOverrides
  ): Promise<boolean>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  totalPartitions(overrides?: ContractCallOverrides): Promise<string[]>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param to Type: address, Indexed: false
   * @param value Type: uint256, Indexed: false
   * @param data Type: bytes, Indexed: false
   */
  transferWithData(
    to: string,
    value: BigNumberish,
    data: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param from Type: address, Indexed: false
   * @param to Type: address, Indexed: false
   * @param value Type: uint256, Indexed: false
   * @param data Type: bytes, Indexed: false
   * @param operatorData Type: bytes, Indexed: false
   */
  transferFromWithData(
    from: string,
    to: string,
    value: BigNumberish,
    data: Arrayish,
    operatorData: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
}

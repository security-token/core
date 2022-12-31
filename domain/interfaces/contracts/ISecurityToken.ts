import {
  ContractTransaction,
  ContractInterface,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  ISecurityToken,
  ISecurityTokenMethodNames,
  ISecurityTokenEventsContext,
  ISecurityTokenEvents
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
export type ISecurityTokenEvents =
  | 'AuthorizedOperator'
  | 'AuthorizedOperatorByPartition'
  | 'CapSet'
  | 'ChangedPartition'
  | 'Document'
  | 'Issued'
  | 'IssuedByPartition'
  | 'Redeemed'
  | 'RedeemedByPartition'
  | 'RevokedOperator'
  | 'RevokedOperatorByPartition'
  | 'RoleGranted'
  | 'RoleRenounced'
  | 'RoleRevoked'
  | 'TransferByPartition'
  | 'TransferWithData';
export interface ISecurityTokenEventsContext {
  AuthorizedOperator(...parameters: any): EventFilter;
  AuthorizedOperatorByPartition(...parameters: any): EventFilter;
  CapSet(...parameters: any): EventFilter;
  ChangedPartition(...parameters: any): EventFilter;
  Document(...parameters: any): EventFilter;
  Issued(...parameters: any): EventFilter;
  IssuedByPartition(...parameters: any): EventFilter;
  Redeemed(...parameters: any): EventFilter;
  RedeemedByPartition(...parameters: any): EventFilter;
  RevokedOperator(...parameters: any): EventFilter;
  RevokedOperatorByPartition(...parameters: any): EventFilter;
  RoleGranted(...parameters: any): EventFilter;
  RoleRenounced(...parameters: any): EventFilter;
  RoleRevoked(...parameters: any): EventFilter;
  TransferByPartition(...parameters: any): EventFilter;
  TransferWithData(...parameters: any): EventFilter;
}
export type ISecurityTokenMethodNames =
  | 'addPartitionProxy'
  | 'bulkIssueByPartition'
  | 'getModulesByPartition'
  | 'setModulesByPartition'
  | 'addRole'
  | 'removeRole'
  | 'renounceRole'
  | 'hasRole'
  | 'acceptRelayedCall'
  | 'getHubAddr'
  | 'relayHubVersion'
  | 'preRelayedCall'
  | 'postRelayedCall'
  | 'name'
  | 'symbol'
  | 'totalSupply'
  | 'balanceOf'
  | 'granularity'
  | 'totalSupplyByPartition'
  | 'partitionProxies'
  | 'balanceOfByPartition'
  | 'partitionsOf'
  | 'transferByPartition'
  | 'operatorTransferByPartition'
  | 'controllersByPartition'
  | 'authorizeOperatorByPartition'
  | 'revokeOperatorByPartition'
  | 'isOperatorForPartition'
  | 'totalPartitions'
  | 'getDocument'
  | 'setDocument'
  | 'isControllable'
  | 'isIssuable'
  | 'issueByPartition'
  | 'operatorRedeemByPartition'
  | 'renounceControl'
  | 'renounceIssuance'
  | 'cap'
  | 'setCap'
  | 'setGSNAllowed'
  | 'getGSNAllowed';
export interface AuthorizedOperatorEventEmittedResponse {
  operator: string;
  tokenHolder: string;
}
export interface AuthorizedOperatorByPartitionEventEmittedResponse {
  partition: Arrayish;
  operator: string;
  tokenHolder: string;
}
export interface CapSetEventEmittedResponse {
  newCap: BigNumberish;
}
export interface ChangedPartitionEventEmittedResponse {
  fromPartition: Arrayish;
  toPartition: Arrayish;
  value: BigNumberish;
}
export interface DocumentEventEmittedResponse {
  documentName: Arrayish;
  uri: string;
  documentHash: Arrayish;
}
export interface IssuedEventEmittedResponse {
  operator: string;
  to: string;
  value: BigNumberish;
  data: Arrayish;
  operatorData: Arrayish;
}
export interface IssuedByPartitionEventEmittedResponse {
  partition: Arrayish;
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
export interface RedeemedByPartitionEventEmittedResponse {
  partition: Arrayish;
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
export interface RevokedOperatorByPartitionEventEmittedResponse {
  partition: Arrayish;
  operator: string;
  tokenHolder: string;
}
export interface RoleGrantedEventEmittedResponse {
  role: Arrayish;
  account: string;
  sender: string;
}
export interface RoleRenouncedEventEmittedResponse {
  role: Arrayish;
  account: string;
}
export interface RoleRevokedEventEmittedResponse {
  role: Arrayish;
  account: string;
  sender: string;
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
export interface TransferWithDataEventEmittedResponse {
  operator: string;
  from: string;
  to: string;
  value: BigNumberish;
  data: Arrayish;
  operatorData: Arrayish;
}
export interface AcceptRelayedCallResponse {
  result0: BigNumber;
  0: BigNumber;
  result1: string;
  1: string;
  length: 2;
}
export interface GetDocumentResponse {
  result0: string;
  0: string;
  result1: string;
  1: string;
  length: 2;
}
export interface ISecurityToken {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param partition Type: bytes32, Indexed: false
   * @param proxyAddress Type: address, Indexed: false
   */
  addPartitionProxy(
    partition: Arrayish,
    proxyAddress: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param partition Type: bytes32, Indexed: false
   * @param tokenHolders Type: address[], Indexed: false
   * @param values Type: uint256[], Indexed: false
   * @param data Type: bytes, Indexed: false
   */
  bulkIssueByPartition(
    partition: Arrayish,
    tokenHolders: string[],
    values: BigNumberish[],
    data: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getModulesByPartition(overrides?: ContractCallOverrides): Promise<string[]>;
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
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param role Type: bytes32, Indexed: false
   * @param account Type: address, Indexed: false
   */
  addRole(
    role: Arrayish,
    account: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param role Type: bytes32, Indexed: false
   * @param account Type: address, Indexed: false
   */
  removeRole(
    role: Arrayish,
    account: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param role Type: bytes32, Indexed: false
   */
  renounceRole(
    role: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param role Type: bytes32, Indexed: false
   * @param account Type: address, Indexed: false
   */
  hasRole(
    role: Arrayish,
    account: string,
    overrides?: ContractCallOverrides
  ): Promise<boolean>;
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
  totalSupply(overrides?: ContractCallOverrides): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param owner Type: address, Indexed: false
   */
  balanceOf(
    owner: string,
    overrides?: ContractCallOverrides
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  granularity(overrides?: ContractCallOverrides): Promise<BigNumber>;
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
   */
  partitionProxies(overrides?: ContractCallOverrides): Promise<string[]>;
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
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param allow Type: bool, Indexed: false
   */
  setGSNAllowed(
    allow: boolean,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   */
  getGSNAllowed(overrides?: ContractCallOverrides): Promise<boolean>;
}

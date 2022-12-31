import {
  ContractTransaction,
  ContractInterface,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  IRelayHub,
  IRelayHubMethodNames,
  IRelayHubEventsContext,
  IRelayHubEvents
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
export type IRelayHubEvents =
  | 'CanRelayFailed'
  | 'Deposited'
  | 'Penalized'
  | 'RelayAdded'
  | 'RelayRemoved'
  | 'Staked'
  | 'TransactionRelayed'
  | 'Unstaked'
  | 'Withdrawn';
export interface IRelayHubEventsContext {
  CanRelayFailed(...parameters: any): EventFilter;
  Deposited(...parameters: any): EventFilter;
  Penalized(...parameters: any): EventFilter;
  RelayAdded(...parameters: any): EventFilter;
  RelayRemoved(...parameters: any): EventFilter;
  Staked(...parameters: any): EventFilter;
  TransactionRelayed(...parameters: any): EventFilter;
  Unstaked(...parameters: any): EventFilter;
  Withdrawn(...parameters: any): EventFilter;
}
export type IRelayHubMethodNames =
  | 'stake'
  | 'registerRelay'
  | 'removeRelayByOwner'
  | 'unstake'
  | 'getRelay'
  | 'depositFor'
  | 'balanceOf'
  | 'withdraw'
  | 'canRelay'
  | 'relayCall'
  | 'requiredGas'
  | 'maxPossibleCharge'
  | 'penalizeRepeatedNonce'
  | 'penalizeIllegalTransaction'
  | 'getNonce';
export interface CanRelayFailedEventEmittedResponse {
  relay: string;
  from: string;
  to: string;
  selector: Arrayish;
  reason: BigNumberish;
}
export interface DepositedEventEmittedResponse {
  recipient: string;
  from: string;
  amount: BigNumberish;
}
export interface PenalizedEventEmittedResponse {
  relay: string;
  sender: string;
  amount: BigNumberish;
}
export interface RelayAddedEventEmittedResponse {
  relay: string;
  owner: string;
  transactionFee: BigNumberish;
  stake: BigNumberish;
  unstakeDelay: BigNumberish;
  url: string;
}
export interface RelayRemovedEventEmittedResponse {
  relay: string;
  unstakeTime: BigNumberish;
}
export interface StakedEventEmittedResponse {
  relay: string;
  stake: BigNumberish;
  unstakeDelay: BigNumberish;
}
export interface TransactionRelayedEventEmittedResponse {
  relay: string;
  from: string;
  to: string;
  selector: Arrayish;
  status: BigNumberish;
  charge: BigNumberish;
}
export interface UnstakedEventEmittedResponse {
  relay: string;
  stake: BigNumberish;
}
export interface WithdrawnEventEmittedResponse {
  account: string;
  dest: string;
  amount: BigNumberish;
}
export interface GetRelayResponse {
  totalStake: BigNumber;
  0: BigNumber;
  unstakeDelay: BigNumber;
  1: BigNumber;
  unstakeTime: BigNumber;
  2: BigNumber;
  owner: string;
  3: string;
  state: number;
  4: number;
  length: 5;
}
export interface CanRelayResponse {
  status: BigNumber;
  0: BigNumber;
  recipientContext: string;
  1: string;
  length: 2;
}
export interface IRelayHub {
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param relayaddr Type: address, Indexed: false
   * @param unstakeDelay Type: uint256, Indexed: false
   */
  stake(
    relayaddr: string,
    unstakeDelay: BigNumberish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param transactionFee Type: uint256, Indexed: false
   * @param url Type: string, Indexed: false
   */
  registerRelay(
    transactionFee: BigNumberish,
    url: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param relay Type: address, Indexed: false
   */
  removeRelayByOwner(
    relay: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param relay Type: address, Indexed: false
   */
  unstake(
    relay: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param relay Type: address, Indexed: false
   */
  getRelay(
    relay: string,
    overrides?: ContractCallOverrides
  ): Promise<GetRelayResponse>;
  /**
   * Payable: true
   * Constant: false
   * StateMutability: payable
   * Type: function
   * @param target Type: address, Indexed: false
   */
  depositFor(
    target: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param target Type: address, Indexed: false
   */
  balanceOf(
    target: string,
    overrides?: ContractCallOverrides
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param amount Type: uint256, Indexed: false
   * @param dest Type: address, Indexed: false
   */
  withdraw(
    amount: BigNumberish,
    dest: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param relay Type: address, Indexed: false
   * @param from Type: address, Indexed: false
   * @param to Type: address, Indexed: false
   * @param encodedFunction Type: bytes, Indexed: false
   * @param transactionFee Type: uint256, Indexed: false
   * @param gasPrice Type: uint256, Indexed: false
   * @param gasLimit Type: uint256, Indexed: false
   * @param nonce Type: uint256, Indexed: false
   * @param signature Type: bytes, Indexed: false
   * @param approvalData Type: bytes, Indexed: false
   */
  canRelay(
    relay: string,
    from: string,
    to: string,
    encodedFunction: Arrayish,
    transactionFee: BigNumberish,
    gasPrice: BigNumberish,
    gasLimit: BigNumberish,
    nonce: BigNumberish,
    signature: Arrayish,
    approvalData: Arrayish,
    overrides?: ContractCallOverrides
  ): Promise<CanRelayResponse>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param from Type: address, Indexed: false
   * @param to Type: address, Indexed: false
   * @param encodedFunction Type: bytes, Indexed: false
   * @param transactionFee Type: uint256, Indexed: false
   * @param gasPrice Type: uint256, Indexed: false
   * @param gasLimit Type: uint256, Indexed: false
   * @param nonce Type: uint256, Indexed: false
   * @param signature Type: bytes, Indexed: false
   * @param approvalData Type: bytes, Indexed: false
   */
  relayCall(
    from: string,
    to: string,
    encodedFunction: Arrayish,
    transactionFee: BigNumberish,
    gasPrice: BigNumberish,
    gasLimit: BigNumberish,
    nonce: BigNumberish,
    signature: Arrayish,
    approvalData: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param relayedCallStipend Type: uint256, Indexed: false
   */
  requiredGas(
    relayedCallStipend: BigNumberish,
    overrides?: ContractCallOverrides
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param relayedCallStipend Type: uint256, Indexed: false
   * @param gasPrice Type: uint256, Indexed: false
   * @param transactionFee Type: uint256, Indexed: false
   */
  maxPossibleCharge(
    relayedCallStipend: BigNumberish,
    gasPrice: BigNumberish,
    transactionFee: BigNumberish,
    overrides?: ContractCallOverrides
  ): Promise<BigNumber>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param unsignedTx1 Type: bytes, Indexed: false
   * @param signature1 Type: bytes, Indexed: false
   * @param unsignedTx2 Type: bytes, Indexed: false
   * @param signature2 Type: bytes, Indexed: false
   */
  penalizeRepeatedNonce(
    unsignedTx1: Arrayish,
    signature1: Arrayish,
    unsignedTx2: Arrayish,
    signature2: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param unsignedTx Type: bytes, Indexed: false
   * @param signature Type: bytes, Indexed: false
   */
  penalizeIllegalTransaction(
    unsignedTx: Arrayish,
    signature: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param from Type: address, Indexed: false
   */
  getNonce(from: string, overrides?: ContractCallOverrides): Promise<BigNumber>;
}

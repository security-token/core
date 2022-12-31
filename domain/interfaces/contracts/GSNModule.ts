import {
  ContractTransaction,
  ContractInterface,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  GSNModule,
  GSNModuleMethodNames,
  GSNModuleEventsContext,
  GSNModuleEvents
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
export type GSNModuleEvents = undefined;
export interface GSNModuleEventsContext {}
export type GSNModuleMethodNames =
  | 'getHubAddr'
  | 'acceptRelayedCall'
  | 'preRelayedCall'
  | 'postRelayedCall';
export interface AcceptRelayedCallResponse {
  result0: BigNumber;
  0: BigNumber;
  result1: string;
  1: string;
  length: 2;
}
export interface GSNModule {
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
   * @param parameter0 Type: address, Indexed: false
   * @param parameter1 Type: address, Indexed: false
   * @param parameter2 Type: bytes, Indexed: false
   * @param parameter3 Type: uint256, Indexed: false
   * @param parameter4 Type: uint256, Indexed: false
   * @param parameter5 Type: uint256, Indexed: false
   * @param parameter6 Type: uint256, Indexed: false
   * @param parameter7 Type: bytes, Indexed: false
   * @param parameter8 Type: uint256, Indexed: false
   */
  acceptRelayedCall(
    parameter0: string,
    parameter1: string,
    parameter2: Arrayish,
    parameter3: BigNumberish,
    parameter4: BigNumberish,
    parameter5: BigNumberish,
    parameter6: BigNumberish,
    parameter7: Arrayish,
    parameter8: BigNumberish,
    overrides?: ContractCallOverrides
  ): Promise<AcceptRelayedCallResponse>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param parameter0 Type: bytes, Indexed: false
   */
  preRelayedCall(
    parameter0: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param parameter0 Type: bytes, Indexed: false
   * @param parameter1 Type: bool, Indexed: false
   * @param parameter2 Type: uint256, Indexed: false
   * @param parameter3 Type: bytes32, Indexed: false
   */
  postRelayedCall(
    parameter0: Arrayish,
    parameter1: boolean,
    parameter2: BigNumberish,
    parameter3: Arrayish,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
}

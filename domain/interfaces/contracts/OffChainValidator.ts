import {
  ContractTransaction,
  ContractInterface,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  OffChainValidator,
  OffChainValidatorMethodNames,
  OffChainValidatorEventsContext,
  OffChainValidatorEvents
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
export type OffChainValidatorEvents = undefined;
export interface OffChainValidatorEventsContext {}
export type OffChainValidatorMethodNames = 'executeTransfer' | 'getModuleName';
export interface OffChainValidator {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param msg_sender Type: address, Indexed: false
   * @param partition Type: bytes32, Indexed: false
   * @param operator Type: address, Indexed: false
   * @param from Type: address, Indexed: false
   * @param to Type: address, Indexed: false
   * @param value Type: uint256, Indexed: false
   * @param data Type: bytes, Indexed: false
   * @param operatorData Type: bytes, Indexed: false
   */
  executeTransfer(
    msg_sender: string,
    partition: Arrayish,
    operator: string,
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
   */
  getModuleName(overrides?: ContractCallOverrides): Promise<string>;
}

import {
  ContractTransaction,
  ContractInterface,
  BytesLike as Arrayish,
  BigNumber,
  BigNumberish,
} from 'ethers';
import { EthersContractContextV5 } from 'ethereum-abi-types-generator';

export type ContractContext = EthersContractContextV5<
  ERC1820Registry,
  ERC1820RegistryMethodNames,
  ERC1820RegistryEventsContext,
  ERC1820RegistryEvents
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
export type ERC1820RegistryEvents = undefined;
export interface ERC1820RegistryEventsContext {}
export type ERC1820RegistryMethodNames =
  | 'setInterfaceImplementer'
  | 'getInterfaceImplementer'
  | 'setManager'
  | 'getManager';
export interface ERC1820Registry {
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _addr Type: address, Indexed: false
   * @param _interfaceHash Type: bytes32, Indexed: false
   * @param _implementer Type: address, Indexed: false
   */
  setInterfaceImplementer(
    _addr: string,
    _interfaceHash: Arrayish,
    _implementer: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _addr Type: address, Indexed: false
   * @param _interfaceHash Type: bytes32, Indexed: false
   */
  getInterfaceImplementer(
    _addr: string,
    _interfaceHash: Arrayish,
    overrides?: ContractCallOverrides
  ): Promise<string>;
  /**
   * Payable: false
   * Constant: false
   * StateMutability: nonpayable
   * Type: function
   * @param _addr Type: address, Indexed: false
   * @param _newManager Type: address, Indexed: false
   */
  setManager(
    _addr: string,
    _newManager: string,
    overrides?: ContractTransactionOverrides
  ): Promise<ContractTransaction>;
  /**
   * Payable: false
   * Constant: true
   * StateMutability: view
   * Type: function
   * @param _addr Type: address, Indexed: false
   */
  getManager(_addr: string, overrides?: ContractCallOverrides): Promise<string>;
}

import { Transaction } from "../schema/transaction_pb";

export interface IAccountProvider {
  getAddress(): Promise<string>;
  getAmount(): Promise<BigInt>;

  connected(): Promise<boolean>;
  connect(): Promise<boolean>;
  disconnect(): Promise<boolean>;

  signMessage(message: string): Promise<string>;
  sendTransaction<T>(tx: Transaction): Promise<T>;
}

import { SecurityToken, Issuer, Document, Partition } from "../schema/token_pb";
import { Account } from "../schema/account_pb";
import { Wallet } from "../schema/wallet_pb";

export interface IWallet {
  getWallet(): Promise<Wallet>;
  setWallet(wallet: Wallet): Promise<boolean>;

  getCertifiedIssuer(address: string): Promise<Issuer.Metadata | null>;
  getCertifiedProject(address: string): Promise<SecurityToken.Metadata | null>;
}

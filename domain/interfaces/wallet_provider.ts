import { SecurityToken, Issuer, Document, Partition } from "../schema/token_pb";
import { Wallet } from "../schema/wallet_pb";

export interface IWalletProvider {
  getWallet(): Promise<Wallet>;
  setWallet(wallet: Wallet): Promise<boolean>;

  getCertifiedIssuer(address: string): Promise<Issuer.Metadata | undefined>;
  getCertifiedProject(address: string): Promise<SecurityToken.Metadata | undefined>;
}

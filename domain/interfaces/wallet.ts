import { SecurityToken, Issuer, Document, Partition } from "../schema/token_pb";
import { Account } from "../schema/account_pb";
import { Wallet } from "../schema/wallet_pb";

type IssuerData = [Issuer.Metadata, boolean];
type ProjectData = [SecurityToken.Metadata, boolean];

export interface IWallet {
  getWallet(): Promise<Wallet>;
  setWallet(wallet: Wallet): Promise<boolean>;

  getCertifiedIssuer(address: string): Promise<IssuerData>;
  getCertifiedProject(address: string): Promise<ProjectData>;
}

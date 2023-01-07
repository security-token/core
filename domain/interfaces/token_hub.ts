import { SecurityToken, Issuer } from "../schema/token_pb";
import { Account } from "../schema/account_pb";

export interface ITokenHub {
  getCertifiedHeader(address: string): Promise<SecurityToken.Metadata | undefined>;

  getIssuer(address: string): Promise<Issuer>;

  isFavorite(address: string): Promise<boolean>;
  getFavorites(): Promise<string[]>;
  addFavorite(address: string): Promise<boolean>;
  removeFavorite(address: string): Promise<boolean>;

  getAccounts(address: string): Promise<string[]>;
  getAccount(account: string): Promise<Account>;
}

import { SecurityToken, Issuer } from "../schema/token_pb";
import { Account } from "../schema/account_pb";

export interface ITokenHub {
  getProject(address: string): Promise<SecurityToken.Metadata | undefined>;
  isCertifiedProject(address: string): Promise<boolean>;

  getIssuer(address: string): Promise<Issuer | undefined>;
  isCertifiedIssuer(address: string): Promise<boolean>;

  getProjects(): Promise<string[]>;
  addProject(address: string): Promise<boolean>;
  removeProject(address: string): Promise<boolean>;

  getProjectAccounts(address: string): Promise<string[]>;
  getProjectAccount(account: string): Promise<Account.Metadata | undefined>;
  addProjectAccount(address: string, account: Account.Metadata): Promise<boolean>;
  removeProjectAccount(address: string, account: string): Promise<boolean>;
}

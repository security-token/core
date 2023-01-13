import { SecurityToken, Issuer } from "../schema/token_pb";
import { Account } from "../schema/account_pb";

export interface ITokenHub {
  getIssuerDetails(address: string): Promise<Issuer.Metadata>;
  isCertifiedIssuer(address: string): Promise<boolean>;

  getProjects(): Promise<string[]>;
  addProject(address: string): Promise<boolean>;
  removeProject(address: string): Promise<boolean>;

  getProjectDetails(address: string): Promise<SecurityToken.Metadata>;
  setProjectDetails(address: string, details: SecurityToken.Metadata): Promise<boolean>;
  isCertifiedProject(address: string): Promise<boolean>;

  getProjectAccounts(address: string): Promise<string[]>;
  addProjectAccount(address: string, account: string): Promise<boolean>;
  removeProjectAccount(address: string, account: string): Promise<boolean>;

  getAccountDetails(account: string): Promise<Account.Metadata>;
  setAccountDetails(account: string, data: Account.Metadata): Promise<boolean>;
}

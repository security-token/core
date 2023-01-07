import { SecurityToken, Issuer } from "../schema/token_pb";
import { Account } from "../schema/account_pb";

export interface ITokenHub {
  getProject(address: string): Promise<SecurityToken.Metadata>;
  isCertifiedProject(address: string): Promise<boolean>;

  getIssuer(address: string): Promise<Issuer.Metadata>;
  isCertifiedIssuer(address: string): Promise<boolean>;

  getProjects(): Promise<string[]>;
  addProject(address: string): Promise<boolean>;
  removeProject(address: string): Promise<boolean>;

  getProjectAccounts(address: string): Promise<string[]>;
  addProjectAccount(address: string, account: string): Promise<boolean>;
  removeProjectAccount(address: string, account: string): Promise<boolean>;
  
  getProjectAccount(account: string): Promise<Account.Metadata>;
  setProjectAccount(account: string, data: Account.Metadata): Promise<boolean>;

}

import { Transaction } from "../schema/transaction_pb";
import { SecurityToken } from "../schema/token_pb";

export interface ISecurityTokenFactory {
  getTokenMetadata(address: string): Promise<SecurityToken.Metadata>;
  
  deployNewSecurityToken(tx: Transaction): Promise<Transaction.Metadata>;
}

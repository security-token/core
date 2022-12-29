import { Transaction } from "../schema/transaction_pb";

export interface ISecurityTokenFactory {
  deployNewSecurityToken(tx: Transaction): Promise<Transaction.Metadata>;
}

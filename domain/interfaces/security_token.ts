import { SecurityToken, Document, Partition } from "../schema/token_pb";

export interface ISecurityToken {
  balanceOfByPartition(address: string, partition: string, account: string): Promise<number>;
  getDocuments(address: string): Promise<string[]>;
  getDocument(address: string, name: string): Promise<Document>;
  getPartitions(address: string, account: string): Promise<string[]>;
  getPartition(address: string, partition: string): Promise<Partition>;
  getToken(address: string): Promise<SecurityToken>;
  isOperatorForPartition(address: string, partition: string, account: string): Promise<boolean>;
  totalSupplyByPartition(address: string, partition: string): Promise<number>;
}

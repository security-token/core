import { SecurityToken, Document } from "../schema/token_pb";

export interface ISecurityToken {
  getToken(address: string): Promise<SecurityToken>;

  getDocuments(address: string): Promise<string[]>;
  getDocument(address: string, name: string): Promise<Document>;
}

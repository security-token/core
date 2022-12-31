import { SecurityToken } from "../schema/token_pb";

export interface ISecurityToken {
  getToken(address: string): Promise<SecurityToken>;
}

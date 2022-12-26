// package: transaction
// file: proto/transaction.proto

import * as jspb from "google-protobuf";
import * as proto_token_pb from "../proto/token_pb";

export class DeployToken extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  getGranularity(): number;
  setGranularity(value: number): void;

  getCap(): number;
  setCap(value: number): void;

  getAdmin(): string;
  setAdmin(value: string): void;

  getController(): string;
  setController(value: string): void;

  getIssuer(): string;
  setIssuer(value: string): void;

  getRedeemer(): string;
  setRedeemer(value: string): void;

  getModuleEditor(): string;
  setModuleEditor(value: string): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): proto_token_pb.Metadata | undefined;
  setMetadata(value?: proto_token_pb.Metadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployToken.AsObject;
  static toObject(includeInstance: boolean, msg: DeployToken): DeployToken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeployToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployToken;
  static deserializeBinaryFromReader(message: DeployToken, reader: jspb.BinaryReader): DeployToken;
}

export namespace DeployToken {
  export type AsObject = {
    name: string,
    symbol: string,
    granularity: number,
    cap: number,
    admin: string,
    controller: string,
    issuer: string,
    redeemer: string,
    moduleEditor: string,
    metadata?: proto_token_pb.Metadata.AsObject,
  }
}

export class Transfer extends jspb.Message {
  getRecipient(): string;
  setRecipient(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transfer.AsObject;
  static toObject(includeInstance: boolean, msg: Transfer): Transfer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Transfer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transfer;
  static deserializeBinaryFromReader(message: Transfer, reader: jspb.BinaryReader): Transfer;
}

export namespace Transfer {
  export type AsObject = {
    recipient: string,
    amount: number,
  }
}

export class IssueByPartition extends jspb.Message {
  getPartition(): string;
  setPartition(value: string): void;

  getRecipient(): string;
  setRecipient(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IssueByPartition.AsObject;
  static toObject(includeInstance: boolean, msg: IssueByPartition): IssueByPartition.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: IssueByPartition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IssueByPartition;
  static deserializeBinaryFromReader(message: IssueByPartition, reader: jspb.BinaryReader): IssueByPartition;
}

export namespace IssueByPartition {
  export type AsObject = {
    partition: string,
    recipient: string,
    amount: number,
  }
}

export class Transaction extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  getToken(): string;
  setToken(value: string): void;

  getNetwork(): number;
  setNetwork(value: number): void;

  hasDeploytoken(): boolean;
  clearDeploytoken(): void;
  getDeploytoken(): DeployToken | undefined;
  setDeploytoken(value?: DeployToken): void;

  hasTransfer(): boolean;
  clearTransfer(): void;
  getTransfer(): Transfer | undefined;
  setTransfer(value?: Transfer): void;

  hasIssuebypartition(): boolean;
  clearIssuebypartition(): void;
  getIssuebypartition(): IssueByPartition | undefined;
  setIssuebypartition(value?: IssueByPartition): void;

  getDataCase(): Transaction.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    hash: string,
    token: string,
    network: number,
    deploytoken?: DeployToken.AsObject,
    transfer?: Transfer.AsObject,
    issuebypartition?: IssueByPartition.AsObject,
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    DEPLOYTOKEN = 4,
    TRANSFER = 5,
    ISSUEBYPARTITION = 6,
  }
}


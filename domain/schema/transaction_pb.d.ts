// package: transaction
// file: schema/transaction.proto

import * as jspb from "google-protobuf";
import * as schema_token_pb from "../schema/token_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class DeployNewSecurityToken extends jspb.Message {
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
  getMetadata(): schema_token_pb.SecurityToken.Metadata | undefined;
  setMetadata(value?: schema_token_pb.SecurityToken.Metadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeployNewSecurityToken.AsObject;
  static toObject(includeInstance: boolean, msg: DeployNewSecurityToken): DeployNewSecurityToken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeployNewSecurityToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeployNewSecurityToken;
  static deserializeBinaryFromReader(message: DeployNewSecurityToken, reader: jspb.BinaryReader): DeployNewSecurityToken;
}

export namespace DeployNewSecurityToken {
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
    metadata?: schema_token_pb.SecurityToken.Metadata.AsObject,
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
  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): Transaction.Metadata | undefined;
  setMetadata(value?: Transaction.Metadata): void;

  getContract(): string;
  setContract(value: string): void;

  getNetwork(): number;
  setNetwork(value: number): void;

  hasDeploynewsecuritytoken(): boolean;
  clearDeploynewsecuritytoken(): void;
  getDeploynewsecuritytoken(): DeployNewSecurityToken | undefined;
  setDeploynewsecuritytoken(value?: DeployNewSecurityToken): void;

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
    metadata?: Transaction.Metadata.AsObject,
    contract: string,
    network: number,
    deploynewsecuritytoken?: DeployNewSecurityToken.AsObject,
    transfer?: Transfer.AsObject,
    issuebypartition?: IssueByPartition.AsObject,
  }

  export class Metadata extends jspb.Message {
    getHash(): string;
    setHash(value: string): void;

    hasDate(): boolean;
    clearDate(): void;
    getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

    getReverted(): string;
    setReverted(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Metadata.AsObject;
    static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Metadata;
    static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
  }

  export namespace Metadata {
    export type AsObject = {
      hash: string,
      date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      reverted: string,
    }
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    DEPLOYNEWSECURITYTOKEN = 4,
    TRANSFER = 5,
    ISSUEBYPARTITION = 6,
  }
}


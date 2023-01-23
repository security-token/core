// package: wallet
// file: schema/wallet.proto

import * as jspb from "google-protobuf";
import * as schema_account_pb from "../schema/account_pb";
import * as schema_token_pb from "../schema/token_pb";
import * as schema_transaction_pb from "../schema/transaction_pb";

export class Wallet extends jspb.Message {
  getAccount(): string;
  setAccount(value: string): void;

  getNetworkid(): string;
  setNetworkid(value: string): void;

  getProjectsMap(): jspb.Map<string, Wallet.Project>;
  clearProjectsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Wallet.AsObject;
  static toObject(includeInstance: boolean, msg: Wallet): Wallet.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Wallet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Wallet;
  static deserializeBinaryFromReader(message: Wallet, reader: jspb.BinaryReader): Wallet;
}

export namespace Wallet {
  export type AsObject = {
    account: string,
    networkid: string,
    projectsMap: Array<[string, Wallet.Project.AsObject]>,
  }

  export class Project extends jspb.Message {
    hasToken(): boolean;
    clearToken(): void;
    getToken(): schema_token_pb.SecurityToken.Metadata | undefined;
    setToken(value?: schema_token_pb.SecurityToken.Metadata): void;

    getPartitionsMap(): jspb.Map<string, schema_token_pb.Partition.Metadata>;
    clearPartitionsMap(): void;
    getDocumentsMap(): jspb.Map<string, schema_token_pb.Document.Metadata>;
    clearDocumentsMap(): void;
    getAccountsMap(): jspb.Map<string, schema_account_pb.Account.Metadata>;
    clearAccountsMap(): void;
    clearTransactionsList(): void;
    getTransactionsList(): Array<schema_transaction_pb.Transaction>;
    setTransactionsList(value: Array<schema_transaction_pb.Transaction>): void;
    addTransactions(value?: schema_transaction_pb.Transaction, index?: number): schema_transaction_pb.Transaction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Project.AsObject;
    static toObject(includeInstance: boolean, msg: Project): Project.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Project, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Project;
    static deserializeBinaryFromReader(message: Project, reader: jspb.BinaryReader): Project;
  }

  export namespace Project {
    export type AsObject = {
      token?: schema_token_pb.SecurityToken.Metadata.AsObject,
      partitionsMap: Array<[string, schema_token_pb.Partition.Metadata.AsObject]>,
      documentsMap: Array<[string, schema_token_pb.Document.Metadata.AsObject]>,
      accountsMap: Array<[string, schema_account_pb.Account.Metadata.AsObject]>,
      transactionsList: Array<schema_transaction_pb.Transaction.AsObject>,
    }
  }
}


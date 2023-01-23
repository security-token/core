// package: cli
// file: schema/cli.proto

import * as jspb from "google-protobuf";
import * as schema_token_pb from "../schema/token_pb";

export class Command extends jspb.Message {
  getNetworkid(): string;
  setNetworkid(value: string): void;

  hasStoreproject(): boolean;
  clearStoreproject(): void;
  getStoreproject(): Command.StoreProject | undefined;
  setStoreproject(value?: Command.StoreProject): void;

  getDataCase(): Command.DataCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Command.AsObject;
  static toObject(includeInstance: boolean, msg: Command): Command.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Command, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Command;
  static deserializeBinaryFromReader(message: Command, reader: jspb.BinaryReader): Command;
}

export namespace Command {
  export type AsObject = {
    networkid: string,
    storeproject?: Command.StoreProject.AsObject,
  }

  export class StoreProject extends jspb.Message {
    getAddress(): string;
    setAddress(value: string): void;

    hasMetadata(): boolean;
    clearMetadata(): void;
    getMetadata(): schema_token_pb.SecurityToken.Metadata | undefined;
    setMetadata(value?: schema_token_pb.SecurityToken.Metadata): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): StoreProject.AsObject;
    static toObject(includeInstance: boolean, msg: StoreProject): StoreProject.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: StoreProject, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): StoreProject;
    static deserializeBinaryFromReader(message: StoreProject, reader: jspb.BinaryReader): StoreProject;
  }

  export namespace StoreProject {
    export type AsObject = {
      address: string,
      metadata?: schema_token_pb.SecurityToken.Metadata.AsObject,
    }
  }

  export enum DataCase {
    DATA_NOT_SET = 0,
    STOREPROJECT = 2,
  }
}


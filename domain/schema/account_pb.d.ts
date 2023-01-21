// package: account
// file: schema/account.proto

import * as jspb from "google-protobuf";

export class Account extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  clearRolesList(): void;
  getRolesList(): Array<string>;
  setRolesList(value: Array<string>): void;
  addRoles(value: string, index?: number): string;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): Account.Metadata | undefined;
  setMetadata(value?: Account.Metadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Account.AsObject;
  static toObject(includeInstance: boolean, msg: Account): Account.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Account, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Account;
  static deserializeBinaryFromReader(message: Account, reader: jspb.BinaryReader): Account;
}

export namespace Account {
  export type AsObject = {
    address: string,
    rolesList: Array<string>,
    metadata?: Account.Metadata.AsObject,
  }

  export class Metadata extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getAvatar(): string;
    setAvatar(value: string): void;

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
      name: string,
      avatar: string,
    }
  }
}


// package: token
// file: schema/token.proto

import * as jspb from "google-protobuf";

export class SecurityToken extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getSymbol(): string;
  setSymbol(value: string): void;

  getGranularity(): number;
  setGranularity(value: number): void;

  getCap(): number;
  setCap(value: number): void;

  getTotalsupply(): number;
  setTotalsupply(value: number): void;

  hasMetadata(): boolean;
  clearMetadata(): void;
  getMetadata(): SecurityToken.Metadata | undefined;
  setMetadata(value?: SecurityToken.Metadata): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SecurityToken.AsObject;
  static toObject(includeInstance: boolean, msg: SecurityToken): SecurityToken.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SecurityToken, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SecurityToken;
  static deserializeBinaryFromReader(message: SecurityToken, reader: jspb.BinaryReader): SecurityToken;
}

export namespace SecurityToken {
  export type AsObject = {
    name: string,
    symbol: string,
    granularity: number,
    cap: number,
    totalsupply: number,
    metadata?: SecurityToken.Metadata.AsObject,
  }

  export class Metadata extends jspb.Message {
    getIcon(): string;
    setIcon(value: string): void;

    getBgimage(): string;
    setBgimage(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;

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
      icon: string,
      bgimage: string,
      description: string,
    }
  }
}


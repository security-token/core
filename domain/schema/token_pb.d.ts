// package: token
// file: schema/token.proto

import * as jspb from "google-protobuf";

export class SecurityToken extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

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
    address: string,
    name: string,
    symbol: string,
    granularity: number,
    cap: number,
    totalsupply: number,
    metadata?: SecurityToken.Metadata.AsObject,
  }

  export class Metadata extends jspb.Message {
    getLogo(): string;
    setLogo(value: string): void;

    getIssuer(): string;
    setIssuer(value: string): void;

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
      logo: string,
      issuer: string,
    }
  }
}

export class Issuer extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): void;

  getLogo(): string;
  setLogo(value: string): void;

  getBgimage(): string;
  setBgimage(value: string): void;

  getName(): string;
  setName(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Issuer.AsObject;
  static toObject(includeInstance: boolean, msg: Issuer): Issuer.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Issuer, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Issuer;
  static deserializeBinaryFromReader(message: Issuer, reader: jspb.BinaryReader): Issuer;
}

export namespace Issuer {
  export type AsObject = {
    address: string,
    logo: string,
    bgimage: string,
    name: string,
    description: string,
  }
}

export class Document extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getUri(): string;
  setUri(value: string): void;

  getHash(): string;
  setHash(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Document.AsObject;
  static toObject(includeInstance: boolean, msg: Document): Document.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Document, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Document;
  static deserializeBinaryFromReader(message: Document, reader: jspb.BinaryReader): Document;
}

export namespace Document {
  export type AsObject = {
    name: string,
    uri: string,
    hash: string,
  }
}


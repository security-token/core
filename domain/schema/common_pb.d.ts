// package: common
// file: schema/common.proto

import * as jspb from "google-protobuf";

export class Property extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getValue(): string;
  setValue(value: string): void;

  getUnit(): string;
  setUnit(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Property.AsObject;
  static toObject(includeInstance: boolean, msg: Property): Property.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Property, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Property;
  static deserializeBinaryFromReader(message: Property, reader: jspb.BinaryReader): Property;
}

export namespace Property {
  export type AsObject = {
    name: string,
    value: string,
    unit: string,
  }
}


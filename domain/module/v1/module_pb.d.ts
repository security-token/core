// @generated by protoc-gen-es v1.1.1
// @generated from file module/v1/module.proto (package module.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from message module.v1.Module
 */
export declare class Module extends Message<Module> {
  constructor(data?: PartialMessage<Module>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "module.v1.Module";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Module;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Module;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Module;

  static equals(a: Module | PlainMessage<Module> | undefined, b: Module | PlainMessage<Module> | undefined): boolean;
}


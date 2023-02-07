// package: transaction
// file: schema/transaction.proto

import * as jspb from "google-protobuf";
import * as schema_token_pb from "../schema/token_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_duration_pb from "google-protobuf/google/protobuf/duration_pb";

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
  getDeploynewsecuritytoken(): Transaction.SecurityTokenFactory.DeployNewSecurityToken | undefined;
  setDeploynewsecuritytoken(value?: Transaction.SecurityTokenFactory.DeployNewSecurityToken): void;

  hasBulkissuebypartition(): boolean;
  clearBulkissuebypartition(): void;
  getBulkissuebypartition(): Transaction.SecurityToken.BulkIssueByPartition | undefined;
  setBulkissuebypartition(value?: Transaction.SecurityToken.BulkIssueByPartition): void;

  hasSetdocument(): boolean;
  clearSetdocument(): void;
  getSetdocument(): Transaction.SecurityToken.SetDocument | undefined;
  setSetdocument(value?: Transaction.SecurityToken.SetDocument): void;

  hasIssuebypartition(): boolean;
  clearIssuebypartition(): void;
  getIssuebypartition(): Transaction.SecurityToken.IssueByPartition | undefined;
  setIssuebypartition(value?: Transaction.SecurityToken.IssueByPartition): void;

  hasRedeembypartition(): boolean;
  clearRedeembypartition(): void;
  getRedeembypartition(): Transaction.SecurityToken.RedeemByPartition | undefined;
  setRedeembypartition(value?: Transaction.SecurityToken.RedeemByPartition): void;

  hasOperatorredeembypartition(): boolean;
  clearOperatorredeembypartition(): void;
  getOperatorredeembypartition(): Transaction.SecurityToken.OperatorRedeemByPartition | undefined;
  setOperatorredeembypartition(value?: Transaction.SecurityToken.OperatorRedeemByPartition): void;

  hasRenouncecontrol(): boolean;
  clearRenouncecontrol(): void;
  getRenouncecontrol(): Transaction.SecurityToken.RenounceControl | undefined;
  setRenouncecontrol(value?: Transaction.SecurityToken.RenounceControl): void;

  hasRenounceissuance(): boolean;
  clearRenounceissuance(): void;
  getRenounceissuance(): Transaction.SecurityToken.RenounceIssuance | undefined;
  setRenounceissuance(value?: Transaction.SecurityToken.RenounceIssuance): void;

  hasPause(): boolean;
  clearPause(): void;
  getPause(): Transaction.Pausable.Pause | undefined;
  setPause(value?: Transaction.Pausable.Pause): void;

  hasUnpause(): boolean;
  clearUnpause(): void;
  getUnpause(): Transaction.Pausable.Unpause | undefined;
  setUnpause(value?: Transaction.Pausable.Unpause): void;

  hasTransferownership(): boolean;
  clearTransferownership(): void;
  getTransferownership(): Transaction.Ownable.TransferOwnership | undefined;
  setTransferownership(value?: Transaction.Ownable.TransferOwnership): void;

  hasAuthorizeoperator(): boolean;
  clearAuthorizeoperator(): void;
  getAuthorizeoperator(): Transaction.ERC1400Raw.AuthorizeOperator | undefined;
  setAuthorizeoperator(value?: Transaction.ERC1400Raw.AuthorizeOperator): void;

  hasRevokeoperator(): boolean;
  clearRevokeoperator(): void;
  getRevokeoperator(): Transaction.ERC1400Raw.RevokeOperator | undefined;
  setRevokeoperator(value?: Transaction.ERC1400Raw.RevokeOperator): void;

  hasTransferbypartition(): boolean;
  clearTransferbypartition(): void;
  getTransferbypartition(): Transaction.ERC1400Partition.TransferByPartition | undefined;
  setTransferbypartition(value?: Transaction.ERC1400Partition.TransferByPartition): void;

  hasOperatortransferbypartition(): boolean;
  clearOperatortransferbypartition(): void;
  getOperatortransferbypartition(): Transaction.ERC1400Partition.OperatorTransferByPartition | undefined;
  setOperatortransferbypartition(value?: Transaction.ERC1400Partition.OperatorTransferByPartition): void;

  hasAuthorizeoperatorbypartition(): boolean;
  clearAuthorizeoperatorbypartition(): void;
  getAuthorizeoperatorbypartition(): Transaction.ERC1400Partition.AuthorizeOperatorByPartition | undefined;
  setAuthorizeoperatorbypartition(value?: Transaction.ERC1400Partition.AuthorizeOperatorByPartition): void;

  hasRevokeoperatorbypartition(): boolean;
  clearRevokeoperatorbypartition(): void;
  getRevokeoperatorbypartition(): Transaction.ERC1400Partition.RevokeOperatorByPartition | undefined;
  setRevokeoperatorbypartition(value?: Transaction.ERC1400Partition.RevokeOperatorByPartition): void;

  hasTransferwithdata(): boolean;
  clearTransferwithdata(): void;
  getTransferwithdata(): Transaction.ERC1400Partition.TransferWithData | undefined;
  setTransferwithdata(value?: Transaction.ERC1400Partition.TransferWithData): void;

  hasTransferfromwithdata(): boolean;
  clearTransferfromwithdata(): void;
  getTransferfromwithdata(): Transaction.ERC1400Partition.TransferFromWithData | undefined;
  setTransferfromwithdata(value?: Transaction.ERC1400Partition.TransferFromWithData): void;

  hasTransfer(): boolean;
  clearTransfer(): void;
  getTransfer(): Transaction.ERC1400ERC20.Transfer | undefined;
  setTransfer(value?: Transaction.ERC1400ERC20.Transfer): void;

  hasApprove(): boolean;
  clearApprove(): void;
  getApprove(): Transaction.ERC1400ERC20.Approve | undefined;
  setApprove(value?: Transaction.ERC1400ERC20.Approve): void;

  hasTransferfrom(): boolean;
  clearTransferfrom(): void;
  getTransferfrom(): Transaction.ERC1400ERC20.TransferFrom | undefined;
  setTransferfrom(value?: Transaction.ERC1400ERC20.TransferFrom): void;

  hasSetcap(): boolean;
  clearSetcap(): void;
  getSetcap(): Transaction.ERC1400Capped.SetCap | undefined;
  setSetcap(value?: Transaction.ERC1400Capped.SetCap): void;

  hasSetmodulesbypartition(): boolean;
  clearSetmodulesbypartition(): void;
  getSetmodulesbypartition(): Transaction.Constrainable.SetModulesByPartition | undefined;
  setSetmodulesbypartition(value?: Transaction.Constrainable.SetModulesByPartition): void;

  hasAddrole(): boolean;
  clearAddrole(): void;
  getAddrole(): Transaction.Administrable.AddRole | undefined;
  setAddrole(value?: Transaction.Administrable.AddRole): void;

  hasBulkaddrole(): boolean;
  clearBulkaddrole(): void;
  getBulkaddrole(): Transaction.Administrable.BulkAddRole | undefined;
  setBulkaddrole(value?: Transaction.Administrable.BulkAddRole): void;

  hasRemoverole(): boolean;
  clearRemoverole(): void;
  getRemoverole(): Transaction.Administrable.RemoveRole | undefined;
  setRemoverole(value?: Transaction.Administrable.RemoveRole): void;

  hasRenouncerole(): boolean;
  clearRenouncerole(): void;
  getRenouncerole(): Transaction.Administrable.RenounceRole | undefined;
  setRenouncerole(value?: Transaction.Administrable.RenounceRole): void;

  hasDeployspendinglimitsconstraintmodule(): boolean;
  clearDeployspendinglimitsconstraintmodule(): void;
  getDeployspendinglimitsconstraintmodule(): Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule | undefined;
  setDeployspendinglimitsconstraintmodule(value?: Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule): void;

  hasAddtimelock(): boolean;
  clearAddtimelock(): void;
  getAddtimelock(): Transaction.SpendingLimitsConstraintModule.AddTimelock | undefined;
  setAddtimelock(value?: Transaction.SpendingLimitsConstraintModule.AddTimelock): void;

  hasSettimelock(): boolean;
  clearSettimelock(): void;
  getSettimelock(): Transaction.SpendingLimitsConstraintModule.SetTimelock | undefined;
  setSettimelock(value?: Transaction.SpendingLimitsConstraintModule.SetTimelock): void;

  hasDeletetimelock(): boolean;
  clearDeletetimelock(): void;
  getDeletetimelock(): Transaction.SpendingLimitsConstraintModule.DeleteTimelock | undefined;
  setDeletetimelock(value?: Transaction.SpendingLimitsConstraintModule.DeleteTimelock): void;

  hasDeploytimelockconstraintmodule(): boolean;
  clearDeploytimelockconstraintmodule(): void;
  getDeploytimelockconstraintmodule(): Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule | undefined;
  setDeploytimelockconstraintmodule(value?: Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule): void;

  hasEditamounttimelock(): boolean;
  clearEditamounttimelock(): void;
  getEditamounttimelock(): Transaction.TimeLockConstraintModule.EditAmountTimeLock | undefined;
  setEditamounttimelock(value?: Transaction.TimeLockConstraintModule.EditAmountTimeLock): void;

  hasEditaccounttimelock(): boolean;
  clearEditaccounttimelock(): void;
  getEditaccounttimelock(): Transaction.TimeLockConstraintModule.EditAccountTimeLock | undefined;
  setEditaccounttimelock(value?: Transaction.TimeLockConstraintModule.EditAccountTimeLock): void;

  hasEdittimelock(): boolean;
  clearEdittimelock(): void;
  getEdittimelock(): Transaction.TimeLockConstraintModule.EditTimeLock | undefined;
  setEdittimelock(value?: Transaction.TimeLockConstraintModule.EditTimeLock): void;

  hasDeployvestingperiodconstraintmodule(): boolean;
  clearDeployvestingperiodconstraintmodule(): void;
  getDeployvestingperiodconstraintmodule(): Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule | undefined;
  setDeployvestingperiodconstraintmodule(value?: Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule): void;

  hasSetvestingoptions(): boolean;
  clearSetvestingoptions(): void;
  getSetvestingoptions(): Transaction.VestingPeriodConstraintModule.SetVestingOptions | undefined;
  setSetvestingoptions(value?: Transaction.VestingPeriodConstraintModule.SetVestingOptions): void;

  hasDeploywhitelistconstraintmodule(): boolean;
  clearDeploywhitelistconstraintmodule(): void;
  getDeploywhitelistconstraintmodule(): Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule | undefined;
  setDeploywhitelistconstraintmodule(value?: Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule): void;

  hasEditwhitelist(): boolean;
  clearEditwhitelist(): void;
  getEditwhitelist(): Transaction.WhitelistConstraintModule.EditWhitelist | undefined;
  setEditwhitelist(value?: Transaction.WhitelistConstraintModule.EditWhitelist): void;

  hasBulkeditwhitelist(): boolean;
  clearBulkeditwhitelist(): void;
  getBulkeditwhitelist(): Transaction.WhitelistConstraintModule.BulkEditWhitelist | undefined;
  setBulkeditwhitelist(value?: Transaction.WhitelistConstraintModule.BulkEditWhitelist): void;

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
    deploynewsecuritytoken?: Transaction.SecurityTokenFactory.DeployNewSecurityToken.AsObject,
    bulkissuebypartition?: Transaction.SecurityToken.BulkIssueByPartition.AsObject,
    setdocument?: Transaction.SecurityToken.SetDocument.AsObject,
    issuebypartition?: Transaction.SecurityToken.IssueByPartition.AsObject,
    redeembypartition?: Transaction.SecurityToken.RedeemByPartition.AsObject,
    operatorredeembypartition?: Transaction.SecurityToken.OperatorRedeemByPartition.AsObject,
    renouncecontrol?: Transaction.SecurityToken.RenounceControl.AsObject,
    renounceissuance?: Transaction.SecurityToken.RenounceIssuance.AsObject,
    pause?: Transaction.Pausable.Pause.AsObject,
    unpause?: Transaction.Pausable.Unpause.AsObject,
    transferownership?: Transaction.Ownable.TransferOwnership.AsObject,
    authorizeoperator?: Transaction.ERC1400Raw.AuthorizeOperator.AsObject,
    revokeoperator?: Transaction.ERC1400Raw.RevokeOperator.AsObject,
    transferbypartition?: Transaction.ERC1400Partition.TransferByPartition.AsObject,
    operatortransferbypartition?: Transaction.ERC1400Partition.OperatorTransferByPartition.AsObject,
    authorizeoperatorbypartition?: Transaction.ERC1400Partition.AuthorizeOperatorByPartition.AsObject,
    revokeoperatorbypartition?: Transaction.ERC1400Partition.RevokeOperatorByPartition.AsObject,
    transferwithdata?: Transaction.ERC1400Partition.TransferWithData.AsObject,
    transferfromwithdata?: Transaction.ERC1400Partition.TransferFromWithData.AsObject,
    transfer?: Transaction.ERC1400ERC20.Transfer.AsObject,
    approve?: Transaction.ERC1400ERC20.Approve.AsObject,
    transferfrom?: Transaction.ERC1400ERC20.TransferFrom.AsObject,
    setcap?: Transaction.ERC1400Capped.SetCap.AsObject,
    setmodulesbypartition?: Transaction.Constrainable.SetModulesByPartition.AsObject,
    addrole?: Transaction.Administrable.AddRole.AsObject,
    bulkaddrole?: Transaction.Administrable.BulkAddRole.AsObject,
    removerole?: Transaction.Administrable.RemoveRole.AsObject,
    renouncerole?: Transaction.Administrable.RenounceRole.AsObject,
    deployspendinglimitsconstraintmodule?: Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule.AsObject,
    addtimelock?: Transaction.SpendingLimitsConstraintModule.AddTimelock.AsObject,
    settimelock?: Transaction.SpendingLimitsConstraintModule.SetTimelock.AsObject,
    deletetimelock?: Transaction.SpendingLimitsConstraintModule.DeleteTimelock.AsObject,
    deploytimelockconstraintmodule?: Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule.AsObject,
    editamounttimelock?: Transaction.TimeLockConstraintModule.EditAmountTimeLock.AsObject,
    editaccounttimelock?: Transaction.TimeLockConstraintModule.EditAccountTimeLock.AsObject,
    edittimelock?: Transaction.TimeLockConstraintModule.EditTimeLock.AsObject,
    deployvestingperiodconstraintmodule?: Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule.AsObject,
    setvestingoptions?: Transaction.VestingPeriodConstraintModule.SetVestingOptions.AsObject,
    deploywhitelistconstraintmodule?: Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule.AsObject,
    editwhitelist?: Transaction.WhitelistConstraintModule.EditWhitelist.AsObject,
    bulkeditwhitelist?: Transaction.WhitelistConstraintModule.BulkEditWhitelist.AsObject,
  }

  export class SecurityTokenFactory extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SecurityTokenFactory.AsObject;
    static toObject(includeInstance: boolean, msg: SecurityTokenFactory): SecurityTokenFactory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SecurityTokenFactory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SecurityTokenFactory;
    static deserializeBinaryFromReader(message: SecurityTokenFactory, reader: jspb.BinaryReader): SecurityTokenFactory;
  }

  export namespace SecurityTokenFactory {
    export type AsObject = {
    }

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
  }

  export class SecurityToken extends jspb.Message {
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
    }

    export class BulkIssueByPartition extends jspb.Message {
      getPartition(): Uint8Array | string;
      getPartition_asU8(): Uint8Array;
      getPartition_asB64(): string;
      setPartition(value: Uint8Array | string): void;

      clearTokenholdersList(): void;
      getTokenholdersList(): Array<string>;
      setTokenholdersList(value: Array<string>): void;
      addTokenholders(value: string, index?: number): string;

      clearValuesList(): void;
      getValuesList(): Array<number>;
      setValuesList(value: Array<number>): void;
      addValues(value: number, index?: number): number;

      getData(): Uint8Array | string;
      getData_asU8(): Uint8Array;
      getData_asB64(): string;
      setData(value: Uint8Array | string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): BulkIssueByPartition.AsObject;
      static toObject(includeInstance: boolean, msg: BulkIssueByPartition): BulkIssueByPartition.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: BulkIssueByPartition, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): BulkIssueByPartition;
      static deserializeBinaryFromReader(message: BulkIssueByPartition, reader: jspb.BinaryReader): BulkIssueByPartition;
    }

    export namespace BulkIssueByPartition {
      export type AsObject = {
        partition: Uint8Array | string,
        tokenholdersList: Array<string>,
        valuesList: Array<number>,
        data: Uint8Array | string,
      }
    }

    export class SetDocument extends jspb.Message {
      getDocumentname(): Uint8Array | string;
      getDocumentname_asU8(): Uint8Array;
      getDocumentname_asB64(): string;
      setDocumentname(value: Uint8Array | string): void;

      getUri(): string;
      setUri(value: string): void;

      getDocumenthash(): Uint8Array | string;
      getDocumenthash_asU8(): Uint8Array;
      getDocumenthash_asB64(): string;
      setDocumenthash(value: Uint8Array | string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SetDocument.AsObject;
      static toObject(includeInstance: boolean, msg: SetDocument): SetDocument.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: SetDocument, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SetDocument;
      static deserializeBinaryFromReader(message: SetDocument, reader: jspb.BinaryReader): SetDocument;
    }

    export namespace SetDocument {
      export type AsObject = {
        documentname: Uint8Array | string,
        uri: string,
        documenthash: Uint8Array | string,
      }
    }

    export class IssueByPartition extends jspb.Message {
      getPartition(): Uint8Array | string;
      getPartition_asU8(): Uint8Array;
      getPartition_asB64(): string;
      setPartition(value: Uint8Array | string): void;

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
        partition: Uint8Array | string,
        recipient: string,
        amount: number,
      }
    }

    export class RedeemByPartition extends jspb.Message {
      getPartition(): Uint8Array | string;
      getPartition_asU8(): Uint8Array;
      getPartition_asB64(): string;
      setPartition(value: Uint8Array | string): void;

      getValue(): number;
      setValue(value: number): void;

      getData(): Uint8Array | string;
      getData_asU8(): Uint8Array;
      getData_asB64(): string;
      setData(value: Uint8Array | string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): RedeemByPartition.AsObject;
      static toObject(includeInstance: boolean, msg: RedeemByPartition): RedeemByPartition.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: RedeemByPartition, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): RedeemByPartition;
      static deserializeBinaryFromReader(message: RedeemByPartition, reader: jspb.BinaryReader): RedeemByPartition;
    }

    export namespace RedeemByPartition {
      export type AsObject = {
        partition: Uint8Array | string,
        value: number,
        data: Uint8Array | string,
      }
    }

    export class OperatorRedeemByPartition extends jspb.Message {
      getPartition(): Uint8Array | string;
      getPartition_asU8(): Uint8Array;
      getPartition_asB64(): string;
      setPartition(value: Uint8Array | string): void;

      getTokenholder(): string;
      setTokenholder(value: string): void;

      getValue(): number;
      setValue(value: number): void;

      getData(): Uint8Array | string;
      getData_asU8(): Uint8Array;
      getData_asB64(): string;
      setData(value: Uint8Array | string): void;

      getOperatordata(): Uint8Array | string;
      getOperatordata_asU8(): Uint8Array;
      getOperatordata_asB64(): string;
      setOperatordata(value: Uint8Array | string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): OperatorRedeemByPartition.AsObject;
      static toObject(includeInstance: boolean, msg: OperatorRedeemByPartition): OperatorRedeemByPartition.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: OperatorRedeemByPartition, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): OperatorRedeemByPartition;
      static deserializeBinaryFromReader(message: OperatorRedeemByPartition, reader: jspb.BinaryReader): OperatorRedeemByPartition;
    }

    export namespace OperatorRedeemByPartition {
      export type AsObject = {
        partition: Uint8Array | string,
        tokenholder: string,
        value: number,
        data: Uint8Array | string,
        operatordata: Uint8Array | string,
      }
    }

    export class RenounceControl extends jspb.Message {
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): RenounceControl.AsObject;
      static toObject(includeInstance: boolean, msg: RenounceControl): RenounceControl.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: RenounceControl, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): RenounceControl;
      static deserializeBinaryFromReader(message: RenounceControl, reader: jspb.BinaryReader): RenounceControl;
    }

    export namespace RenounceControl {
      export type AsObject = {
      }
    }

    export class RenounceIssuance extends jspb.Message {
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): RenounceIssuance.AsObject;
      static toObject(includeInstance: boolean, msg: RenounceIssuance): RenounceIssuance.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: RenounceIssuance, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): RenounceIssuance;
      static deserializeBinaryFromReader(message: RenounceIssuance, reader: jspb.BinaryReader): RenounceIssuance;
    }

    export namespace RenounceIssuance {
      export type AsObject = {
      }
    }
  }

  export class Pausable extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Pausable.AsObject;
    static toObject(includeInstance: boolean, msg: Pausable): Pausable.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Pausable, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Pausable;
    static deserializeBinaryFromReader(message: Pausable, reader: jspb.BinaryReader): Pausable;
  }

  export namespace Pausable {
    export type AsObject = {
    }

    export class Pause extends jspb.Message {
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Pause.AsObject;
      static toObject(includeInstance: boolean, msg: Pause): Pause.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Pause, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Pause;
      static deserializeBinaryFromReader(message: Pause, reader: jspb.BinaryReader): Pause;
    }

    export namespace Pause {
      export type AsObject = {
      }
    }

    export class Unpause extends jspb.Message {
      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Unpause.AsObject;
      static toObject(includeInstance: boolean, msg: Unpause): Unpause.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Unpause, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Unpause;
      static deserializeBinaryFromReader(message: Unpause, reader: jspb.BinaryReader): Unpause;
    }

    export namespace Unpause {
      export type AsObject = {
      }
    }
  }

  export class Ownable extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ownable.AsObject;
    static toObject(includeInstance: boolean, msg: Ownable): Ownable.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ownable, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ownable;
    static deserializeBinaryFromReader(message: Ownable, reader: jspb.BinaryReader): Ownable;
  }

  export namespace Ownable {
    export type AsObject = {
    }

    export class TransferOwnership extends jspb.Message {
      getNewowner(): string;
      setNewowner(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TransferOwnership.AsObject;
      static toObject(includeInstance: boolean, msg: TransferOwnership): TransferOwnership.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TransferOwnership, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TransferOwnership;
      static deserializeBinaryFromReader(message: TransferOwnership, reader: jspb.BinaryReader): TransferOwnership;
    }

    export namespace TransferOwnership {
      export type AsObject = {
        newowner: string,
      }
    }
  }

  export class ERC1400Raw extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ERC1400Raw.AsObject;
    static toObject(includeInstance: boolean, msg: ERC1400Raw): ERC1400Raw.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ERC1400Raw, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ERC1400Raw;
    static deserializeBinaryFromReader(message: ERC1400Raw, reader: jspb.BinaryReader): ERC1400Raw;
  }

  export namespace ERC1400Raw {
    export type AsObject = {
    }

    export class AuthorizeOperator extends jspb.Message {
      getOperator(): string;
      setOperator(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): AuthorizeOperator.AsObject;
      static toObject(includeInstance: boolean, msg: AuthorizeOperator): AuthorizeOperator.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: AuthorizeOperator, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): AuthorizeOperator;
      static deserializeBinaryFromReader(message: AuthorizeOperator, reader: jspb.BinaryReader): AuthorizeOperator;
    }

    export namespace AuthorizeOperator {
      export type AsObject = {
        operator: string,
      }
    }

    export class RevokeOperator extends jspb.Message {
      getOperator(): string;
      setOperator(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): RevokeOperator.AsObject;
      static toObject(includeInstance: boolean, msg: RevokeOperator): RevokeOperator.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: RevokeOperator, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): RevokeOperator;
      static deserializeBinaryFromReader(message: RevokeOperator, reader: jspb.BinaryReader): RevokeOperator;
    }

    export namespace RevokeOperator {
      export type AsObject = {
        operator: string,
      }
    }
  }

  export class ERC1400Partition extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ERC1400Partition.AsObject;
    static toObject(includeInstance: boolean, msg: ERC1400Partition): ERC1400Partition.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ERC1400Partition, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ERC1400Partition;
    static deserializeBinaryFromReader(message: ERC1400Partition, reader: jspb.BinaryReader): ERC1400Partition;
  }

  export namespace ERC1400Partition {
    export type AsObject = {
    }

    export class TransferByPartition extends jspb.Message {
      getPartition(): Uint8Array | string;
      getPartition_asU8(): Uint8Array;
      getPartition_asB64(): string;
      setPartition(value: Uint8Array | string): void;

      getTo(): string;
      setTo(value: string): void;

      getValue(): number;
      setValue(value: number): void;

      getCalldata(): Uint8Array | string;
      getCalldata_asU8(): Uint8Array;
      getCalldata_asB64(): string;
      setCalldata(value: Uint8Array | string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TransferByPartition.AsObject;
      static toObject(includeInstance: boolean, msg: TransferByPartition): TransferByPartition.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TransferByPartition, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TransferByPartition;
      static deserializeBinaryFromReader(message: TransferByPartition, reader: jspb.BinaryReader): TransferByPartition;
    }

    export namespace TransferByPartition {
      export type AsObject = {
        partition: Uint8Array | string,
        to: string,
        value: number,
        calldata: Uint8Array | string,
      }
    }

    export class OperatorTransferByPartition extends jspb.Message {
      getPartition(): Uint8Array | string;
      getPartition_asU8(): Uint8Array;
      getPartition_asB64(): string;
      setPartition(value: Uint8Array | string): void;

      getFrom(): string;
      setFrom(value: string): void;

      getTo(): string;
      setTo(value: string): void;

      getValue(): number;
      setValue(value: number): void;

      getData(): Uint8Array | string;
      getData_asU8(): Uint8Array;
      getData_asB64(): string;
      setData(value: Uint8Array | string): void;

      getOperatordata(): Uint8Array | string;
      getOperatordata_asU8(): Uint8Array;
      getOperatordata_asB64(): string;
      setOperatordata(value: Uint8Array | string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): OperatorTransferByPartition.AsObject;
      static toObject(includeInstance: boolean, msg: OperatorTransferByPartition): OperatorTransferByPartition.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: OperatorTransferByPartition, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): OperatorTransferByPartition;
      static deserializeBinaryFromReader(message: OperatorTransferByPartition, reader: jspb.BinaryReader): OperatorTransferByPartition;
    }

    export namespace OperatorTransferByPartition {
      export type AsObject = {
        partition: Uint8Array | string,
        from: string,
        to: string,
        value: number,
        data: Uint8Array | string,
        operatordata: Uint8Array | string,
      }
    }

    export class AuthorizeOperatorByPartition extends jspb.Message {
      getPartition(): Uint8Array | string;
      getPartition_asU8(): Uint8Array;
      getPartition_asB64(): string;
      setPartition(value: Uint8Array | string): void;

      getOperator(): string;
      setOperator(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): AuthorizeOperatorByPartition.AsObject;
      static toObject(includeInstance: boolean, msg: AuthorizeOperatorByPartition): AuthorizeOperatorByPartition.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: AuthorizeOperatorByPartition, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): AuthorizeOperatorByPartition;
      static deserializeBinaryFromReader(message: AuthorizeOperatorByPartition, reader: jspb.BinaryReader): AuthorizeOperatorByPartition;
    }

    export namespace AuthorizeOperatorByPartition {
      export type AsObject = {
        partition: Uint8Array | string,
        operator: string,
      }
    }

    export class RevokeOperatorByPartition extends jspb.Message {
      getPartition(): Uint8Array | string;
      getPartition_asU8(): Uint8Array;
      getPartition_asB64(): string;
      setPartition(value: Uint8Array | string): void;

      getOperator(): string;
      setOperator(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): RevokeOperatorByPartition.AsObject;
      static toObject(includeInstance: boolean, msg: RevokeOperatorByPartition): RevokeOperatorByPartition.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: RevokeOperatorByPartition, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): RevokeOperatorByPartition;
      static deserializeBinaryFromReader(message: RevokeOperatorByPartition, reader: jspb.BinaryReader): RevokeOperatorByPartition;
    }

    export namespace RevokeOperatorByPartition {
      export type AsObject = {
        partition: Uint8Array | string,
        operator: string,
      }
    }

    export class TransferWithData extends jspb.Message {
      getTo(): string;
      setTo(value: string): void;

      getValue(): number;
      setValue(value: number): void;

      getData(): Uint8Array | string;
      getData_asU8(): Uint8Array;
      getData_asB64(): string;
      setData(value: Uint8Array | string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TransferWithData.AsObject;
      static toObject(includeInstance: boolean, msg: TransferWithData): TransferWithData.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TransferWithData, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TransferWithData;
      static deserializeBinaryFromReader(message: TransferWithData, reader: jspb.BinaryReader): TransferWithData;
    }

    export namespace TransferWithData {
      export type AsObject = {
        to: string,
        value: number,
        data: Uint8Array | string,
      }
    }

    export class TransferFromWithData extends jspb.Message {
      getFrom(): string;
      setFrom(value: string): void;

      getTo(): string;
      setTo(value: string): void;

      getValue(): number;
      setValue(value: number): void;

      getData(): Uint8Array | string;
      getData_asU8(): Uint8Array;
      getData_asB64(): string;
      setData(value: Uint8Array | string): void;

      getOperatordata(): Uint8Array | string;
      getOperatordata_asU8(): Uint8Array;
      getOperatordata_asB64(): string;
      setOperatordata(value: Uint8Array | string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TransferFromWithData.AsObject;
      static toObject(includeInstance: boolean, msg: TransferFromWithData): TransferFromWithData.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TransferFromWithData, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TransferFromWithData;
      static deserializeBinaryFromReader(message: TransferFromWithData, reader: jspb.BinaryReader): TransferFromWithData;
    }

    export namespace TransferFromWithData {
      export type AsObject = {
        from: string,
        to: string,
        value: number,
        data: Uint8Array | string,
        operatordata: Uint8Array | string,
      }
    }
  }

  export class ERC1400ERC20 extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ERC1400ERC20.AsObject;
    static toObject(includeInstance: boolean, msg: ERC1400ERC20): ERC1400ERC20.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ERC1400ERC20, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ERC1400ERC20;
    static deserializeBinaryFromReader(message: ERC1400ERC20, reader: jspb.BinaryReader): ERC1400ERC20;
  }

  export namespace ERC1400ERC20 {
    export type AsObject = {
    }

    export class Transfer extends jspb.Message {
      getTo(): string;
      setTo(value: string): void;

      getValue(): number;
      setValue(value: number): void;

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
        to: string,
        value: number,
      }
    }

    export class Approve extends jspb.Message {
      getSpender(): string;
      setSpender(value: string): void;

      getValue(): number;
      setValue(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Approve.AsObject;
      static toObject(includeInstance: boolean, msg: Approve): Approve.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: Approve, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Approve;
      static deserializeBinaryFromReader(message: Approve, reader: jspb.BinaryReader): Approve;
    }

    export namespace Approve {
      export type AsObject = {
        spender: string,
        value: number,
      }
    }

    export class TransferFrom extends jspb.Message {
      getFrom(): string;
      setFrom(value: string): void;

      getTo(): string;
      setTo(value: string): void;

      getValue(): number;
      setValue(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): TransferFrom.AsObject;
      static toObject(includeInstance: boolean, msg: TransferFrom): TransferFrom.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: TransferFrom, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): TransferFrom;
      static deserializeBinaryFromReader(message: TransferFrom, reader: jspb.BinaryReader): TransferFrom;
    }

    export namespace TransferFrom {
      export type AsObject = {
        from: string,
        to: string,
        value: number,
      }
    }
  }

  export class ERC1400Capped extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ERC1400Capped.AsObject;
    static toObject(includeInstance: boolean, msg: ERC1400Capped): ERC1400Capped.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ERC1400Capped, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ERC1400Capped;
    static deserializeBinaryFromReader(message: ERC1400Capped, reader: jspb.BinaryReader): ERC1400Capped;
  }

  export namespace ERC1400Capped {
    export type AsObject = {
    }

    export class SetCap extends jspb.Message {
      getNewcap(): number;
      setNewcap(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SetCap.AsObject;
      static toObject(includeInstance: boolean, msg: SetCap): SetCap.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: SetCap, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SetCap;
      static deserializeBinaryFromReader(message: SetCap, reader: jspb.BinaryReader): SetCap;
    }

    export namespace SetCap {
      export type AsObject = {
        newcap: number,
      }
    }
  }

  export class Constrainable extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Constrainable.AsObject;
    static toObject(includeInstance: boolean, msg: Constrainable): Constrainable.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Constrainable, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Constrainable;
    static deserializeBinaryFromReader(message: Constrainable, reader: jspb.BinaryReader): Constrainable;
  }

  export namespace Constrainable {
    export type AsObject = {
    }

    export class SetModulesByPartition extends jspb.Message {
      getPartition(): Uint8Array | string;
      getPartition_asU8(): Uint8Array;
      getPartition_asB64(): string;
      setPartition(value: Uint8Array | string): void;

      clearNewmodulesList(): void;
      getNewmodulesList(): Array<string>;
      setNewmodulesList(value: Array<string>): void;
      addNewmodules(value: string, index?: number): string;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SetModulesByPartition.AsObject;
      static toObject(includeInstance: boolean, msg: SetModulesByPartition): SetModulesByPartition.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: SetModulesByPartition, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SetModulesByPartition;
      static deserializeBinaryFromReader(message: SetModulesByPartition, reader: jspb.BinaryReader): SetModulesByPartition;
    }

    export namespace SetModulesByPartition {
      export type AsObject = {
        partition: Uint8Array | string,
        newmodulesList: Array<string>,
      }
    }
  }

  export class Administrable extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Administrable.AsObject;
    static toObject(includeInstance: boolean, msg: Administrable): Administrable.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Administrable, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Administrable;
    static deserializeBinaryFromReader(message: Administrable, reader: jspb.BinaryReader): Administrable;
  }

  export namespace Administrable {
    export type AsObject = {
    }

    export class AddRole extends jspb.Message {
      getRole(): Uint8Array | string;
      getRole_asU8(): Uint8Array;
      getRole_asB64(): string;
      setRole(value: Uint8Array | string): void;

      getAccount(): string;
      setAccount(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): AddRole.AsObject;
      static toObject(includeInstance: boolean, msg: AddRole): AddRole.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: AddRole, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): AddRole;
      static deserializeBinaryFromReader(message: AddRole, reader: jspb.BinaryReader): AddRole;
    }

    export namespace AddRole {
      export type AsObject = {
        role: Uint8Array | string,
        account: string,
      }
    }

    export class BulkAddRole extends jspb.Message {
      clearRolesList(): void;
      getRolesList(): Array<Uint8Array | string>;
      getRolesList_asU8(): Array<Uint8Array>;
      getRolesList_asB64(): Array<string>;
      setRolesList(value: Array<Uint8Array | string>): void;
      addRoles(value: Uint8Array | string, index?: number): Uint8Array | string;

      clearAccountsList(): void;
      getAccountsList(): Array<string>;
      setAccountsList(value: Array<string>): void;
      addAccounts(value: string, index?: number): string;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): BulkAddRole.AsObject;
      static toObject(includeInstance: boolean, msg: BulkAddRole): BulkAddRole.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: BulkAddRole, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): BulkAddRole;
      static deserializeBinaryFromReader(message: BulkAddRole, reader: jspb.BinaryReader): BulkAddRole;
    }

    export namespace BulkAddRole {
      export type AsObject = {
        rolesList: Array<Uint8Array | string>,
        accountsList: Array<string>,
      }
    }

    export class RemoveRole extends jspb.Message {
      getRole(): Uint8Array | string;
      getRole_asU8(): Uint8Array;
      getRole_asB64(): string;
      setRole(value: Uint8Array | string): void;

      getAccount(): string;
      setAccount(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): RemoveRole.AsObject;
      static toObject(includeInstance: boolean, msg: RemoveRole): RemoveRole.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: RemoveRole, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): RemoveRole;
      static deserializeBinaryFromReader(message: RemoveRole, reader: jspb.BinaryReader): RemoveRole;
    }

    export namespace RemoveRole {
      export type AsObject = {
        role: Uint8Array | string,
        account: string,
      }
    }

    export class RenounceRole extends jspb.Message {
      getRole(): Uint8Array | string;
      getRole_asU8(): Uint8Array;
      getRole_asB64(): string;
      setRole(value: Uint8Array | string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): RenounceRole.AsObject;
      static toObject(includeInstance: boolean, msg: RenounceRole): RenounceRole.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: RenounceRole, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): RenounceRole;
      static deserializeBinaryFromReader(message: RenounceRole, reader: jspb.BinaryReader): RenounceRole;
    }

    export namespace RenounceRole {
      export type AsObject = {
        role: Uint8Array | string,
      }
    }
  }

  export class SpendingLimitsConstraintModule extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SpendingLimitsConstraintModule.AsObject;
    static toObject(includeInstance: boolean, msg: SpendingLimitsConstraintModule): SpendingLimitsConstraintModule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SpendingLimitsConstraintModule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SpendingLimitsConstraintModule;
    static deserializeBinaryFromReader(message: SpendingLimitsConstraintModule, reader: jspb.BinaryReader): SpendingLimitsConstraintModule;
  }

  export namespace SpendingLimitsConstraintModule {
    export type AsObject = {
    }

    export class DeploySpendingLimitsConstraintModule extends jspb.Message {
      getTokenaddress(): string;
      setTokenaddress(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DeploySpendingLimitsConstraintModule.AsObject;
      static toObject(includeInstance: boolean, msg: DeploySpendingLimitsConstraintModule): DeploySpendingLimitsConstraintModule.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: DeploySpendingLimitsConstraintModule, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DeploySpendingLimitsConstraintModule;
      static deserializeBinaryFromReader(message: DeploySpendingLimitsConstraintModule, reader: jspb.BinaryReader): DeploySpendingLimitsConstraintModule;
    }

    export namespace DeploySpendingLimitsConstraintModule {
      export type AsObject = {
        tokenaddress: string,
      }
    }

    export class AddTimelock extends jspb.Message {
      hasPeriodlength(): boolean;
      clearPeriodlength(): void;
      getPeriodlength(): google_protobuf_duration_pb.Duration | undefined;
      setPeriodlength(value?: google_protobuf_duration_pb.Duration): void;

      getAmountallowed(): number;
      setAmountallowed(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): AddTimelock.AsObject;
      static toObject(includeInstance: boolean, msg: AddTimelock): AddTimelock.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: AddTimelock, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): AddTimelock;
      static deserializeBinaryFromReader(message: AddTimelock, reader: jspb.BinaryReader): AddTimelock;
    }

    export namespace AddTimelock {
      export type AsObject = {
        periodlength?: google_protobuf_duration_pb.Duration.AsObject,
        amountallowed: number,
      }
    }

    export class SetTimelock extends jspb.Message {
      getIndex(): number;
      setIndex(value: number): void;

      hasPeriodlength(): boolean;
      clearPeriodlength(): void;
      getPeriodlength(): google_protobuf_duration_pb.Duration | undefined;
      setPeriodlength(value?: google_protobuf_duration_pb.Duration): void;

      getAmountallowed(): number;
      setAmountallowed(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SetTimelock.AsObject;
      static toObject(includeInstance: boolean, msg: SetTimelock): SetTimelock.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: SetTimelock, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SetTimelock;
      static deserializeBinaryFromReader(message: SetTimelock, reader: jspb.BinaryReader): SetTimelock;
    }

    export namespace SetTimelock {
      export type AsObject = {
        index: number,
        periodlength?: google_protobuf_duration_pb.Duration.AsObject,
        amountallowed: number,
      }
    }

    export class DeleteTimelock extends jspb.Message {
      getIndex(): number;
      setIndex(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DeleteTimelock.AsObject;
      static toObject(includeInstance: boolean, msg: DeleteTimelock): DeleteTimelock.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: DeleteTimelock, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DeleteTimelock;
      static deserializeBinaryFromReader(message: DeleteTimelock, reader: jspb.BinaryReader): DeleteTimelock;
    }

    export namespace DeleteTimelock {
      export type AsObject = {
        index: number,
      }
    }
  }

  export class TimeLockConstraintModule extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TimeLockConstraintModule.AsObject;
    static toObject(includeInstance: boolean, msg: TimeLockConstraintModule): TimeLockConstraintModule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TimeLockConstraintModule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TimeLockConstraintModule;
    static deserializeBinaryFromReader(message: TimeLockConstraintModule, reader: jspb.BinaryReader): TimeLockConstraintModule;
  }

  export namespace TimeLockConstraintModule {
    export type AsObject = {
    }

    export class DeployTimeLockConstraintModule extends jspb.Message {
      getTokenaddress(): string;
      setTokenaddress(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DeployTimeLockConstraintModule.AsObject;
      static toObject(includeInstance: boolean, msg: DeployTimeLockConstraintModule): DeployTimeLockConstraintModule.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: DeployTimeLockConstraintModule, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DeployTimeLockConstraintModule;
      static deserializeBinaryFromReader(message: DeployTimeLockConstraintModule, reader: jspb.BinaryReader): DeployTimeLockConstraintModule;
    }

    export namespace DeployTimeLockConstraintModule {
      export type AsObject = {
        tokenaddress: string,
      }
    }

    export class EditAmountTimeLock extends jspb.Message {
      getAccount(): string;
      setAccount(value: string): void;

      hasTime(): boolean;
      clearTime(): void;
      getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
      setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

      getAmount(): number;
      setAmount(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): EditAmountTimeLock.AsObject;
      static toObject(includeInstance: boolean, msg: EditAmountTimeLock): EditAmountTimeLock.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: EditAmountTimeLock, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): EditAmountTimeLock;
      static deserializeBinaryFromReader(message: EditAmountTimeLock, reader: jspb.BinaryReader): EditAmountTimeLock;
    }

    export namespace EditAmountTimeLock {
      export type AsObject = {
        account: string,
        time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        amount: number,
      }
    }

    export class EditAccountTimeLock extends jspb.Message {
      getAccount(): string;
      setAccount(value: string): void;

      hasTime(): boolean;
      clearTime(): void;
      getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
      setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): EditAccountTimeLock.AsObject;
      static toObject(includeInstance: boolean, msg: EditAccountTimeLock): EditAccountTimeLock.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: EditAccountTimeLock, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): EditAccountTimeLock;
      static deserializeBinaryFromReader(message: EditAccountTimeLock, reader: jspb.BinaryReader): EditAccountTimeLock;
    }

    export namespace EditAccountTimeLock {
      export type AsObject = {
        account: string,
        time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      }
    }

    export class EditTimeLock extends jspb.Message {
      hasTime(): boolean;
      clearTime(): void;
      getTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
      setTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): EditTimeLock.AsObject;
      static toObject(includeInstance: boolean, msg: EditTimeLock): EditTimeLock.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: EditTimeLock, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): EditTimeLock;
      static deserializeBinaryFromReader(message: EditTimeLock, reader: jspb.BinaryReader): EditTimeLock;
    }

    export namespace EditTimeLock {
      export type AsObject = {
        time?: google_protobuf_timestamp_pb.Timestamp.AsObject,
      }
    }
  }

  export class VestingPeriodConstraintModule extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VestingPeriodConstraintModule.AsObject;
    static toObject(includeInstance: boolean, msg: VestingPeriodConstraintModule): VestingPeriodConstraintModule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VestingPeriodConstraintModule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VestingPeriodConstraintModule;
    static deserializeBinaryFromReader(message: VestingPeriodConstraintModule, reader: jspb.BinaryReader): VestingPeriodConstraintModule;
  }

  export namespace VestingPeriodConstraintModule {
    export type AsObject = {
    }

    export class DeployVestingPeriodConstraintModule extends jspb.Message {
      getTokenaddress(): string;
      setTokenaddress(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DeployVestingPeriodConstraintModule.AsObject;
      static toObject(includeInstance: boolean, msg: DeployVestingPeriodConstraintModule): DeployVestingPeriodConstraintModule.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: DeployVestingPeriodConstraintModule, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DeployVestingPeriodConstraintModule;
      static deserializeBinaryFromReader(message: DeployVestingPeriodConstraintModule, reader: jspb.BinaryReader): DeployVestingPeriodConstraintModule;
    }

    export namespace DeployVestingPeriodConstraintModule {
      export type AsObject = {
        tokenaddress: string,
      }
    }

    export class SetVestingOptions extends jspb.Message {
      hasVestingstart(): boolean;
      clearVestingstart(): void;
      getVestingstart(): google_protobuf_timestamp_pb.Timestamp | undefined;
      setVestingstart(value?: google_protobuf_timestamp_pb.Timestamp): void;

      getVestedfractionafterstart(): number;
      setVestedfractionafterstart(value: number): void;

      getVestingratio(): number;
      setVestingratio(value: number): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SetVestingOptions.AsObject;
      static toObject(includeInstance: boolean, msg: SetVestingOptions): SetVestingOptions.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: SetVestingOptions, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SetVestingOptions;
      static deserializeBinaryFromReader(message: SetVestingOptions, reader: jspb.BinaryReader): SetVestingOptions;
    }

    export namespace SetVestingOptions {
      export type AsObject = {
        vestingstart?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        vestedfractionafterstart: number,
        vestingratio: number,
      }
    }
  }

  export class WhitelistConstraintModule extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WhitelistConstraintModule.AsObject;
    static toObject(includeInstance: boolean, msg: WhitelistConstraintModule): WhitelistConstraintModule.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WhitelistConstraintModule, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WhitelistConstraintModule;
    static deserializeBinaryFromReader(message: WhitelistConstraintModule, reader: jspb.BinaryReader): WhitelistConstraintModule;
  }

  export namespace WhitelistConstraintModule {
    export type AsObject = {
    }

    export class DeployWhitelistConstraintModule extends jspb.Message {
      getTokenaddress(): string;
      setTokenaddress(value: string): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): DeployWhitelistConstraintModule.AsObject;
      static toObject(includeInstance: boolean, msg: DeployWhitelistConstraintModule): DeployWhitelistConstraintModule.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: DeployWhitelistConstraintModule, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): DeployWhitelistConstraintModule;
      static deserializeBinaryFromReader(message: DeployWhitelistConstraintModule, reader: jspb.BinaryReader): DeployWhitelistConstraintModule;
    }

    export namespace DeployWhitelistConstraintModule {
      export type AsObject = {
        tokenaddress: string,
      }
    }

    export class EditWhitelist extends jspb.Message {
      getAccount(): string;
      setAccount(value: string): void;

      getWhitelisted(): boolean;
      setWhitelisted(value: boolean): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): EditWhitelist.AsObject;
      static toObject(includeInstance: boolean, msg: EditWhitelist): EditWhitelist.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: EditWhitelist, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): EditWhitelist;
      static deserializeBinaryFromReader(message: EditWhitelist, reader: jspb.BinaryReader): EditWhitelist;
    }

    export namespace EditWhitelist {
      export type AsObject = {
        account: string,
        whitelisted: boolean,
      }
    }

    export class BulkEditWhitelist extends jspb.Message {
      clearAccountsList(): void;
      getAccountsList(): Array<string>;
      setAccountsList(value: Array<string>): void;
      addAccounts(value: string, index?: number): string;

      getWhitelisted(): boolean;
      setWhitelisted(value: boolean): void;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): BulkEditWhitelist.AsObject;
      static toObject(includeInstance: boolean, msg: BulkEditWhitelist): BulkEditWhitelist.AsObject;
      static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
      static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
      static serializeBinaryToWriter(message: BulkEditWhitelist, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): BulkEditWhitelist;
      static deserializeBinaryFromReader(message: BulkEditWhitelist, reader: jspb.BinaryReader): BulkEditWhitelist;
    }

    export namespace BulkEditWhitelist {
      export type AsObject = {
        accountsList: Array<string>,
        whitelisted: boolean,
      }
    }
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
    BULKISSUEBYPARTITION = 5,
    SETDOCUMENT = 6,
    ISSUEBYPARTITION = 7,
    REDEEMBYPARTITION = 8,
    OPERATORREDEEMBYPARTITION = 9,
    RENOUNCECONTROL = 10,
    RENOUNCEISSUANCE = 11,
    PAUSE = 12,
    UNPAUSE = 13,
    TRANSFEROWNERSHIP = 14,
    AUTHORIZEOPERATOR = 15,
    REVOKEOPERATOR = 16,
    TRANSFERBYPARTITION = 17,
    OPERATORTRANSFERBYPARTITION = 18,
    AUTHORIZEOPERATORBYPARTITION = 19,
    REVOKEOPERATORBYPARTITION = 20,
    TRANSFERWITHDATA = 21,
    TRANSFERFROMWITHDATA = 22,
    TRANSFER = 23,
    APPROVE = 24,
    TRANSFERFROM = 25,
    SETCAP = 26,
    SETMODULESBYPARTITION = 27,
    ADDROLE = 28,
    BULKADDROLE = 29,
    REMOVEROLE = 30,
    RENOUNCEROLE = 31,
    DEPLOYSPENDINGLIMITSCONSTRAINTMODULE = 32,
    ADDTIMELOCK = 33,
    SETTIMELOCK = 34,
    DELETETIMELOCK = 35,
    DEPLOYTIMELOCKCONSTRAINTMODULE = 36,
    EDITAMOUNTTIMELOCK = 37,
    EDITACCOUNTTIMELOCK = 38,
    EDITTIMELOCK = 39,
    DEPLOYVESTINGPERIODCONSTRAINTMODULE = 40,
    SETVESTINGOPTIONS = 41,
    DEPLOYWHITELISTCONSTRAINTMODULE = 42,
    EDITWHITELIST = 43,
    BULKEDITWHITELIST = 44,
  }
}


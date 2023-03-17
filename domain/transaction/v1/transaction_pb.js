// @generated by protoc-gen-es v1.1.1
// @generated from file transaction/v1/transaction.proto (package transaction.v1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { Duration, proto3, Timestamp } from "@bufbuild/protobuf";
import { SecurityToken_Metadata } from "../../token/v1/token_pb.js";

/**
 * factories/SecurityTokenFactory.sol 
 *
 * @generated from message transaction.v1.Transaction
 */
export const Transaction = proto3.makeMessageType(
  "transaction.v1.Transaction",
  () => [
    { no: 1, name: "metadata", kind: "message", T: Transaction_Metadata, opt: true },
    { no: 2, name: "contract", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "network", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
    { no: 4, name: "deploy_new_security_token", kind: "message", T: Transaction_SecurityTokenFactory_DeployNewSecurityToken, oneof: "data" },
    { no: 5, name: "bulk_issue_by_partition", kind: "message", T: Transaction_SecurityToken_BulkIssueByPartition, oneof: "data" },
    { no: 6, name: "set_document", kind: "message", T: Transaction_SecurityToken_SetDocument, oneof: "data" },
    { no: 7, name: "issue_by_partition", kind: "message", T: Transaction_SecurityToken_IssueByPartition, oneof: "data" },
    { no: 8, name: "redeem_by_partition", kind: "message", T: Transaction_SecurityToken_RedeemByPartition, oneof: "data" },
    { no: 9, name: "operator_redeem_by_partition", kind: "message", T: Transaction_SecurityToken_OperatorRedeemByPartition, oneof: "data" },
    { no: 10, name: "renounce_control", kind: "message", T: Transaction_SecurityToken_RenounceControl, oneof: "data" },
    { no: 11, name: "renounce_issuance", kind: "message", T: Transaction_SecurityToken_RenounceIssuance, oneof: "data" },
    { no: 12, name: "pause", kind: "message", T: Transaction_Pausable_Pause, oneof: "data" },
    { no: 13, name: "unpause", kind: "message", T: Transaction_Pausable_Unpause, oneof: "data" },
    { no: 14, name: "transfer_ownership", kind: "message", T: Transaction_Ownable_TransferOwnership, oneof: "data" },
    { no: 15, name: "authorize_operator", kind: "message", T: Transaction_ERC1400Raw_AuthorizeOperator, oneof: "data" },
    { no: 16, name: "revoke_operator", kind: "message", T: Transaction_ERC1400Raw_RevokeOperator, oneof: "data" },
    { no: 17, name: "transfer_by_partition", kind: "message", T: Transaction_ERC1400Partition_TransferByPartition, oneof: "data" },
    { no: 18, name: "operator_transfer_by_partition", kind: "message", T: Transaction_ERC1400Partition_OperatorTransferByPartition, oneof: "data" },
    { no: 19, name: "authorize_operator_by_partition", kind: "message", T: Transaction_ERC1400Partition_AuthorizeOperatorByPartition, oneof: "data" },
    { no: 20, name: "revoke_operator_by_partition", kind: "message", T: Transaction_ERC1400Partition_RevokeOperatorByPartition, oneof: "data" },
    { no: 21, name: "transfer_with_data", kind: "message", T: Transaction_ERC1400Partition_TransferWithData, oneof: "data" },
    { no: 22, name: "transfer_from_with_data", kind: "message", T: Transaction_ERC1400Partition_TransferFromWithData, oneof: "data" },
    { no: 23, name: "transfer", kind: "message", T: Transaction_ERC1400ERC20_Transfer, oneof: "data" },
    { no: 24, name: "approve", kind: "message", T: Transaction_ERC1400ERC20_Approve, oneof: "data" },
    { no: 25, name: "transfer_from", kind: "message", T: Transaction_ERC1400ERC20_TransferFrom, oneof: "data" },
    { no: 26, name: "set_cap", kind: "message", T: Transaction_ERC1400Capped_SetCap, oneof: "data" },
    { no: 27, name: "set_modules_by_partition", kind: "message", T: Transaction_Constrainable_SetModulesByPartition, oneof: "data" },
    { no: 28, name: "add_role", kind: "message", T: Transaction_Administrable_AddRole, oneof: "data" },
    { no: 29, name: "bulk_add_role", kind: "message", T: Transaction_Administrable_BulkAddRole, oneof: "data" },
    { no: 30, name: "remove_role", kind: "message", T: Transaction_Administrable_RemoveRole, oneof: "data" },
    { no: 31, name: "renounce_role", kind: "message", T: Transaction_Administrable_RenounceRole, oneof: "data" },
    { no: 32, name: "deploy_spending_limits_constraint_module", kind: "message", T: Transaction_SpendingLimitsConstraintModule_DeploySpendingLimitsConstraintModule, oneof: "data" },
    { no: 33, name: "add_timelock", kind: "message", T: Transaction_SpendingLimitsConstraintModule_AddTimelock, oneof: "data" },
    { no: 34, name: "set_timelock", kind: "message", T: Transaction_SpendingLimitsConstraintModule_SetTimelock, oneof: "data" },
    { no: 35, name: "delete_timelock", kind: "message", T: Transaction_SpendingLimitsConstraintModule_DeleteTimelock, oneof: "data" },
    { no: 36, name: "deploy_time_lock_constraint_module", kind: "message", T: Transaction_TimeLockConstraintModule_DeployTimeLockConstraintModule, oneof: "data" },
    { no: 37, name: "edit_amount_time_lock", kind: "message", T: Transaction_TimeLockConstraintModule_EditAmountTimeLock, oneof: "data" },
    { no: 38, name: "edit_account_time_lock", kind: "message", T: Transaction_TimeLockConstraintModule_EditAccountTimeLock, oneof: "data" },
    { no: 39, name: "edit_time_lock", kind: "message", T: Transaction_TimeLockConstraintModule_EditTimeLock, oneof: "data" },
    { no: 40, name: "deploy_vesting_period_constraint_module", kind: "message", T: Transaction_VestingPeriodConstraintModule_DeployVestingPeriodConstraintModule, oneof: "data" },
    { no: 41, name: "set_vesting_options", kind: "message", T: Transaction_VestingPeriodConstraintModule_SetVestingOptions, oneof: "data" },
    { no: 42, name: "deploy_whitelist_constraint_module", kind: "message", T: Transaction_WhitelistConstraintModule_DeployWhitelistConstraintModule, oneof: "data" },
    { no: 43, name: "edit_whitelist", kind: "message", T: Transaction_WhitelistConstraintModule_EditWhitelist, oneof: "data" },
    { no: 44, name: "bulk_edit_whitelist", kind: "message", T: Transaction_WhitelistConstraintModule_BulkEditWhitelist, oneof: "data" },
  ],
);

/**
 * @generated from message transaction.v1.Transaction.SecurityTokenFactory
 */
export const Transaction_SecurityTokenFactory = proto3.makeMessageType(
  "transaction.v1.Transaction.SecurityTokenFactory",
  [],
  {localName: "Transaction_SecurityTokenFactory"},
);

/**
 * @generated from message transaction.v1.Transaction.SecurityTokenFactory.DeployNewSecurityToken
 */
export const Transaction_SecurityTokenFactory_DeployNewSecurityToken = proto3.makeMessageType(
  "transaction.v1.Transaction.SecurityTokenFactory.DeployNewSecurityToken",
  () => [
    { no: 1, name: "name", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "symbol", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "granularity", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "cap", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "admin", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "controller", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 7, name: "issuer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 8, name: "redeemer", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 9, name: "module_editor", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 10, name: "metadata", kind: "message", T: SecurityToken_Metadata },
  ],
  {localName: "Transaction_SecurityTokenFactory_DeployNewSecurityToken"},
);

/**
 * @generated from message transaction.v1.Transaction.SecurityToken
 */
export const Transaction_SecurityToken = proto3.makeMessageType(
  "transaction.v1.Transaction.SecurityToken",
  [],
  {localName: "Transaction_SecurityToken"},
);

/**
 * @generated from message transaction.v1.Transaction.SecurityToken.BulkIssueByPartition
 */
export const Transaction_SecurityToken_BulkIssueByPartition = proto3.makeMessageType(
  "transaction.v1.Transaction.SecurityToken.BulkIssueByPartition",
  () => [
    { no: 1, name: "partition", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "token_holders", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 3, name: "values", kind: "scalar", T: 4 /* ScalarType.UINT64 */, repeated: true },
    { no: 4, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
  {localName: "Transaction_SecurityToken_BulkIssueByPartition"},
);

/**
 * @generated from message transaction.v1.Transaction.SecurityToken.SetDocument
 */
export const Transaction_SecurityToken_SetDocument = proto3.makeMessageType(
  "transaction.v1.Transaction.SecurityToken.SetDocument",
  () => [
    { no: 1, name: "document_name", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "uri", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "document_hash", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
  {localName: "Transaction_SecurityToken_SetDocument"},
);

/**
 * @generated from message transaction.v1.Transaction.SecurityToken.IssueByPartition
 */
export const Transaction_SecurityToken_IssueByPartition = proto3.makeMessageType(
  "transaction.v1.Transaction.SecurityToken.IssueByPartition",
  () => [
    { no: 1, name: "partition", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "recipient", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "amount", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
  {localName: "Transaction_SecurityToken_IssueByPartition"},
);

/**
 * @generated from message transaction.v1.Transaction.SecurityToken.RedeemByPartition
 */
export const Transaction_SecurityToken_RedeemByPartition = proto3.makeMessageType(
  "transaction.v1.Transaction.SecurityToken.RedeemByPartition",
  () => [
    { no: 1, name: "partition", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "value", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
  {localName: "Transaction_SecurityToken_RedeemByPartition"},
);

/**
 * @generated from message transaction.v1.Transaction.SecurityToken.OperatorRedeemByPartition
 */
export const Transaction_SecurityToken_OperatorRedeemByPartition = proto3.makeMessageType(
  "transaction.v1.Transaction.SecurityToken.OperatorRedeemByPartition",
  () => [
    { no: 1, name: "partition", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "token_holder", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "value", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "operator_data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
  {localName: "Transaction_SecurityToken_OperatorRedeemByPartition"},
);

/**
 * @generated from message transaction.v1.Transaction.SecurityToken.RenounceControl
 */
export const Transaction_SecurityToken_RenounceControl = proto3.makeMessageType(
  "transaction.v1.Transaction.SecurityToken.RenounceControl",
  [],
  {localName: "Transaction_SecurityToken_RenounceControl"},
);

/**
 * @generated from message transaction.v1.Transaction.SecurityToken.RenounceIssuance
 */
export const Transaction_SecurityToken_RenounceIssuance = proto3.makeMessageType(
  "transaction.v1.Transaction.SecurityToken.RenounceIssuance",
  [],
  {localName: "Transaction_SecurityToken_RenounceIssuance"},
);

/**
 * @generated from message transaction.v1.Transaction.Pausable
 */
export const Transaction_Pausable = proto3.makeMessageType(
  "transaction.v1.Transaction.Pausable",
  [],
  {localName: "Transaction_Pausable"},
);

/**
 * @generated from message transaction.v1.Transaction.Pausable.Pause
 */
export const Transaction_Pausable_Pause = proto3.makeMessageType(
  "transaction.v1.Transaction.Pausable.Pause",
  [],
  {localName: "Transaction_Pausable_Pause"},
);

/**
 * @generated from message transaction.v1.Transaction.Pausable.Unpause
 */
export const Transaction_Pausable_Unpause = proto3.makeMessageType(
  "transaction.v1.Transaction.Pausable.Unpause",
  [],
  {localName: "Transaction_Pausable_Unpause"},
);

/**
 * @generated from message transaction.v1.Transaction.Ownable
 */
export const Transaction_Ownable = proto3.makeMessageType(
  "transaction.v1.Transaction.Ownable",
  [],
  {localName: "Transaction_Ownable"},
);

/**
 * @generated from message transaction.v1.Transaction.Ownable.TransferOwnership
 */
export const Transaction_Ownable_TransferOwnership = proto3.makeMessageType(
  "transaction.v1.Transaction.Ownable.TransferOwnership",
  () => [
    { no: 1, name: "new_owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "Transaction_Ownable_TransferOwnership"},
);

/**
 * @generated from message transaction.v1.Transaction.ERC1400Raw
 */
export const Transaction_ERC1400Raw = proto3.makeMessageType(
  "transaction.v1.Transaction.ERC1400Raw",
  [],
  {localName: "Transaction_ERC1400Raw"},
);

/**
 * @generated from message transaction.v1.Transaction.ERC1400Raw.AuthorizeOperator
 */
export const Transaction_ERC1400Raw_AuthorizeOperator = proto3.makeMessageType(
  "transaction.v1.Transaction.ERC1400Raw.AuthorizeOperator",
  () => [
    { no: 1, name: "operator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "Transaction_ERC1400Raw_AuthorizeOperator"},
);

/**
 * @generated from message transaction.v1.Transaction.ERC1400Raw.RevokeOperator
 */
export const Transaction_ERC1400Raw_RevokeOperator = proto3.makeMessageType(
  "transaction.v1.Transaction.ERC1400Raw.RevokeOperator",
  () => [
    { no: 1, name: "operator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "Transaction_ERC1400Raw_RevokeOperator"},
);

/**
 * @generated from message transaction.v1.Transaction.ERC1400Partition
 */
export const Transaction_ERC1400Partition = proto3.makeMessageType(
  "transaction.v1.Transaction.ERC1400Partition",
  [],
  {localName: "Transaction_ERC1400Partition"},
);

/**
 * @generated from message transaction.v1.Transaction.ERC1400Partition.TransferByPartition
 */
export const Transaction_ERC1400Partition_TransferByPartition = proto3.makeMessageType(
  "transaction.v1.Transaction.ERC1400Partition.TransferByPartition",
  () => [
    { no: 1, name: "partition", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "to", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "value", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "calldata", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
  {localName: "Transaction_ERC1400Partition_TransferByPartition"},
);

/**
 * @generated from message transaction.v1.Transaction.ERC1400Partition.OperatorTransferByPartition
 */
export const Transaction_ERC1400Partition_OperatorTransferByPartition = proto3.makeMessageType(
  "transaction.v1.Transaction.ERC1400Partition.OperatorTransferByPartition",
  () => [
    { no: 1, name: "partition", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "from", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "to", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "value", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 5, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 6, name: "operator_data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
  {localName: "Transaction_ERC1400Partition_OperatorTransferByPartition"},
);

/**
 * @generated from message transaction.v1.Transaction.ERC1400Partition.AuthorizeOperatorByPartition
 */
export const Transaction_ERC1400Partition_AuthorizeOperatorByPartition = proto3.makeMessageType(
  "transaction.v1.Transaction.ERC1400Partition.AuthorizeOperatorByPartition",
  () => [
    { no: 1, name: "partition", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "operator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "Transaction_ERC1400Partition_AuthorizeOperatorByPartition"},
);

/**
 * @generated from message transaction.v1.Transaction.ERC1400Partition.RevokeOperatorByPartition
 */
export const Transaction_ERC1400Partition_RevokeOperatorByPartition = proto3.makeMessageType(
  "transaction.v1.Transaction.ERC1400Partition.RevokeOperatorByPartition",
  () => [
    { no: 1, name: "partition", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "operator", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "Transaction_ERC1400Partition_RevokeOperatorByPartition"},
);

/**
 * @generated from message transaction.v1.Transaction.ERC1400Partition.TransferWithData
 */
export const Transaction_ERC1400Partition_TransferWithData = proto3.makeMessageType(
  "transaction.v1.Transaction.ERC1400Partition.TransferWithData",
  () => [
    { no: 1, name: "to", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
  {localName: "Transaction_ERC1400Partition_TransferWithData"},
);

/**
 * @generated from message transaction.v1.Transaction.ERC1400Partition.TransferFromWithData
 */
export const Transaction_ERC1400Partition_TransferFromWithData = proto3.makeMessageType(
  "transaction.v1.Transaction.ERC1400Partition.TransferFromWithData",
  () => [
    { no: 1, name: "from", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "to", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "value", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 5, name: "operator_data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
  {localName: "Transaction_ERC1400Partition_TransferFromWithData"},
);

/**
 * @generated from message transaction.v1.Transaction.ERC1400ERC20
 */
export const Transaction_ERC1400ERC20 = proto3.makeMessageType(
  "transaction.v1.Transaction.ERC1400ERC20",
  [],
  {localName: "Transaction_ERC1400ERC20"},
);

/**
 * @generated from message transaction.v1.Transaction.ERC1400ERC20.Transfer
 */
export const Transaction_ERC1400ERC20_Transfer = proto3.makeMessageType(
  "transaction.v1.Transaction.ERC1400ERC20.Transfer",
  () => [
    { no: 1, name: "to", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
  {localName: "Transaction_ERC1400ERC20_Transfer"},
);

/**
 * @generated from message transaction.v1.Transaction.ERC1400ERC20.Approve
 */
export const Transaction_ERC1400ERC20_Approve = proto3.makeMessageType(
  "transaction.v1.Transaction.ERC1400ERC20.Approve",
  () => [
    { no: 1, name: "spender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
  {localName: "Transaction_ERC1400ERC20_Approve"},
);

/**
 * @generated from message transaction.v1.Transaction.ERC1400ERC20.TransferFrom
 */
export const Transaction_ERC1400ERC20_TransferFrom = proto3.makeMessageType(
  "transaction.v1.Transaction.ERC1400ERC20.TransferFrom",
  () => [
    { no: 1, name: "from", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "to", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "value", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
  {localName: "Transaction_ERC1400ERC20_TransferFrom"},
);

/**
 * @generated from message transaction.v1.Transaction.ERC1400Capped
 */
export const Transaction_ERC1400Capped = proto3.makeMessageType(
  "transaction.v1.Transaction.ERC1400Capped",
  [],
  {localName: "Transaction_ERC1400Capped"},
);

/**
 * @generated from message transaction.v1.Transaction.ERC1400Capped.SetCap
 */
export const Transaction_ERC1400Capped_SetCap = proto3.makeMessageType(
  "transaction.v1.Transaction.ERC1400Capped.SetCap",
  () => [
    { no: 1, name: "new_cap", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
  {localName: "Transaction_ERC1400Capped_SetCap"},
);

/**
 * @generated from message transaction.v1.Transaction.Constrainable
 */
export const Transaction_Constrainable = proto3.makeMessageType(
  "transaction.v1.Transaction.Constrainable",
  [],
  {localName: "Transaction_Constrainable"},
);

/**
 * @generated from message transaction.v1.Transaction.Constrainable.SetModulesByPartition
 */
export const Transaction_Constrainable_SetModulesByPartition = proto3.makeMessageType(
  "transaction.v1.Transaction.Constrainable.SetModulesByPartition",
  () => [
    { no: 1, name: "partition", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "new_modules", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
  {localName: "Transaction_Constrainable_SetModulesByPartition"},
);

/**
 * @generated from message transaction.v1.Transaction.Administrable
 */
export const Transaction_Administrable = proto3.makeMessageType(
  "transaction.v1.Transaction.Administrable",
  [],
  {localName: "Transaction_Administrable"},
);

/**
 * @generated from message transaction.v1.Transaction.Administrable.AddRole
 */
export const Transaction_Administrable_AddRole = proto3.makeMessageType(
  "transaction.v1.Transaction.Administrable.AddRole",
  () => [
    { no: 1, name: "role", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "Transaction_Administrable_AddRole"},
);

/**
 * @generated from message transaction.v1.Transaction.Administrable.BulkAddRole
 */
export const Transaction_Administrable_BulkAddRole = proto3.makeMessageType(
  "transaction.v1.Transaction.Administrable.BulkAddRole",
  () => [
    { no: 1, name: "roles", kind: "scalar", T: 12 /* ScalarType.BYTES */, repeated: true },
    { no: 2, name: "accounts", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
  {localName: "Transaction_Administrable_BulkAddRole"},
);

/**
 * @generated from message transaction.v1.Transaction.Administrable.RemoveRole
 */
export const Transaction_Administrable_RemoveRole = proto3.makeMessageType(
  "transaction.v1.Transaction.Administrable.RemoveRole",
  () => [
    { no: 1, name: "role", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 2, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "Transaction_Administrable_RemoveRole"},
);

/**
 * @generated from message transaction.v1.Transaction.Administrable.RenounceRole
 */
export const Transaction_Administrable_RenounceRole = proto3.makeMessageType(
  "transaction.v1.Transaction.Administrable.RenounceRole",
  () => [
    { no: 1, name: "role", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ],
  {localName: "Transaction_Administrable_RenounceRole"},
);

/**
 * @generated from message transaction.v1.Transaction.SpendingLimitsConstraintModule
 */
export const Transaction_SpendingLimitsConstraintModule = proto3.makeMessageType(
  "transaction.v1.Transaction.SpendingLimitsConstraintModule",
  [],
  {localName: "Transaction_SpendingLimitsConstraintModule"},
);

/**
 * @generated from message transaction.v1.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule
 */
export const Transaction_SpendingLimitsConstraintModule_DeploySpendingLimitsConstraintModule = proto3.makeMessageType(
  "transaction.v1.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule",
  () => [
    { no: 1, name: "token_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "Transaction_SpendingLimitsConstraintModule_DeploySpendingLimitsConstraintModule"},
);

/**
 * @generated from message transaction.v1.Transaction.SpendingLimitsConstraintModule.AddTimelock
 */
export const Transaction_SpendingLimitsConstraintModule_AddTimelock = proto3.makeMessageType(
  "transaction.v1.Transaction.SpendingLimitsConstraintModule.AddTimelock",
  () => [
    { no: 1, name: "period_length", kind: "message", T: Duration },
    { no: 2, name: "amount_allowed", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
  {localName: "Transaction_SpendingLimitsConstraintModule_AddTimelock"},
);

/**
 * @generated from message transaction.v1.Transaction.SpendingLimitsConstraintModule.SetTimelock
 */
export const Transaction_SpendingLimitsConstraintModule_SetTimelock = proto3.makeMessageType(
  "transaction.v1.Transaction.SpendingLimitsConstraintModule.SetTimelock",
  () => [
    { no: 1, name: "index", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 2, name: "period_length", kind: "message", T: Duration },
    { no: 3, name: "amount_allowed", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
  {localName: "Transaction_SpendingLimitsConstraintModule_SetTimelock"},
);

/**
 * @generated from message transaction.v1.Transaction.SpendingLimitsConstraintModule.DeleteTimelock
 */
export const Transaction_SpendingLimitsConstraintModule_DeleteTimelock = proto3.makeMessageType(
  "transaction.v1.Transaction.SpendingLimitsConstraintModule.DeleteTimelock",
  () => [
    { no: 1, name: "index", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
  {localName: "Transaction_SpendingLimitsConstraintModule_DeleteTimelock"},
);

/**
 * @generated from message transaction.v1.Transaction.TimeLockConstraintModule
 */
export const Transaction_TimeLockConstraintModule = proto3.makeMessageType(
  "transaction.v1.Transaction.TimeLockConstraintModule",
  [],
  {localName: "Transaction_TimeLockConstraintModule"},
);

/**
 * @generated from message transaction.v1.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule
 */
export const Transaction_TimeLockConstraintModule_DeployTimeLockConstraintModule = proto3.makeMessageType(
  "transaction.v1.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule",
  () => [
    { no: 1, name: "token_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "Transaction_TimeLockConstraintModule_DeployTimeLockConstraintModule"},
);

/**
 * @generated from message transaction.v1.Transaction.TimeLockConstraintModule.EditAmountTimeLock
 */
export const Transaction_TimeLockConstraintModule_EditAmountTimeLock = proto3.makeMessageType(
  "transaction.v1.Transaction.TimeLockConstraintModule.EditAmountTimeLock",
  () => [
    { no: 1, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "time", kind: "message", T: Timestamp },
    { no: 3, name: "amount", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
  {localName: "Transaction_TimeLockConstraintModule_EditAmountTimeLock"},
);

/**
 * @generated from message transaction.v1.Transaction.TimeLockConstraintModule.EditAccountTimeLock
 */
export const Transaction_TimeLockConstraintModule_EditAccountTimeLock = proto3.makeMessageType(
  "transaction.v1.Transaction.TimeLockConstraintModule.EditAccountTimeLock",
  () => [
    { no: 1, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "time", kind: "message", T: Timestamp },
  ],
  {localName: "Transaction_TimeLockConstraintModule_EditAccountTimeLock"},
);

/**
 * @generated from message transaction.v1.Transaction.TimeLockConstraintModule.EditTimeLock
 */
export const Transaction_TimeLockConstraintModule_EditTimeLock = proto3.makeMessageType(
  "transaction.v1.Transaction.TimeLockConstraintModule.EditTimeLock",
  () => [
    { no: 1, name: "time", kind: "message", T: Timestamp },
  ],
  {localName: "Transaction_TimeLockConstraintModule_EditTimeLock"},
);

/**
 * @generated from message transaction.v1.Transaction.VestingPeriodConstraintModule
 */
export const Transaction_VestingPeriodConstraintModule = proto3.makeMessageType(
  "transaction.v1.Transaction.VestingPeriodConstraintModule",
  [],
  {localName: "Transaction_VestingPeriodConstraintModule"},
);

/**
 * @generated from message transaction.v1.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule
 */
export const Transaction_VestingPeriodConstraintModule_DeployVestingPeriodConstraintModule = proto3.makeMessageType(
  "transaction.v1.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule",
  () => [
    { no: 1, name: "token_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "Transaction_VestingPeriodConstraintModule_DeployVestingPeriodConstraintModule"},
);

/**
 * @generated from message transaction.v1.Transaction.VestingPeriodConstraintModule.SetVestingOptions
 */
export const Transaction_VestingPeriodConstraintModule_SetVestingOptions = proto3.makeMessageType(
  "transaction.v1.Transaction.VestingPeriodConstraintModule.SetVestingOptions",
  () => [
    { no: 1, name: "vesting_start", kind: "message", T: Timestamp },
    { no: 2, name: "vested_fraction_after_start", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "vesting_ratio", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
  {localName: "Transaction_VestingPeriodConstraintModule_SetVestingOptions"},
);

/**
 * @generated from message transaction.v1.Transaction.WhitelistConstraintModule
 */
export const Transaction_WhitelistConstraintModule = proto3.makeMessageType(
  "transaction.v1.Transaction.WhitelistConstraintModule",
  [],
  {localName: "Transaction_WhitelistConstraintModule"},
);

/**
 * @generated from message transaction.v1.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule
 */
export const Transaction_WhitelistConstraintModule_DeployWhitelistConstraintModule = proto3.makeMessageType(
  "transaction.v1.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule",
  () => [
    { no: 1, name: "token_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "Transaction_WhitelistConstraintModule_DeployWhitelistConstraintModule"},
);

/**
 * @generated from message transaction.v1.Transaction.WhitelistConstraintModule.EditWhitelist
 */
export const Transaction_WhitelistConstraintModule_EditWhitelist = proto3.makeMessageType(
  "transaction.v1.Transaction.WhitelistConstraintModule.EditWhitelist",
  () => [
    { no: 1, name: "account", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "whitelisted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
  {localName: "Transaction_WhitelistConstraintModule_EditWhitelist"},
);

/**
 * @generated from message transaction.v1.Transaction.WhitelistConstraintModule.BulkEditWhitelist
 */
export const Transaction_WhitelistConstraintModule_BulkEditWhitelist = proto3.makeMessageType(
  "transaction.v1.Transaction.WhitelistConstraintModule.BulkEditWhitelist",
  () => [
    { no: 1, name: "accounts", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
    { no: 2, name: "whitelisted", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ],
  {localName: "Transaction_WhitelistConstraintModule_BulkEditWhitelist"},
);

/**
 * Metadata 
 *
 * @generated from message transaction.v1.Transaction.Metadata
 */
export const Transaction_Metadata = proto3.makeMessageType(
  "transaction.v1.Transaction.Metadata",
  () => [
    { no: 1, name: "hash", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "date", kind: "message", T: Timestamp },
    { no: 3, name: "reverted", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
  {localName: "Transaction_Metadata"},
);

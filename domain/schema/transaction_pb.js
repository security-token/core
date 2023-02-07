// source: schema/transaction.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function() { return this || window || global || self || Function('return this')(); }).call(null);

var schema_token_pb = require('../schema/token_pb.js');
goog.object.extend(proto, schema_token_pb);
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_duration_pb = require('google-protobuf/google/protobuf/duration_pb.js');
goog.object.extend(proto, google_protobuf_duration_pb);
goog.exportSymbol('proto.transaction.Transaction', null, global);
goog.exportSymbol('proto.transaction.Transaction.Administrable', null, global);
goog.exportSymbol('proto.transaction.Transaction.Administrable.AddRole', null, global);
goog.exportSymbol('proto.transaction.Transaction.Administrable.BulkAddRole', null, global);
goog.exportSymbol('proto.transaction.Transaction.Administrable.RemoveRole', null, global);
goog.exportSymbol('proto.transaction.Transaction.Administrable.RenounceRole', null, global);
goog.exportSymbol('proto.transaction.Transaction.Constrainable', null, global);
goog.exportSymbol('proto.transaction.Transaction.Constrainable.SetModulesByPartition', null, global);
goog.exportSymbol('proto.transaction.Transaction.DataCase', null, global);
goog.exportSymbol('proto.transaction.Transaction.ERC1400Capped', null, global);
goog.exportSymbol('proto.transaction.Transaction.ERC1400Capped.SetCap', null, global);
goog.exportSymbol('proto.transaction.Transaction.ERC1400ERC20', null, global);
goog.exportSymbol('proto.transaction.Transaction.ERC1400ERC20.Approve', null, global);
goog.exportSymbol('proto.transaction.Transaction.ERC1400ERC20.Transfer', null, global);
goog.exportSymbol('proto.transaction.Transaction.ERC1400ERC20.TransferFrom', null, global);
goog.exportSymbol('proto.transaction.Transaction.ERC1400Partition', null, global);
goog.exportSymbol('proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition', null, global);
goog.exportSymbol('proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition', null, global);
goog.exportSymbol('proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition', null, global);
goog.exportSymbol('proto.transaction.Transaction.ERC1400Partition.TransferByPartition', null, global);
goog.exportSymbol('proto.transaction.Transaction.ERC1400Partition.TransferFromWithData', null, global);
goog.exportSymbol('proto.transaction.Transaction.ERC1400Partition.TransferWithData', null, global);
goog.exportSymbol('proto.transaction.Transaction.ERC1400Raw', null, global);
goog.exportSymbol('proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator', null, global);
goog.exportSymbol('proto.transaction.Transaction.ERC1400Raw.RevokeOperator', null, global);
goog.exportSymbol('proto.transaction.Transaction.Metadata', null, global);
goog.exportSymbol('proto.transaction.Transaction.Ownable', null, global);
goog.exportSymbol('proto.transaction.Transaction.Ownable.TransferOwnership', null, global);
goog.exportSymbol('proto.transaction.Transaction.Pausable', null, global);
goog.exportSymbol('proto.transaction.Transaction.Pausable.Pause', null, global);
goog.exportSymbol('proto.transaction.Transaction.Pausable.Unpause', null, global);
goog.exportSymbol('proto.transaction.Transaction.SecurityToken', null, global);
goog.exportSymbol('proto.transaction.Transaction.SecurityToken.BulkIssueByPartition', null, global);
goog.exportSymbol('proto.transaction.Transaction.SecurityToken.IssueByPartition', null, global);
goog.exportSymbol('proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition', null, global);
goog.exportSymbol('proto.transaction.Transaction.SecurityToken.RedeemByPartition', null, global);
goog.exportSymbol('proto.transaction.Transaction.SecurityToken.RenounceControl', null, global);
goog.exportSymbol('proto.transaction.Transaction.SecurityToken.RenounceIssuance', null, global);
goog.exportSymbol('proto.transaction.Transaction.SecurityToken.SetDocument', null, global);
goog.exportSymbol('proto.transaction.Transaction.SecurityTokenFactory', null, global);
goog.exportSymbol('proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken', null, global);
goog.exportSymbol('proto.transaction.Transaction.SpendingLimitsConstraintModule', null, global);
goog.exportSymbol('proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock', null, global);
goog.exportSymbol('proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock', null, global);
goog.exportSymbol('proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule', null, global);
goog.exportSymbol('proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock', null, global);
goog.exportSymbol('proto.transaction.Transaction.TimeLockConstraintModule', null, global);
goog.exportSymbol('proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule', null, global);
goog.exportSymbol('proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock', null, global);
goog.exportSymbol('proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock', null, global);
goog.exportSymbol('proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock', null, global);
goog.exportSymbol('proto.transaction.Transaction.VestingPeriodConstraintModule', null, global);
goog.exportSymbol('proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule', null, global);
goog.exportSymbol('proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions', null, global);
goog.exportSymbol('proto.transaction.Transaction.WhitelistConstraintModule', null, global);
goog.exportSymbol('proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist', null, global);
goog.exportSymbol('proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule', null, global);
goog.exportSymbol('proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.transaction.Transaction.oneofGroups_);
};
goog.inherits(proto.transaction.Transaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.displayName = 'proto.transaction.Transaction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.SecurityTokenFactory = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.SecurityTokenFactory, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.SecurityTokenFactory.displayName = 'proto.transaction.Transaction.SecurityTokenFactory';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.displayName = 'proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.SecurityToken = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.SecurityToken, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.SecurityToken.displayName = 'proto.transaction.Transaction.SecurityToken';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.SecurityToken.BulkIssueByPartition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.repeatedFields_, null);
};
goog.inherits(proto.transaction.Transaction.SecurityToken.BulkIssueByPartition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.displayName = 'proto.transaction.Transaction.SecurityToken.BulkIssueByPartition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.SecurityToken.SetDocument = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.SecurityToken.SetDocument, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.SecurityToken.SetDocument.displayName = 'proto.transaction.Transaction.SecurityToken.SetDocument';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.SecurityToken.IssueByPartition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.SecurityToken.IssueByPartition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.SecurityToken.IssueByPartition.displayName = 'proto.transaction.Transaction.SecurityToken.IssueByPartition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.SecurityToken.RedeemByPartition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.SecurityToken.RedeemByPartition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.SecurityToken.RedeemByPartition.displayName = 'proto.transaction.Transaction.SecurityToken.RedeemByPartition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.displayName = 'proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.SecurityToken.RenounceControl = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.SecurityToken.RenounceControl, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.SecurityToken.RenounceControl.displayName = 'proto.transaction.Transaction.SecurityToken.RenounceControl';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.SecurityToken.RenounceIssuance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.SecurityToken.RenounceIssuance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.SecurityToken.RenounceIssuance.displayName = 'proto.transaction.Transaction.SecurityToken.RenounceIssuance';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.Pausable = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.Pausable, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.Pausable.displayName = 'proto.transaction.Transaction.Pausable';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.Pausable.Pause = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.Pausable.Pause, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.Pausable.Pause.displayName = 'proto.transaction.Transaction.Pausable.Pause';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.Pausable.Unpause = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.Pausable.Unpause, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.Pausable.Unpause.displayName = 'proto.transaction.Transaction.Pausable.Unpause';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.Ownable = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.Ownable, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.Ownable.displayName = 'proto.transaction.Transaction.Ownable';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.Ownable.TransferOwnership = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.Ownable.TransferOwnership, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.Ownable.TransferOwnership.displayName = 'proto.transaction.Transaction.Ownable.TransferOwnership';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.ERC1400Raw = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.ERC1400Raw, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.ERC1400Raw.displayName = 'proto.transaction.Transaction.ERC1400Raw';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator.displayName = 'proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.ERC1400Raw.RevokeOperator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.ERC1400Raw.RevokeOperator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.ERC1400Raw.RevokeOperator.displayName = 'proto.transaction.Transaction.ERC1400Raw.RevokeOperator';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.ERC1400Partition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.ERC1400Partition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.ERC1400Partition.displayName = 'proto.transaction.Transaction.ERC1400Partition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.ERC1400Partition.TransferByPartition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.ERC1400Partition.TransferByPartition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.ERC1400Partition.TransferByPartition.displayName = 'proto.transaction.Transaction.ERC1400Partition.TransferByPartition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.displayName = 'proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition.displayName = 'proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition.displayName = 'proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.ERC1400Partition.TransferWithData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.ERC1400Partition.TransferWithData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.ERC1400Partition.TransferWithData.displayName = 'proto.transaction.Transaction.ERC1400Partition.TransferWithData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.ERC1400Partition.TransferFromWithData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.ERC1400Partition.TransferFromWithData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.ERC1400Partition.TransferFromWithData.displayName = 'proto.transaction.Transaction.ERC1400Partition.TransferFromWithData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.ERC1400ERC20 = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.ERC1400ERC20, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.ERC1400ERC20.displayName = 'proto.transaction.Transaction.ERC1400ERC20';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.ERC1400ERC20.Transfer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.ERC1400ERC20.Transfer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.ERC1400ERC20.Transfer.displayName = 'proto.transaction.Transaction.ERC1400ERC20.Transfer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.ERC1400ERC20.Approve = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.ERC1400ERC20.Approve, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.ERC1400ERC20.Approve.displayName = 'proto.transaction.Transaction.ERC1400ERC20.Approve';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.ERC1400ERC20.TransferFrom = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.ERC1400ERC20.TransferFrom, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.ERC1400ERC20.TransferFrom.displayName = 'proto.transaction.Transaction.ERC1400ERC20.TransferFrom';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.ERC1400Capped = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.ERC1400Capped, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.ERC1400Capped.displayName = 'proto.transaction.Transaction.ERC1400Capped';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.ERC1400Capped.SetCap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.ERC1400Capped.SetCap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.ERC1400Capped.SetCap.displayName = 'proto.transaction.Transaction.ERC1400Capped.SetCap';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.Constrainable = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.Constrainable, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.Constrainable.displayName = 'proto.transaction.Transaction.Constrainable';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.Constrainable.SetModulesByPartition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.transaction.Transaction.Constrainable.SetModulesByPartition.repeatedFields_, null);
};
goog.inherits(proto.transaction.Transaction.Constrainable.SetModulesByPartition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.Constrainable.SetModulesByPartition.displayName = 'proto.transaction.Transaction.Constrainable.SetModulesByPartition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.Administrable = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.Administrable, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.Administrable.displayName = 'proto.transaction.Transaction.Administrable';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.Administrable.AddRole = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.Administrable.AddRole, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.Administrable.AddRole.displayName = 'proto.transaction.Transaction.Administrable.AddRole';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.Administrable.BulkAddRole = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.transaction.Transaction.Administrable.BulkAddRole.repeatedFields_, null);
};
goog.inherits(proto.transaction.Transaction.Administrable.BulkAddRole, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.Administrable.BulkAddRole.displayName = 'proto.transaction.Transaction.Administrable.BulkAddRole';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.Administrable.RemoveRole = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.Administrable.RemoveRole, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.Administrable.RemoveRole.displayName = 'proto.transaction.Transaction.Administrable.RemoveRole';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.Administrable.RenounceRole = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.Administrable.RenounceRole, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.Administrable.RenounceRole.displayName = 'proto.transaction.Transaction.Administrable.RenounceRole';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.SpendingLimitsConstraintModule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.SpendingLimitsConstraintModule.displayName = 'proto.transaction.Transaction.SpendingLimitsConstraintModule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule.displayName = 'proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock.displayName = 'proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock.displayName = 'proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock.displayName = 'proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.TimeLockConstraintModule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.TimeLockConstraintModule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.TimeLockConstraintModule.displayName = 'proto.transaction.Transaction.TimeLockConstraintModule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule.displayName = 'proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock.displayName = 'proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock.displayName = 'proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock.displayName = 'proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.VestingPeriodConstraintModule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.VestingPeriodConstraintModule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.VestingPeriodConstraintModule.displayName = 'proto.transaction.Transaction.VestingPeriodConstraintModule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule.displayName = 'proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions.displayName = 'proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.WhitelistConstraintModule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.WhitelistConstraintModule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.WhitelistConstraintModule.displayName = 'proto.transaction.Transaction.WhitelistConstraintModule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule.displayName = 'proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist.displayName = 'proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist.repeatedFields_, null);
};
goog.inherits(proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist.displayName = 'proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.transaction.Transaction.Metadata = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.transaction.Transaction.Metadata, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.transaction.Transaction.Metadata.displayName = 'proto.transaction.Transaction.Metadata';
}

/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.transaction.Transaction.oneofGroups_ = [[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44]];

/**
 * @enum {number}
 */
proto.transaction.Transaction.DataCase = {
  DATA_NOT_SET: 0,
  DEPLOYNEWSECURITYTOKEN: 4,
  BULKISSUEBYPARTITION: 5,
  SETDOCUMENT: 6,
  ISSUEBYPARTITION: 7,
  REDEEMBYPARTITION: 8,
  OPERATORREDEEMBYPARTITION: 9,
  RENOUNCECONTROL: 10,
  RENOUNCEISSUANCE: 11,
  PAUSE: 12,
  UNPAUSE: 13,
  TRANSFEROWNERSHIP: 14,
  AUTHORIZEOPERATOR: 15,
  REVOKEOPERATOR: 16,
  TRANSFERBYPARTITION: 17,
  OPERATORTRANSFERBYPARTITION: 18,
  AUTHORIZEOPERATORBYPARTITION: 19,
  REVOKEOPERATORBYPARTITION: 20,
  TRANSFERWITHDATA: 21,
  TRANSFERFROMWITHDATA: 22,
  TRANSFER: 23,
  APPROVE: 24,
  TRANSFERFROM: 25,
  SETCAP: 26,
  SETMODULESBYPARTITION: 27,
  ADDROLE: 28,
  BULKADDROLE: 29,
  REMOVEROLE: 30,
  RENOUNCEROLE: 31,
  DEPLOYSPENDINGLIMITSCONSTRAINTMODULE: 32,
  ADDTIMELOCK: 33,
  SETTIMELOCK: 34,
  DELETETIMELOCK: 35,
  DEPLOYTIMELOCKCONSTRAINTMODULE: 36,
  EDITAMOUNTTIMELOCK: 37,
  EDITACCOUNTTIMELOCK: 38,
  EDITTIMELOCK: 39,
  DEPLOYVESTINGPERIODCONSTRAINTMODULE: 40,
  SETVESTINGOPTIONS: 41,
  DEPLOYWHITELISTCONSTRAINTMODULE: 42,
  EDITWHITELIST: 43,
  BULKEDITWHITELIST: 44
};

/**
 * @return {proto.transaction.Transaction.DataCase}
 */
proto.transaction.Transaction.prototype.getDataCase = function() {
  return /** @type {proto.transaction.Transaction.DataCase} */(jspb.Message.computeOneofCase(this, proto.transaction.Transaction.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && proto.transaction.Transaction.Metadata.toObject(includeInstance, f),
    contract: jspb.Message.getFieldWithDefault(msg, 2, ""),
    network: jspb.Message.getFieldWithDefault(msg, 3, 0),
    deploynewsecuritytoken: (f = msg.getDeploynewsecuritytoken()) && proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.toObject(includeInstance, f),
    bulkissuebypartition: (f = msg.getBulkissuebypartition()) && proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.toObject(includeInstance, f),
    setdocument: (f = msg.getSetdocument()) && proto.transaction.Transaction.SecurityToken.SetDocument.toObject(includeInstance, f),
    issuebypartition: (f = msg.getIssuebypartition()) && proto.transaction.Transaction.SecurityToken.IssueByPartition.toObject(includeInstance, f),
    redeembypartition: (f = msg.getRedeembypartition()) && proto.transaction.Transaction.SecurityToken.RedeemByPartition.toObject(includeInstance, f),
    operatorredeembypartition: (f = msg.getOperatorredeembypartition()) && proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.toObject(includeInstance, f),
    renouncecontrol: (f = msg.getRenouncecontrol()) && proto.transaction.Transaction.SecurityToken.RenounceControl.toObject(includeInstance, f),
    renounceissuance: (f = msg.getRenounceissuance()) && proto.transaction.Transaction.SecurityToken.RenounceIssuance.toObject(includeInstance, f),
    pause: (f = msg.getPause()) && proto.transaction.Transaction.Pausable.Pause.toObject(includeInstance, f),
    unpause: (f = msg.getUnpause()) && proto.transaction.Transaction.Pausable.Unpause.toObject(includeInstance, f),
    transferownership: (f = msg.getTransferownership()) && proto.transaction.Transaction.Ownable.TransferOwnership.toObject(includeInstance, f),
    authorizeoperator: (f = msg.getAuthorizeoperator()) && proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator.toObject(includeInstance, f),
    revokeoperator: (f = msg.getRevokeoperator()) && proto.transaction.Transaction.ERC1400Raw.RevokeOperator.toObject(includeInstance, f),
    transferbypartition: (f = msg.getTransferbypartition()) && proto.transaction.Transaction.ERC1400Partition.TransferByPartition.toObject(includeInstance, f),
    operatortransferbypartition: (f = msg.getOperatortransferbypartition()) && proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.toObject(includeInstance, f),
    authorizeoperatorbypartition: (f = msg.getAuthorizeoperatorbypartition()) && proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition.toObject(includeInstance, f),
    revokeoperatorbypartition: (f = msg.getRevokeoperatorbypartition()) && proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition.toObject(includeInstance, f),
    transferwithdata: (f = msg.getTransferwithdata()) && proto.transaction.Transaction.ERC1400Partition.TransferWithData.toObject(includeInstance, f),
    transferfromwithdata: (f = msg.getTransferfromwithdata()) && proto.transaction.Transaction.ERC1400Partition.TransferFromWithData.toObject(includeInstance, f),
    transfer: (f = msg.getTransfer()) && proto.transaction.Transaction.ERC1400ERC20.Transfer.toObject(includeInstance, f),
    approve: (f = msg.getApprove()) && proto.transaction.Transaction.ERC1400ERC20.Approve.toObject(includeInstance, f),
    transferfrom: (f = msg.getTransferfrom()) && proto.transaction.Transaction.ERC1400ERC20.TransferFrom.toObject(includeInstance, f),
    setcap: (f = msg.getSetcap()) && proto.transaction.Transaction.ERC1400Capped.SetCap.toObject(includeInstance, f),
    setmodulesbypartition: (f = msg.getSetmodulesbypartition()) && proto.transaction.Transaction.Constrainable.SetModulesByPartition.toObject(includeInstance, f),
    addrole: (f = msg.getAddrole()) && proto.transaction.Transaction.Administrable.AddRole.toObject(includeInstance, f),
    bulkaddrole: (f = msg.getBulkaddrole()) && proto.transaction.Transaction.Administrable.BulkAddRole.toObject(includeInstance, f),
    removerole: (f = msg.getRemoverole()) && proto.transaction.Transaction.Administrable.RemoveRole.toObject(includeInstance, f),
    renouncerole: (f = msg.getRenouncerole()) && proto.transaction.Transaction.Administrable.RenounceRole.toObject(includeInstance, f),
    deployspendinglimitsconstraintmodule: (f = msg.getDeployspendinglimitsconstraintmodule()) && proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule.toObject(includeInstance, f),
    addtimelock: (f = msg.getAddtimelock()) && proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock.toObject(includeInstance, f),
    settimelock: (f = msg.getSettimelock()) && proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock.toObject(includeInstance, f),
    deletetimelock: (f = msg.getDeletetimelock()) && proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock.toObject(includeInstance, f),
    deploytimelockconstraintmodule: (f = msg.getDeploytimelockconstraintmodule()) && proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule.toObject(includeInstance, f),
    editamounttimelock: (f = msg.getEditamounttimelock()) && proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock.toObject(includeInstance, f),
    editaccounttimelock: (f = msg.getEditaccounttimelock()) && proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock.toObject(includeInstance, f),
    edittimelock: (f = msg.getEdittimelock()) && proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock.toObject(includeInstance, f),
    deployvestingperiodconstraintmodule: (f = msg.getDeployvestingperiodconstraintmodule()) && proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule.toObject(includeInstance, f),
    setvestingoptions: (f = msg.getSetvestingoptions()) && proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions.toObject(includeInstance, f),
    deploywhitelistconstraintmodule: (f = msg.getDeploywhitelistconstraintmodule()) && proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule.toObject(includeInstance, f),
    editwhitelist: (f = msg.getEditwhitelist()) && proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist.toObject(includeInstance, f),
    bulkeditwhitelist: (f = msg.getBulkeditwhitelist()) && proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction}
 */
proto.transaction.Transaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction;
  return proto.transaction.Transaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction}
 */
proto.transaction.Transaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.transaction.Transaction.Metadata;
      reader.readMessage(value,proto.transaction.Transaction.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContract(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setNetwork(value);
      break;
    case 4:
      var value = new proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken;
      reader.readMessage(value,proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.deserializeBinaryFromReader);
      msg.setDeploynewsecuritytoken(value);
      break;
    case 5:
      var value = new proto.transaction.Transaction.SecurityToken.BulkIssueByPartition;
      reader.readMessage(value,proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.deserializeBinaryFromReader);
      msg.setBulkissuebypartition(value);
      break;
    case 6:
      var value = new proto.transaction.Transaction.SecurityToken.SetDocument;
      reader.readMessage(value,proto.transaction.Transaction.SecurityToken.SetDocument.deserializeBinaryFromReader);
      msg.setSetdocument(value);
      break;
    case 7:
      var value = new proto.transaction.Transaction.SecurityToken.IssueByPartition;
      reader.readMessage(value,proto.transaction.Transaction.SecurityToken.IssueByPartition.deserializeBinaryFromReader);
      msg.setIssuebypartition(value);
      break;
    case 8:
      var value = new proto.transaction.Transaction.SecurityToken.RedeemByPartition;
      reader.readMessage(value,proto.transaction.Transaction.SecurityToken.RedeemByPartition.deserializeBinaryFromReader);
      msg.setRedeembypartition(value);
      break;
    case 9:
      var value = new proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition;
      reader.readMessage(value,proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.deserializeBinaryFromReader);
      msg.setOperatorredeembypartition(value);
      break;
    case 10:
      var value = new proto.transaction.Transaction.SecurityToken.RenounceControl;
      reader.readMessage(value,proto.transaction.Transaction.SecurityToken.RenounceControl.deserializeBinaryFromReader);
      msg.setRenouncecontrol(value);
      break;
    case 11:
      var value = new proto.transaction.Transaction.SecurityToken.RenounceIssuance;
      reader.readMessage(value,proto.transaction.Transaction.SecurityToken.RenounceIssuance.deserializeBinaryFromReader);
      msg.setRenounceissuance(value);
      break;
    case 12:
      var value = new proto.transaction.Transaction.Pausable.Pause;
      reader.readMessage(value,proto.transaction.Transaction.Pausable.Pause.deserializeBinaryFromReader);
      msg.setPause(value);
      break;
    case 13:
      var value = new proto.transaction.Transaction.Pausable.Unpause;
      reader.readMessage(value,proto.transaction.Transaction.Pausable.Unpause.deserializeBinaryFromReader);
      msg.setUnpause(value);
      break;
    case 14:
      var value = new proto.transaction.Transaction.Ownable.TransferOwnership;
      reader.readMessage(value,proto.transaction.Transaction.Ownable.TransferOwnership.deserializeBinaryFromReader);
      msg.setTransferownership(value);
      break;
    case 15:
      var value = new proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator;
      reader.readMessage(value,proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator.deserializeBinaryFromReader);
      msg.setAuthorizeoperator(value);
      break;
    case 16:
      var value = new proto.transaction.Transaction.ERC1400Raw.RevokeOperator;
      reader.readMessage(value,proto.transaction.Transaction.ERC1400Raw.RevokeOperator.deserializeBinaryFromReader);
      msg.setRevokeoperator(value);
      break;
    case 17:
      var value = new proto.transaction.Transaction.ERC1400Partition.TransferByPartition;
      reader.readMessage(value,proto.transaction.Transaction.ERC1400Partition.TransferByPartition.deserializeBinaryFromReader);
      msg.setTransferbypartition(value);
      break;
    case 18:
      var value = new proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition;
      reader.readMessage(value,proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.deserializeBinaryFromReader);
      msg.setOperatortransferbypartition(value);
      break;
    case 19:
      var value = new proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition;
      reader.readMessage(value,proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition.deserializeBinaryFromReader);
      msg.setAuthorizeoperatorbypartition(value);
      break;
    case 20:
      var value = new proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition;
      reader.readMessage(value,proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition.deserializeBinaryFromReader);
      msg.setRevokeoperatorbypartition(value);
      break;
    case 21:
      var value = new proto.transaction.Transaction.ERC1400Partition.TransferWithData;
      reader.readMessage(value,proto.transaction.Transaction.ERC1400Partition.TransferWithData.deserializeBinaryFromReader);
      msg.setTransferwithdata(value);
      break;
    case 22:
      var value = new proto.transaction.Transaction.ERC1400Partition.TransferFromWithData;
      reader.readMessage(value,proto.transaction.Transaction.ERC1400Partition.TransferFromWithData.deserializeBinaryFromReader);
      msg.setTransferfromwithdata(value);
      break;
    case 23:
      var value = new proto.transaction.Transaction.ERC1400ERC20.Transfer;
      reader.readMessage(value,proto.transaction.Transaction.ERC1400ERC20.Transfer.deserializeBinaryFromReader);
      msg.setTransfer(value);
      break;
    case 24:
      var value = new proto.transaction.Transaction.ERC1400ERC20.Approve;
      reader.readMessage(value,proto.transaction.Transaction.ERC1400ERC20.Approve.deserializeBinaryFromReader);
      msg.setApprove(value);
      break;
    case 25:
      var value = new proto.transaction.Transaction.ERC1400ERC20.TransferFrom;
      reader.readMessage(value,proto.transaction.Transaction.ERC1400ERC20.TransferFrom.deserializeBinaryFromReader);
      msg.setTransferfrom(value);
      break;
    case 26:
      var value = new proto.transaction.Transaction.ERC1400Capped.SetCap;
      reader.readMessage(value,proto.transaction.Transaction.ERC1400Capped.SetCap.deserializeBinaryFromReader);
      msg.setSetcap(value);
      break;
    case 27:
      var value = new proto.transaction.Transaction.Constrainable.SetModulesByPartition;
      reader.readMessage(value,proto.transaction.Transaction.Constrainable.SetModulesByPartition.deserializeBinaryFromReader);
      msg.setSetmodulesbypartition(value);
      break;
    case 28:
      var value = new proto.transaction.Transaction.Administrable.AddRole;
      reader.readMessage(value,proto.transaction.Transaction.Administrable.AddRole.deserializeBinaryFromReader);
      msg.setAddrole(value);
      break;
    case 29:
      var value = new proto.transaction.Transaction.Administrable.BulkAddRole;
      reader.readMessage(value,proto.transaction.Transaction.Administrable.BulkAddRole.deserializeBinaryFromReader);
      msg.setBulkaddrole(value);
      break;
    case 30:
      var value = new proto.transaction.Transaction.Administrable.RemoveRole;
      reader.readMessage(value,proto.transaction.Transaction.Administrable.RemoveRole.deserializeBinaryFromReader);
      msg.setRemoverole(value);
      break;
    case 31:
      var value = new proto.transaction.Transaction.Administrable.RenounceRole;
      reader.readMessage(value,proto.transaction.Transaction.Administrable.RenounceRole.deserializeBinaryFromReader);
      msg.setRenouncerole(value);
      break;
    case 32:
      var value = new proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule;
      reader.readMessage(value,proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule.deserializeBinaryFromReader);
      msg.setDeployspendinglimitsconstraintmodule(value);
      break;
    case 33:
      var value = new proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock;
      reader.readMessage(value,proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock.deserializeBinaryFromReader);
      msg.setAddtimelock(value);
      break;
    case 34:
      var value = new proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock;
      reader.readMessage(value,proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock.deserializeBinaryFromReader);
      msg.setSettimelock(value);
      break;
    case 35:
      var value = new proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock;
      reader.readMessage(value,proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock.deserializeBinaryFromReader);
      msg.setDeletetimelock(value);
      break;
    case 36:
      var value = new proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule;
      reader.readMessage(value,proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule.deserializeBinaryFromReader);
      msg.setDeploytimelockconstraintmodule(value);
      break;
    case 37:
      var value = new proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock;
      reader.readMessage(value,proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock.deserializeBinaryFromReader);
      msg.setEditamounttimelock(value);
      break;
    case 38:
      var value = new proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock;
      reader.readMessage(value,proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock.deserializeBinaryFromReader);
      msg.setEditaccounttimelock(value);
      break;
    case 39:
      var value = new proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock;
      reader.readMessage(value,proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock.deserializeBinaryFromReader);
      msg.setEdittimelock(value);
      break;
    case 40:
      var value = new proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule;
      reader.readMessage(value,proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule.deserializeBinaryFromReader);
      msg.setDeployvestingperiodconstraintmodule(value);
      break;
    case 41:
      var value = new proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions;
      reader.readMessage(value,proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions.deserializeBinaryFromReader);
      msg.setSetvestingoptions(value);
      break;
    case 42:
      var value = new proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule;
      reader.readMessage(value,proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule.deserializeBinaryFromReader);
      msg.setDeploywhitelistconstraintmodule(value);
      break;
    case 43:
      var value = new proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist;
      reader.readMessage(value,proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist.deserializeBinaryFromReader);
      msg.setEditwhitelist(value);
      break;
    case 44:
      var value = new proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist;
      reader.readMessage(value,proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist.deserializeBinaryFromReader);
      msg.setBulkeditwhitelist(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.transaction.Transaction.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getContract();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNetwork();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getDeploynewsecuritytoken();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.serializeBinaryToWriter
    );
  }
  f = message.getBulkissuebypartition();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.serializeBinaryToWriter
    );
  }
  f = message.getSetdocument();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.transaction.Transaction.SecurityToken.SetDocument.serializeBinaryToWriter
    );
  }
  f = message.getIssuebypartition();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.transaction.Transaction.SecurityToken.IssueByPartition.serializeBinaryToWriter
    );
  }
  f = message.getRedeembypartition();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.transaction.Transaction.SecurityToken.RedeemByPartition.serializeBinaryToWriter
    );
  }
  f = message.getOperatorredeembypartition();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.serializeBinaryToWriter
    );
  }
  f = message.getRenouncecontrol();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.transaction.Transaction.SecurityToken.RenounceControl.serializeBinaryToWriter
    );
  }
  f = message.getRenounceissuance();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.transaction.Transaction.SecurityToken.RenounceIssuance.serializeBinaryToWriter
    );
  }
  f = message.getPause();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.transaction.Transaction.Pausable.Pause.serializeBinaryToWriter
    );
  }
  f = message.getUnpause();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.transaction.Transaction.Pausable.Unpause.serializeBinaryToWriter
    );
  }
  f = message.getTransferownership();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.transaction.Transaction.Ownable.TransferOwnership.serializeBinaryToWriter
    );
  }
  f = message.getAuthorizeoperator();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator.serializeBinaryToWriter
    );
  }
  f = message.getRevokeoperator();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.transaction.Transaction.ERC1400Raw.RevokeOperator.serializeBinaryToWriter
    );
  }
  f = message.getTransferbypartition();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.transaction.Transaction.ERC1400Partition.TransferByPartition.serializeBinaryToWriter
    );
  }
  f = message.getOperatortransferbypartition();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.serializeBinaryToWriter
    );
  }
  f = message.getAuthorizeoperatorbypartition();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition.serializeBinaryToWriter
    );
  }
  f = message.getRevokeoperatorbypartition();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition.serializeBinaryToWriter
    );
  }
  f = message.getTransferwithdata();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.transaction.Transaction.ERC1400Partition.TransferWithData.serializeBinaryToWriter
    );
  }
  f = message.getTransferfromwithdata();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.transaction.Transaction.ERC1400Partition.TransferFromWithData.serializeBinaryToWriter
    );
  }
  f = message.getTransfer();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.transaction.Transaction.ERC1400ERC20.Transfer.serializeBinaryToWriter
    );
  }
  f = message.getApprove();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.transaction.Transaction.ERC1400ERC20.Approve.serializeBinaryToWriter
    );
  }
  f = message.getTransferfrom();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.transaction.Transaction.ERC1400ERC20.TransferFrom.serializeBinaryToWriter
    );
  }
  f = message.getSetcap();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.transaction.Transaction.ERC1400Capped.SetCap.serializeBinaryToWriter
    );
  }
  f = message.getSetmodulesbypartition();
  if (f != null) {
    writer.writeMessage(
      27,
      f,
      proto.transaction.Transaction.Constrainable.SetModulesByPartition.serializeBinaryToWriter
    );
  }
  f = message.getAddrole();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto.transaction.Transaction.Administrable.AddRole.serializeBinaryToWriter
    );
  }
  f = message.getBulkaddrole();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.transaction.Transaction.Administrable.BulkAddRole.serializeBinaryToWriter
    );
  }
  f = message.getRemoverole();
  if (f != null) {
    writer.writeMessage(
      30,
      f,
      proto.transaction.Transaction.Administrable.RemoveRole.serializeBinaryToWriter
    );
  }
  f = message.getRenouncerole();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.transaction.Transaction.Administrable.RenounceRole.serializeBinaryToWriter
    );
  }
  f = message.getDeployspendinglimitsconstraintmodule();
  if (f != null) {
    writer.writeMessage(
      32,
      f,
      proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule.serializeBinaryToWriter
    );
  }
  f = message.getAddtimelock();
  if (f != null) {
    writer.writeMessage(
      33,
      f,
      proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock.serializeBinaryToWriter
    );
  }
  f = message.getSettimelock();
  if (f != null) {
    writer.writeMessage(
      34,
      f,
      proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock.serializeBinaryToWriter
    );
  }
  f = message.getDeletetimelock();
  if (f != null) {
    writer.writeMessage(
      35,
      f,
      proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock.serializeBinaryToWriter
    );
  }
  f = message.getDeploytimelockconstraintmodule();
  if (f != null) {
    writer.writeMessage(
      36,
      f,
      proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule.serializeBinaryToWriter
    );
  }
  f = message.getEditamounttimelock();
  if (f != null) {
    writer.writeMessage(
      37,
      f,
      proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock.serializeBinaryToWriter
    );
  }
  f = message.getEditaccounttimelock();
  if (f != null) {
    writer.writeMessage(
      38,
      f,
      proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock.serializeBinaryToWriter
    );
  }
  f = message.getEdittimelock();
  if (f != null) {
    writer.writeMessage(
      39,
      f,
      proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock.serializeBinaryToWriter
    );
  }
  f = message.getDeployvestingperiodconstraintmodule();
  if (f != null) {
    writer.writeMessage(
      40,
      f,
      proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule.serializeBinaryToWriter
    );
  }
  f = message.getSetvestingoptions();
  if (f != null) {
    writer.writeMessage(
      41,
      f,
      proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions.serializeBinaryToWriter
    );
  }
  f = message.getDeploywhitelistconstraintmodule();
  if (f != null) {
    writer.writeMessage(
      42,
      f,
      proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule.serializeBinaryToWriter
    );
  }
  f = message.getEditwhitelist();
  if (f != null) {
    writer.writeMessage(
      43,
      f,
      proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist.serializeBinaryToWriter
    );
  }
  f = message.getBulkeditwhitelist();
  if (f != null) {
    writer.writeMessage(
      44,
      f,
      proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.SecurityTokenFactory.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.SecurityTokenFactory.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.SecurityTokenFactory} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SecurityTokenFactory.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.SecurityTokenFactory}
 */
proto.transaction.Transaction.SecurityTokenFactory.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.SecurityTokenFactory;
  return proto.transaction.Transaction.SecurityTokenFactory.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.SecurityTokenFactory} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.SecurityTokenFactory}
 */
proto.transaction.Transaction.SecurityTokenFactory.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.SecurityTokenFactory.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.SecurityTokenFactory.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.SecurityTokenFactory} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SecurityTokenFactory.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    symbol: jspb.Message.getFieldWithDefault(msg, 2, ""),
    granularity: jspb.Message.getFieldWithDefault(msg, 3, 0),
    cap: jspb.Message.getFieldWithDefault(msg, 4, 0),
    admin: jspb.Message.getFieldWithDefault(msg, 5, ""),
    controller: jspb.Message.getFieldWithDefault(msg, 6, ""),
    issuer: jspb.Message.getFieldWithDefault(msg, 7, ""),
    redeemer: jspb.Message.getFieldWithDefault(msg, 8, ""),
    moduleEditor: jspb.Message.getFieldWithDefault(msg, 9, ""),
    metadata: (f = msg.getMetadata()) && schema_token_pb.SecurityToken.Metadata.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken}
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken;
  return proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken}
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSymbol(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setGranularity(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCap(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAdmin(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setController(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setIssuer(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRedeemer(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setModuleEditor(value);
      break;
    case 10:
      var value = new schema_token_pb.SecurityToken.Metadata;
      reader.readMessage(value,schema_token_pb.SecurityToken.Metadata.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSymbol();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getGranularity();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getCap();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getAdmin();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getController();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getIssuer();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getRedeemer();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getModuleEditor();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      schema_token_pb.SecurityToken.Metadata.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken} returns this
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string symbol = 2;
 * @return {string}
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.prototype.getSymbol = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken} returns this
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.prototype.setSymbol = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 granularity = 3;
 * @return {number}
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.prototype.getGranularity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken} returns this
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.prototype.setGranularity = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 cap = 4;
 * @return {number}
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.prototype.getCap = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken} returns this
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.prototype.setCap = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string admin = 5;
 * @return {string}
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.prototype.getAdmin = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken} returns this
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.prototype.setAdmin = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string controller = 6;
 * @return {string}
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.prototype.getController = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken} returns this
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.prototype.setController = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string issuer = 7;
 * @return {string}
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.prototype.getIssuer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken} returns this
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.prototype.setIssuer = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string redeemer = 8;
 * @return {string}
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.prototype.getRedeemer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken} returns this
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.prototype.setRedeemer = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string module_editor = 9;
 * @return {string}
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.prototype.getModuleEditor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken} returns this
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.prototype.setModuleEditor = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional token.SecurityToken.Metadata metadata = 10;
 * @return {?proto.token.SecurityToken.Metadata}
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.prototype.getMetadata = function() {
  return /** @type{?proto.token.SecurityToken.Metadata} */ (
    jspb.Message.getWrapperField(this, schema_token_pb.SecurityToken.Metadata, 10));
};


/**
 * @param {?proto.token.SecurityToken.Metadata|undefined} value
 * @return {!proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken} returns this
*/
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken} returns this
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.SecurityToken.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.SecurityToken.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.SecurityToken} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SecurityToken.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.SecurityToken}
 */
proto.transaction.Transaction.SecurityToken.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.SecurityToken;
  return proto.transaction.Transaction.SecurityToken.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.SecurityToken} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.SecurityToken}
 */
proto.transaction.Transaction.SecurityToken.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.SecurityToken.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.SecurityToken.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.SecurityToken} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SecurityToken.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.SecurityToken.BulkIssueByPartition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.toObject = function(includeInstance, msg) {
  var f, obj = {
    partition: msg.getPartition_asB64(),
    tokenholdersList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    valuesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    data: msg.getData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.SecurityToken.BulkIssueByPartition}
 */
proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.SecurityToken.BulkIssueByPartition;
  return proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.SecurityToken.BulkIssueByPartition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.SecurityToken.BulkIssueByPartition}
 */
proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPartition(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTokenholders(value);
      break;
    case 3:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedUint64() : [reader.readUint64()]);
      for (var i = 0; i < values.length; i++) {
        msg.addValues(values[i]);
      }
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.SecurityToken.BulkIssueByPartition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartition_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getTokenholdersList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writePackedUint64(
      3,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional bytes partition = 1;
 * @return {!(string|Uint8Array)}
 */
proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.prototype.getPartition = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes partition = 1;
 * This is a type-conversion wrapper around `getPartition()`
 * @return {string}
 */
proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.prototype.getPartition_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPartition()));
};


/**
 * optional bytes partition = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPartition()`
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.prototype.getPartition_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPartition()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.transaction.Transaction.SecurityToken.BulkIssueByPartition} returns this
 */
proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.prototype.setPartition = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated string tokenHolders = 2;
 * @return {!Array<string>}
 */
proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.prototype.getTokenholdersList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.transaction.Transaction.SecurityToken.BulkIssueByPartition} returns this
 */
proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.prototype.setTokenholdersList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.transaction.Transaction.SecurityToken.BulkIssueByPartition} returns this
 */
proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.prototype.addTokenholders = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.transaction.Transaction.SecurityToken.BulkIssueByPartition} returns this
 */
proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.prototype.clearTokenholdersList = function() {
  return this.setTokenholdersList([]);
};


/**
 * repeated uint64 values = 3;
 * @return {!Array<number>}
 */
proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.prototype.getValuesList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.transaction.Transaction.SecurityToken.BulkIssueByPartition} returns this
 */
proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.prototype.setValuesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.transaction.Transaction.SecurityToken.BulkIssueByPartition} returns this
 */
proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.prototype.addValues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.transaction.Transaction.SecurityToken.BulkIssueByPartition} returns this
 */
proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.prototype.clearValuesList = function() {
  return this.setValuesList([]);
};


/**
 * optional bytes data = 4;
 * @return {!(string|Uint8Array)}
 */
proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes data = 4;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.transaction.Transaction.SecurityToken.BulkIssueByPartition} returns this
 */
proto.transaction.Transaction.SecurityToken.BulkIssueByPartition.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.SecurityToken.SetDocument.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.SecurityToken.SetDocument.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.SecurityToken.SetDocument} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SecurityToken.SetDocument.toObject = function(includeInstance, msg) {
  var f, obj = {
    documentname: msg.getDocumentname_asB64(),
    uri: jspb.Message.getFieldWithDefault(msg, 2, ""),
    documenthash: msg.getDocumenthash_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.SecurityToken.SetDocument}
 */
proto.transaction.Transaction.SecurityToken.SetDocument.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.SecurityToken.SetDocument;
  return proto.transaction.Transaction.SecurityToken.SetDocument.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.SecurityToken.SetDocument} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.SecurityToken.SetDocument}
 */
proto.transaction.Transaction.SecurityToken.SetDocument.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDocumentname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setDocumenthash(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.SecurityToken.SetDocument.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.SecurityToken.SetDocument.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.SecurityToken.SetDocument} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SecurityToken.SetDocument.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDocumentname_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDocumenthash_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bytes documentName = 1;
 * @return {!(string|Uint8Array)}
 */
proto.transaction.Transaction.SecurityToken.SetDocument.prototype.getDocumentname = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes documentName = 1;
 * This is a type-conversion wrapper around `getDocumentname()`
 * @return {string}
 */
proto.transaction.Transaction.SecurityToken.SetDocument.prototype.getDocumentname_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDocumentname()));
};


/**
 * optional bytes documentName = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDocumentname()`
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.SecurityToken.SetDocument.prototype.getDocumentname_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDocumentname()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.transaction.Transaction.SecurityToken.SetDocument} returns this
 */
proto.transaction.Transaction.SecurityToken.SetDocument.prototype.setDocumentname = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string uri = 2;
 * @return {string}
 */
proto.transaction.Transaction.SecurityToken.SetDocument.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.SecurityToken.SetDocument} returns this
 */
proto.transaction.Transaction.SecurityToken.SetDocument.prototype.setUri = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bytes documentHash = 3;
 * @return {!(string|Uint8Array)}
 */
proto.transaction.Transaction.SecurityToken.SetDocument.prototype.getDocumenthash = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes documentHash = 3;
 * This is a type-conversion wrapper around `getDocumenthash()`
 * @return {string}
 */
proto.transaction.Transaction.SecurityToken.SetDocument.prototype.getDocumenthash_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getDocumenthash()));
};


/**
 * optional bytes documentHash = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getDocumenthash()`
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.SecurityToken.SetDocument.prototype.getDocumenthash_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getDocumenthash()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.transaction.Transaction.SecurityToken.SetDocument} returns this
 */
proto.transaction.Transaction.SecurityToken.SetDocument.prototype.setDocumenthash = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.SecurityToken.IssueByPartition.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.SecurityToken.IssueByPartition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.SecurityToken.IssueByPartition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SecurityToken.IssueByPartition.toObject = function(includeInstance, msg) {
  var f, obj = {
    partition: msg.getPartition_asB64(),
    recipient: jspb.Message.getFieldWithDefault(msg, 2, ""),
    amount: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.SecurityToken.IssueByPartition}
 */
proto.transaction.Transaction.SecurityToken.IssueByPartition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.SecurityToken.IssueByPartition;
  return proto.transaction.Transaction.SecurityToken.IssueByPartition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.SecurityToken.IssueByPartition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.SecurityToken.IssueByPartition}
 */
proto.transaction.Transaction.SecurityToken.IssueByPartition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPartition(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecipient(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.SecurityToken.IssueByPartition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.SecurityToken.IssueByPartition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.SecurityToken.IssueByPartition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SecurityToken.IssueByPartition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartition_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getRecipient();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional bytes partition = 1;
 * @return {!(string|Uint8Array)}
 */
proto.transaction.Transaction.SecurityToken.IssueByPartition.prototype.getPartition = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes partition = 1;
 * This is a type-conversion wrapper around `getPartition()`
 * @return {string}
 */
proto.transaction.Transaction.SecurityToken.IssueByPartition.prototype.getPartition_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPartition()));
};


/**
 * optional bytes partition = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPartition()`
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.SecurityToken.IssueByPartition.prototype.getPartition_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPartition()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.transaction.Transaction.SecurityToken.IssueByPartition} returns this
 */
proto.transaction.Transaction.SecurityToken.IssueByPartition.prototype.setPartition = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string recipient = 2;
 * @return {string}
 */
proto.transaction.Transaction.SecurityToken.IssueByPartition.prototype.getRecipient = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.SecurityToken.IssueByPartition} returns this
 */
proto.transaction.Transaction.SecurityToken.IssueByPartition.prototype.setRecipient = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 amount = 3;
 * @return {number}
 */
proto.transaction.Transaction.SecurityToken.IssueByPartition.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.transaction.Transaction.SecurityToken.IssueByPartition} returns this
 */
proto.transaction.Transaction.SecurityToken.IssueByPartition.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.SecurityToken.RedeemByPartition.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.SecurityToken.RedeemByPartition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.SecurityToken.RedeemByPartition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SecurityToken.RedeemByPartition.toObject = function(includeInstance, msg) {
  var f, obj = {
    partition: msg.getPartition_asB64(),
    value: jspb.Message.getFieldWithDefault(msg, 2, 0),
    data: msg.getData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.SecurityToken.RedeemByPartition}
 */
proto.transaction.Transaction.SecurityToken.RedeemByPartition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.SecurityToken.RedeemByPartition;
  return proto.transaction.Transaction.SecurityToken.RedeemByPartition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.SecurityToken.RedeemByPartition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.SecurityToken.RedeemByPartition}
 */
proto.transaction.Transaction.SecurityToken.RedeemByPartition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPartition(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.SecurityToken.RedeemByPartition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.SecurityToken.RedeemByPartition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.SecurityToken.RedeemByPartition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SecurityToken.RedeemByPartition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartition_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional bytes partition = 1;
 * @return {!(string|Uint8Array)}
 */
proto.transaction.Transaction.SecurityToken.RedeemByPartition.prototype.getPartition = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes partition = 1;
 * This is a type-conversion wrapper around `getPartition()`
 * @return {string}
 */
proto.transaction.Transaction.SecurityToken.RedeemByPartition.prototype.getPartition_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPartition()));
};


/**
 * optional bytes partition = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPartition()`
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.SecurityToken.RedeemByPartition.prototype.getPartition_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPartition()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.transaction.Transaction.SecurityToken.RedeemByPartition} returns this
 */
proto.transaction.Transaction.SecurityToken.RedeemByPartition.prototype.setPartition = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional uint64 value = 2;
 * @return {number}
 */
proto.transaction.Transaction.SecurityToken.RedeemByPartition.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.transaction.Transaction.SecurityToken.RedeemByPartition} returns this
 */
proto.transaction.Transaction.SecurityToken.RedeemByPartition.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes data = 3;
 * @return {!(string|Uint8Array)}
 */
proto.transaction.Transaction.SecurityToken.RedeemByPartition.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes data = 3;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.transaction.Transaction.SecurityToken.RedeemByPartition.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.SecurityToken.RedeemByPartition.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.transaction.Transaction.SecurityToken.RedeemByPartition} returns this
 */
proto.transaction.Transaction.SecurityToken.RedeemByPartition.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.toObject = function(includeInstance, msg) {
  var f, obj = {
    partition: msg.getPartition_asB64(),
    tokenholder: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, 0),
    data: msg.getData_asB64(),
    operatordata: msg.getOperatordata_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition}
 */
proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition;
  return proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition}
 */
proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPartition(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenholder(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setValue(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOperatordata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartition_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getTokenholder();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getOperatordata_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * optional bytes partition = 1;
 * @return {!(string|Uint8Array)}
 */
proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.prototype.getPartition = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes partition = 1;
 * This is a type-conversion wrapper around `getPartition()`
 * @return {string}
 */
proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.prototype.getPartition_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPartition()));
};


/**
 * optional bytes partition = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPartition()`
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.prototype.getPartition_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPartition()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition} returns this
 */
proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.prototype.setPartition = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string tokenHolder = 2;
 * @return {string}
 */
proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.prototype.getTokenholder = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition} returns this
 */
proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.prototype.setTokenholder = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 value = 3;
 * @return {number}
 */
proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition} returns this
 */
proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes data = 4;
 * @return {!(string|Uint8Array)}
 */
proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes data = 4;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition} returns this
 */
proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional bytes operatorData = 5;
 * @return {!(string|Uint8Array)}
 */
proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.prototype.getOperatordata = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes operatorData = 5;
 * This is a type-conversion wrapper around `getOperatordata()`
 * @return {string}
 */
proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.prototype.getOperatordata_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOperatordata()));
};


/**
 * optional bytes operatorData = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOperatordata()`
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.prototype.getOperatordata_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOperatordata()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition} returns this
 */
proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition.prototype.setOperatordata = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.SecurityToken.RenounceControl.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.SecurityToken.RenounceControl.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.SecurityToken.RenounceControl} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SecurityToken.RenounceControl.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.SecurityToken.RenounceControl}
 */
proto.transaction.Transaction.SecurityToken.RenounceControl.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.SecurityToken.RenounceControl;
  return proto.transaction.Transaction.SecurityToken.RenounceControl.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.SecurityToken.RenounceControl} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.SecurityToken.RenounceControl}
 */
proto.transaction.Transaction.SecurityToken.RenounceControl.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.SecurityToken.RenounceControl.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.SecurityToken.RenounceControl.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.SecurityToken.RenounceControl} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SecurityToken.RenounceControl.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.SecurityToken.RenounceIssuance.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.SecurityToken.RenounceIssuance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.SecurityToken.RenounceIssuance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SecurityToken.RenounceIssuance.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.SecurityToken.RenounceIssuance}
 */
proto.transaction.Transaction.SecurityToken.RenounceIssuance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.SecurityToken.RenounceIssuance;
  return proto.transaction.Transaction.SecurityToken.RenounceIssuance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.SecurityToken.RenounceIssuance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.SecurityToken.RenounceIssuance}
 */
proto.transaction.Transaction.SecurityToken.RenounceIssuance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.SecurityToken.RenounceIssuance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.SecurityToken.RenounceIssuance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.SecurityToken.RenounceIssuance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SecurityToken.RenounceIssuance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.Pausable.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.Pausable.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.Pausable} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.Pausable.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.Pausable}
 */
proto.transaction.Transaction.Pausable.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.Pausable;
  return proto.transaction.Transaction.Pausable.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.Pausable} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.Pausable}
 */
proto.transaction.Transaction.Pausable.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.Pausable.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.Pausable.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.Pausable} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.Pausable.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.Pausable.Pause.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.Pausable.Pause.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.Pausable.Pause} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.Pausable.Pause.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.Pausable.Pause}
 */
proto.transaction.Transaction.Pausable.Pause.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.Pausable.Pause;
  return proto.transaction.Transaction.Pausable.Pause.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.Pausable.Pause} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.Pausable.Pause}
 */
proto.transaction.Transaction.Pausable.Pause.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.Pausable.Pause.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.Pausable.Pause.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.Pausable.Pause} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.Pausable.Pause.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.Pausable.Unpause.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.Pausable.Unpause.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.Pausable.Unpause} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.Pausable.Unpause.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.Pausable.Unpause}
 */
proto.transaction.Transaction.Pausable.Unpause.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.Pausable.Unpause;
  return proto.transaction.Transaction.Pausable.Unpause.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.Pausable.Unpause} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.Pausable.Unpause}
 */
proto.transaction.Transaction.Pausable.Unpause.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.Pausable.Unpause.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.Pausable.Unpause.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.Pausable.Unpause} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.Pausable.Unpause.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.Ownable.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.Ownable.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.Ownable} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.Ownable.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.Ownable}
 */
proto.transaction.Transaction.Ownable.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.Ownable;
  return proto.transaction.Transaction.Ownable.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.Ownable} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.Ownable}
 */
proto.transaction.Transaction.Ownable.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.Ownable.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.Ownable.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.Ownable} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.Ownable.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.Ownable.TransferOwnership.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.Ownable.TransferOwnership.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.Ownable.TransferOwnership} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.Ownable.TransferOwnership.toObject = function(includeInstance, msg) {
  var f, obj = {
    newowner: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.Ownable.TransferOwnership}
 */
proto.transaction.Transaction.Ownable.TransferOwnership.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.Ownable.TransferOwnership;
  return proto.transaction.Transaction.Ownable.TransferOwnership.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.Ownable.TransferOwnership} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.Ownable.TransferOwnership}
 */
proto.transaction.Transaction.Ownable.TransferOwnership.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewowner(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.Ownable.TransferOwnership.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.Ownable.TransferOwnership.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.Ownable.TransferOwnership} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.Ownable.TransferOwnership.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewowner();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string newOwner = 1;
 * @return {string}
 */
proto.transaction.Transaction.Ownable.TransferOwnership.prototype.getNewowner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.Ownable.TransferOwnership} returns this
 */
proto.transaction.Transaction.Ownable.TransferOwnership.prototype.setNewowner = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.ERC1400Raw.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.ERC1400Raw.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.ERC1400Raw} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400Raw.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.ERC1400Raw}
 */
proto.transaction.Transaction.ERC1400Raw.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.ERC1400Raw;
  return proto.transaction.Transaction.ERC1400Raw.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.ERC1400Raw} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.ERC1400Raw}
 */
proto.transaction.Transaction.ERC1400Raw.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.ERC1400Raw.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.ERC1400Raw.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.ERC1400Raw} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400Raw.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator.toObject = function(includeInstance, msg) {
  var f, obj = {
    operator: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator}
 */
proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator;
  return proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator}
 */
proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperator(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperator();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string operator = 1;
 * @return {string}
 */
proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator.prototype.getOperator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator} returns this
 */
proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator.prototype.setOperator = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.ERC1400Raw.RevokeOperator.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.ERC1400Raw.RevokeOperator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.ERC1400Raw.RevokeOperator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400Raw.RevokeOperator.toObject = function(includeInstance, msg) {
  var f, obj = {
    operator: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.ERC1400Raw.RevokeOperator}
 */
proto.transaction.Transaction.ERC1400Raw.RevokeOperator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.ERC1400Raw.RevokeOperator;
  return proto.transaction.Transaction.ERC1400Raw.RevokeOperator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.ERC1400Raw.RevokeOperator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.ERC1400Raw.RevokeOperator}
 */
proto.transaction.Transaction.ERC1400Raw.RevokeOperator.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperator(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.ERC1400Raw.RevokeOperator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.ERC1400Raw.RevokeOperator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.ERC1400Raw.RevokeOperator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400Raw.RevokeOperator.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperator();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string operator = 1;
 * @return {string}
 */
proto.transaction.Transaction.ERC1400Raw.RevokeOperator.prototype.getOperator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.ERC1400Raw.RevokeOperator} returns this
 */
proto.transaction.Transaction.ERC1400Raw.RevokeOperator.prototype.setOperator = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.ERC1400Partition.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.ERC1400Partition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.ERC1400Partition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400Partition.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.ERC1400Partition}
 */
proto.transaction.Transaction.ERC1400Partition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.ERC1400Partition;
  return proto.transaction.Transaction.ERC1400Partition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.ERC1400Partition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.ERC1400Partition}
 */
proto.transaction.Transaction.ERC1400Partition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.ERC1400Partition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.ERC1400Partition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.ERC1400Partition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400Partition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.ERC1400Partition.TransferByPartition.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.ERC1400Partition.TransferByPartition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.ERC1400Partition.TransferByPartition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400Partition.TransferByPartition.toObject = function(includeInstance, msg) {
  var f, obj = {
    partition: msg.getPartition_asB64(),
    to: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, 0),
    calldata: msg.getCalldata_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.ERC1400Partition.TransferByPartition}
 */
proto.transaction.Transaction.ERC1400Partition.TransferByPartition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.ERC1400Partition.TransferByPartition;
  return proto.transaction.Transaction.ERC1400Partition.TransferByPartition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.ERC1400Partition.TransferByPartition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.ERC1400Partition.TransferByPartition}
 */
proto.transaction.Transaction.ERC1400Partition.TransferByPartition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPartition(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setValue(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCalldata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.ERC1400Partition.TransferByPartition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.ERC1400Partition.TransferByPartition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.ERC1400Partition.TransferByPartition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400Partition.TransferByPartition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartition_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getTo();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getCalldata_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
};


/**
 * optional bytes partition = 1;
 * @return {!(string|Uint8Array)}
 */
proto.transaction.Transaction.ERC1400Partition.TransferByPartition.prototype.getPartition = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes partition = 1;
 * This is a type-conversion wrapper around `getPartition()`
 * @return {string}
 */
proto.transaction.Transaction.ERC1400Partition.TransferByPartition.prototype.getPartition_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPartition()));
};


/**
 * optional bytes partition = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPartition()`
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.ERC1400Partition.TransferByPartition.prototype.getPartition_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPartition()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.transaction.Transaction.ERC1400Partition.TransferByPartition} returns this
 */
proto.transaction.Transaction.ERC1400Partition.TransferByPartition.prototype.setPartition = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string to = 2;
 * @return {string}
 */
proto.transaction.Transaction.ERC1400Partition.TransferByPartition.prototype.getTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.ERC1400Partition.TransferByPartition} returns this
 */
proto.transaction.Transaction.ERC1400Partition.TransferByPartition.prototype.setTo = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 value = 3;
 * @return {number}
 */
proto.transaction.Transaction.ERC1400Partition.TransferByPartition.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.transaction.Transaction.ERC1400Partition.TransferByPartition} returns this
 */
proto.transaction.Transaction.ERC1400Partition.TransferByPartition.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes calldata = 4;
 * @return {!(string|Uint8Array)}
 */
proto.transaction.Transaction.ERC1400Partition.TransferByPartition.prototype.getCalldata = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes calldata = 4;
 * This is a type-conversion wrapper around `getCalldata()`
 * @return {string}
 */
proto.transaction.Transaction.ERC1400Partition.TransferByPartition.prototype.getCalldata_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCalldata()));
};


/**
 * optional bytes calldata = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCalldata()`
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.ERC1400Partition.TransferByPartition.prototype.getCalldata_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCalldata()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.transaction.Transaction.ERC1400Partition.TransferByPartition} returns this
 */
proto.transaction.Transaction.ERC1400Partition.TransferByPartition.prototype.setCalldata = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.toObject = function(includeInstance, msg) {
  var f, obj = {
    partition: msg.getPartition_asB64(),
    from: jspb.Message.getFieldWithDefault(msg, 2, ""),
    to: jspb.Message.getFieldWithDefault(msg, 3, ""),
    value: jspb.Message.getFieldWithDefault(msg, 4, 0),
    data: msg.getData_asB64(),
    operatordata: msg.getOperatordata_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition}
 */
proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition;
  return proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition}
 */
proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPartition(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrom(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTo(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setValue(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOperatordata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartition_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getFrom();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTo();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getOperatordata_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
};


/**
 * optional bytes partition = 1;
 * @return {!(string|Uint8Array)}
 */
proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.prototype.getPartition = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes partition = 1;
 * This is a type-conversion wrapper around `getPartition()`
 * @return {string}
 */
proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.prototype.getPartition_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPartition()));
};


/**
 * optional bytes partition = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPartition()`
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.prototype.getPartition_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPartition()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition} returns this
 */
proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.prototype.setPartition = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string from = 2;
 * @return {string}
 */
proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.prototype.getFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition} returns this
 */
proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.prototype.setFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string to = 3;
 * @return {string}
 */
proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.prototype.getTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition} returns this
 */
proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.prototype.setTo = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional uint64 value = 4;
 * @return {number}
 */
proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition} returns this
 */
proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bytes data = 5;
 * @return {!(string|Uint8Array)}
 */
proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes data = 5;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition} returns this
 */
proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional bytes operatorData = 6;
 * @return {!(string|Uint8Array)}
 */
proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.prototype.getOperatordata = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes operatorData = 6;
 * This is a type-conversion wrapper around `getOperatordata()`
 * @return {string}
 */
proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.prototype.getOperatordata_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOperatordata()));
};


/**
 * optional bytes operatorData = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOperatordata()`
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.prototype.getOperatordata_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOperatordata()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition} returns this
 */
proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition.prototype.setOperatordata = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition.toObject = function(includeInstance, msg) {
  var f, obj = {
    partition: msg.getPartition_asB64(),
    operator: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition}
 */
proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition;
  return proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition}
 */
proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPartition(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperator(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartition_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getOperator();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bytes partition = 1;
 * @return {!(string|Uint8Array)}
 */
proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition.prototype.getPartition = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes partition = 1;
 * This is a type-conversion wrapper around `getPartition()`
 * @return {string}
 */
proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition.prototype.getPartition_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPartition()));
};


/**
 * optional bytes partition = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPartition()`
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition.prototype.getPartition_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPartition()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition} returns this
 */
proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition.prototype.setPartition = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string operator = 2;
 * @return {string}
 */
proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition.prototype.getOperator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition} returns this
 */
proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition.prototype.setOperator = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition.toObject = function(includeInstance, msg) {
  var f, obj = {
    partition: msg.getPartition_asB64(),
    operator: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition}
 */
proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition;
  return proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition}
 */
proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPartition(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperator(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartition_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getOperator();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bytes partition = 1;
 * @return {!(string|Uint8Array)}
 */
proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition.prototype.getPartition = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes partition = 1;
 * This is a type-conversion wrapper around `getPartition()`
 * @return {string}
 */
proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition.prototype.getPartition_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPartition()));
};


/**
 * optional bytes partition = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPartition()`
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition.prototype.getPartition_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPartition()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition} returns this
 */
proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition.prototype.setPartition = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string operator = 2;
 * @return {string}
 */
proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition.prototype.getOperator = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition} returns this
 */
proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition.prototype.setOperator = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.ERC1400Partition.TransferWithData.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.ERC1400Partition.TransferWithData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.ERC1400Partition.TransferWithData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400Partition.TransferWithData.toObject = function(includeInstance, msg) {
  var f, obj = {
    to: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, 0),
    data: msg.getData_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.ERC1400Partition.TransferWithData}
 */
proto.transaction.Transaction.ERC1400Partition.TransferWithData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.ERC1400Partition.TransferWithData;
  return proto.transaction.Transaction.ERC1400Partition.TransferWithData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.ERC1400Partition.TransferWithData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.ERC1400Partition.TransferWithData}
 */
proto.transaction.Transaction.ERC1400Partition.TransferWithData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.ERC1400Partition.TransferWithData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.ERC1400Partition.TransferWithData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.ERC1400Partition.TransferWithData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400Partition.TransferWithData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTo();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      3,
      f
    );
  }
};


/**
 * optional string to = 1;
 * @return {string}
 */
proto.transaction.Transaction.ERC1400Partition.TransferWithData.prototype.getTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.ERC1400Partition.TransferWithData} returns this
 */
proto.transaction.Transaction.ERC1400Partition.TransferWithData.prototype.setTo = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 value = 2;
 * @return {number}
 */
proto.transaction.Transaction.ERC1400Partition.TransferWithData.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.transaction.Transaction.ERC1400Partition.TransferWithData} returns this
 */
proto.transaction.Transaction.ERC1400Partition.TransferWithData.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bytes data = 3;
 * @return {!(string|Uint8Array)}
 */
proto.transaction.Transaction.ERC1400Partition.TransferWithData.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * optional bytes data = 3;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.transaction.Transaction.ERC1400Partition.TransferWithData.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 3;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.ERC1400Partition.TransferWithData.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.transaction.Transaction.ERC1400Partition.TransferWithData} returns this
 */
proto.transaction.Transaction.ERC1400Partition.TransferWithData.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.ERC1400Partition.TransferFromWithData.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.ERC1400Partition.TransferFromWithData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.ERC1400Partition.TransferFromWithData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400Partition.TransferFromWithData.toObject = function(includeInstance, msg) {
  var f, obj = {
    from: jspb.Message.getFieldWithDefault(msg, 1, ""),
    to: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, 0),
    data: msg.getData_asB64(),
    operatordata: msg.getOperatordata_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.ERC1400Partition.TransferFromWithData}
 */
proto.transaction.Transaction.ERC1400Partition.TransferFromWithData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.ERC1400Partition.TransferFromWithData;
  return proto.transaction.Transaction.ERC1400Partition.TransferFromWithData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.ERC1400Partition.TransferFromWithData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.ERC1400Partition.TransferFromWithData}
 */
proto.transaction.Transaction.ERC1400Partition.TransferFromWithData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrom(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setValue(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setData(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOperatordata(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.ERC1400Partition.TransferFromWithData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.ERC1400Partition.TransferFromWithData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.ERC1400Partition.TransferFromWithData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400Partition.TransferFromWithData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrom();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTo();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getData_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getOperatordata_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
};


/**
 * optional string from = 1;
 * @return {string}
 */
proto.transaction.Transaction.ERC1400Partition.TransferFromWithData.prototype.getFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.ERC1400Partition.TransferFromWithData} returns this
 */
proto.transaction.Transaction.ERC1400Partition.TransferFromWithData.prototype.setFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string to = 2;
 * @return {string}
 */
proto.transaction.Transaction.ERC1400Partition.TransferFromWithData.prototype.getTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.ERC1400Partition.TransferFromWithData} returns this
 */
proto.transaction.Transaction.ERC1400Partition.TransferFromWithData.prototype.setTo = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 value = 3;
 * @return {number}
 */
proto.transaction.Transaction.ERC1400Partition.TransferFromWithData.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.transaction.Transaction.ERC1400Partition.TransferFromWithData} returns this
 */
proto.transaction.Transaction.ERC1400Partition.TransferFromWithData.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes data = 4;
 * @return {!(string|Uint8Array)}
 */
proto.transaction.Transaction.ERC1400Partition.TransferFromWithData.prototype.getData = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes data = 4;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.transaction.Transaction.ERC1400Partition.TransferFromWithData.prototype.getData_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getData()));
};


/**
 * optional bytes data = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.ERC1400Partition.TransferFromWithData.prototype.getData_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.transaction.Transaction.ERC1400Partition.TransferFromWithData} returns this
 */
proto.transaction.Transaction.ERC1400Partition.TransferFromWithData.prototype.setData = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional bytes operatorData = 5;
 * @return {!(string|Uint8Array)}
 */
proto.transaction.Transaction.ERC1400Partition.TransferFromWithData.prototype.getOperatordata = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes operatorData = 5;
 * This is a type-conversion wrapper around `getOperatordata()`
 * @return {string}
 */
proto.transaction.Transaction.ERC1400Partition.TransferFromWithData.prototype.getOperatordata_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOperatordata()));
};


/**
 * optional bytes operatorData = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOperatordata()`
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.ERC1400Partition.TransferFromWithData.prototype.getOperatordata_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOperatordata()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.transaction.Transaction.ERC1400Partition.TransferFromWithData} returns this
 */
proto.transaction.Transaction.ERC1400Partition.TransferFromWithData.prototype.setOperatordata = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.ERC1400ERC20.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.ERC1400ERC20.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.ERC1400ERC20} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400ERC20.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.ERC1400ERC20}
 */
proto.transaction.Transaction.ERC1400ERC20.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.ERC1400ERC20;
  return proto.transaction.Transaction.ERC1400ERC20.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.ERC1400ERC20} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.ERC1400ERC20}
 */
proto.transaction.Transaction.ERC1400ERC20.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.ERC1400ERC20.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.ERC1400ERC20.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.ERC1400ERC20} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400ERC20.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.ERC1400ERC20.Transfer.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.ERC1400ERC20.Transfer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.ERC1400ERC20.Transfer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400ERC20.Transfer.toObject = function(includeInstance, msg) {
  var f, obj = {
    to: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.ERC1400ERC20.Transfer}
 */
proto.transaction.Transaction.ERC1400ERC20.Transfer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.ERC1400ERC20.Transfer;
  return proto.transaction.Transaction.ERC1400ERC20.Transfer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.ERC1400ERC20.Transfer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.ERC1400ERC20.Transfer}
 */
proto.transaction.Transaction.ERC1400ERC20.Transfer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTo(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.ERC1400ERC20.Transfer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.ERC1400ERC20.Transfer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.ERC1400ERC20.Transfer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400ERC20.Transfer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTo();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional string to = 1;
 * @return {string}
 */
proto.transaction.Transaction.ERC1400ERC20.Transfer.prototype.getTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.ERC1400ERC20.Transfer} returns this
 */
proto.transaction.Transaction.ERC1400ERC20.Transfer.prototype.setTo = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 value = 2;
 * @return {number}
 */
proto.transaction.Transaction.ERC1400ERC20.Transfer.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.transaction.Transaction.ERC1400ERC20.Transfer} returns this
 */
proto.transaction.Transaction.ERC1400ERC20.Transfer.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.ERC1400ERC20.Approve.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.ERC1400ERC20.Approve.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.ERC1400ERC20.Approve} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400ERC20.Approve.toObject = function(includeInstance, msg) {
  var f, obj = {
    spender: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.ERC1400ERC20.Approve}
 */
proto.transaction.Transaction.ERC1400ERC20.Approve.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.ERC1400ERC20.Approve;
  return proto.transaction.Transaction.ERC1400ERC20.Approve.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.ERC1400ERC20.Approve} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.ERC1400ERC20.Approve}
 */
proto.transaction.Transaction.ERC1400ERC20.Approve.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSpender(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.ERC1400ERC20.Approve.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.ERC1400ERC20.Approve.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.ERC1400ERC20.Approve} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400ERC20.Approve.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpender();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional string spender = 1;
 * @return {string}
 */
proto.transaction.Transaction.ERC1400ERC20.Approve.prototype.getSpender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.ERC1400ERC20.Approve} returns this
 */
proto.transaction.Transaction.ERC1400ERC20.Approve.prototype.setSpender = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint64 value = 2;
 * @return {number}
 */
proto.transaction.Transaction.ERC1400ERC20.Approve.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.transaction.Transaction.ERC1400ERC20.Approve} returns this
 */
proto.transaction.Transaction.ERC1400ERC20.Approve.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.ERC1400ERC20.TransferFrom.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.ERC1400ERC20.TransferFrom.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.ERC1400ERC20.TransferFrom} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400ERC20.TransferFrom.toObject = function(includeInstance, msg) {
  var f, obj = {
    from: jspb.Message.getFieldWithDefault(msg, 1, ""),
    to: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.ERC1400ERC20.TransferFrom}
 */
proto.transaction.Transaction.ERC1400ERC20.TransferFrom.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.ERC1400ERC20.TransferFrom;
  return proto.transaction.Transaction.ERC1400ERC20.TransferFrom.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.ERC1400ERC20.TransferFrom} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.ERC1400ERC20.TransferFrom}
 */
proto.transaction.Transaction.ERC1400ERC20.TransferFrom.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrom(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTo(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.ERC1400ERC20.TransferFrom.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.ERC1400ERC20.TransferFrom.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.ERC1400ERC20.TransferFrom} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400ERC20.TransferFrom.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrom();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTo();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional string from = 1;
 * @return {string}
 */
proto.transaction.Transaction.ERC1400ERC20.TransferFrom.prototype.getFrom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.ERC1400ERC20.TransferFrom} returns this
 */
proto.transaction.Transaction.ERC1400ERC20.TransferFrom.prototype.setFrom = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string to = 2;
 * @return {string}
 */
proto.transaction.Transaction.ERC1400ERC20.TransferFrom.prototype.getTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.ERC1400ERC20.TransferFrom} returns this
 */
proto.transaction.Transaction.ERC1400ERC20.TransferFrom.prototype.setTo = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 value = 3;
 * @return {number}
 */
proto.transaction.Transaction.ERC1400ERC20.TransferFrom.prototype.getValue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.transaction.Transaction.ERC1400ERC20.TransferFrom} returns this
 */
proto.transaction.Transaction.ERC1400ERC20.TransferFrom.prototype.setValue = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.ERC1400Capped.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.ERC1400Capped.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.ERC1400Capped} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400Capped.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.ERC1400Capped}
 */
proto.transaction.Transaction.ERC1400Capped.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.ERC1400Capped;
  return proto.transaction.Transaction.ERC1400Capped.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.ERC1400Capped} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.ERC1400Capped}
 */
proto.transaction.Transaction.ERC1400Capped.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.ERC1400Capped.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.ERC1400Capped.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.ERC1400Capped} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400Capped.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.ERC1400Capped.SetCap.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.ERC1400Capped.SetCap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.ERC1400Capped.SetCap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400Capped.SetCap.toObject = function(includeInstance, msg) {
  var f, obj = {
    newcap: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.ERC1400Capped.SetCap}
 */
proto.transaction.Transaction.ERC1400Capped.SetCap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.ERC1400Capped.SetCap;
  return proto.transaction.Transaction.ERC1400Capped.SetCap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.ERC1400Capped.SetCap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.ERC1400Capped.SetCap}
 */
proto.transaction.Transaction.ERC1400Capped.SetCap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setNewcap(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.ERC1400Capped.SetCap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.ERC1400Capped.SetCap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.ERC1400Capped.SetCap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.ERC1400Capped.SetCap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNewcap();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 newCap = 1;
 * @return {number}
 */
proto.transaction.Transaction.ERC1400Capped.SetCap.prototype.getNewcap = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.transaction.Transaction.ERC1400Capped.SetCap} returns this
 */
proto.transaction.Transaction.ERC1400Capped.SetCap.prototype.setNewcap = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.Constrainable.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.Constrainable.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.Constrainable} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.Constrainable.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.Constrainable}
 */
proto.transaction.Transaction.Constrainable.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.Constrainable;
  return proto.transaction.Transaction.Constrainable.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.Constrainable} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.Constrainable}
 */
proto.transaction.Transaction.Constrainable.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.Constrainable.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.Constrainable.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.Constrainable} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.Constrainable.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.transaction.Transaction.Constrainable.SetModulesByPartition.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.Constrainable.SetModulesByPartition.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.Constrainable.SetModulesByPartition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.Constrainable.SetModulesByPartition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.Constrainable.SetModulesByPartition.toObject = function(includeInstance, msg) {
  var f, obj = {
    partition: msg.getPartition_asB64(),
    newmodulesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.Constrainable.SetModulesByPartition}
 */
proto.transaction.Transaction.Constrainable.SetModulesByPartition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.Constrainable.SetModulesByPartition;
  return proto.transaction.Transaction.Constrainable.SetModulesByPartition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.Constrainable.SetModulesByPartition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.Constrainable.SetModulesByPartition}
 */
proto.transaction.Transaction.Constrainable.SetModulesByPartition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPartition(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addNewmodules(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.Constrainable.SetModulesByPartition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.Constrainable.SetModulesByPartition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.Constrainable.SetModulesByPartition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.Constrainable.SetModulesByPartition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartition_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getNewmodulesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional bytes partition = 1;
 * @return {!(string|Uint8Array)}
 */
proto.transaction.Transaction.Constrainable.SetModulesByPartition.prototype.getPartition = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes partition = 1;
 * This is a type-conversion wrapper around `getPartition()`
 * @return {string}
 */
proto.transaction.Transaction.Constrainable.SetModulesByPartition.prototype.getPartition_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPartition()));
};


/**
 * optional bytes partition = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPartition()`
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.Constrainable.SetModulesByPartition.prototype.getPartition_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPartition()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.transaction.Transaction.Constrainable.SetModulesByPartition} returns this
 */
proto.transaction.Transaction.Constrainable.SetModulesByPartition.prototype.setPartition = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated string newModules = 2;
 * @return {!Array<string>}
 */
proto.transaction.Transaction.Constrainable.SetModulesByPartition.prototype.getNewmodulesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.transaction.Transaction.Constrainable.SetModulesByPartition} returns this
 */
proto.transaction.Transaction.Constrainable.SetModulesByPartition.prototype.setNewmodulesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.transaction.Transaction.Constrainable.SetModulesByPartition} returns this
 */
proto.transaction.Transaction.Constrainable.SetModulesByPartition.prototype.addNewmodules = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.transaction.Transaction.Constrainable.SetModulesByPartition} returns this
 */
proto.transaction.Transaction.Constrainable.SetModulesByPartition.prototype.clearNewmodulesList = function() {
  return this.setNewmodulesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.Administrable.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.Administrable.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.Administrable} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.Administrable.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.Administrable}
 */
proto.transaction.Transaction.Administrable.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.Administrable;
  return proto.transaction.Transaction.Administrable.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.Administrable} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.Administrable}
 */
proto.transaction.Transaction.Administrable.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.Administrable.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.Administrable.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.Administrable} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.Administrable.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.Administrable.AddRole.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.Administrable.AddRole.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.Administrable.AddRole} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.Administrable.AddRole.toObject = function(includeInstance, msg) {
  var f, obj = {
    role: msg.getRole_asB64(),
    account: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.Administrable.AddRole}
 */
proto.transaction.Transaction.Administrable.AddRole.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.Administrable.AddRole;
  return proto.transaction.Transaction.Administrable.AddRole.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.Administrable.AddRole} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.Administrable.AddRole}
 */
proto.transaction.Transaction.Administrable.AddRole.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRole(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.Administrable.AddRole.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.Administrable.AddRole.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.Administrable.AddRole} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.Administrable.AddRole.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRole_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bytes role = 1;
 * @return {!(string|Uint8Array)}
 */
proto.transaction.Transaction.Administrable.AddRole.prototype.getRole = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes role = 1;
 * This is a type-conversion wrapper around `getRole()`
 * @return {string}
 */
proto.transaction.Transaction.Administrable.AddRole.prototype.getRole_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRole()));
};


/**
 * optional bytes role = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRole()`
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.Administrable.AddRole.prototype.getRole_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRole()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.transaction.Transaction.Administrable.AddRole} returns this
 */
proto.transaction.Transaction.Administrable.AddRole.prototype.setRole = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string account = 2;
 * @return {string}
 */
proto.transaction.Transaction.Administrable.AddRole.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.Administrable.AddRole} returns this
 */
proto.transaction.Transaction.Administrable.AddRole.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.transaction.Transaction.Administrable.BulkAddRole.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.Administrable.BulkAddRole.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.Administrable.BulkAddRole.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.Administrable.BulkAddRole} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.Administrable.BulkAddRole.toObject = function(includeInstance, msg) {
  var f, obj = {
    rolesList: msg.getRolesList_asB64(),
    accountsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.Administrable.BulkAddRole}
 */
proto.transaction.Transaction.Administrable.BulkAddRole.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.Administrable.BulkAddRole;
  return proto.transaction.Transaction.Administrable.BulkAddRole.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.Administrable.BulkAddRole} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.Administrable.BulkAddRole}
 */
proto.transaction.Transaction.Administrable.BulkAddRole.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addRoles(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addAccounts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.Administrable.BulkAddRole.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.Administrable.BulkAddRole.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.Administrable.BulkAddRole} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.Administrable.BulkAddRole.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRolesList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
  f = message.getAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * repeated bytes roles = 1;
 * @return {!(Array<!Uint8Array>|Array<string>)}
 */
proto.transaction.Transaction.Administrable.BulkAddRole.prototype.getRolesList = function() {
  return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes roles = 1;
 * This is a type-conversion wrapper around `getRolesList()`
 * @return {!Array<string>}
 */
proto.transaction.Transaction.Administrable.BulkAddRole.prototype.getRolesList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getRolesList()));
};


/**
 * repeated bytes roles = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRolesList()`
 * @return {!Array<!Uint8Array>}
 */
proto.transaction.Transaction.Administrable.BulkAddRole.prototype.getRolesList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getRolesList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.transaction.Transaction.Administrable.BulkAddRole} returns this
 */
proto.transaction.Transaction.Administrable.BulkAddRole.prototype.setRolesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.transaction.Transaction.Administrable.BulkAddRole} returns this
 */
proto.transaction.Transaction.Administrable.BulkAddRole.prototype.addRoles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.transaction.Transaction.Administrable.BulkAddRole} returns this
 */
proto.transaction.Transaction.Administrable.BulkAddRole.prototype.clearRolesList = function() {
  return this.setRolesList([]);
};


/**
 * repeated string accounts = 2;
 * @return {!Array<string>}
 */
proto.transaction.Transaction.Administrable.BulkAddRole.prototype.getAccountsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.transaction.Transaction.Administrable.BulkAddRole} returns this
 */
proto.transaction.Transaction.Administrable.BulkAddRole.prototype.setAccountsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.transaction.Transaction.Administrable.BulkAddRole} returns this
 */
proto.transaction.Transaction.Administrable.BulkAddRole.prototype.addAccounts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.transaction.Transaction.Administrable.BulkAddRole} returns this
 */
proto.transaction.Transaction.Administrable.BulkAddRole.prototype.clearAccountsList = function() {
  return this.setAccountsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.Administrable.RemoveRole.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.Administrable.RemoveRole.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.Administrable.RemoveRole} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.Administrable.RemoveRole.toObject = function(includeInstance, msg) {
  var f, obj = {
    role: msg.getRole_asB64(),
    account: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.Administrable.RemoveRole}
 */
proto.transaction.Transaction.Administrable.RemoveRole.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.Administrable.RemoveRole;
  return proto.transaction.Transaction.Administrable.RemoveRole.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.Administrable.RemoveRole} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.Administrable.RemoveRole}
 */
proto.transaction.Transaction.Administrable.RemoveRole.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRole(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.Administrable.RemoveRole.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.Administrable.RemoveRole.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.Administrable.RemoveRole} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.Administrable.RemoveRole.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRole_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bytes role = 1;
 * @return {!(string|Uint8Array)}
 */
proto.transaction.Transaction.Administrable.RemoveRole.prototype.getRole = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes role = 1;
 * This is a type-conversion wrapper around `getRole()`
 * @return {string}
 */
proto.transaction.Transaction.Administrable.RemoveRole.prototype.getRole_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRole()));
};


/**
 * optional bytes role = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRole()`
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.Administrable.RemoveRole.prototype.getRole_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRole()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.transaction.Transaction.Administrable.RemoveRole} returns this
 */
proto.transaction.Transaction.Administrable.RemoveRole.prototype.setRole = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string account = 2;
 * @return {string}
 */
proto.transaction.Transaction.Administrable.RemoveRole.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.Administrable.RemoveRole} returns this
 */
proto.transaction.Transaction.Administrable.RemoveRole.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.Administrable.RenounceRole.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.Administrable.RenounceRole.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.Administrable.RenounceRole} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.Administrable.RenounceRole.toObject = function(includeInstance, msg) {
  var f, obj = {
    role: msg.getRole_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.Administrable.RenounceRole}
 */
proto.transaction.Transaction.Administrable.RenounceRole.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.Administrable.RenounceRole;
  return proto.transaction.Transaction.Administrable.RenounceRole.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.Administrable.RenounceRole} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.Administrable.RenounceRole}
 */
proto.transaction.Transaction.Administrable.RenounceRole.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setRole(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.Administrable.RenounceRole.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.Administrable.RenounceRole.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.Administrable.RenounceRole} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.Administrable.RenounceRole.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRole_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes role = 1;
 * @return {!(string|Uint8Array)}
 */
proto.transaction.Transaction.Administrable.RenounceRole.prototype.getRole = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes role = 1;
 * This is a type-conversion wrapper around `getRole()`
 * @return {string}
 */
proto.transaction.Transaction.Administrable.RenounceRole.prototype.getRole_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getRole()));
};


/**
 * optional bytes role = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getRole()`
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.Administrable.RenounceRole.prototype.getRole_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getRole()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.transaction.Transaction.Administrable.RenounceRole} returns this
 */
proto.transaction.Transaction.Administrable.RenounceRole.prototype.setRole = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.SpendingLimitsConstraintModule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.SpendingLimitsConstraintModule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.SpendingLimitsConstraintModule}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.SpendingLimitsConstraintModule;
  return proto.transaction.Transaction.SpendingLimitsConstraintModule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.SpendingLimitsConstraintModule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.SpendingLimitsConstraintModule}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.SpendingLimitsConstraintModule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.SpendingLimitsConstraintModule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokenaddress: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule;
  return proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenaddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokenaddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string tokenAddress = 1;
 * @return {string}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule.prototype.getTokenaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule} returns this
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule.prototype.setTokenaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock.toObject = function(includeInstance, msg) {
  var f, obj = {
    periodlength: (f = msg.getPeriodlength()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    amountallowed: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock;
  return proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setPeriodlength(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmountallowed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPeriodlength();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getAmountallowed();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional google.protobuf.Duration periodLength = 1;
 * @return {?proto.google.protobuf.Duration}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock.prototype.getPeriodlength = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 1));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock} returns this
*/
proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock.prototype.setPeriodlength = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock} returns this
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock.prototype.clearPeriodlength = function() {
  return this.setPeriodlength(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock.prototype.hasPeriodlength = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 amountAllowed = 2;
 * @return {number}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock.prototype.getAmountallowed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock} returns this
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock.prototype.setAmountallowed = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0),
    periodlength: (f = msg.getPeriodlength()) && google_protobuf_duration_pb.Duration.toObject(includeInstance, f),
    amountallowed: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock;
  return proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIndex(value);
      break;
    case 2:
      var value = new google_protobuf_duration_pb.Duration;
      reader.readMessage(value,google_protobuf_duration_pb.Duration.deserializeBinaryFromReader);
      msg.setPeriodlength(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmountallowed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getPeriodlength();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_duration_pb.Duration.serializeBinaryToWriter
    );
  }
  f = message.getAmountallowed();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional uint64 index = 1;
 * @return {number}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock} returns this
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional google.protobuf.Duration periodLength = 2;
 * @return {?proto.google.protobuf.Duration}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock.prototype.getPeriodlength = function() {
  return /** @type{?proto.google.protobuf.Duration} */ (
    jspb.Message.getWrapperField(this, google_protobuf_duration_pb.Duration, 2));
};


/**
 * @param {?proto.google.protobuf.Duration|undefined} value
 * @return {!proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock} returns this
*/
proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock.prototype.setPeriodlength = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock} returns this
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock.prototype.clearPeriodlength = function() {
  return this.setPeriodlength(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock.prototype.hasPeriodlength = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 amountAllowed = 3;
 * @return {number}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock.prototype.getAmountallowed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock} returns this
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock.prototype.setAmountallowed = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock.toObject = function(includeInstance, msg) {
  var f, obj = {
    index: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock;
  return proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIndex();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
};


/**
 * optional uint64 index = 1;
 * @return {number}
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock.prototype.getIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock} returns this
 */
proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock.prototype.setIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.TimeLockConstraintModule.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.TimeLockConstraintModule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.TimeLockConstraintModule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.TimeLockConstraintModule.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.TimeLockConstraintModule}
 */
proto.transaction.Transaction.TimeLockConstraintModule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.TimeLockConstraintModule;
  return proto.transaction.Transaction.TimeLockConstraintModule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.TimeLockConstraintModule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.TimeLockConstraintModule}
 */
proto.transaction.Transaction.TimeLockConstraintModule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.TimeLockConstraintModule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.TimeLockConstraintModule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.TimeLockConstraintModule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.TimeLockConstraintModule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokenaddress: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule}
 */
proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule;
  return proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule}
 */
proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenaddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokenaddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string tokenAddress = 1;
 * @return {string}
 */
proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule.prototype.getTokenaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule} returns this
 */
proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule.prototype.setTokenaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    amount: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock}
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock;
  return proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock}
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getAmount();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock} returns this
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock} returns this
*/
proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock} returns this
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock.prototype.hasTime = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 amount = 3;
 * @return {number}
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock} returns this
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock}
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock;
  return proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock}
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock} returns this
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp time = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock} returns this
*/
proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock} returns this
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock.prototype.hasTime = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock.toObject = function(includeInstance, msg) {
  var f, obj = {
    time: (f = msg.getTime()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock}
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock;
  return proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock}
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setTime(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTime();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.Timestamp time = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock.prototype.getTime = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock} returns this
*/
proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock.prototype.setTime = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock} returns this
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock.prototype.clearTime = function() {
  return this.setTime(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock.prototype.hasTime = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.VestingPeriodConstraintModule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.VestingPeriodConstraintModule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.VestingPeriodConstraintModule}
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.VestingPeriodConstraintModule;
  return proto.transaction.Transaction.VestingPeriodConstraintModule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.VestingPeriodConstraintModule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.VestingPeriodConstraintModule}
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.VestingPeriodConstraintModule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.VestingPeriodConstraintModule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokenaddress: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule}
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule;
  return proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule}
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenaddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokenaddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string tokenAddress = 1;
 * @return {string}
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule.prototype.getTokenaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule} returns this
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule.prototype.setTokenaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions.toObject = function(includeInstance, msg) {
  var f, obj = {
    vestingstart: (f = msg.getVestingstart()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    vestedfractionafterstart: jspb.Message.getFieldWithDefault(msg, 2, 0),
    vestingratio: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions}
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions;
  return proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions}
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setVestingstart(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVestedfractionafterstart(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setVestingratio(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVestingstart();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getVestedfractionafterstart();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getVestingratio();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp vestingStart = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions.prototype.getVestingstart = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions} returns this
*/
proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions.prototype.setVestingstart = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions} returns this
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions.prototype.clearVestingstart = function() {
  return this.setVestingstart(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions.prototype.hasVestingstart = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 vestedFractionAfterStart = 2;
 * @return {number}
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions.prototype.getVestedfractionafterstart = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions} returns this
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions.prototype.setVestedfractionafterstart = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 vestingRatio = 3;
 * @return {number}
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions.prototype.getVestingratio = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions} returns this
 */
proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions.prototype.setVestingratio = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.WhitelistConstraintModule.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.WhitelistConstraintModule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.WhitelistConstraintModule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.WhitelistConstraintModule.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.WhitelistConstraintModule}
 */
proto.transaction.Transaction.WhitelistConstraintModule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.WhitelistConstraintModule;
  return proto.transaction.Transaction.WhitelistConstraintModule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.WhitelistConstraintModule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.WhitelistConstraintModule}
 */
proto.transaction.Transaction.WhitelistConstraintModule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.WhitelistConstraintModule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.WhitelistConstraintModule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.WhitelistConstraintModule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.WhitelistConstraintModule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokenaddress: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule}
 */
proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule;
  return proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule}
 */
proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokenaddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokenaddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string tokenAddress = 1;
 * @return {string}
 */
proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule.prototype.getTokenaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule} returns this
 */
proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule.prototype.setTokenaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    whitelisted: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist}
 */
proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist;
  return proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist}
 */
proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccount(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWhitelisted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWhitelisted();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist} returns this
 */
proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool whitelisted = 2;
 * @return {boolean}
 */
proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist.prototype.getWhitelisted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist} returns this
 */
proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist.prototype.setWhitelisted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    whitelisted: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist}
 */
proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist;
  return proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist}
 */
proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addAccounts(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setWhitelisted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getWhitelisted();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * repeated string accounts = 1;
 * @return {!Array<string>}
 */
proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist.prototype.getAccountsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist} returns this
 */
proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist.prototype.setAccountsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist} returns this
 */
proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist.prototype.addAccounts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist} returns this
 */
proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist.prototype.clearAccountsList = function() {
  return this.setAccountsList([]);
};


/**
 * optional bool whitelisted = 2;
 * @return {boolean}
 */
proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist.prototype.getWhitelisted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist} returns this
 */
proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist.prototype.setWhitelisted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.transaction.Transaction.Metadata.prototype.toObject = function(opt_includeInstance) {
  return proto.transaction.Transaction.Metadata.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.transaction.Transaction.Metadata} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.Metadata.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    date: (f = msg.getDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    reverted: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.transaction.Transaction.Metadata}
 */
proto.transaction.Transaction.Metadata.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.transaction.Transaction.Metadata;
  return proto.transaction.Transaction.Metadata.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.transaction.Transaction.Metadata} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.transaction.Transaction.Metadata}
 */
proto.transaction.Transaction.Metadata.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 2:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReverted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.transaction.Transaction.Metadata.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.transaction.Transaction.Metadata.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.transaction.Transaction.Metadata} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.transaction.Transaction.Metadata.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getReverted();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string hash = 1;
 * @return {string}
 */
proto.transaction.Transaction.Metadata.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.Metadata} returns this
 */
proto.transaction.Transaction.Metadata.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.Timestamp date = 2;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.transaction.Transaction.Metadata.prototype.getDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.transaction.Transaction.Metadata} returns this
*/
proto.transaction.Transaction.Metadata.prototype.setDate = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction.Metadata} returns this
 */
proto.transaction.Transaction.Metadata.prototype.clearDate = function() {
  return this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.Metadata.prototype.hasDate = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string reverted = 3;
 * @return {string}
 */
proto.transaction.Transaction.Metadata.prototype.getReverted = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction.Metadata} returns this
 */
proto.transaction.Transaction.Metadata.prototype.setReverted = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Metadata metadata = 1;
 * @return {?proto.transaction.Transaction.Metadata}
 */
proto.transaction.Transaction.prototype.getMetadata = function() {
  return /** @type{?proto.transaction.Transaction.Metadata} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.Metadata, 1));
};


/**
 * @param {?proto.transaction.Transaction.Metadata|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setMetadata = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearMetadata = function() {
  return this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string contract = 2;
 * @return {string}
 */
proto.transaction.Transaction.prototype.getContract = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.setContract = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 network = 3;
 * @return {number}
 */
proto.transaction.Transaction.prototype.getNetwork = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.setNetwork = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional SecurityTokenFactory.DeployNewSecurityToken deployNewSecurityToken = 4;
 * @return {?proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken}
 */
proto.transaction.Transaction.prototype.getDeploynewsecuritytoken = function() {
  return /** @type{?proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken, 4));
};


/**
 * @param {?proto.transaction.Transaction.SecurityTokenFactory.DeployNewSecurityToken|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setDeploynewsecuritytoken = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearDeploynewsecuritytoken = function() {
  return this.setDeploynewsecuritytoken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasDeploynewsecuritytoken = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SecurityToken.BulkIssueByPartition bulkIssueByPartition = 5;
 * @return {?proto.transaction.Transaction.SecurityToken.BulkIssueByPartition}
 */
proto.transaction.Transaction.prototype.getBulkissuebypartition = function() {
  return /** @type{?proto.transaction.Transaction.SecurityToken.BulkIssueByPartition} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.SecurityToken.BulkIssueByPartition, 5));
};


/**
 * @param {?proto.transaction.Transaction.SecurityToken.BulkIssueByPartition|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setBulkissuebypartition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearBulkissuebypartition = function() {
  return this.setBulkissuebypartition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasBulkissuebypartition = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional SecurityToken.SetDocument setDocument = 6;
 * @return {?proto.transaction.Transaction.SecurityToken.SetDocument}
 */
proto.transaction.Transaction.prototype.getSetdocument = function() {
  return /** @type{?proto.transaction.Transaction.SecurityToken.SetDocument} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.SecurityToken.SetDocument, 6));
};


/**
 * @param {?proto.transaction.Transaction.SecurityToken.SetDocument|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setSetdocument = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearSetdocument = function() {
  return this.setSetdocument(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasSetdocument = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional SecurityToken.IssueByPartition issueByPartition = 7;
 * @return {?proto.transaction.Transaction.SecurityToken.IssueByPartition}
 */
proto.transaction.Transaction.prototype.getIssuebypartition = function() {
  return /** @type{?proto.transaction.Transaction.SecurityToken.IssueByPartition} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.SecurityToken.IssueByPartition, 7));
};


/**
 * @param {?proto.transaction.Transaction.SecurityToken.IssueByPartition|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setIssuebypartition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearIssuebypartition = function() {
  return this.setIssuebypartition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasIssuebypartition = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional SecurityToken.RedeemByPartition redeemByPartition = 8;
 * @return {?proto.transaction.Transaction.SecurityToken.RedeemByPartition}
 */
proto.transaction.Transaction.prototype.getRedeembypartition = function() {
  return /** @type{?proto.transaction.Transaction.SecurityToken.RedeemByPartition} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.SecurityToken.RedeemByPartition, 8));
};


/**
 * @param {?proto.transaction.Transaction.SecurityToken.RedeemByPartition|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setRedeembypartition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearRedeembypartition = function() {
  return this.setRedeembypartition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasRedeembypartition = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional SecurityToken.OperatorRedeemByPartition operatorRedeemByPartition = 9;
 * @return {?proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition}
 */
proto.transaction.Transaction.prototype.getOperatorredeembypartition = function() {
  return /** @type{?proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition, 9));
};


/**
 * @param {?proto.transaction.Transaction.SecurityToken.OperatorRedeemByPartition|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setOperatorredeembypartition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearOperatorredeembypartition = function() {
  return this.setOperatorredeembypartition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasOperatorredeembypartition = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional SecurityToken.RenounceControl renounceControl = 10;
 * @return {?proto.transaction.Transaction.SecurityToken.RenounceControl}
 */
proto.transaction.Transaction.prototype.getRenouncecontrol = function() {
  return /** @type{?proto.transaction.Transaction.SecurityToken.RenounceControl} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.SecurityToken.RenounceControl, 10));
};


/**
 * @param {?proto.transaction.Transaction.SecurityToken.RenounceControl|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setRenouncecontrol = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearRenouncecontrol = function() {
  return this.setRenouncecontrol(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasRenouncecontrol = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional SecurityToken.RenounceIssuance renounceIssuance = 11;
 * @return {?proto.transaction.Transaction.SecurityToken.RenounceIssuance}
 */
proto.transaction.Transaction.prototype.getRenounceissuance = function() {
  return /** @type{?proto.transaction.Transaction.SecurityToken.RenounceIssuance} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.SecurityToken.RenounceIssuance, 11));
};


/**
 * @param {?proto.transaction.Transaction.SecurityToken.RenounceIssuance|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setRenounceissuance = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearRenounceissuance = function() {
  return this.setRenounceissuance(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasRenounceissuance = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional Pausable.Pause pause = 12;
 * @return {?proto.transaction.Transaction.Pausable.Pause}
 */
proto.transaction.Transaction.prototype.getPause = function() {
  return /** @type{?proto.transaction.Transaction.Pausable.Pause} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.Pausable.Pause, 12));
};


/**
 * @param {?proto.transaction.Transaction.Pausable.Pause|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setPause = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearPause = function() {
  return this.setPause(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasPause = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional Pausable.Unpause unpause = 13;
 * @return {?proto.transaction.Transaction.Pausable.Unpause}
 */
proto.transaction.Transaction.prototype.getUnpause = function() {
  return /** @type{?proto.transaction.Transaction.Pausable.Unpause} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.Pausable.Unpause, 13));
};


/**
 * @param {?proto.transaction.Transaction.Pausable.Unpause|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setUnpause = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearUnpause = function() {
  return this.setUnpause(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasUnpause = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional Ownable.TransferOwnership transferOwnership = 14;
 * @return {?proto.transaction.Transaction.Ownable.TransferOwnership}
 */
proto.transaction.Transaction.prototype.getTransferownership = function() {
  return /** @type{?proto.transaction.Transaction.Ownable.TransferOwnership} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.Ownable.TransferOwnership, 14));
};


/**
 * @param {?proto.transaction.Transaction.Ownable.TransferOwnership|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setTransferownership = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearTransferownership = function() {
  return this.setTransferownership(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasTransferownership = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional ERC1400Raw.AuthorizeOperator authorizeOperator = 15;
 * @return {?proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator}
 */
proto.transaction.Transaction.prototype.getAuthorizeoperator = function() {
  return /** @type{?proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator, 15));
};


/**
 * @param {?proto.transaction.Transaction.ERC1400Raw.AuthorizeOperator|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setAuthorizeoperator = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearAuthorizeoperator = function() {
  return this.setAuthorizeoperator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasAuthorizeoperator = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional ERC1400Raw.RevokeOperator revokeOperator = 16;
 * @return {?proto.transaction.Transaction.ERC1400Raw.RevokeOperator}
 */
proto.transaction.Transaction.prototype.getRevokeoperator = function() {
  return /** @type{?proto.transaction.Transaction.ERC1400Raw.RevokeOperator} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.ERC1400Raw.RevokeOperator, 16));
};


/**
 * @param {?proto.transaction.Transaction.ERC1400Raw.RevokeOperator|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setRevokeoperator = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearRevokeoperator = function() {
  return this.setRevokeoperator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasRevokeoperator = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional ERC1400Partition.TransferByPartition transferByPartition = 17;
 * @return {?proto.transaction.Transaction.ERC1400Partition.TransferByPartition}
 */
proto.transaction.Transaction.prototype.getTransferbypartition = function() {
  return /** @type{?proto.transaction.Transaction.ERC1400Partition.TransferByPartition} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.ERC1400Partition.TransferByPartition, 17));
};


/**
 * @param {?proto.transaction.Transaction.ERC1400Partition.TransferByPartition|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setTransferbypartition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearTransferbypartition = function() {
  return this.setTransferbypartition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasTransferbypartition = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional ERC1400Partition.OperatorTransferByPartition operatorTransferByPartition = 18;
 * @return {?proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition}
 */
proto.transaction.Transaction.prototype.getOperatortransferbypartition = function() {
  return /** @type{?proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition, 18));
};


/**
 * @param {?proto.transaction.Transaction.ERC1400Partition.OperatorTransferByPartition|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setOperatortransferbypartition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearOperatortransferbypartition = function() {
  return this.setOperatortransferbypartition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasOperatortransferbypartition = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional ERC1400Partition.AuthorizeOperatorByPartition authorizeOperatorByPartition = 19;
 * @return {?proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition}
 */
proto.transaction.Transaction.prototype.getAuthorizeoperatorbypartition = function() {
  return /** @type{?proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition, 19));
};


/**
 * @param {?proto.transaction.Transaction.ERC1400Partition.AuthorizeOperatorByPartition|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setAuthorizeoperatorbypartition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearAuthorizeoperatorbypartition = function() {
  return this.setAuthorizeoperatorbypartition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasAuthorizeoperatorbypartition = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional ERC1400Partition.RevokeOperatorByPartition revokeOperatorByPartition = 20;
 * @return {?proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition}
 */
proto.transaction.Transaction.prototype.getRevokeoperatorbypartition = function() {
  return /** @type{?proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition, 20));
};


/**
 * @param {?proto.transaction.Transaction.ERC1400Partition.RevokeOperatorByPartition|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setRevokeoperatorbypartition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearRevokeoperatorbypartition = function() {
  return this.setRevokeoperatorbypartition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasRevokeoperatorbypartition = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional ERC1400Partition.TransferWithData transferWithData = 21;
 * @return {?proto.transaction.Transaction.ERC1400Partition.TransferWithData}
 */
proto.transaction.Transaction.prototype.getTransferwithdata = function() {
  return /** @type{?proto.transaction.Transaction.ERC1400Partition.TransferWithData} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.ERC1400Partition.TransferWithData, 21));
};


/**
 * @param {?proto.transaction.Transaction.ERC1400Partition.TransferWithData|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setTransferwithdata = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearTransferwithdata = function() {
  return this.setTransferwithdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasTransferwithdata = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional ERC1400Partition.TransferFromWithData transferFromWithData = 22;
 * @return {?proto.transaction.Transaction.ERC1400Partition.TransferFromWithData}
 */
proto.transaction.Transaction.prototype.getTransferfromwithdata = function() {
  return /** @type{?proto.transaction.Transaction.ERC1400Partition.TransferFromWithData} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.ERC1400Partition.TransferFromWithData, 22));
};


/**
 * @param {?proto.transaction.Transaction.ERC1400Partition.TransferFromWithData|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setTransferfromwithdata = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearTransferfromwithdata = function() {
  return this.setTransferfromwithdata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasTransferfromwithdata = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional ERC1400ERC20.Transfer transfer = 23;
 * @return {?proto.transaction.Transaction.ERC1400ERC20.Transfer}
 */
proto.transaction.Transaction.prototype.getTransfer = function() {
  return /** @type{?proto.transaction.Transaction.ERC1400ERC20.Transfer} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.ERC1400ERC20.Transfer, 23));
};


/**
 * @param {?proto.transaction.Transaction.ERC1400ERC20.Transfer|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setTransfer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 23, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearTransfer = function() {
  return this.setTransfer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasTransfer = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional ERC1400ERC20.Approve approve = 24;
 * @return {?proto.transaction.Transaction.ERC1400ERC20.Approve}
 */
proto.transaction.Transaction.prototype.getApprove = function() {
  return /** @type{?proto.transaction.Transaction.ERC1400ERC20.Approve} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.ERC1400ERC20.Approve, 24));
};


/**
 * @param {?proto.transaction.Transaction.ERC1400ERC20.Approve|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setApprove = function(value) {
  return jspb.Message.setOneofWrapperField(this, 24, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearApprove = function() {
  return this.setApprove(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasApprove = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional ERC1400ERC20.TransferFrom transferFrom = 25;
 * @return {?proto.transaction.Transaction.ERC1400ERC20.TransferFrom}
 */
proto.transaction.Transaction.prototype.getTransferfrom = function() {
  return /** @type{?proto.transaction.Transaction.ERC1400ERC20.TransferFrom} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.ERC1400ERC20.TransferFrom, 25));
};


/**
 * @param {?proto.transaction.Transaction.ERC1400ERC20.TransferFrom|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setTransferfrom = function(value) {
  return jspb.Message.setOneofWrapperField(this, 25, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearTransferfrom = function() {
  return this.setTransferfrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasTransferfrom = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional ERC1400Capped.SetCap setCap = 26;
 * @return {?proto.transaction.Transaction.ERC1400Capped.SetCap}
 */
proto.transaction.Transaction.prototype.getSetcap = function() {
  return /** @type{?proto.transaction.Transaction.ERC1400Capped.SetCap} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.ERC1400Capped.SetCap, 26));
};


/**
 * @param {?proto.transaction.Transaction.ERC1400Capped.SetCap|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setSetcap = function(value) {
  return jspb.Message.setOneofWrapperField(this, 26, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearSetcap = function() {
  return this.setSetcap(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasSetcap = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional Constrainable.SetModulesByPartition setModulesByPartition = 27;
 * @return {?proto.transaction.Transaction.Constrainable.SetModulesByPartition}
 */
proto.transaction.Transaction.prototype.getSetmodulesbypartition = function() {
  return /** @type{?proto.transaction.Transaction.Constrainable.SetModulesByPartition} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.Constrainable.SetModulesByPartition, 27));
};


/**
 * @param {?proto.transaction.Transaction.Constrainable.SetModulesByPartition|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setSetmodulesbypartition = function(value) {
  return jspb.Message.setOneofWrapperField(this, 27, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearSetmodulesbypartition = function() {
  return this.setSetmodulesbypartition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasSetmodulesbypartition = function() {
  return jspb.Message.getField(this, 27) != null;
};


/**
 * optional Administrable.AddRole addRole = 28;
 * @return {?proto.transaction.Transaction.Administrable.AddRole}
 */
proto.transaction.Transaction.prototype.getAddrole = function() {
  return /** @type{?proto.transaction.Transaction.Administrable.AddRole} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.Administrable.AddRole, 28));
};


/**
 * @param {?proto.transaction.Transaction.Administrable.AddRole|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setAddrole = function(value) {
  return jspb.Message.setOneofWrapperField(this, 28, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearAddrole = function() {
  return this.setAddrole(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasAddrole = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional Administrable.BulkAddRole bulkAddRole = 29;
 * @return {?proto.transaction.Transaction.Administrable.BulkAddRole}
 */
proto.transaction.Transaction.prototype.getBulkaddrole = function() {
  return /** @type{?proto.transaction.Transaction.Administrable.BulkAddRole} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.Administrable.BulkAddRole, 29));
};


/**
 * @param {?proto.transaction.Transaction.Administrable.BulkAddRole|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setBulkaddrole = function(value) {
  return jspb.Message.setOneofWrapperField(this, 29, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearBulkaddrole = function() {
  return this.setBulkaddrole(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasBulkaddrole = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional Administrable.RemoveRole removeRole = 30;
 * @return {?proto.transaction.Transaction.Administrable.RemoveRole}
 */
proto.transaction.Transaction.prototype.getRemoverole = function() {
  return /** @type{?proto.transaction.Transaction.Administrable.RemoveRole} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.Administrable.RemoveRole, 30));
};


/**
 * @param {?proto.transaction.Transaction.Administrable.RemoveRole|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setRemoverole = function(value) {
  return jspb.Message.setOneofWrapperField(this, 30, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearRemoverole = function() {
  return this.setRemoverole(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasRemoverole = function() {
  return jspb.Message.getField(this, 30) != null;
};


/**
 * optional Administrable.RenounceRole renounceRole = 31;
 * @return {?proto.transaction.Transaction.Administrable.RenounceRole}
 */
proto.transaction.Transaction.prototype.getRenouncerole = function() {
  return /** @type{?proto.transaction.Transaction.Administrable.RenounceRole} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.Administrable.RenounceRole, 31));
};


/**
 * @param {?proto.transaction.Transaction.Administrable.RenounceRole|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setRenouncerole = function(value) {
  return jspb.Message.setOneofWrapperField(this, 31, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearRenouncerole = function() {
  return this.setRenouncerole(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasRenouncerole = function() {
  return jspb.Message.getField(this, 31) != null;
};


/**
 * optional SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule deploySpendingLimitsConstraintModule = 32;
 * @return {?proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule}
 */
proto.transaction.Transaction.prototype.getDeployspendinglimitsconstraintmodule = function() {
  return /** @type{?proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule, 32));
};


/**
 * @param {?proto.transaction.Transaction.SpendingLimitsConstraintModule.DeploySpendingLimitsConstraintModule|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setDeployspendinglimitsconstraintmodule = function(value) {
  return jspb.Message.setOneofWrapperField(this, 32, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearDeployspendinglimitsconstraintmodule = function() {
  return this.setDeployspendinglimitsconstraintmodule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasDeployspendinglimitsconstraintmodule = function() {
  return jspb.Message.getField(this, 32) != null;
};


/**
 * optional SpendingLimitsConstraintModule.AddTimelock addTimelock = 33;
 * @return {?proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock}
 */
proto.transaction.Transaction.prototype.getAddtimelock = function() {
  return /** @type{?proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock, 33));
};


/**
 * @param {?proto.transaction.Transaction.SpendingLimitsConstraintModule.AddTimelock|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setAddtimelock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 33, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearAddtimelock = function() {
  return this.setAddtimelock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasAddtimelock = function() {
  return jspb.Message.getField(this, 33) != null;
};


/**
 * optional SpendingLimitsConstraintModule.SetTimelock setTimelock = 34;
 * @return {?proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock}
 */
proto.transaction.Transaction.prototype.getSettimelock = function() {
  return /** @type{?proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock, 34));
};


/**
 * @param {?proto.transaction.Transaction.SpendingLimitsConstraintModule.SetTimelock|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setSettimelock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 34, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearSettimelock = function() {
  return this.setSettimelock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasSettimelock = function() {
  return jspb.Message.getField(this, 34) != null;
};


/**
 * optional SpendingLimitsConstraintModule.DeleteTimelock deleteTimelock = 35;
 * @return {?proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock}
 */
proto.transaction.Transaction.prototype.getDeletetimelock = function() {
  return /** @type{?proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock, 35));
};


/**
 * @param {?proto.transaction.Transaction.SpendingLimitsConstraintModule.DeleteTimelock|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setDeletetimelock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 35, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearDeletetimelock = function() {
  return this.setDeletetimelock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasDeletetimelock = function() {
  return jspb.Message.getField(this, 35) != null;
};


/**
 * optional TimeLockConstraintModule.DeployTimeLockConstraintModule deployTimeLockConstraintModule = 36;
 * @return {?proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule}
 */
proto.transaction.Transaction.prototype.getDeploytimelockconstraintmodule = function() {
  return /** @type{?proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule, 36));
};


/**
 * @param {?proto.transaction.Transaction.TimeLockConstraintModule.DeployTimeLockConstraintModule|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setDeploytimelockconstraintmodule = function(value) {
  return jspb.Message.setOneofWrapperField(this, 36, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearDeploytimelockconstraintmodule = function() {
  return this.setDeploytimelockconstraintmodule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasDeploytimelockconstraintmodule = function() {
  return jspb.Message.getField(this, 36) != null;
};


/**
 * optional TimeLockConstraintModule.EditAmountTimeLock editAmountTimeLock = 37;
 * @return {?proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock}
 */
proto.transaction.Transaction.prototype.getEditamounttimelock = function() {
  return /** @type{?proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock, 37));
};


/**
 * @param {?proto.transaction.Transaction.TimeLockConstraintModule.EditAmountTimeLock|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setEditamounttimelock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 37, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearEditamounttimelock = function() {
  return this.setEditamounttimelock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasEditamounttimelock = function() {
  return jspb.Message.getField(this, 37) != null;
};


/**
 * optional TimeLockConstraintModule.EditAccountTimeLock editAccountTimeLock = 38;
 * @return {?proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock}
 */
proto.transaction.Transaction.prototype.getEditaccounttimelock = function() {
  return /** @type{?proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock, 38));
};


/**
 * @param {?proto.transaction.Transaction.TimeLockConstraintModule.EditAccountTimeLock|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setEditaccounttimelock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 38, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearEditaccounttimelock = function() {
  return this.setEditaccounttimelock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasEditaccounttimelock = function() {
  return jspb.Message.getField(this, 38) != null;
};


/**
 * optional TimeLockConstraintModule.EditTimeLock editTimeLock = 39;
 * @return {?proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock}
 */
proto.transaction.Transaction.prototype.getEdittimelock = function() {
  return /** @type{?proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock, 39));
};


/**
 * @param {?proto.transaction.Transaction.TimeLockConstraintModule.EditTimeLock|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setEdittimelock = function(value) {
  return jspb.Message.setOneofWrapperField(this, 39, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearEdittimelock = function() {
  return this.setEdittimelock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasEdittimelock = function() {
  return jspb.Message.getField(this, 39) != null;
};


/**
 * optional VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule deployVestingPeriodConstraintModule = 40;
 * @return {?proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule}
 */
proto.transaction.Transaction.prototype.getDeployvestingperiodconstraintmodule = function() {
  return /** @type{?proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule, 40));
};


/**
 * @param {?proto.transaction.Transaction.VestingPeriodConstraintModule.DeployVestingPeriodConstraintModule|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setDeployvestingperiodconstraintmodule = function(value) {
  return jspb.Message.setOneofWrapperField(this, 40, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearDeployvestingperiodconstraintmodule = function() {
  return this.setDeployvestingperiodconstraintmodule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasDeployvestingperiodconstraintmodule = function() {
  return jspb.Message.getField(this, 40) != null;
};


/**
 * optional VestingPeriodConstraintModule.SetVestingOptions setVestingOptions = 41;
 * @return {?proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions}
 */
proto.transaction.Transaction.prototype.getSetvestingoptions = function() {
  return /** @type{?proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions, 41));
};


/**
 * @param {?proto.transaction.Transaction.VestingPeriodConstraintModule.SetVestingOptions|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setSetvestingoptions = function(value) {
  return jspb.Message.setOneofWrapperField(this, 41, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearSetvestingoptions = function() {
  return this.setSetvestingoptions(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasSetvestingoptions = function() {
  return jspb.Message.getField(this, 41) != null;
};


/**
 * optional WhitelistConstraintModule.DeployWhitelistConstraintModule deployWhitelistConstraintModule = 42;
 * @return {?proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule}
 */
proto.transaction.Transaction.prototype.getDeploywhitelistconstraintmodule = function() {
  return /** @type{?proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule, 42));
};


/**
 * @param {?proto.transaction.Transaction.WhitelistConstraintModule.DeployWhitelistConstraintModule|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setDeploywhitelistconstraintmodule = function(value) {
  return jspb.Message.setOneofWrapperField(this, 42, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearDeploywhitelistconstraintmodule = function() {
  return this.setDeploywhitelistconstraintmodule(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasDeploywhitelistconstraintmodule = function() {
  return jspb.Message.getField(this, 42) != null;
};


/**
 * optional WhitelistConstraintModule.EditWhitelist editWhitelist = 43;
 * @return {?proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist}
 */
proto.transaction.Transaction.prototype.getEditwhitelist = function() {
  return /** @type{?proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist, 43));
};


/**
 * @param {?proto.transaction.Transaction.WhitelistConstraintModule.EditWhitelist|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setEditwhitelist = function(value) {
  return jspb.Message.setOneofWrapperField(this, 43, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearEditwhitelist = function() {
  return this.setEditwhitelist(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasEditwhitelist = function() {
  return jspb.Message.getField(this, 43) != null;
};


/**
 * optional WhitelistConstraintModule.BulkEditWhitelist bulkEditWhitelist = 44;
 * @return {?proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist}
 */
proto.transaction.Transaction.prototype.getBulkeditwhitelist = function() {
  return /** @type{?proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist} */ (
    jspb.Message.getWrapperField(this, proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist, 44));
};


/**
 * @param {?proto.transaction.Transaction.WhitelistConstraintModule.BulkEditWhitelist|undefined} value
 * @return {!proto.transaction.Transaction} returns this
*/
proto.transaction.Transaction.prototype.setBulkeditwhitelist = function(value) {
  return jspb.Message.setOneofWrapperField(this, 44, proto.transaction.Transaction.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.transaction.Transaction} returns this
 */
proto.transaction.Transaction.prototype.clearBulkeditwhitelist = function() {
  return this.setBulkeditwhitelist(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.transaction.Transaction.prototype.hasBulkeditwhitelist = function() {
  return jspb.Message.getField(this, 44) != null;
};


goog.object.extend(exports, proto.transaction);

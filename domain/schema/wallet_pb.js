// source: schema/wallet.proto
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

var schema_account_pb = require('../schema/account_pb.js');
goog.object.extend(proto, schema_account_pb);
var schema_token_pb = require('../schema/token_pb.js');
goog.object.extend(proto, schema_token_pb);
var schema_transaction_pb = require('../schema/transaction_pb.js');
goog.object.extend(proto, schema_transaction_pb);
goog.exportSymbol('proto.wallet.Wallet', null, global);
goog.exportSymbol('proto.wallet.Wallet.Project', null, global);
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
proto.wallet.Wallet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.wallet.Wallet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wallet.Wallet.displayName = 'proto.wallet.Wallet';
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
proto.wallet.Wallet.Project = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.wallet.Wallet.Project.repeatedFields_, null);
};
goog.inherits(proto.wallet.Wallet.Project, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.wallet.Wallet.Project.displayName = 'proto.wallet.Wallet.Project';
}



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
proto.wallet.Wallet.prototype.toObject = function(opt_includeInstance) {
  return proto.wallet.Wallet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wallet.Wallet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wallet.Wallet.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: jspb.Message.getFieldWithDefault(msg, 1, ""),
    networkid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    projectsMap: (f = msg.getProjectsMap()) ? f.toObject(includeInstance, proto.wallet.Wallet.Project.toObject) : []
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
 * @return {!proto.wallet.Wallet}
 */
proto.wallet.Wallet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wallet.Wallet;
  return proto.wallet.Wallet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wallet.Wallet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wallet.Wallet}
 */
proto.wallet.Wallet.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {string} */ (reader.readString());
      msg.setNetworkid(value);
      break;
    case 3:
      var value = msg.getProjectsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.wallet.Wallet.Project.deserializeBinaryFromReader, "", new proto.wallet.Wallet.Project());
         });
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
proto.wallet.Wallet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wallet.Wallet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wallet.Wallet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wallet.Wallet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNetworkid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProjectsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.wallet.Wallet.Project.serializeBinaryToWriter);
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.wallet.Wallet.Project.repeatedFields_ = [5];



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
proto.wallet.Wallet.Project.prototype.toObject = function(opt_includeInstance) {
  return proto.wallet.Wallet.Project.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.wallet.Wallet.Project} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wallet.Wallet.Project.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: (f = msg.getToken()) && schema_token_pb.SecurityToken.Metadata.toObject(includeInstance, f),
    partitionsMap: (f = msg.getPartitionsMap()) ? f.toObject(includeInstance, proto.token.Partition.Metadata.toObject) : [],
    documentsMap: (f = msg.getDocumentsMap()) ? f.toObject(includeInstance, proto.token.Document.Metadata.toObject) : [],
    accountsMap: (f = msg.getAccountsMap()) ? f.toObject(includeInstance, proto.account.Account.Metadata.toObject) : [],
    transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    schema_transaction_pb.Transaction.toObject, includeInstance)
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
 * @return {!proto.wallet.Wallet.Project}
 */
proto.wallet.Wallet.Project.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.wallet.Wallet.Project;
  return proto.wallet.Wallet.Project.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.wallet.Wallet.Project} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.wallet.Wallet.Project}
 */
proto.wallet.Wallet.Project.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new schema_token_pb.SecurityToken.Metadata;
      reader.readMessage(value,schema_token_pb.SecurityToken.Metadata.deserializeBinaryFromReader);
      msg.setToken(value);
      break;
    case 2:
      var value = msg.getPartitionsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.token.Partition.Metadata.deserializeBinaryFromReader, "", new proto.token.Partition.Metadata());
         });
      break;
    case 3:
      var value = msg.getDocumentsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.token.Document.Metadata.deserializeBinaryFromReader, "", new proto.token.Document.Metadata());
         });
      break;
    case 4:
      var value = msg.getAccountsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.account.Account.Metadata.deserializeBinaryFromReader, "", new proto.account.Account.Metadata());
         });
      break;
    case 5:
      var value = new schema_transaction_pb.Transaction;
      reader.readMessage(value,schema_transaction_pb.Transaction.deserializeBinaryFromReader);
      msg.addTransactions(value);
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
proto.wallet.Wallet.Project.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.wallet.Wallet.Project.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.wallet.Wallet.Project} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.wallet.Wallet.Project.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      schema_token_pb.SecurityToken.Metadata.serializeBinaryToWriter
    );
  }
  f = message.getPartitionsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.token.Partition.Metadata.serializeBinaryToWriter);
  }
  f = message.getDocumentsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.token.Document.Metadata.serializeBinaryToWriter);
  }
  f = message.getAccountsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.account.Account.Metadata.serializeBinaryToWriter);
  }
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      schema_transaction_pb.Transaction.serializeBinaryToWriter
    );
  }
};


/**
 * optional token.SecurityToken.Metadata token = 1;
 * @return {?proto.token.SecurityToken.Metadata}
 */
proto.wallet.Wallet.Project.prototype.getToken = function() {
  return /** @type{?proto.token.SecurityToken.Metadata} */ (
    jspb.Message.getWrapperField(this, schema_token_pb.SecurityToken.Metadata, 1));
};


/**
 * @param {?proto.token.SecurityToken.Metadata|undefined} value
 * @return {!proto.wallet.Wallet.Project} returns this
*/
proto.wallet.Wallet.Project.prototype.setToken = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.wallet.Wallet.Project} returns this
 */
proto.wallet.Wallet.Project.prototype.clearToken = function() {
  return this.setToken(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.wallet.Wallet.Project.prototype.hasToken = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * map<string, token.Partition.Metadata> partitions = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.token.Partition.Metadata>}
 */
proto.wallet.Wallet.Project.prototype.getPartitionsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.token.Partition.Metadata>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.token.Partition.Metadata));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.wallet.Wallet.Project} returns this
 */
proto.wallet.Wallet.Project.prototype.clearPartitionsMap = function() {
  this.getPartitionsMap().clear();
  return this;};


/**
 * map<string, token.Document.Metadata> documents = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.token.Document.Metadata>}
 */
proto.wallet.Wallet.Project.prototype.getDocumentsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.token.Document.Metadata>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.token.Document.Metadata));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.wallet.Wallet.Project} returns this
 */
proto.wallet.Wallet.Project.prototype.clearDocumentsMap = function() {
  this.getDocumentsMap().clear();
  return this;};


/**
 * map<string, account.Account.Metadata> accounts = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.account.Account.Metadata>}
 */
proto.wallet.Wallet.Project.prototype.getAccountsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.account.Account.Metadata>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.account.Account.Metadata));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.wallet.Wallet.Project} returns this
 */
proto.wallet.Wallet.Project.prototype.clearAccountsMap = function() {
  this.getAccountsMap().clear();
  return this;};


/**
 * repeated transaction.Transaction transactions = 5;
 * @return {!Array<!proto.transaction.Transaction>}
 */
proto.wallet.Wallet.Project.prototype.getTransactionsList = function() {
  return /** @type{!Array<!proto.transaction.Transaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, schema_transaction_pb.Transaction, 5));
};


/**
 * @param {!Array<!proto.transaction.Transaction>} value
 * @return {!proto.wallet.Wallet.Project} returns this
*/
proto.wallet.Wallet.Project.prototype.setTransactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.transaction.Transaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.transaction.Transaction}
 */
proto.wallet.Wallet.Project.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.transaction.Transaction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.wallet.Wallet.Project} returns this
 */
proto.wallet.Wallet.Project.prototype.clearTransactionsList = function() {
  return this.setTransactionsList([]);
};


/**
 * optional string account = 1;
 * @return {string}
 */
proto.wallet.Wallet.prototype.getAccount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.wallet.Wallet} returns this
 */
proto.wallet.Wallet.prototype.setAccount = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string networkId = 2;
 * @return {string}
 */
proto.wallet.Wallet.prototype.getNetworkid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.wallet.Wallet} returns this
 */
proto.wallet.Wallet.prototype.setNetworkid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, Project> projects = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.wallet.Wallet.Project>}
 */
proto.wallet.Wallet.prototype.getProjectsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.wallet.Wallet.Project>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.wallet.Wallet.Project));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.wallet.Wallet} returns this
 */
proto.wallet.Wallet.prototype.clearProjectsMap = function() {
  this.getProjectsMap().clear();
  return this;};


goog.object.extend(exports, proto.wallet);

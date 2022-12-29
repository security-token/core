// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.19.4
// source: schema/transaction.proto

package schema

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// factories/SecurityTokenFactory.sol
type DeployNewSecurityToken struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name         string                  `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Symbol       string                  `protobuf:"bytes,2,opt,name=symbol,proto3" json:"symbol,omitempty"`
	Granularity  uint64                  `protobuf:"varint,3,opt,name=granularity,proto3" json:"granularity,omitempty"`
	Cap          uint64                  `protobuf:"varint,4,opt,name=cap,proto3" json:"cap,omitempty"`
	Admin        string                  `protobuf:"bytes,5,opt,name=admin,proto3" json:"admin,omitempty"`
	Controller   string                  `protobuf:"bytes,6,opt,name=controller,proto3" json:"controller,omitempty"`
	Issuer       string                  `protobuf:"bytes,7,opt,name=issuer,proto3" json:"issuer,omitempty"`
	Redeemer     string                  `protobuf:"bytes,8,opt,name=redeemer,proto3" json:"redeemer,omitempty"`
	ModuleEditor string                  `protobuf:"bytes,9,opt,name=module_editor,json=moduleEditor,proto3" json:"module_editor,omitempty"`
	Metadata     *SecurityToken_Metadata `protobuf:"bytes,10,opt,name=metadata,proto3" json:"metadata,omitempty"`
}

func (x *DeployNewSecurityToken) Reset() {
	*x = DeployNewSecurityToken{}
	if protoimpl.UnsafeEnabled {
		mi := &file_schema_transaction_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *DeployNewSecurityToken) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*DeployNewSecurityToken) ProtoMessage() {}

func (x *DeployNewSecurityToken) ProtoReflect() protoreflect.Message {
	mi := &file_schema_transaction_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use DeployNewSecurityToken.ProtoReflect.Descriptor instead.
func (*DeployNewSecurityToken) Descriptor() ([]byte, []int) {
	return file_schema_transaction_proto_rawDescGZIP(), []int{0}
}

func (x *DeployNewSecurityToken) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *DeployNewSecurityToken) GetSymbol() string {
	if x != nil {
		return x.Symbol
	}
	return ""
}

func (x *DeployNewSecurityToken) GetGranularity() uint64 {
	if x != nil {
		return x.Granularity
	}
	return 0
}

func (x *DeployNewSecurityToken) GetCap() uint64 {
	if x != nil {
		return x.Cap
	}
	return 0
}

func (x *DeployNewSecurityToken) GetAdmin() string {
	if x != nil {
		return x.Admin
	}
	return ""
}

func (x *DeployNewSecurityToken) GetController() string {
	if x != nil {
		return x.Controller
	}
	return ""
}

func (x *DeployNewSecurityToken) GetIssuer() string {
	if x != nil {
		return x.Issuer
	}
	return ""
}

func (x *DeployNewSecurityToken) GetRedeemer() string {
	if x != nil {
		return x.Redeemer
	}
	return ""
}

func (x *DeployNewSecurityToken) GetModuleEditor() string {
	if x != nil {
		return x.ModuleEditor
	}
	return ""
}

func (x *DeployNewSecurityToken) GetMetadata() *SecurityToken_Metadata {
	if x != nil {
		return x.Metadata
	}
	return nil
}

type Transfer struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Recipient string `protobuf:"bytes,1,opt,name=recipient,proto3" json:"recipient,omitempty"`
	Amount    uint64 `protobuf:"varint,2,opt,name=amount,proto3" json:"amount,omitempty"`
}

func (x *Transfer) Reset() {
	*x = Transfer{}
	if protoimpl.UnsafeEnabled {
		mi := &file_schema_transaction_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Transfer) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Transfer) ProtoMessage() {}

func (x *Transfer) ProtoReflect() protoreflect.Message {
	mi := &file_schema_transaction_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Transfer.ProtoReflect.Descriptor instead.
func (*Transfer) Descriptor() ([]byte, []int) {
	return file_schema_transaction_proto_rawDescGZIP(), []int{1}
}

func (x *Transfer) GetRecipient() string {
	if x != nil {
		return x.Recipient
	}
	return ""
}

func (x *Transfer) GetAmount() uint64 {
	if x != nil {
		return x.Amount
	}
	return 0
}

type IssueByPartition struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Partition string `protobuf:"bytes,1,opt,name=partition,proto3" json:"partition,omitempty"`
	Recipient string `protobuf:"bytes,2,opt,name=recipient,proto3" json:"recipient,omitempty"`
	Amount    uint64 `protobuf:"varint,3,opt,name=amount,proto3" json:"amount,omitempty"`
}

func (x *IssueByPartition) Reset() {
	*x = IssueByPartition{}
	if protoimpl.UnsafeEnabled {
		mi := &file_schema_transaction_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *IssueByPartition) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*IssueByPartition) ProtoMessage() {}

func (x *IssueByPartition) ProtoReflect() protoreflect.Message {
	mi := &file_schema_transaction_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use IssueByPartition.ProtoReflect.Descriptor instead.
func (*IssueByPartition) Descriptor() ([]byte, []int) {
	return file_schema_transaction_proto_rawDescGZIP(), []int{2}
}

func (x *IssueByPartition) GetPartition() string {
	if x != nil {
		return x.Partition
	}
	return ""
}

func (x *IssueByPartition) GetRecipient() string {
	if x != nil {
		return x.Recipient
	}
	return ""
}

func (x *IssueByPartition) GetAmount() uint64 {
	if x != nil {
		return x.Amount
	}
	return 0
}

type Transaction struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Metadata *Transaction_Metadata `protobuf:"bytes,1,opt,name=metadata,proto3" json:"metadata,omitempty"`
	Contract string                `protobuf:"bytes,2,opt,name=contract,proto3" json:"contract,omitempty"`
	Network  uint32                `protobuf:"varint,3,opt,name=network,proto3" json:"network,omitempty"`
	// Types that are assignable to Data:
	//
	//	*Transaction_DeployNewSecurityToken
	//	*Transaction_Transfer
	//	*Transaction_IssueByPartition
	Data isTransaction_Data `protobuf_oneof:"data"`
}

func (x *Transaction) Reset() {
	*x = Transaction{}
	if protoimpl.UnsafeEnabled {
		mi := &file_schema_transaction_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Transaction) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Transaction) ProtoMessage() {}

func (x *Transaction) ProtoReflect() protoreflect.Message {
	mi := &file_schema_transaction_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Transaction.ProtoReflect.Descriptor instead.
func (*Transaction) Descriptor() ([]byte, []int) {
	return file_schema_transaction_proto_rawDescGZIP(), []int{3}
}

func (x *Transaction) GetMetadata() *Transaction_Metadata {
	if x != nil {
		return x.Metadata
	}
	return nil
}

func (x *Transaction) GetContract() string {
	if x != nil {
		return x.Contract
	}
	return ""
}

func (x *Transaction) GetNetwork() uint32 {
	if x != nil {
		return x.Network
	}
	return 0
}

func (m *Transaction) GetData() isTransaction_Data {
	if m != nil {
		return m.Data
	}
	return nil
}

func (x *Transaction) GetDeployNewSecurityToken() *DeployNewSecurityToken {
	if x, ok := x.GetData().(*Transaction_DeployNewSecurityToken); ok {
		return x.DeployNewSecurityToken
	}
	return nil
}

func (x *Transaction) GetTransfer() *Transfer {
	if x, ok := x.GetData().(*Transaction_Transfer); ok {
		return x.Transfer
	}
	return nil
}

func (x *Transaction) GetIssueByPartition() *IssueByPartition {
	if x, ok := x.GetData().(*Transaction_IssueByPartition); ok {
		return x.IssueByPartition
	}
	return nil
}

type isTransaction_Data interface {
	isTransaction_Data()
}

type Transaction_DeployNewSecurityToken struct {
	DeployNewSecurityToken *DeployNewSecurityToken `protobuf:"bytes,4,opt,name=deployNewSecurityToken,proto3,oneof"`
}

type Transaction_Transfer struct {
	Transfer *Transfer `protobuf:"bytes,5,opt,name=transfer,proto3,oneof"`
}

type Transaction_IssueByPartition struct {
	IssueByPartition *IssueByPartition `protobuf:"bytes,6,opt,name=issueByPartition,proto3,oneof"`
}

func (*Transaction_DeployNewSecurityToken) isTransaction_Data() {}

func (*Transaction_Transfer) isTransaction_Data() {}

func (*Transaction_IssueByPartition) isTransaction_Data() {}

type Transaction_Metadata struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Hash     string                 `protobuf:"bytes,1,opt,name=hash,proto3" json:"hash,omitempty"`
	Date     *timestamppb.Timestamp `protobuf:"bytes,2,opt,name=date,proto3" json:"date,omitempty"`
	Reverted string                 `protobuf:"bytes,3,opt,name=reverted,proto3" json:"reverted,omitempty"`
}

func (x *Transaction_Metadata) Reset() {
	*x = Transaction_Metadata{}
	if protoimpl.UnsafeEnabled {
		mi := &file_schema_transaction_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Transaction_Metadata) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Transaction_Metadata) ProtoMessage() {}

func (x *Transaction_Metadata) ProtoReflect() protoreflect.Message {
	mi := &file_schema_transaction_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Transaction_Metadata.ProtoReflect.Descriptor instead.
func (*Transaction_Metadata) Descriptor() ([]byte, []int) {
	return file_schema_transaction_proto_rawDescGZIP(), []int{3, 0}
}

func (x *Transaction_Metadata) GetHash() string {
	if x != nil {
		return x.Hash
	}
	return ""
}

func (x *Transaction_Metadata) GetDate() *timestamppb.Timestamp {
	if x != nil {
		return x.Date
	}
	return nil
}

func (x *Transaction_Metadata) GetReverted() string {
	if x != nil {
		return x.Reverted
	}
	return ""
}

var File_schema_transaction_proto protoreflect.FileDescriptor

var file_schema_transaction_proto_rawDesc = []byte{
	0x0a, 0x18, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x2f, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63,
	0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0b, 0x74, 0x72, 0x61, 0x6e,
	0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x1a, 0x12, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x2f,
	0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x1a, 0x1f, 0x67, 0x6f, 0x6f,
	0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d,
	0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xc2, 0x02, 0x0a,
	0x16, 0x44, 0x65, 0x70, 0x6c, 0x6f, 0x79, 0x4e, 0x65, 0x77, 0x53, 0x65, 0x63, 0x75, 0x72, 0x69,
	0x74, 0x79, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x73,
	0x79, 0x6d, 0x62, 0x6f, 0x6c, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x79, 0x6d,
	0x62, 0x6f, 0x6c, 0x12, 0x20, 0x0a, 0x0b, 0x67, 0x72, 0x61, 0x6e, 0x75, 0x6c, 0x61, 0x72, 0x69,
	0x74, 0x79, 0x18, 0x03, 0x20, 0x01, 0x28, 0x04, 0x52, 0x0b, 0x67, 0x72, 0x61, 0x6e, 0x75, 0x6c,
	0x61, 0x72, 0x69, 0x74, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x63, 0x61, 0x70, 0x18, 0x04, 0x20, 0x01,
	0x28, 0x04, 0x52, 0x03, 0x63, 0x61, 0x70, 0x12, 0x14, 0x0a, 0x05, 0x61, 0x64, 0x6d, 0x69, 0x6e,
	0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x61, 0x64, 0x6d, 0x69, 0x6e, 0x12, 0x1e, 0x0a,
	0x0a, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x6c, 0x65, 0x72, 0x18, 0x06, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0a, 0x63, 0x6f, 0x6e, 0x74, 0x72, 0x6f, 0x6c, 0x6c, 0x65, 0x72, 0x12, 0x16, 0x0a,
	0x06, 0x69, 0x73, 0x73, 0x75, 0x65, 0x72, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x69,
	0x73, 0x73, 0x75, 0x65, 0x72, 0x12, 0x1a, 0x0a, 0x08, 0x72, 0x65, 0x64, 0x65, 0x65, 0x6d, 0x65,
	0x72, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x72, 0x65, 0x64, 0x65, 0x65, 0x6d, 0x65,
	0x72, 0x12, 0x23, 0x0a, 0x0d, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x5f, 0x65, 0x64, 0x69, 0x74,
	0x6f, 0x72, 0x18, 0x09, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65,
	0x45, 0x64, 0x69, 0x74, 0x6f, 0x72, 0x12, 0x39, 0x0a, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61,
	0x74, 0x61, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x74, 0x6f, 0x6b, 0x65, 0x6e,
	0x2e, 0x53, 0x65, 0x63, 0x75, 0x72, 0x69, 0x74, 0x79, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x2e, 0x4d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x52, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74,
	0x61, 0x22, 0x40, 0x0a, 0x08, 0x54, 0x72, 0x61, 0x6e, 0x73, 0x66, 0x65, 0x72, 0x12, 0x1c, 0x0a,
	0x09, 0x72, 0x65, 0x63, 0x69, 0x70, 0x69, 0x65, 0x6e, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x09, 0x72, 0x65, 0x63, 0x69, 0x70, 0x69, 0x65, 0x6e, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x61,
	0x6d, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x04, 0x52, 0x06, 0x61, 0x6d, 0x6f,
	0x75, 0x6e, 0x74, 0x22, 0x66, 0x0a, 0x10, 0x49, 0x73, 0x73, 0x75, 0x65, 0x42, 0x79, 0x50, 0x61,
	0x72, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x1c, 0x0a, 0x09, 0x70, 0x61, 0x72, 0x74, 0x69,
	0x74, 0x69, 0x6f, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x70, 0x61, 0x72, 0x74,
	0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x1c, 0x0a, 0x09, 0x72, 0x65, 0x63, 0x69, 0x70, 0x69, 0x65,
	0x6e, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x72, 0x65, 0x63, 0x69, 0x70, 0x69,
	0x65, 0x6e, 0x74, 0x12, 0x16, 0x0a, 0x06, 0x61, 0x6d, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x04, 0x52, 0x06, 0x61, 0x6d, 0x6f, 0x75, 0x6e, 0x74, 0x22, 0xd7, 0x03, 0x0a, 0x0b,
	0x54, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x3d, 0x0a, 0x08, 0x6d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x21, 0x2e,
	0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x54, 0x72, 0x61, 0x6e,
	0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61,
	0x52, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x1a, 0x0a, 0x08, 0x63, 0x6f,
	0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x63, 0x6f,
	0x6e, 0x74, 0x72, 0x61, 0x63, 0x74, 0x12, 0x18, 0x0a, 0x07, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72,
	0x6b, 0x18, 0x03, 0x20, 0x01, 0x28, 0x0d, 0x52, 0x07, 0x6e, 0x65, 0x74, 0x77, 0x6f, 0x72, 0x6b,
	0x12, 0x5d, 0x0a, 0x16, 0x64, 0x65, 0x70, 0x6c, 0x6f, 0x79, 0x4e, 0x65, 0x77, 0x53, 0x65, 0x63,
	0x75, 0x72, 0x69, 0x74, 0x79, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x23, 0x2e, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x44,
	0x65, 0x70, 0x6c, 0x6f, 0x79, 0x4e, 0x65, 0x77, 0x53, 0x65, 0x63, 0x75, 0x72, 0x69, 0x74, 0x79,
	0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x48, 0x00, 0x52, 0x16, 0x64, 0x65, 0x70, 0x6c, 0x6f, 0x79, 0x4e,
	0x65, 0x77, 0x53, 0x65, 0x63, 0x75, 0x72, 0x69, 0x74, 0x79, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12,
	0x33, 0x0a, 0x08, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x66, 0x65, 0x72, 0x18, 0x05, 0x20, 0x01, 0x28,
	0x0b, 0x32, 0x15, 0x2e, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2e,
	0x54, 0x72, 0x61, 0x6e, 0x73, 0x66, 0x65, 0x72, 0x48, 0x00, 0x52, 0x08, 0x74, 0x72, 0x61, 0x6e,
	0x73, 0x66, 0x65, 0x72, 0x12, 0x4b, 0x0a, 0x10, 0x69, 0x73, 0x73, 0x75, 0x65, 0x42, 0x79, 0x50,
	0x61, 0x72, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x06, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1d,
	0x2e, 0x74, 0x72, 0x61, 0x6e, 0x73, 0x61, 0x63, 0x74, 0x69, 0x6f, 0x6e, 0x2e, 0x49, 0x73, 0x73,
	0x75, 0x65, 0x42, 0x79, 0x50, 0x61, 0x72, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x48, 0x00, 0x52,
	0x10, 0x69, 0x73, 0x73, 0x75, 0x65, 0x42, 0x79, 0x50, 0x61, 0x72, 0x74, 0x69, 0x74, 0x69, 0x6f,
	0x6e, 0x1a, 0x6a, 0x0a, 0x08, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x12, 0x0a,
	0x04, 0x68, 0x61, 0x73, 0x68, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x68, 0x61, 0x73,
	0x68, 0x12, 0x2e, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32,
	0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75,
	0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x04, 0x64, 0x61, 0x74,
	0x65, 0x12, 0x1a, 0x0a, 0x08, 0x72, 0x65, 0x76, 0x65, 0x72, 0x74, 0x65, 0x64, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x08, 0x72, 0x65, 0x76, 0x65, 0x72, 0x74, 0x65, 0x64, 0x42, 0x06, 0x0a,
	0x04, 0x64, 0x61, 0x74, 0x61, 0x42, 0x2e, 0x5a, 0x2c, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x73, 0x65, 0x63, 0x75, 0x72, 0x69, 0x74, 0x79, 0x2d, 0x74, 0x6f, 0x6b,
	0x65, 0x6e, 0x2f, 0x63, 0x6f, 0x72, 0x65, 0x2f, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x2f, 0x73,
	0x63, 0x68, 0x65, 0x6d, 0x61, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_schema_transaction_proto_rawDescOnce sync.Once
	file_schema_transaction_proto_rawDescData = file_schema_transaction_proto_rawDesc
)

func file_schema_transaction_proto_rawDescGZIP() []byte {
	file_schema_transaction_proto_rawDescOnce.Do(func() {
		file_schema_transaction_proto_rawDescData = protoimpl.X.CompressGZIP(file_schema_transaction_proto_rawDescData)
	})
	return file_schema_transaction_proto_rawDescData
}

var file_schema_transaction_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_schema_transaction_proto_goTypes = []interface{}{
	(*DeployNewSecurityToken)(nil), // 0: transaction.DeployNewSecurityToken
	(*Transfer)(nil),               // 1: transaction.Transfer
	(*IssueByPartition)(nil),       // 2: transaction.IssueByPartition
	(*Transaction)(nil),            // 3: transaction.Transaction
	(*Transaction_Metadata)(nil),   // 4: transaction.Transaction.Metadata
	(*SecurityToken_Metadata)(nil), // 5: token.SecurityToken.Metadata
	(*timestamppb.Timestamp)(nil),  // 6: google.protobuf.Timestamp
}
var file_schema_transaction_proto_depIdxs = []int32{
	5, // 0: transaction.DeployNewSecurityToken.metadata:type_name -> token.SecurityToken.Metadata
	4, // 1: transaction.Transaction.metadata:type_name -> transaction.Transaction.Metadata
	0, // 2: transaction.Transaction.deployNewSecurityToken:type_name -> transaction.DeployNewSecurityToken
	1, // 3: transaction.Transaction.transfer:type_name -> transaction.Transfer
	2, // 4: transaction.Transaction.issueByPartition:type_name -> transaction.IssueByPartition
	6, // 5: transaction.Transaction.Metadata.date:type_name -> google.protobuf.Timestamp
	6, // [6:6] is the sub-list for method output_type
	6, // [6:6] is the sub-list for method input_type
	6, // [6:6] is the sub-list for extension type_name
	6, // [6:6] is the sub-list for extension extendee
	0, // [0:6] is the sub-list for field type_name
}

func init() { file_schema_transaction_proto_init() }
func file_schema_transaction_proto_init() {
	if File_schema_transaction_proto != nil {
		return
	}
	file_schema_token_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_schema_transaction_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*DeployNewSecurityToken); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_schema_transaction_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Transfer); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_schema_transaction_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*IssueByPartition); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_schema_transaction_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Transaction); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_schema_transaction_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Transaction_Metadata); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	file_schema_transaction_proto_msgTypes[3].OneofWrappers = []interface{}{
		(*Transaction_DeployNewSecurityToken)(nil),
		(*Transaction_Transfer)(nil),
		(*Transaction_IssueByPartition)(nil),
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_schema_transaction_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_schema_transaction_proto_goTypes,
		DependencyIndexes: file_schema_transaction_proto_depIdxs,
		MessageInfos:      file_schema_transaction_proto_msgTypes,
	}.Build()
	File_schema_transaction_proto = out.File
	file_schema_transaction_proto_rawDesc = nil
	file_schema_transaction_proto_goTypes = nil
	file_schema_transaction_proto_depIdxs = nil
}

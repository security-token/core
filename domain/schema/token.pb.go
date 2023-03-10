// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.1
// 	protoc        v3.20.3
// source: schema/token.proto

package schema

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type SecurityToken struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Address     string                  `protobuf:"bytes,1,opt,name=address,proto3" json:"address,omitempty"`
	Issuer      string                  `protobuf:"bytes,2,opt,name=issuer,proto3" json:"issuer,omitempty"`
	Name        string                  `protobuf:"bytes,3,opt,name=name,proto3" json:"name,omitempty"`
	Symbol      string                  `protobuf:"bytes,4,opt,name=symbol,proto3" json:"symbol,omitempty"`
	Granularity uint64                  `protobuf:"varint,5,opt,name=granularity,proto3" json:"granularity,omitempty"`
	Cap         uint64                  `protobuf:"varint,6,opt,name=cap,proto3" json:"cap,omitempty"`
	TotalSupply uint64                  `protobuf:"varint,7,opt,name=totalSupply,proto3" json:"totalSupply,omitempty"`
	Metadata    *SecurityToken_Metadata `protobuf:"bytes,10,opt,name=metadata,proto3" json:"metadata,omitempty"`
}

func (x *SecurityToken) Reset() {
	*x = SecurityToken{}
	if protoimpl.UnsafeEnabled {
		mi := &file_schema_token_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SecurityToken) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SecurityToken) ProtoMessage() {}

func (x *SecurityToken) ProtoReflect() protoreflect.Message {
	mi := &file_schema_token_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SecurityToken.ProtoReflect.Descriptor instead.
func (*SecurityToken) Descriptor() ([]byte, []int) {
	return file_schema_token_proto_rawDescGZIP(), []int{0}
}

func (x *SecurityToken) GetAddress() string {
	if x != nil {
		return x.Address
	}
	return ""
}

func (x *SecurityToken) GetIssuer() string {
	if x != nil {
		return x.Issuer
	}
	return ""
}

func (x *SecurityToken) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *SecurityToken) GetSymbol() string {
	if x != nil {
		return x.Symbol
	}
	return ""
}

func (x *SecurityToken) GetGranularity() uint64 {
	if x != nil {
		return x.Granularity
	}
	return 0
}

func (x *SecurityToken) GetCap() uint64 {
	if x != nil {
		return x.Cap
	}
	return 0
}

func (x *SecurityToken) GetTotalSupply() uint64 {
	if x != nil {
		return x.TotalSupply
	}
	return 0
}

func (x *SecurityToken) GetMetadata() *SecurityToken_Metadata {
	if x != nil {
		return x.Metadata
	}
	return nil
}

type Issuer struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Address  string           `protobuf:"bytes,1,opt,name=address,proto3" json:"address,omitempty"`
	Metadata *Issuer_Metadata `protobuf:"bytes,10,opt,name=metadata,proto3" json:"metadata,omitempty"`
}

func (x *Issuer) Reset() {
	*x = Issuer{}
	if protoimpl.UnsafeEnabled {
		mi := &file_schema_token_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Issuer) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Issuer) ProtoMessage() {}

func (x *Issuer) ProtoReflect() protoreflect.Message {
	mi := &file_schema_token_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Issuer.ProtoReflect.Descriptor instead.
func (*Issuer) Descriptor() ([]byte, []int) {
	return file_schema_token_proto_rawDescGZIP(), []int{1}
}

func (x *Issuer) GetAddress() string {
	if x != nil {
		return x.Address
	}
	return ""
}

func (x *Issuer) GetMetadata() *Issuer_Metadata {
	if x != nil {
		return x.Metadata
	}
	return nil
}

type Document struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Token    string             `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
	Name     string             `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Uri      string             `protobuf:"bytes,3,opt,name=uri,proto3" json:"uri,omitempty"`
	Hash     string             `protobuf:"bytes,4,opt,name=hash,proto3" json:"hash,omitempty"`
	Metadata *Document_Metadata `protobuf:"bytes,10,opt,name=metadata,proto3" json:"metadata,omitempty"`
}

func (x *Document) Reset() {
	*x = Document{}
	if protoimpl.UnsafeEnabled {
		mi := &file_schema_token_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Document) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Document) ProtoMessage() {}

func (x *Document) ProtoReflect() protoreflect.Message {
	mi := &file_schema_token_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Document.ProtoReflect.Descriptor instead.
func (*Document) Descriptor() ([]byte, []int) {
	return file_schema_token_proto_rawDescGZIP(), []int{2}
}

func (x *Document) GetToken() string {
	if x != nil {
		return x.Token
	}
	return ""
}

func (x *Document) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Document) GetUri() string {
	if x != nil {
		return x.Uri
	}
	return ""
}

func (x *Document) GetHash() string {
	if x != nil {
		return x.Hash
	}
	return ""
}

func (x *Document) GetMetadata() *Document_Metadata {
	if x != nil {
		return x.Metadata
	}
	return nil
}

type Partition struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Token    string              `protobuf:"bytes,1,opt,name=token,proto3" json:"token,omitempty"`
	Id       string              `protobuf:"bytes,2,opt,name=id,proto3" json:"id,omitempty"`
	Modules  []string            `protobuf:"bytes,3,rep,name=modules,proto3" json:"modules,omitempty"`
	Metadata *Partition_Metadata `protobuf:"bytes,10,opt,name=metadata,proto3" json:"metadata,omitempty"`
}

func (x *Partition) Reset() {
	*x = Partition{}
	if protoimpl.UnsafeEnabled {
		mi := &file_schema_token_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Partition) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Partition) ProtoMessage() {}

func (x *Partition) ProtoReflect() protoreflect.Message {
	mi := &file_schema_token_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Partition.ProtoReflect.Descriptor instead.
func (*Partition) Descriptor() ([]byte, []int) {
	return file_schema_token_proto_rawDescGZIP(), []int{3}
}

func (x *Partition) GetToken() string {
	if x != nil {
		return x.Token
	}
	return ""
}

func (x *Partition) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *Partition) GetModules() []string {
	if x != nil {
		return x.Modules
	}
	return nil
}

func (x *Partition) GetMetadata() *Partition_Metadata {
	if x != nil {
		return x.Metadata
	}
	return nil
}

type SecurityToken_Metadata struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Logo string `protobuf:"bytes,1,opt,name=logo,proto3" json:"logo,omitempty"`
}

func (x *SecurityToken_Metadata) Reset() {
	*x = SecurityToken_Metadata{}
	if protoimpl.UnsafeEnabled {
		mi := &file_schema_token_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SecurityToken_Metadata) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SecurityToken_Metadata) ProtoMessage() {}

func (x *SecurityToken_Metadata) ProtoReflect() protoreflect.Message {
	mi := &file_schema_token_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SecurityToken_Metadata.ProtoReflect.Descriptor instead.
func (*SecurityToken_Metadata) Descriptor() ([]byte, []int) {
	return file_schema_token_proto_rawDescGZIP(), []int{0, 0}
}

func (x *SecurityToken_Metadata) GetLogo() string {
	if x != nil {
		return x.Logo
	}
	return ""
}

type Issuer_Metadata struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name        string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Logo        string `protobuf:"bytes,2,opt,name=logo,proto3" json:"logo,omitempty"`
	BgImage     string `protobuf:"bytes,3,opt,name=bgImage,proto3" json:"bgImage,omitempty"`
	Description string `protobuf:"bytes,4,opt,name=description,proto3" json:"description,omitempty"`
}

func (x *Issuer_Metadata) Reset() {
	*x = Issuer_Metadata{}
	if protoimpl.UnsafeEnabled {
		mi := &file_schema_token_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Issuer_Metadata) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Issuer_Metadata) ProtoMessage() {}

func (x *Issuer_Metadata) ProtoReflect() protoreflect.Message {
	mi := &file_schema_token_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Issuer_Metadata.ProtoReflect.Descriptor instead.
func (*Issuer_Metadata) Descriptor() ([]byte, []int) {
	return file_schema_token_proto_rawDescGZIP(), []int{1, 0}
}

func (x *Issuer_Metadata) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Issuer_Metadata) GetLogo() string {
	if x != nil {
		return x.Logo
	}
	return ""
}

func (x *Issuer_Metadata) GetBgImage() string {
	if x != nil {
		return x.BgImage
	}
	return ""
}

func (x *Issuer_Metadata) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

type Document_Metadata struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Icon string `protobuf:"bytes,1,opt,name=icon,proto3" json:"icon,omitempty"`
}

func (x *Document_Metadata) Reset() {
	*x = Document_Metadata{}
	if protoimpl.UnsafeEnabled {
		mi := &file_schema_token_proto_msgTypes[6]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Document_Metadata) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Document_Metadata) ProtoMessage() {}

func (x *Document_Metadata) ProtoReflect() protoreflect.Message {
	mi := &file_schema_token_proto_msgTypes[6]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Document_Metadata.ProtoReflect.Descriptor instead.
func (*Document_Metadata) Descriptor() ([]byte, []int) {
	return file_schema_token_proto_rawDescGZIP(), []int{2, 0}
}

func (x *Document_Metadata) GetIcon() string {
	if x != nil {
		return x.Icon
	}
	return ""
}

type Partition_Metadata struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Name       string      `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
	Properties []*Property `protobuf:"bytes,2,rep,name=properties,proto3" json:"properties,omitempty"`
}

func (x *Partition_Metadata) Reset() {
	*x = Partition_Metadata{}
	if protoimpl.UnsafeEnabled {
		mi := &file_schema_token_proto_msgTypes[7]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Partition_Metadata) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Partition_Metadata) ProtoMessage() {}

func (x *Partition_Metadata) ProtoReflect() protoreflect.Message {
	mi := &file_schema_token_proto_msgTypes[7]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Partition_Metadata.ProtoReflect.Descriptor instead.
func (*Partition_Metadata) Descriptor() ([]byte, []int) {
	return file_schema_token_proto_rawDescGZIP(), []int{3, 0}
}

func (x *Partition_Metadata) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *Partition_Metadata) GetProperties() []*Property {
	if x != nil {
		return x.Properties
	}
	return nil
}

var File_schema_token_proto protoreflect.FileDescriptor

var file_schema_token_proto_rawDesc = []byte{
	0x0a, 0x12, 0x73, 0x63, 0x68, 0x65, 0x6d, 0x61, 0x2f, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x1a, 0x13, 0x73, 0x63, 0x68,
	0x65, 0x6d, 0x61, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x22, 0x9e, 0x02, 0x0a, 0x0d, 0x53, 0x65, 0x63, 0x75, 0x72, 0x69, 0x74, 0x79, 0x54, 0x6f, 0x6b,
	0x65, 0x6e, 0x12, 0x18, 0x0a, 0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x16, 0x0a, 0x06,
	0x69, 0x73, 0x73, 0x75, 0x65, 0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x69, 0x73,
	0x73, 0x75, 0x65, 0x72, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x79, 0x6d, 0x62,
	0x6f, 0x6c, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x79, 0x6d, 0x62, 0x6f, 0x6c,
	0x12, 0x20, 0x0a, 0x0b, 0x67, 0x72, 0x61, 0x6e, 0x75, 0x6c, 0x61, 0x72, 0x69, 0x74, 0x79, 0x18,
	0x05, 0x20, 0x01, 0x28, 0x04, 0x52, 0x0b, 0x67, 0x72, 0x61, 0x6e, 0x75, 0x6c, 0x61, 0x72, 0x69,
	0x74, 0x79, 0x12, 0x10, 0x0a, 0x03, 0x63, 0x61, 0x70, 0x18, 0x06, 0x20, 0x01, 0x28, 0x04, 0x52,
	0x03, 0x63, 0x61, 0x70, 0x12, 0x20, 0x0a, 0x0b, 0x74, 0x6f, 0x74, 0x61, 0x6c, 0x53, 0x75, 0x70,
	0x70, 0x6c, 0x79, 0x18, 0x07, 0x20, 0x01, 0x28, 0x04, 0x52, 0x0b, 0x74, 0x6f, 0x74, 0x61, 0x6c,
	0x53, 0x75, 0x70, 0x70, 0x6c, 0x79, 0x12, 0x39, 0x0a, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61,
	0x74, 0x61, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1d, 0x2e, 0x74, 0x6f, 0x6b, 0x65, 0x6e,
	0x2e, 0x53, 0x65, 0x63, 0x75, 0x72, 0x69, 0x74, 0x79, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x2e, 0x4d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x52, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74,
	0x61, 0x1a, 0x1e, 0x0a, 0x08, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x12, 0x0a,
	0x04, 0x6c, 0x6f, 0x67, 0x6f, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6c, 0x6f, 0x67,
	0x6f, 0x22, 0xc6, 0x01, 0x0a, 0x06, 0x49, 0x73, 0x73, 0x75, 0x65, 0x72, 0x12, 0x18, 0x0a, 0x07,
	0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x61,
	0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x32, 0x0a, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61,
	0x74, 0x61, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x16, 0x2e, 0x74, 0x6f, 0x6b, 0x65, 0x6e,
	0x2e, 0x49, 0x73, 0x73, 0x75, 0x65, 0x72, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61,
	0x52, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x1a, 0x6e, 0x0a, 0x08, 0x4d, 0x65,
	0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6c, 0x6f,
	0x67, 0x6f, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6c, 0x6f, 0x67, 0x6f, 0x12, 0x18,
	0x0a, 0x07, 0x62, 0x67, 0x49, 0x6d, 0x61, 0x67, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x07, 0x62, 0x67, 0x49, 0x6d, 0x61, 0x67, 0x65, 0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63,
	0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64,
	0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x22, 0xb0, 0x01, 0x0a, 0x08, 0x44,
	0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x12, 0x0a,
	0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d,
	0x65, 0x12, 0x10, 0x0a, 0x03, 0x75, 0x72, 0x69, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03,
	0x75, 0x72, 0x69, 0x12, 0x12, 0x0a, 0x04, 0x68, 0x61, 0x73, 0x68, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x68, 0x61, 0x73, 0x68, 0x12, 0x34, 0x0a, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64,
	0x61, 0x74, 0x61, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x74, 0x6f, 0x6b, 0x65,
	0x6e, 0x2e, 0x44, 0x6f, 0x63, 0x75, 0x6d, 0x65, 0x6e, 0x74, 0x2e, 0x4d, 0x65, 0x74, 0x61, 0x64,
	0x61, 0x74, 0x61, 0x52, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x1a, 0x1e, 0x0a,
	0x08, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x12, 0x0a, 0x04, 0x69, 0x63, 0x6f,
	0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x69, 0x63, 0x6f, 0x6e, 0x22, 0xd4, 0x01,
	0x0a, 0x09, 0x50, 0x61, 0x72, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x14, 0x0a, 0x05, 0x74,
	0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x6f, 0x6b, 0x65,
	0x6e, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x02, 0x69,
	0x64, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x73, 0x18, 0x03, 0x20, 0x03,
	0x28, 0x09, 0x52, 0x07, 0x6d, 0x6f, 0x64, 0x75, 0x6c, 0x65, 0x73, 0x12, 0x35, 0x0a, 0x08, 0x6d,
	0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x19, 0x2e,
	0x74, 0x6f, 0x6b, 0x65, 0x6e, 0x2e, 0x50, 0x61, 0x72, 0x74, 0x69, 0x74, 0x69, 0x6f, 0x6e, 0x2e,
	0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x52, 0x08, 0x6d, 0x65, 0x74, 0x61, 0x64, 0x61,
	0x74, 0x61, 0x1a, 0x50, 0x0a, 0x08, 0x4d, 0x65, 0x74, 0x61, 0x64, 0x61, 0x74, 0x61, 0x12, 0x12,
	0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x12, 0x30, 0x0a, 0x0a, 0x70, 0x72, 0x6f, 0x70, 0x65, 0x72, 0x74, 0x69, 0x65, 0x73,
	0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2e,
	0x50, 0x72, 0x6f, 0x70, 0x65, 0x72, 0x74, 0x79, 0x52, 0x0a, 0x70, 0x72, 0x6f, 0x70, 0x65, 0x72,
	0x74, 0x69, 0x65, 0x73, 0x42, 0x2e, 0x5a, 0x2c, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x73, 0x65, 0x63, 0x75, 0x72, 0x69, 0x74, 0x79, 0x2d, 0x74, 0x6f, 0x6b, 0x65,
	0x6e, 0x2f, 0x63, 0x6f, 0x72, 0x65, 0x2f, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x2f, 0x73, 0x63,
	0x68, 0x65, 0x6d, 0x61, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_schema_token_proto_rawDescOnce sync.Once
	file_schema_token_proto_rawDescData = file_schema_token_proto_rawDesc
)

func file_schema_token_proto_rawDescGZIP() []byte {
	file_schema_token_proto_rawDescOnce.Do(func() {
		file_schema_token_proto_rawDescData = protoimpl.X.CompressGZIP(file_schema_token_proto_rawDescData)
	})
	return file_schema_token_proto_rawDescData
}

var file_schema_token_proto_msgTypes = make([]protoimpl.MessageInfo, 8)
var file_schema_token_proto_goTypes = []interface{}{
	(*SecurityToken)(nil),          // 0: token.SecurityToken
	(*Issuer)(nil),                 // 1: token.Issuer
	(*Document)(nil),               // 2: token.Document
	(*Partition)(nil),              // 3: token.Partition
	(*SecurityToken_Metadata)(nil), // 4: token.SecurityToken.Metadata
	(*Issuer_Metadata)(nil),        // 5: token.Issuer.Metadata
	(*Document_Metadata)(nil),      // 6: token.Document.Metadata
	(*Partition_Metadata)(nil),     // 7: token.Partition.Metadata
	(*Property)(nil),               // 8: common.Property
}
var file_schema_token_proto_depIdxs = []int32{
	4, // 0: token.SecurityToken.metadata:type_name -> token.SecurityToken.Metadata
	5, // 1: token.Issuer.metadata:type_name -> token.Issuer.Metadata
	6, // 2: token.Document.metadata:type_name -> token.Document.Metadata
	7, // 3: token.Partition.metadata:type_name -> token.Partition.Metadata
	8, // 4: token.Partition.Metadata.properties:type_name -> common.Property
	5, // [5:5] is the sub-list for method output_type
	5, // [5:5] is the sub-list for method input_type
	5, // [5:5] is the sub-list for extension type_name
	5, // [5:5] is the sub-list for extension extendee
	0, // [0:5] is the sub-list for field type_name
}

func init() { file_schema_token_proto_init() }
func file_schema_token_proto_init() {
	if File_schema_token_proto != nil {
		return
	}
	file_schema_common_proto_init()
	if !protoimpl.UnsafeEnabled {
		file_schema_token_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SecurityToken); i {
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
		file_schema_token_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Issuer); i {
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
		file_schema_token_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Document); i {
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
		file_schema_token_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Partition); i {
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
		file_schema_token_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SecurityToken_Metadata); i {
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
		file_schema_token_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Issuer_Metadata); i {
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
		file_schema_token_proto_msgTypes[6].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Document_Metadata); i {
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
		file_schema_token_proto_msgTypes[7].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Partition_Metadata); i {
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
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_schema_token_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   8,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_schema_token_proto_goTypes,
		DependencyIndexes: file_schema_token_proto_depIdxs,
		MessageInfos:      file_schema_token_proto_msgTypes,
	}.Build()
	File_schema_token_proto = out.File
	file_schema_token_proto_rawDesc = nil
	file_schema_token_proto_goTypes = nil
	file_schema_token_proto_depIdxs = nil
}

// Original file: /Users/dong/Desktop/master/src/protobuf/rpc/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Credentials as _message_Credentials, Credentials__Output as _message_Credentials__Output } from '../message/Credentials';
import type { LoginResult as _message_LoginResult, LoginResult__Output as _message_LoginResult__Output } from '../message/LoginResult';

export interface UserClient extends grpc.Client {
  Login(argument: _message_Credentials, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_message_LoginResult__Output>): grpc.ClientUnaryCall;
  Login(argument: _message_Credentials, metadata: grpc.Metadata, callback: grpc.requestCallback<_message_LoginResult__Output>): grpc.ClientUnaryCall;
  Login(argument: _message_Credentials, options: grpc.CallOptions, callback: grpc.requestCallback<_message_LoginResult__Output>): grpc.ClientUnaryCall;
  Login(argument: _message_Credentials, callback: grpc.requestCallback<_message_LoginResult__Output>): grpc.ClientUnaryCall;
  login(argument: _message_Credentials, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_message_LoginResult__Output>): grpc.ClientUnaryCall;
  login(argument: _message_Credentials, metadata: grpc.Metadata, callback: grpc.requestCallback<_message_LoginResult__Output>): grpc.ClientUnaryCall;
  login(argument: _message_Credentials, options: grpc.CallOptions, callback: grpc.requestCallback<_message_LoginResult__Output>): grpc.ClientUnaryCall;
  login(argument: _message_Credentials, callback: grpc.requestCallback<_message_LoginResult__Output>): grpc.ClientUnaryCall;
  
}

export interface UserHandlers extends grpc.UntypedServiceImplementation {
  Login: grpc.handleUnaryCall<_message_Credentials__Output, _message_LoginResult>;
  
}

export interface UserDefinition extends grpc.ServiceDefinition {
  Login: MethodDefinition<_message_Credentials, _message_LoginResult, _message_Credentials__Output, _message_LoginResult__Output>
}

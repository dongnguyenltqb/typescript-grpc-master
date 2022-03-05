// Original file: /Users/dong/Desktop/code/master/src/protobuf/rpc/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Credentials as _message_Credentials, Credentials__Output as _message_Credentials__Output } from '../message/Credentials';
import type { LoginResult as _message_LoginResult, LoginResult__Output as _message_LoginResult__Output } from '../message/LoginResult';
import type { LogoutRequest as _message_LogoutRequest, LogoutRequest__Output as _message_LogoutRequest__Output } from '../message/LogoutRequest';
import type { LogoutResponse as _message_LogoutResponse, LogoutResponse__Output as _message_LogoutResponse__Output } from '../message/LogoutResponse';

export interface UserClient extends grpc.Client {
  Login(argument: _message_Credentials, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_message_LoginResult__Output>): grpc.ClientUnaryCall;
  Login(argument: _message_Credentials, metadata: grpc.Metadata, callback: grpc.requestCallback<_message_LoginResult__Output>): grpc.ClientUnaryCall;
  Login(argument: _message_Credentials, options: grpc.CallOptions, callback: grpc.requestCallback<_message_LoginResult__Output>): grpc.ClientUnaryCall;
  Login(argument: _message_Credentials, callback: grpc.requestCallback<_message_LoginResult__Output>): grpc.ClientUnaryCall;
  login(argument: _message_Credentials, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_message_LoginResult__Output>): grpc.ClientUnaryCall;
  login(argument: _message_Credentials, metadata: grpc.Metadata, callback: grpc.requestCallback<_message_LoginResult__Output>): grpc.ClientUnaryCall;
  login(argument: _message_Credentials, options: grpc.CallOptions, callback: grpc.requestCallback<_message_LoginResult__Output>): grpc.ClientUnaryCall;
  login(argument: _message_Credentials, callback: grpc.requestCallback<_message_LoginResult__Output>): grpc.ClientUnaryCall;
  
  Logout(argument: _message_LogoutRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_message_LogoutResponse__Output>): grpc.ClientUnaryCall;
  Logout(argument: _message_LogoutRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_message_LogoutResponse__Output>): grpc.ClientUnaryCall;
  Logout(argument: _message_LogoutRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_message_LogoutResponse__Output>): grpc.ClientUnaryCall;
  Logout(argument: _message_LogoutRequest, callback: grpc.requestCallback<_message_LogoutResponse__Output>): grpc.ClientUnaryCall;
  logout(argument: _message_LogoutRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_message_LogoutResponse__Output>): grpc.ClientUnaryCall;
  logout(argument: _message_LogoutRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_message_LogoutResponse__Output>): grpc.ClientUnaryCall;
  logout(argument: _message_LogoutRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_message_LogoutResponse__Output>): grpc.ClientUnaryCall;
  logout(argument: _message_LogoutRequest, callback: grpc.requestCallback<_message_LogoutResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UserHandlers extends grpc.UntypedServiceImplementation {
  Login: grpc.handleUnaryCall<_message_Credentials__Output, _message_LoginResult>;
  
  Logout: grpc.handleUnaryCall<_message_LogoutRequest__Output, _message_LogoutResponse>;
  
}

export interface UserDefinition extends grpc.ServiceDefinition {
  Login: MethodDefinition<_message_Credentials, _message_LoginResult, _message_Credentials__Output, _message_LoginResult__Output>
  Logout: MethodDefinition<_message_LogoutRequest, _message_LogoutResponse, _message_LogoutRequest__Output, _message_LogoutResponse__Output>
}

// Original file: /home/dong/code/typescript-grpc-master/src/protobuf/rpc/user.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { Credentials as _message_Credentials, Credentials__Output as _message_Credentials__Output } from '../message/Credentials';
import type { LoginResponse as _message_LoginResponse, LoginResponse__Output as _message_LoginResponse__Output } from '../message/LoginResponse';
import type { LogoutRequest as _message_LogoutRequest, LogoutRequest__Output as _message_LogoutRequest__Output } from '../message/LogoutRequest';
import type { LogoutResponse as _message_LogoutResponse, LogoutResponse__Output as _message_LogoutResponse__Output } from '../message/LogoutResponse';
import type { SignUpRequest as _message_SignUpRequest, SignUpRequest__Output as _message_SignUpRequest__Output } from '../message/SignUpRequest';
import type { SignUpResponse as _message_SignUpResponse, SignUpResponse__Output as _message_SignUpResponse__Output } from '../message/SignUpResponse';

export interface UserClient extends grpc.Client {
  Login(argument: _message_Credentials, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_message_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _message_Credentials, metadata: grpc.Metadata, callback: grpc.requestCallback<_message_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _message_Credentials, options: grpc.CallOptions, callback: grpc.requestCallback<_message_LoginResponse__Output>): grpc.ClientUnaryCall;
  Login(argument: _message_Credentials, callback: grpc.requestCallback<_message_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _message_Credentials, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_message_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _message_Credentials, metadata: grpc.Metadata, callback: grpc.requestCallback<_message_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _message_Credentials, options: grpc.CallOptions, callback: grpc.requestCallback<_message_LoginResponse__Output>): grpc.ClientUnaryCall;
  login(argument: _message_Credentials, callback: grpc.requestCallback<_message_LoginResponse__Output>): grpc.ClientUnaryCall;
  
  Logout(argument: _message_LogoutRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_message_LogoutResponse__Output>): grpc.ClientUnaryCall;
  Logout(argument: _message_LogoutRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_message_LogoutResponse__Output>): grpc.ClientUnaryCall;
  Logout(argument: _message_LogoutRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_message_LogoutResponse__Output>): grpc.ClientUnaryCall;
  Logout(argument: _message_LogoutRequest, callback: grpc.requestCallback<_message_LogoutResponse__Output>): grpc.ClientUnaryCall;
  logout(argument: _message_LogoutRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_message_LogoutResponse__Output>): grpc.ClientUnaryCall;
  logout(argument: _message_LogoutRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_message_LogoutResponse__Output>): grpc.ClientUnaryCall;
  logout(argument: _message_LogoutRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_message_LogoutResponse__Output>): grpc.ClientUnaryCall;
  logout(argument: _message_LogoutRequest, callback: grpc.requestCallback<_message_LogoutResponse__Output>): grpc.ClientUnaryCall;
  
  SignUp(argument: _message_SignUpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_message_SignUpResponse__Output>): grpc.ClientUnaryCall;
  SignUp(argument: _message_SignUpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_message_SignUpResponse__Output>): grpc.ClientUnaryCall;
  SignUp(argument: _message_SignUpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_message_SignUpResponse__Output>): grpc.ClientUnaryCall;
  SignUp(argument: _message_SignUpRequest, callback: grpc.requestCallback<_message_SignUpResponse__Output>): grpc.ClientUnaryCall;
  signUp(argument: _message_SignUpRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_message_SignUpResponse__Output>): grpc.ClientUnaryCall;
  signUp(argument: _message_SignUpRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_message_SignUpResponse__Output>): grpc.ClientUnaryCall;
  signUp(argument: _message_SignUpRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_message_SignUpResponse__Output>): grpc.ClientUnaryCall;
  signUp(argument: _message_SignUpRequest, callback: grpc.requestCallback<_message_SignUpResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface UserHandlers extends grpc.UntypedServiceImplementation {
  Login: grpc.handleUnaryCall<_message_Credentials__Output, _message_LoginResponse>;
  
  Logout: grpc.handleUnaryCall<_message_LogoutRequest__Output, _message_LogoutResponse>;
  
  SignUp: grpc.handleUnaryCall<_message_SignUpRequest__Output, _message_SignUpResponse>;
  
}

export interface UserDefinition extends grpc.ServiceDefinition {
  Login: MethodDefinition<_message_Credentials, _message_LoginResponse, _message_Credentials__Output, _message_LoginResponse__Output>
  Logout: MethodDefinition<_message_LogoutRequest, _message_LogoutResponse, _message_LogoutRequest__Output, _message_LogoutResponse__Output>
  SignUp: MethodDefinition<_message_SignUpRequest, _message_SignUpResponse, _message_SignUpRequest__Output, _message_SignUpResponse__Output>
}

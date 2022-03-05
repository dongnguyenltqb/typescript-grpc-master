// Original file: /Users/dong/Desktop/code/master/src/protobuf/rpc/post.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreatePost as _message_CreatePost, CreatePost__Output as _message_CreatePost__Output } from '../message/CreatePost';
import type { CreatePostResult as _message_CreatePostResult, CreatePostResult__Output as _message_CreatePostResult__Output } from '../message/CreatePostResult';

export interface PostClient extends grpc.Client {
  Create(argument: _message_CreatePost, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_message_CreatePostResult__Output>): grpc.ClientUnaryCall;
  Create(argument: _message_CreatePost, metadata: grpc.Metadata, callback: grpc.requestCallback<_message_CreatePostResult__Output>): grpc.ClientUnaryCall;
  Create(argument: _message_CreatePost, options: grpc.CallOptions, callback: grpc.requestCallback<_message_CreatePostResult__Output>): grpc.ClientUnaryCall;
  Create(argument: _message_CreatePost, callback: grpc.requestCallback<_message_CreatePostResult__Output>): grpc.ClientUnaryCall;
  create(argument: _message_CreatePost, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_message_CreatePostResult__Output>): grpc.ClientUnaryCall;
  create(argument: _message_CreatePost, metadata: grpc.Metadata, callback: grpc.requestCallback<_message_CreatePostResult__Output>): grpc.ClientUnaryCall;
  create(argument: _message_CreatePost, options: grpc.CallOptions, callback: grpc.requestCallback<_message_CreatePostResult__Output>): grpc.ClientUnaryCall;
  create(argument: _message_CreatePost, callback: grpc.requestCallback<_message_CreatePostResult__Output>): grpc.ClientUnaryCall;
  
}

export interface PostHandlers extends grpc.UntypedServiceImplementation {
  Create: grpc.handleUnaryCall<_message_CreatePost__Output, _message_CreatePostResult>;
  
}

export interface PostDefinition extends grpc.ServiceDefinition {
  Create: MethodDefinition<_message_CreatePost, _message_CreatePostResult, _message_CreatePost__Output, _message_CreatePostResult__Output>
}

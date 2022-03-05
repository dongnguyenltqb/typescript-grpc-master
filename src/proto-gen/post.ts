import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { PostClient as _rpc_PostClient, PostDefinition as _rpc_PostDefinition } from './rpc/Post';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  message: {
    CreatePost: MessageTypeDefinition
    CreatePostResult: MessageTypeDefinition
  }
  rpc: {
    Post: SubtypeConstructor<typeof grpc.Client, _rpc_PostClient> & { service: _rpc_PostDefinition }
  }
}


import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { UserClient as _rpc_UserClient, UserDefinition as _rpc_UserDefinition } from './rpc/User';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  google: {
    protobuf: {
      Timestamp: MessageTypeDefinition
    }
  }
  message: {
    AccessToken: MessageTypeDefinition
    Credentials: MessageTypeDefinition
    LoginResult: MessageTypeDefinition
  }
  rpc: {
    User: SubtypeConstructor<typeof grpc.Client, _rpc_UserClient> & { service: _rpc_UserDefinition }
  }
}


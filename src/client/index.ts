import * as grpc from "@grpc/grpc-js";
import { UserClient } from "../proto-gen/rpc/User";
import { PostClient } from "../proto-gen/rpc/Post";
import protoDescriptor from "../protoDescriptor";

const rpcDescriptor = protoDescriptor.rpc;

interface IMasterClient {
  UserClient: UserClient;
  PostClient: PostClient;
}

function NewMasterClient(addr: string): IMasterClient {
  return {
    UserClient: new rpcDescriptor.User(addr, grpc.credentials.createInsecure()),
    PostClient: new rpcDescriptor.Post(addr, grpc.credentials.createInsecure()),
  };
}

export { NewMasterClient, IMasterClient };

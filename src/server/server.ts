import { Server, ServerCredentials } from "@grpc/grpc-js";

import protoDescriptor from "../definition";
import { postHandler } from "./post";
import { userHandler } from "./user";

// The protoDescriptor object has the full package hierarchy
const rpcDescriptor = protoDescriptor.rpc;

const addr = "0.0.0.0:5000";
var grpcServer: Server = new Server({});
grpcServer.addService(rpcDescriptor.User.service, userHandler);
grpcServer.addService(rpcDescriptor.Post.service, postHandler);


grpcServer.bindAsync(
  addr,
  ServerCredentials.createInsecure(),
  (err: Error | null, bindPort: number) => {
    if (err) {
      throw err;
    }
    console.log("Listening on port:", bindPort);
    grpcServer.start();
  }
);

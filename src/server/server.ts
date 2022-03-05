import { Server, ServerCredentials } from "@grpc/grpc-js";

import { userHandler } from "./user";
import protoDescriptor from "../protoDescriptor";

const NewMasterServer = (addr: string) =>
  new Promise<Server>((solved, reject) => {
    const grpcServer: Server = new Server({});
    // Register server handler.
    grpcServer.addService(protoDescriptor.rpc.User.service, userHandler);

    // Bind and listen for imcomming request.
    grpcServer.bindAsync(
      addr,
      ServerCredentials.createInsecure(),
      (err: Error | null) => {
        if (err) {
          reject(err);
        }
        grpcServer.start();
        solved(grpcServer);
      }
    );
  });

export { NewMasterServer };

import { Server, ServerCredentials } from "@grpc/grpc-js";

import { userHandler } from "./user";
import protoDescriptor from "../protoDescriptor";
import { postHandler } from "./post";

class Master {
  private instance: Server;
  constructor() {
    this.instance = new Server({});
    this.register();
  }
  private register() {
    this.instance.addService(protoDescriptor.rpc.User.service, userHandler);
    this.instance.addService(protoDescriptor.rpc.Post.service, postHandler);
  }
  public bind(addr: string): Promise<void> {
    console.log("starting server");
    return new Promise((solved, rejected) => {
      this.instance.bindAsync(
        addr,
        ServerCredentials.createInsecure(),
        (err: Error | null) => {
          if (err) {
            rejected(err);
          }
          this.instance.start();
          console.log("started the server", addr);
          solved();
        }
      );
    });
  }
}

export default Master;

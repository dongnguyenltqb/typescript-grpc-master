import { ServiceError } from "@grpc/grpc-js";
import "./server/server";
export { newMasterClient } from "./client/client";

import { IMasterClient, newMasterClient } from "./client/client";
import { LoginResult__Output } from "./proto-gen/message/LoginResult";

const masterClient: IMasterClient = newMasterClient("localhost:5000");

setTimeout(() => {
  masterClient.UserClient.Login(
    {
      username: "dong",
      password: "123",
    },
    (err: ServiceError, response: LoginResult__Output) => {
      console.log({ err, response });
    }
  );
}, 2000);

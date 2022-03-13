import { ServiceError } from "@grpc/grpc-js";
import { NewMasterClient } from "../client";
import { SignUpResponse } from "../proto-gen/message/SignUpResponse";

async function main() {
  console.log("test is running");
  const client = NewMasterClient("localhost:8080");
  client.UserClient.SignUp(
    {
      username: "dong.nguyen@spiritlabs.co",
      password: "123456",
    },
    function (error: ServiceError, value: SignUpResponse) {
      console.log({ error, value });
    }
  );
}

main();

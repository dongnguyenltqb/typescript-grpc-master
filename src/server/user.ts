import { sendUnaryData, Server, ServerUnaryCall } from "@grpc/grpc-js";
import { Credentials } from "../proto-gen/message/Credentials";
import { LoginResult } from "../proto-gen/message/LoginResult";
import { LogoutRequest } from "../proto-gen/message/LogoutRequest";
import { LogoutResponse } from "../proto-gen/message/LogoutResponse";
import { UserHandlers } from "../proto-gen/rpc/User";

const userHandler: UserHandlers = {
  Login(
    call: ServerUnaryCall<Credentials, LoginResult>,
    callback: sendUnaryData<LoginResult>
  ) {
    try {
      // console.log(call.request.username, call.request.password);
      callback(null, {
        ok: true,
        error: null,
        data: {
          access_token: "herer is access token",
        },
      });
    } catch (error) {
      callback(error);
    }
  },
  Logout(
    call: ServerUnaryCall<LogoutRequest, LoginResult>,
    callback: sendUnaryData<LogoutResponse>
  ) {
    // console.log(call.request.access_token);
    callback(null, {
      ok: true,
    });
  },
};

export { userHandler };

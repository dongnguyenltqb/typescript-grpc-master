import { ServerUnaryCall } from "@grpc/grpc-js";
import { wrapper } from "./wraper";

import { UserModel } from "../models/users";
import { Credentials } from "../proto-gen/message/Credentials";
import { LoginResponse } from "../proto-gen/message/LoginResponse";
import { LogoutRequest } from "../proto-gen/message/LogoutRequest";
import { LogoutResponse } from "../proto-gen/message/LogoutResponse";
import { SignUpRequest } from "../proto-gen/message/SignUpRequest";
import { SignUpResponse } from "../proto-gen/message/SignUpResponse";
import { UserHandlers } from "../proto-gen/rpc/User";

async function SignUp(
  call: ServerUnaryCall<SignUpRequest, SignUpResponse>
): Promise<SignUpResponse> {
  const { username, password } = call.request;
  const user = await UserModel.getUserByUsername(username);
  if (user) throw new Error("User with username was existed.");
  const response = await UserModel.create({ username, password });
  return {
    user: response,
  };
}

async function Login(
  call: ServerUnaryCall<Credentials, LoginResponse>
): Promise<LoginResponse> {
  const { username, password } = call.request;
  const user = await UserModel.getUserByUsername(username);
  if (!user) throw new Error("User not found.");
  if (user.password !== password) throw new Error("The password is wroong");
  return {
    ok: true,
    error: null,
    data: {
      access_token: `token: ${username}`,
    },
  };
}

async function Logout(
  call: ServerUnaryCall<LogoutRequest, LogoutResponse>
): Promise<LogoutResponse> {
  return {
    ok: true,
  };
}

const userHandler: UserHandlers = {
  SignUp: wrapper(SignUp),
  Login: wrapper(Login),
  Logout: wrapper(Logout),
};

export { userHandler };

import { ServiceError } from "@grpc/grpc-js";
import { describe } from "mocha";
import { expect } from "chai";

import Master from "../server/server";
import { ping } from "../models";
import { callWrapper, IMasterClient, NewMasterClient } from "../client";
import { SignUpResponse } from "../proto-gen/message/SignUpResponse";
import { SignUpRequest } from "../proto-gen/message/SignUpRequest";

describe("user.test.ts", async function () {
  const addr = "localhost:5078";

  let client: IMasterClient;

  this.beforeAll(async function () {
    await ping();
    const server = new Master();
    await server.bind(addr);
    client = NewMasterClient(addr);
  });

  this.afterAll(function (done) {
    done();
  });

  describe("singup", function () {
    it("should signup successfully", function (done) {
      client.UserClient.SignUp(
        {
          username: Math.random().toString().slice(2, 13) + "@abc.com",
          password: "here is the password",
        },
        (err: ServiceError, response: SignUpResponse) => {
          expect(err, "Error must be null").to.be.equal(null);
          expect(response.user.id, "Response a valid user id").to.gt(0);
          done();
        }
      );
    });

    it("should signup fail", async function () {
      const response = await callWrapper<SignUpRequest, SignUpResponse>(
        client.UserClient.SignUp.bind(client.UserClient),
        {
          username: null,
          password: "here is the password",
        }
      );
    });
  });
});

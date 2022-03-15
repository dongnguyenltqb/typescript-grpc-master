import { ServiceError } from "@grpc/grpc-js";
import { describe } from "mocha";
import { expect } from "chai";

import { ping } from "../models";
import { IMasterClient, NewMasterClient } from "../client";
import { NewMasterServer } from "../server/server";
import { SignUpResponse } from "../proto-gen/message/SignUpResponse";

describe("user.test.ts", async function () {
  const addr = "localhost:5078";

  let client: IMasterClient;

  this.beforeAll(async function () {
    // connect to the database
    await ping();
    await NewMasterServer(addr);
    client = NewMasterClient(addr);
    console.log("Created server/client");
  });

  this.afterAll(function (done) {
    done();
  });

  describe("singup", function () {
    it("should signup successfully", function (done) {
      client.UserClient.SignUp(
        {
          username: Math.random().toString().slice(2, 13) + "@example.com",
          password: "here is the password",
        },
        (err: ServiceError, response: SignUpResponse) => {
          expect(err, "Error must be null").to.be.equal(null);
          expect(response.user.id, "Response a valid user id").to.gt(0);
          done();
        }
      );
    });

    it("should signup fail", function (done) {
      client.UserClient.SignUp(
        {
          // username: "asds",
          password: "here is the password",
        },
        (err: ServiceError, _: SignUpResponse) => {
          expect(err).to.not.equal(null, "must have response error");
          done();
        }
      );
    });
  });
});

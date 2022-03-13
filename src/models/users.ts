import { SignUpRequest } from "../proto-gen/message/SignUpRequest";
import { User } from "../proto-gen/message/User";
import knex from "./index";

export class UserModel {
  static db = knex;
  static async getUserByUsername(username: string): Promise<User> {
    return await this.db<User>("users").where("username", username).first();
  }
  static async create(user: SignUpRequest): Promise<User> {
    return (await this.db<User>("users").insert(user, "*"))[0];
  }
}

import "dotenv/config";
import config from "./config";
import { ping } from "./models";
import Master from "./server/server";

async function main() {
  await ping();
  console.log("connected to database");
  const { addr } = config;
  const server = new Master();
  await server.bind(addr);
}

main();

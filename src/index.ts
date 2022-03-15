import "dotenv/config";
import config from "./config";
import { ping } from "./models";
import { NewMasterServer } from "./server/server";

async function main() {
  await ping();
  const { addr } = config;
  await NewMasterServer(addr);
}

main();

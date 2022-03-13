import "dotenv/config";
import config from "./config";
import { NewMasterServer } from "./server/server";

async function main() {
  const { addr } = config;
  await NewMasterServer(addr);
}

main();

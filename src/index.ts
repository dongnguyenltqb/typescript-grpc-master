import "dotenv/config";
import { NewMasterServer } from "./server/server";

async function main() {
  const ADDR = process.env.ADDR || "localhost:5000";
  await NewMasterServer(ADDR);
  // console.log("Server is listening on ", ADDR);
}

main();

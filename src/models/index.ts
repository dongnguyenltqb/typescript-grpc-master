import Knex from "knex";
import config from "../config";

const knex = Knex({
  client: "pg",
  version: "7.2",
  connection: {
    host: config.db_host,
    port: config.db_port as number,
    // user: "docker",
    // password: "docker",
    database: config.db_name,
  },
});

export function ping(): Promise<number> {
  return knex.raw<number>(`SELECT 1`).timeout(1000);
}

export default knex;

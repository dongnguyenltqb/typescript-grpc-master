import Knex from "knex";
const knex = Knex({
  client: "pg",
  version: "7.2",
  connection: {
    port: 5555,
    host: "localhost",
    user: "docker",
    password: "docker",
    database: "docker",
  },
});

export function ping(): Promise<number> {
  return knex.raw<number>(`SELECT 1`).timeout(1000);
}

export default knex;

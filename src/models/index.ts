import Knex from "knex";
const knex = Knex({
  client: "pg",
  version: "7.2",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    database: "learn",
  },
});

export default knex;

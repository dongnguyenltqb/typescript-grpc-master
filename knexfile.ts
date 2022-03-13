import type { Knex } from "knex";
import path from "path";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "postgresql",
    connection: {
      database: "learn",
    },
    pool: {
      min: 1,
      max: 1,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: path.join(__dirname, "./src/database/migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "./src/database/seeds"),
    },
  },
};

module.exports = config;

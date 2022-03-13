import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  if (!knex.schema.hasTable("users")) {
    await knex.schema.createTable("users", function (table) {
      table.increments("id", {
        primaryKey: true,
      });
      table.string("username").notNullable();
      table.string("password");
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("users");
}

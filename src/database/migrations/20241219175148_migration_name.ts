import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable("author", (table) => {
    table.increments("id").primary().notNullable();
    table.string("name").notNullable();
    table.string("key").notNullable().unique();
    table.string("type").notNullable();
    table.string("birth_date");
    table.string("top_work").notNullable();
    table.integer("work_count").notNullable();
    table.integer("version").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable("author");
}

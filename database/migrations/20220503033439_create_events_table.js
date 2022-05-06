/**
 * @param { import("knex").Knex } knex
 * @returns {import("knex").Knex.SchemaBuilder}
 */
exports.up = function (knex) {
  return knex.schema.createTable("events", function (table) {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.text("description");
    table.datetime("date").notNullable();
    table.timestamps(false, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { import("knex").Knex.SchemaBuilder }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("events");
};

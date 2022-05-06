/**
 * @param { import("knex").Knex } knex
 * @returns {import("knex").Knex.SchemaBuilder}
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", function (table) {
    table.string("username", 255).primary();
    table.string("password", 255).notNullable();
    table.boolean("is_admin").defaultTo(false);
    table.timestamps(false, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { import("knex").Knex.SchemaBuilder }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("users");
};

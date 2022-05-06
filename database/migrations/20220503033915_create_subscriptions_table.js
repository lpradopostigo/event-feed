/**
 * @param { import("knex").Knex } knex
 * @returns {import("knex").Knex.SchemaBuilder}
 */
exports.up = function (knex) {
  return knex.schema.createTable("subscriptions", function (table) {
    table.increments("id").primary();
    table.integer("event_id").unsigned();
    table.string("username");
    table.foreign("event_id").references("events.id");
    table.foreign("username").references("users.username");
    table.timestamps(false, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { import("knex").Knex.SchemaBuilder }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("subscriptions");
};

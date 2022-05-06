/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    { username: "brocolio", password: "brocolio", is_admin: true },
    { username: "brocolio1", password: "1" },
    { username: "brocolio2", password: "2" },
    { username: "brocolio3", password: "3" },
  ]);
};

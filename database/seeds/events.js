const { faker } = require("@faker-js/faker");

function dateToDatetime(date) {
  return date.toISOString().replace("Z", "").replace("T", " ");
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex("events").del();
  await knex("events").insert(
    [...Array(5).keys()].map(() => ({
      title: faker.company.bs(),
      description: faker.lorem.paragraph(5),
      date: dateToDatetime(
        faker.date.between(
          "2022-04-01T00:00:00.000Z",
          "2022-08-00T00:00:00.000Z"
        )
      ),
    }))
  );
};

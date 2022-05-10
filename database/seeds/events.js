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

  const events = [...Array(10).keys()].map(() => {
    const startDate = faker.date.soon(15);
    const endDate = faker.date.soon(1, startDate);
    return {
      title: faker.company.bs(),
      description: faker.lorem.paragraph(5),
      start_date: dateToDatetime(startDate),
      end_date: dateToDatetime(endDate),
    };
  });

  await knex("events").insert(events);
};

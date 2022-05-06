import database from "../../../database/database";
import { helper } from "../../../util/api";

export default async function handler(req, res) {
  const {
    query: { id },
  } = req;

  await helper(
    {
      GET: async () => {
        const event = await database("events").where({ id }).first();
        if (event) {
          res.status(200).send(event);
        } else {
          res.status(404).send({ message: "the event does not exists" });
        }
      },

      DELETE: async () => {
        const affectedRowsCount = await database("events").where({ id }).del();
        const deletionSuccessful = affectedRowsCount !== 0;

        if (deletionSuccessful) {
          res.status(200).send({ message: "event successfully deleted" });
        } else {
          res.status(404).send({ message: "the event does not exists" });
        }
      },
    },
    req,
    res
  );
}

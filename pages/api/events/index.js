import database from "../../../database/database";
import { helper } from "../../../util/api";
import { dateToDatetime } from "../../../util/format";

export default async function handler(req, res) {
  await helper(
    {
      GET: async () => {
        const events = await database("events").select();
        res.status(200).send(events);
      },
      POST: async () => {
        await database("events").insert({
          ...req.body,
          date: dateToDatetime(req.body.date),
        });
        res.status(201).send({ message: "event created successfully" });
      },
    },
    req,
    res
  );
}

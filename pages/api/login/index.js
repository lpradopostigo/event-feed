import database from "../../../database/database";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send();
    return;
  }

  const { username, password, register } = req.body;
  const users = await database("users").select(
    "username",
    "password",
    "is_admin"
  );

  if (register) {
    const userIsAvailable = !users.some((user) => user.username === username);

    if (userIsAvailable) {
      await database("users").insert({ username, password });
      res.status(201).send({ message: "register success" });
    } else {
      res.status(409).send({ message: "username already taken" });
    }
  } else {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      res.status(200).json({
        message: "login success",
        is_admin: user.is_admin,
      });
    } else {
      res.status(401).json({
        message: "invalid username or password",
      });
    }
  }
}

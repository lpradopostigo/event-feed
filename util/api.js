export async function helper(obj, req, res) {
  for (const [method, handler] of Object.entries(obj)) {
    if (method === req.method && typeof handler === "function") {
      await handler();
      return;
    }
  }

  res.status(405).send();
}

export function get(url, body) {
  return request(url, "GET", body);
}

export function post(url, body) {
  return request(url, "POST", body);
}

export function put(url, body) {
  return request(url, "PUT", body);
}

export function del(url, body) {
  return request(url, "DELETE", body);
}

async function request(url, method, body) {
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  return {
    ok: response.ok,
    method,
    status: response.status,
    url: response.url,
    body: JSON.parse(await response.text()),
  };
}

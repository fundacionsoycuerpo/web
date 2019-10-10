import events from "./_next.js";

export function get(req, res) {
  const content = JSON.stringify(events);
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  res.end(content);
}

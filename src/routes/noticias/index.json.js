import news from "./_news.js";

export function get(req, res) {
  const content = JSON.stringify(news);
  res.writeHead(200, {
    "Content-Type": "application/json"
  });
  res.end(content);
}

import news from '../data/_noticias';

export function get(req, res) {
  const content = JSON.stringify(news);
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(content);
}

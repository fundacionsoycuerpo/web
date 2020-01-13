import galleries from '../data/_galerias';

export function get(req, res) {
  const content = JSON.stringify(galleries);
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(content);
}

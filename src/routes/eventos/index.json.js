import events from '../data/_eventos';

export function get(req, res) {
  const content = JSON.stringify(events);
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(content);
}

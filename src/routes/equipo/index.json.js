import team from '../data/_equipo';

export function get(req, res) {
  const content = JSON.stringify(team);
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(content);
}

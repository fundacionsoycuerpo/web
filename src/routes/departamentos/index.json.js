import departments from '../data/_departamentos';

export function get(req, res) {
  const content = JSON.stringify(departments);
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(content);
}

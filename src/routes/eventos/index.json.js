import events from '../_data/_eventos';
import marked from 'marked';

export function get(req, res) {
  let evs = events.map((e) => {
    return { ...e, description: marked(e.description) };
  });
  const content = JSON.stringify(evs);
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.end(content);
}

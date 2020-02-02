export async function get(req, res) {
  const data = {
    flow: process.env.FLOW_URL
  };

  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  return res.end(JSON.stringify(data));
}

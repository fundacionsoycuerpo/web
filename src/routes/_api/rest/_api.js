const axios = require('axios').default;
const base = process.env.STRAPI_URL || 'http://localhost:1337';

const api = modelUrl => ({
  getAll: () => axios.get(`${base}/${modelUrl}`),
  getOne: identifier => axios.get(`${base}/${modelUrl}/${identifier}`),
  findMany: params =>
    axios.get(`${base}/${modelUrl}`, {
      params
    })
});

export default api;

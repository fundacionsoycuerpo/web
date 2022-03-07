import axios from 'axios';

const base = process.env['STRAPI_URL'] || 'http://localhost:1337';

export const api = (modelUrl) => ({
	getAll: () => axios.get(`${base}/${modelUrl}`),
	getOne: (identifier) => axios.get(`${base}/${modelUrl}/${identifier}`),
	findMany: (params) =>
		axios.get(`${base}/${modelUrl}`, {
			params
		})
});

export default api;

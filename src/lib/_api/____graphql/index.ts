import axios from 'axios';

const base = process.env['STRAPI_URL'] || 'http://localhost:1337';
export const queryData = (query, variables = {}) => {
	return axios({
		url: `${base}/graphql`,
		method: 'post',
		data: {
			query,
			variables
		}
	}).then((r) => r.data.data);
};

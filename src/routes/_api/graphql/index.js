const axios = require('axios').default;
const base = process.env.STRAPI_URL || 'http://localhost:1337'; // TODO: add en variable

const queryData = (query, variables = {}) =>
  axios({
    url: `${base}/graphql`,
    method: 'post',
    data: {
      query,
      variables
    }
  }).then(r => r.data.data);

export default queryData;

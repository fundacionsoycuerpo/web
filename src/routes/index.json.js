import getHomePageData from './_api/graphql/home.graphql';
import formatArticle from './_data/_helpers';

export async function get(req, res) {
  try {
    let data = await getHomePageData();
    data = {
      ...data,
      articles: data.articles.map(formatArticle),
    };

    res.writeHead(200, {
      'Content-Type': 'application/json',
    });
    return res.end(JSON.stringify(data));
  } catch (e) {
    res.writeHead(400, {
      'Content-Type': 'application/json',
    });
    return res.end();
  }
}

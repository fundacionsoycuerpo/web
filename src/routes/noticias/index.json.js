import getNewsPageData from '../_api/graphql/news.graphql';
import formatArticle from '../data/_helpers';

export async function get(req, res) {
  try {
    let data = await getNewsPageData();
    data = {
      ...data,
      articles: data.articles.map(formatArticle)
    };

    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(data));
  } catch (e) {
    res.writeHead(400, {
      'Content-Type': 'application/json'
    });
    return res.end();
  }
}

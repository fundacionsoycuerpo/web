import getDepartmentPageData from '../_api/graphql/department.graphql';
import formatArticle from '../data/_helpers';

export async function get(req, res) {
  try {
    let data = await getDepartmentPageData(req.params.slug);
    data = {
      department: {
        ...data.departmentBySlug,
        tag: {
          ...data.departmentBySlug.tag,
          articles: data.departmentBySlug.tag.articles.map(article =>
            formatArticle(article)
          )
        }
      }
    };

    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    return res.end(JSON.stringify(data));
  } catch (e) {
    res.writeHead(400, {
      'Content-Type': 'application/json'
    });
    return res.end();
  }
}

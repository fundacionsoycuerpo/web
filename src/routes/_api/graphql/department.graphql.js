import queryData from '.';

const getDepartmentPageData = slug => {
  const query = `query DepartmentPageData($slug: String!) {
    departmentBySlug(slug: $slug) {
        id
        name
        slug
        description
        manifest
        tag {
            name
            articles (sort: "published_at:desc" limit: 2) {
                published_at
                title
                content
                image {
                    url
                }
                gallery_url
                tags {
                    name
                    url
                }
            }
        }
    }
}`;

  return queryData(query, { slug });
};

export default getDepartmentPageData;

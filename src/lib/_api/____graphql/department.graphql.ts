import { queryData } from '.';

export const getDepartmentPageData = (slug) => {
	const departmentQuery = `query DepartmentPageData($slug: String!) {
    department: departmentBySlug(slug: $slug) {
      id
      name
      slug
      description
      manifest
      tag {
        name
      }
    }
  }`;

	const articlesQuery = `query DepartmentPageArticlesData ($name: String!) {
    articles (sort: "published_at:desc" limit: 2  where: { tags: { name: $name } }) {
      published_at
      title
      content
      media {
        image {
          url
        }
        caption
      }
      gallery_url
      tags {
        name
        url
      }
    }
  }`;

	// FIX_ME: Issue with nested relationships
	return queryData(departmentQuery, { slug }).then(({ department }) =>
		queryData(articlesQuery, {
			name: department.tag.name
		}).then(({ articles }) => ({ department, articles }))
	);
};

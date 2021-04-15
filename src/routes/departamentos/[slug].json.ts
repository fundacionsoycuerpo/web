import { getDepartmentPageData } from '$lib/_api/graphql/department.graphql';
import { formatArticle } from '$lib/_data/_helpers';

export async function get({ params }) {
	try {
		const data = await getDepartmentPageData(params.slug);
		const body = {
			...data,
			articles: data.articles.map(formatArticle)
		};

		return { body };
	} catch (e) {
		return { status: 400 };
	}
}

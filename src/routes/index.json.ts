import { getHomePageData } from '$lib/_api/graphql/home.graphql';
import { formatArticle } from '$lib/_data/_helpers';
export async function get({ params }) {
	try {
		const data = await getHomePageData();
		const body = {
			...data,
			articles: data.articles ? data.articles.map(formatArticle) : []
		};

		return {
			body
		};
	} catch (e) {
		return { status: 400 };
	}
}

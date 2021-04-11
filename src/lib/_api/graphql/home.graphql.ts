import { queryData } from '.';

export const getHomePageData = () => {
	const query = `query HomePageData {
    articles (sort:"published_at:desc" limit: 5) {
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

	return queryData(query);
	// return { articles: [] };
};

import { queryData } from '.';

export const getNewsPageData = () => {
	const query = `query NewsPageData {
    articles (sort:"published_at:desc") {
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
};

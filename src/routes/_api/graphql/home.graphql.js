import queryData from '.';

const getHomePageData = () => {
  const query = `query HomePageData {
    articles (sort:"published_at:desc" limit: 5) {
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
}`;

  return queryData(query);
};

export default getHomePageData;

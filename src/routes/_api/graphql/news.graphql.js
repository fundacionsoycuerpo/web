import queryData from '.';

const getNewsPageData = () => {
  const query = `query NewsPageData {
    articles (sort:"published_at:desc") {
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

export default getNewsPageData;

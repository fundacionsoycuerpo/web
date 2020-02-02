import queryData from '.';

const getTeamPageData = () => {
  const query = `query TeamPageData {
    members {
        name
        bio
        role
        email
        avatar {
          image {
              url
          }
          caption
        }
    }
}`;

  return queryData(query);
};

export default getTeamPageData;

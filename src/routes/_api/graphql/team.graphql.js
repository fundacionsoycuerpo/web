import queryData from '.';

const getTeamPageData = () => {
  const query = `query TeamPageData {
    members {
        name
        bio
        role
        email
        profile {
            url
        }
    }
}`;

  return queryData(query);
};

export default getTeamPageData;

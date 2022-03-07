import { queryData } from '.';

export const getTeamPageData = () => {
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

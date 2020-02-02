import getTeamPageData from '../_api/graphql/team.graphql';
import marked from 'marked';

export async function get(req, res) {
  try {
    let data = await getTeamPageData();
    data = {
      ...data,
      members: data.members.map(member => {
        member.bio = marked(member.bio);
        return member;
      })
    };

    res.writeHead(200, {
      'Content-Type': 'application/json'
    });
    return res.end(JSON.stringify(data));
  } catch (e) {
    res.writeHead(400, {
      'Content-Type': 'application/json'
    });
    return res.end();
  }
}

import { getTeamPageData } from '$lib/_api/graphql/team.graphql';
import marked from 'marked';

export async function get({ params }) {
	try {
		const data = await getTeamPageData();
		const body = {
			...data,
			members: data.members.map((member) => {
				member.bio = marked(member.bio);
				return member;
			})
		};

		return { body };
	} catch (e) {
		return { status: 400 };
	}
}

import { captionedImages } from '$lib/_data/_captioned_images';
import { members } from '$lib/_data/_members';
import { membersComponents } from '$lib/_data/_members_components';
import { uploadFile } from '$lib/_data/_upload_file';
import { ufm } from '$lib/_data/_upload_file_morph';
import marked from 'marked';

export async function get({ params }) {
	let body = {
		members: members.map((member) => {
			const _avatar = captionedImages.find(
				(img) =>
					img.id === membersComponents.find((item) => item.Member_id === member.id).component_id
			);
			const avatar = {
				..._avatar,
				image: uploadFile.find(
					(file) => file.id === ufm.find((u) => u.related_id === _avatar.id).upload_file_id
				)
			};
			return { ...member, bio: marked(member.bio), avatar };
		})
	};

	return { body };
}

import { articles } from '$lib/_data/_articles';
import { articlesComponents } from '$lib/_data/_articles_components';
import { articlesTags } from '$lib/_data/_articles_tags';
import { captionedImages } from '$lib/_data/_captioned_images';
import { formatArticle } from '$lib/_data/_helpers';
import { tags } from '$lib/_data/_tags';
import { uploadFile } from '$lib/_data/_upload_file';
import { ufm } from '$lib/_data/_upload_file_morph';

export function get({ params }) {
	const body = {
		articles: articles
			.sort((a, b) =>
				a.published_at > b.published_at ? -1 : a.published_at < b.published_at ? 1 : 0
			)
			.map((article) => {
				const _media = captionedImages.find(
					(img) =>
						img.id ===
						articlesComponents.find((item) => item.Article_id === article.id).component_id
				);
				const media = {
					..._media,
					image: uploadFile.find(
						(file) => file.id === ufm.find((u) => u.related_id === _media.id).upload_file_id
					)
				};
				const tags_ = articlesTags
					.filter((at) => at.article_id === article.id)
					.map((at) => tags.find((tag) => tag.id === at.tag_id));
				return formatArticle({ ...article, media, tags: tags_ });
			})
	};
	return { body };
}

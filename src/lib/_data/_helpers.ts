import { marked } from 'marked';
import * as dateFns from 'date-fns';
import es from 'date-fns/locale/es/index.js';

export const formatArticle = (article: any) => {
	if (article.content) {
		article.content = marked.parse(article.content);
	}
	if (article.published_at) {
		article.published_at = dateFns.format(
			dateFns.parseISO(article.published_at),
			"dd 'de' MMMM 'de' yyyy",
			{
				locale: es
			}
		);
	}
	return article;
};

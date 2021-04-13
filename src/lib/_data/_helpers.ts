import marked from 'marked';
import dateFns from 'date-fns';
import es from 'date-fns/locale/es/index.js';

export const formatArticle = (article) => {
	if (article.content) {
		article.content = marked(article.content);
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

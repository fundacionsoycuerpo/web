import marked from 'marked';
import { format, parseISO } from 'date-fns';
import es from 'date-fns/locale/es';

const formatArticle = (article) => {
  if (article.content) {
    article.content = marked(article.content);
  }
  if (article.published_at) {
    article.published_at = format(
      parseISO(article.published_at),
      "dd 'de' MMMM 'de' yyyy",
      {
        locale: es,
      }
    );
  }
  return article;
};

export default formatArticle;

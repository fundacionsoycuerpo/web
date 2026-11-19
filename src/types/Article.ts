import type { Media } from './Media';
import type { DateString, HTMLString } from './strings';
import type { Tag } from './Tag';

export interface Article {
	id: number;
	published_at: DateString;
	title: string;
	media: Media;
	content: HTMLString;
	tags: Tag[];
	gallery_url: string;
}

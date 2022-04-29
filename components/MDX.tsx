// eslint-disable-next-line node/no-unpublished-import
import { type MDXProvider } from '@mdx-js/react';
import Image from 'next/image';
import { Note } from './Note';
import { ExLink } from './Tag';
import { getFootnoteComponents } from './Footnote';
import { MDXFrontMatter } from '@/lib/types';

type GetComponentProps = {
	frontMatter: MDXFrontMatter;
};
export function getComponents({ frontMatter }: GetComponentProps) {
	const components: React.ComponentProps<typeof MDXProvider>['components'] = {
		ExLink,
		Image,
		Note,
	};
	const { footnote_ids } = frontMatter;
	if (footnote_ids) {
		const { FootnoteList, FootnoteLink } = getFootnoteComponents({
			footnote_ids,
		});
		components.FootnoteLink = FootnoteLink;
		components.FootnoteList = FootnoteList;
	}
	return components;
}

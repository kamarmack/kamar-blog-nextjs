import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { MDXFrontMatter } from '@/lib/types';

const root = process.cwd();

export const postsPath = path.join(root, '../posts');

export const getMdx = (fileName: string) => {
	const fullPath = path.join(postsPath, fileName);
	const docSource = fs.readFileSync(fullPath, 'utf-8');

	const { data, content } = matter(docSource);

	return {
		frontMatter: {
			...data,
			slug: fileName.replace('.mdx', ''),
		} as MDXFrontMatter,
		content,
	};
};

export const getAllMdx = () => {
	const items = fs
		.readdirSync(postsPath)
		.filter((item) => item.endsWith('.mdx'))
		.map((item) => getMdx(item));
	return items.sort(function (a, b) {
		const a_date = a.frontMatter.date;
		const b_date = b.frontMatter.date;
		const a_is_date = !a_date.toLowerCase().includes('soon');
		const b_is_date = !b_date.toLowerCase().includes('soon');
		if (a_is_date && b_is_date) {
			return new Date(b_date).getTime() - new Date(a_date).getTime();
		}
		if (!a_is_date && !b_is_date) {
			return a.frontMatter.title.localeCompare(b.frontMatter.title);
		}
		return a_is_date ? 1 : -1;
	});
};

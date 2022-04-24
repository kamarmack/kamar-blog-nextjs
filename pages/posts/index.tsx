import type { GetStaticProps, NextPage } from 'next';
import { getAllMdx } from '@/lib/mdx';
import { MDXFrontMatter } from '@/lib/types';
import { Page } from '@/components/Page';
import { PostList } from '@/components/PostList';

interface PostsProps {
	posts: Array<MDXFrontMatter>;
}

const Posts: NextPage<PostsProps> = ({ posts }) => {
	return (
		<>
			<Page
				title="Blog"
				browserDescription="Welcome to my blog!"
				description="">
				<PostList posts={posts} />
			</Page>
		</>
	);
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticProps: GetStaticProps = async () => {
	const mdxFiles = getAllMdx().map((post) => post['frontMatter']);
	return {
		props: {
			posts: mdxFiles,
		},
	};
};

export default Posts;

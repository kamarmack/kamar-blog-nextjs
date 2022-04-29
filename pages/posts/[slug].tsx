import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import Link from 'next/link';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote';
import rehypePrism from 'rehype-prism-plus';
import { getAllMdx } from '@/lib/mdx';
import { MDXFrontMatter } from '@/lib/types';
import { Page } from '@/components/Page';
import { getComponents } from '@/components/MDX';
import { Prose } from '@/components/Prose';
import { cx } from '@/lib/utils';

interface ContextProps extends ParsedUrlQuery {
	slug: string;
}

interface PostProps {
	frontMatter: MDXFrontMatter;
	mdx: Omit<MDXRemoteProps, 'components'>;
	previous: MDXFrontMatter | null;
	next: MDXFrontMatter | null;
}

const Post: NextPage<PostProps> = ({ frontMatter, mdx, previous, next }) => {
	return (
		<>
			<Page {...frontMatter}>
				<Prose>
					<MDXRemote {...mdx} components={getComponents({ frontMatter })} />
					<hr />
					<div
						style={{
							marginLeft: 'auto',
							marginRight: 'auto',
							textAlign: 'center',
							width: '80%',
						}}
					>
						<p>
							<i>
								<strong>About me</strong>
							</i>
						</p>
						<p>
							<i>
								I'm Kamar, a software engineer from Memphis, TN – I specialize
								in frontend React and server-side NodeJS development. Thanks for
								reading!
							</i>
						</p>
					</div>
					<br />
				</Prose>
				{previous || next ? (
					<nav
						className={cx(
							'pt-8 grid grid-cols-2 gap-8 border-t',
							'border-gray-200',
							'dark:border-gray-700',
						)}
					>
						{previous ? (
							<div>
								<p
									className={cx(
										'mb-2 uppercase tracking-wider text-sm',
										'text-gray-500',
										'dark:text-gray-400',
									)}
								>
									Previous
								</p>
								<Link href={`/posts/${previous?.slug}`}>
									<a className="font-bold"> &#8592; {previous?.title}</a>
								</Link>
							</div>
						) : null}
						{next ? (
							<div className="col-start-2 text-right">
								<p
									className={cx(
										'mb-2 uppercase tracking-wider text-sm',
										'text-gray-500',
										'dark:text-gray-400',
									)}
								>
									Next
								</p>
								<Link href={`/posts/${next?.slug}`}>
									<a className="font-bold">{next?.title} &#8594;</a>
								</Link>
							</div>
						) : null}
					</nav>
				) : null}
			</Page>
		</>
	);
};

// eslint-disable-next-line @typescript-eslint/require-await
export const getStaticPaths: GetStaticPaths = async () => {
	const mdxFiles = getAllMdx();
	return {
		paths: mdxFiles.map((file) => ({
			params: { slug: file.frontMatter.slug },
		})),
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const { slug } = context.params as ContextProps;
	const mdxFiles = getAllMdx();
	const postIndex = mdxFiles.findIndex((p) => p.frontMatter.slug === slug);
	const post:
		| {
				frontMatter?: MDXFrontMatter;
				content?: string;
		  }
		| undefined = mdxFiles[postIndex] || {};
	const { frontMatter, content = '' } = post;
	const mdxContent = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [],
			rehypePlugins: [rehypePrism],
		},
		scope: frontMatter,
	});
	return {
		props: {
			frontMatter,
			mdx: mdxContent,
			previous: mdxFiles[postIndex - 1]?.frontMatter || null,
			next: mdxFiles[postIndex + 1]?.frontMatter || null,
		},
	};
};

export default Post;

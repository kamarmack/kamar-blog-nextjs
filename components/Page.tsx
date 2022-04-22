import Head from 'next/head';
import Image from 'next/image';
import { onlyText } from 'react-children-utilities';
import { formatDate } from '@/lib/formatDate';
import siteConfig from '@/data/siteConfig';
import { Prose } from '@/components/Prose';
import { cx } from '@/lib/utils';

interface PageProps {
	date?: string;
	img?: boolean;
	browserTitle?: string | React.ReactNode;
	title: string | React.ReactNode;
	description?: string | React.ReactNode;
	thumbnail?: string;
}

export const Page: React.FC<PageProps> = ({
	date,
	browserTitle,
	title,
	description,
	thumbnail,
	img,
	children,
}) => {
	const metaTitle = onlyText(browserTitle || title);
	const metaDescription = description
		? onlyText(description)
		: siteConfig.siteDescription;
	const metaThumbnail = thumbnail ? thumbnail : siteConfig.siteThumbnail;
	return (
		<>
			<Head>
				<title>
					{metaTitle} - {siteConfig.siteName}
				</title>
				<meta name="og:url" content={siteConfig.siteUrl} />
				<meta property="og:title" content={metaTitle} />
				<meta name="description" content={metaDescription} />
				<meta name="og:description" content={metaDescription} />
				<meta
					property="og:image"
					content={`${siteConfig.siteUrl}${metaThumbnail}`}
				/>
			</Head>
			<header
				className={cx(
					'mb-8 pb-8 border-b',
					'border-gray-200',
					'dark:border-gray-700',
				)}>
				{date ? (
					<time
						className={cx('block mb-2', 'text-gray-500', 'dark:text-gray-400')}>
						{formatDate(date)}
					</time>
				) : null}
				<h1 className="font-bold text-3xl">{title}</h1>
				{img && (
					<div className="mt-4">
						<Image
							className="rounded-md"
							src="/headshot.jpg"
							layout="responsive"
							width={518}
							height={225}
							alt="Kamar Mack headshot"
							priority
						/>
					</div>
				)}
				{description ? (
					<div className="mt-4">
						<Prose>
							{typeof description === 'string' ? (
								<p>{description}</p>
							) : (
								description
							)}
						</Prose>
					</div>
				) : null}
			</header>
			{children}
		</>
	);
};

import Head from 'next/head';
import Image from 'next/image';
import { onlyText } from 'react-children-utilities';
import { formatDate } from '@/lib/formatDate';
import siteConfig from '@/data/siteConfig';
import { Prose } from '@/components/Prose';
import { cx } from '@/lib/utils';
import { useRouter } from 'next/router';

interface PageProps {
	custom_header_description?: boolean;
	date?: string;
	img_alt?: string;
	img_height?: number;
	img_src?: string;
	img_type?: string;
	img_width?: number;
	browserTitle?: string | React.ReactNode;
	title: string | React.ReactNode;
	browserDescription?: string | React.ReactNode;
	description?: string | React.ReactNode;
	thumbnail?: string;
}

export const Page: React.FC<PageProps> = ({
	custom_header_description,
	date,
	browserTitle,
	title,
	browserDescription,
	description,
	img_alt,
	img_height,
	img_src,
	img_type,
	img_width,
	children,
}) => {
	const { asPath } = useRouter();
	const metaTitle = onlyText(browserTitle || title);
	const desc = browserDescription || description;
	const metaDescription = desc ? onlyText(desc) : siteConfig.siteDescription;
	const metaThumbnail = img_src || siteConfig.siteThumbnail;
	const metaThumbnailAlt = img_alt || siteConfig.siteThumbnailAlt;
	const metaThumbnailHeight = img_height || siteConfig.siteThumbnailHeight;
	const metaThumbnailType = img_type || siteConfig.siteThumbnailType;
	const metaThumbnailWidth = img_width || siteConfig.siteThumbnailWidth;
	return (
		<>
			<Head>
				<title>
					{metaTitle} - {siteConfig.siteName}
				</title>
				<meta name="description" content={metaDescription} />
				<meta name="author" content={siteConfig.author} />
				<meta name="og:description" content={metaDescription} />
				<meta
					property="og:image"
					content={`${siteConfig.siteUrl}${metaThumbnail}`}
				/>
				<meta property="og:image:alt" content={metaThumbnailAlt} />
				<meta property="og:image:height" content={`${metaThumbnailHeight}`} />
				<meta property="og:image:type" content={metaThumbnailType} />
				<meta property="og:image:width" content={`${metaThumbnailWidth}`} />
				<meta property="og:locale" content="en_US" />
				<meta property="og:site_name" content={siteConfig.siteName} />
				<meta property="og:title" content={metaTitle} />
				<meta property="og:type" content="website" />
				<meta property="og:url" content={`${siteConfig.siteUrl}${asPath}`} />
			</Head>
			<header
				className={
					custom_header_description
						? ''
						: cx(
								'mb-8 pb-8 border-b',
								'border-gray-200',
								'dark:border-gray-700',
						  )
				}
			>
				<h1 className="font-bold text-3xl">{title}</h1>
				{date ? (
					<div className="mt-1">
						{metaTitle === 'Home' ? null : (
							<p>
								Kamar Mack &#183;{' '}
								<time className={cx('text-gray-500', 'dark:text-gray-400')}>
									{formatDate(date)}
								</time>
							</p>
						)}
					</div>
				) : null}
				{!!(img_height && img_src && img_width) && (
					<div className="mt-4">
						<Image
							className="rounded-md"
							src={img_src}
							layout="responsive"
							width={img_width}
							height={img_height}
							alt={img_alt || `${siteConfig.siteName}`}
							priority
						/>
					</div>
				)}
				{description ? (
					<div className="mt-4">
						<Prose>
							{typeof description === 'string' ? (
								<p>
									<i>{description}</i>
								</p>
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

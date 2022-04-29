export type SiteConfig = {
	author: string;
	avatar?: string;
	siteUrl: string;
	siteName: string;
	siteDescription: string;
	siteThumbnail: string;
	siteThumbnailAlt: string;
	siteThumbnailHeight: number;
	siteThumbnailType: string;
	siteThumbnailWidth: number;
	nav: Array<{ label: string; href: string }>;
	social?: {
		email?: string;
		github?: string;
		twitter?: string;
		linkedin?: string;
		instagram?: string;
	};
};

export type MDXFrontMatter = {
	slug: string;
	title: string;
	description?: string;
	date: string;
	tags?: Array<string>;
	footnote_ids?: Array<string>;
};

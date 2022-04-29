import type { SiteConfig } from '@/lib/types';
const siteConfig: SiteConfig = {
	avatar: '/avatar.jpg',
	author: 'Kamar Mack',
	siteUrl: 'https://mackbook.io',
	siteName: 'Kamar Mack',
	siteDescription:
		"I'm a software engineer who loves working on breakthrough developer tools. Here on my personal site, I showcase my programming projects and write blog posts ranking the music and anime series I like best.",
	siteThumbnail: '/og-image.jpg',
	siteThumbnailAlt: 'Kamar Mack',
	siteThumbnailHeight: 630,
	siteThumbnailType: 'image/jpeg',
	siteThumbnailWidth: 1200,
	nav: [
		{ label: 'Projects', href: '/posts/tagged/projects' },
		{ label: 'Blog', href: '/posts' },
		{ label: 'Contact', href: '/contact' },
	],
	social: {
		github: 'https://github.com/kamarmack',
		twitter: 'https://twitter.com/mackgevanni',
		linkedin: 'https://www.linkedin.com/in/kamar-mack/',
		instagram: 'https://www.instagram.com/mackgevanni/',
	},
};
export default siteConfig;

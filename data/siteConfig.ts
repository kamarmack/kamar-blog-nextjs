import type { SiteConfig } from '@/lib/types';
const siteConfig: SiteConfig = {
	avatar: '/avatar.jpg',
	siteUrl: 'https://kamar.codes',
	siteName: 'Kamar Mack',
	siteDescription:
		'My personal site showcases my programming highlight tape and features a flood of blog posts where I rank the music and anime series I like best.',
	siteThumbnail: '/og-image.jpg',
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

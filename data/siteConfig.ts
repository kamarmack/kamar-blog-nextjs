import type { SiteConfig } from '@/lib/types';
const siteConfig: SiteConfig = {
	avatar: '/avatar.jpg',
	siteUrl: 'https://kamar.codes',
	siteName: 'Kamar Mack',
	siteDescription:
		'My personal site showcases my programming highlight tape and features a flood of blog posts where I rank all the music and anime series I like best.',
	siteThumbnail: '/og-image.jpg',
	nav: [
		{ label: 'Tech', href: '/posts/tagged/tech' },
		{ label: 'Music', href: '/posts/tagged/music' },
		{ label: 'Anime', href: '/posts/tagged/anime' },
	],
	social: {
		github: 'https://github.com/kamarmack',
		twitter: 'https://twitter.com/mackgevanni',
		linkedin: 'https://www.linkedin.com/in/kamar-mack/',
		instagram: 'https://www.instagram.com/mackgevanni/',
	},
};
export default siteConfig;

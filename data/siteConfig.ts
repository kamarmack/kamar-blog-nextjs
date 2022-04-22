import type { SiteConfig } from '@/lib/types';
const siteConfig: SiteConfig = {
	avatar: '/avatar.jpg',
	siteUrl: 'https://kamar.codes',
	siteName: 'Kamar Mack',
	siteDescription:
		"Kamar Mack's Portfolio & Blog Site, built with Next.js, MDX, and Tailwind CSS.",
	siteThumbnail: '/og-image.jpg',
	nav: [
		{ label: 'Tech', href: '/posts/tagged/tech' },
		{ label: 'Music', href: '/posts/tagged/music' },
		{ label: 'Anime', href: '/posts/tagged/anime' },
	],
	social: {
		github: 'https://github.com/kamarmack',
		twitter: 'https://twitter.com/mackgevanni',
		linkedin: 'https://www.linkedin.com/in/kamarmack/',
		instagram: 'https://www.instagram.com/mackgevanni/',
		email: 'kamarmack112@gmail.com',
	},
};
export default siteConfig;

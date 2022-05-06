import '@/styles/globals.css';
import { useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import * as gtag from '@/lib/gtag';

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();

	useEffect(() => {
		const handleRouteChange = (url: string) => {
			gtag.pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		router.events.on('hashChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
			router.events.off('hashChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<ThemeProvider
			disableTransitionOnChange
			defaultTheme="system"
			attribute="class"
		>
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
			/>
			<Script
				id="gtag-init"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
				}}
			/>
			<a
				href="#main"
				className="fixed p-2 top-0 left-0 -translate-y-full focus:translate-y-0"
			>
				Skip to main content
			</a>
			<div className="flex flex-col max-w-3xl mx-auto min-h-full px-4">
				<Header />
				<main id="main">
					<Component {...pageProps} />
				</main>
				<Footer />
			</div>
		</ThemeProvider>
	);
}

export default MyApp;

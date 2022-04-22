import type { NextPage } from 'next';
import Link from 'next/link';
import { Page } from '@/components/Page';
import { Prose } from '@/components/Prose';

const Home: NextPage = () => {
	return (
		<>
			<Page
				browserTitle="Home"
				title="What's up, my name's Kamar 👋🏾"
				description="My personal site showcases my programming highlight tape and features a flood of blog posts where I rank all the music and anime series I like best."
				img>
				<Prose>
					<p>
						<strong>
							<i>A little about me...</i>
						</strong>
					</p>
					<p>
						<ul>
							<li>
								I grew up in Memphis, TN, but I was born in the UK like{' '}
								<a
									target="_blank"
									rel="noreferrer"
									href="https://youtu.be/aVoKeHRQVlE?t=83">
									21 Savage
								</a>
								.
							</li>
							<li>
								In 2014 I decided to start coding after taking{' '}
								<Link href="http://localhost:3000/posts/why-i-started-programming">
									an interesting high school math class
								</Link>{' '}
								– ever since then I've been hooked.
							</li>
							<li>
								My favorite programming language is TypeScript. I have
								development experience writing TS in frontend React apps (like{' '}
								<a
									target="_blank"
									rel="noreferrer"
									href="https://github.com/kamarmack/kamar-codes-nextjs">
									this very website
								</a>{' '}
								which is built with Next.js, MDX, and Tailwind CSS) and in
								backend Express apps.
							</li>
							<li>
								As a side project I created an open source tool called{' '}
								<Link href="/posts/introducing-happy-typescript">
									Happy TypeScript
								</Link>{' '}
								that helps other TS devs work more efficiently.
							</li>
							<li>
								The name <i>Kamar</i> roughly translates to <i>moon</i> in
								arabic. As a result I am nocturnal.
							</li>
						</ul>
					</p>
					<hr />
					<p>
						<strong>
							<i>If you want to get in touch</i>
						</strong>
					</p>
					<p>
						Feel free to drop me a line &#8594;{' '}
						<code>kamarmack112 at gmail dot com</code>
					</p>
				</Prose>
			</Page>
		</>
	);
};

export default Home;

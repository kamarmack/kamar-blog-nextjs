import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Page } from '@/components/Page';
import { Prose } from '@/components/Prose';

const Home: NextPage = () => {
	return (
		<>
			<Page
				browserTitle="Home"
				title="What's up, my name's Kamar 👋🏾"
				description="I'm a software engineer who loves working on breakthrough developer tools"
			>
				<Prose>
					<p>
						<strong>
							<i>A little about me...</i>
						</strong>
					</p>
					<p>
						<ul>
							<li>
								I decided to learn coding after taking{' '}
								<Link href="/posts/why-i-started-programming">
									an interesting high school math class
								</Link>{' '}
								back in 2014, and I've been obsessed with the craft ever since.
							</li>
							<li>
								Previously I worked at{' '}
								<a
									target="_blank"
									rel="noreferrer"
									href="https://www.wolfram.com/"
								>
									Wolfram
								</a>{' '}
								and launched a software company called{' '}
								<a
									target="_blank"
									rel="noreferrer"
									href="https://www.crunchbase.com/organization/appdrop-fdc6"
								>
									Appdrop
								</a>
								.
							</li>
							<li>
								My favorite programming language is TypeScript. I have
								development experience writing TS in frontend React apps
								<a
									href={`#details-nextjs-repo`}
									id={`footnote-nextjs-repo`}
									style={{ textDecoration: 'none' }}
								>
									<sup>&#8224;</sup>
								</a>{' '}
								and server-side Express apps.
							</li>
							<li>
								As a recent open source project I created a command line tool
								called <Link href="/posts/introducing-hats">HaTs</Link> that
								helps programmers work more efficiently on TypeScript projects.
							</li>
							<li>
								I was born in the UK like{' '}
								<a
									target="_blank"
									rel="noreferrer"
									href="https://youtu.be/aVoKeHRQVlE?t=83"
								>
									21 Savage
								</a>{' '}
								but grew up in Memphis, TN.
							</li>
							<li>
								The name <i>Kamar</i> roughly translates to <i>moon</i> in
								arabic. As a result I'm nocturnal.
							</li>
						</ul>
						_____
					</p>
					<div
						id="details-nextjs-repo"
						style={{
							fontSize: 'x-small',
						}}
					>
						<a
							href={`#footnote-nextjs-repo`}
							style={{ textDecoration: 'none' }}
						>
							&#8224;
						</a>{' '}
						I built this very site using Next.js, MDX, and Tailwind CSS. Check
						out the{' '}
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/kamarmack/mackbook-io-nextjs"
						>
							source code
						</a>{' '}
						on GitHub 🚀
					</div>
					<hr />
					<figure>
						<Image
							className="rounded-md"
							src={'/img/home/headshot.jpg'}
							width={2048}
							height={2560}
							alt={'Kamar Mack and Jack the Bulldog'}
							priority
						/>
						<figcaption>
							ca. 2017 at a photoshoot with my home dog{' '}
							<a
								target="_blank"
								rel="noreferrer"
								href="https://www.georgetown.edu/jack-the-bulldog/"
							>
								Jack
							</a>{' '}
							🐶
						</figcaption>
					</figure>
				</Prose>
			</Page>
		</>
	);
};

export default Home;

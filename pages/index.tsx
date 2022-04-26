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
				description="I'm a software engineer passionate about building breakthrough tools for other developers.">
				<Prose>
					<p>
						<strong>
							<i>A little about me...</i>
						</strong>
					</p>
					<p>
						<ul>
							<li>
								I decided to learn coding in 2014 after taking{' '}
								<Link href="/posts/why-i-started-programming">
									an interesting high school math class
								</Link>{' '}
								– ever since then I've been in love with the craft.
							</li>
							<li>
								Previously I studied CS at Georgetown, worked at Wolfram, and
								launched a software company called{' '}
								<a
									target="_blank"
									rel="noreferrer"
									href="https://www.crunchbase.com/organization/appdrop-fdc6">
									Appdrop
								</a>
								.
							</li>
							<li>
								My favorite programming language is TypeScript. I have
								development experience writing TS in frontend React apps
								<sup id="fn1">&#8224;</sup> and server-side Express apps.
							</li>
							<li>
								As a recent open source project I built a command line tool
								called{' '}
								<Link href="/posts/introducing-happy-typescript">
									Happy TypeScript
								</Link>{' '}
								that helps programmers work more efficiently on TS projects.
							</li>
							<li>
								I was born in the UK like{' '}
								<a
									target="_blank"
									rel="noreferrer"
									href="https://youtu.be/aVoKeHRQVlE?t=83">
									21 Savage
								</a>{' '}
								but grew up in Memphis, TN.
							</li>
							<li>
								The name <i>Kamar</i> roughly translates to <i>moon</i> in
								arabic. As a result I am nocturnal.
							</li>
						</ul>
						_____
					</p>
					<div
						id="1"
						style={{
							fontSize: 'x-small',
						}}>
						&#8224; For instance – I used Next.js, MDX, and Tailwind CSS as my
						tech stack to build this very site. Check out the{' '}
						<a
							target="_blank"
							rel="noreferrer"
							href="https://github.com/kamarmack/kamar-codes-nextjs">
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
							alt={'Kamar Mack headshot'}
							priority
						/>
						<figcaption>
							Throwback shot of me {'&'} Jack the Bulldog 🐶
						</figcaption>
					</figure>
				</Prose>
			</Page>
		</>
	);
};

export default Home;

import type { NextPage } from 'next';
import { Page } from '@/components/Page';
import { Prose } from '@/components/Prose';

const Home: NextPage = () => {
	return (
		<>
			<Page
				browserTitle="Home"
				title="What's up, my name's Kamar 👋🏾"
				description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, ex!"
				img>
				<Prose>
					<p>
						I'm a software engineer from Memphis, TN with seven years of
						experience programming. This lil' website has my programming
						highlight tape and blogs.
					</p>
					<p>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque. Sed ut perspiciatis unde omnis iste natus
						error sit voluptatem accusantium doloremque. Sed ut perspiciatis
						unde omnis iste natus error sit voluptatem accusantium doloremque.
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque.
					</p>
				</Prose>
			</Page>
		</>
	);
};

export default Home;

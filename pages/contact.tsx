import type { NextPage } from 'next';
import { Page } from '@/components/Page';
import { Prose } from '@/components/Prose';

const Contact: NextPage = () => {
	return (
		<>
			<Page
				title="Contact"
				description="If you want to get in touch, feel free to drop me a line">
				<Prose>
					<p>
						<code>kamarmack112 at gmail dot com</code>
					</p>
				</Prose>
			</Page>
		</>
	);
};

export default Contact;

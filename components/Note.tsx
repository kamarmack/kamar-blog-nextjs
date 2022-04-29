import { cx } from '@/lib/utils';
import { Prose } from './Prose';

export interface NoteProps {
	emoji?: string;
}

export function Note({ emoji, ...children }: NoteProps): JSX.Element {
	return (
		<aside
			className={cx(
				'p-4 flex gap-4 border rounded-md',
				'bg-gray-100',
				'dark:bg-gray-800 dark:border-gray-700',
			)}
		>
			{emoji ? <span>{emoji}</span> : null}
			<Prose>{children}</Prose>
		</aside>
	);
}

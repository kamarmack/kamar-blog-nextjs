import { cx } from '@/lib/utils';

export const Prose: React.FC = ({ children }) => {
	return (
		<div
			className={cx(
				'max-w-none prose hover:prose-a:opacity-90 prose-code:rounded prose-code:px-1 prose-code:font-medium',
				'prose-a:text-blue-900 prose-code:bg-gray-200',
				'dark:prose-invert dark:prose-a:text-blue-600 dark:prose-code:bg-gray-800',
			)}
		>
			{children}
		</div>
	);
};

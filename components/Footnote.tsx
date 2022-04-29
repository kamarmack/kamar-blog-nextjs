import { MDXFrontMatter } from '@/lib/types';

export type GetFootnoteComponentsProps = {
	footnote_ids: Required<MDXFrontMatter>['footnote_ids'];
};
export function getFootnoteComponents({
	footnote_ids,
}: GetFootnoteComponentsProps) {
	function _getFootnotePos({ id }: { id: string }) {
		const i = footnote_ids.findIndex((k) => k === id);
		if (i === -1) {
			const log = { footnote_ids, id };
			throw new Error(`footnote error: ${JSON.stringify(log, null, '\t')}`);
		}
		return i + 1;
	}
	type FootnoteLinkProps = {
		id: string;
	};
	function FootnoteLink({ id }: FootnoteLinkProps): JSX.Element {
		return (
			<a
				href={`#details-${id}`}
				id={`footnote-${id}`}
				style={{ textDecoration: 'none' }}
			>
				<sup>{_getFootnotePos({ id })}</sup>
			</a>
		);
	}
	type FootnoteListProps = {
		footnotes: {
			[key: string]: string | React.ReactNode;
		};
	};
	function FootnoteList({ footnotes }: FootnoteListProps): JSX.Element {
		const left_padding = <div>&nbsp;&nbsp;&nbsp;</div>;
		if (Object.keys(footnotes).find((k) => !footnote_ids.includes(k))) {
			const log = { footnotes, footnote_ids };
			throw new Error(`footnote error: ${JSON.stringify(log, null, '\t')}`);
		}
		return (
			<div>
				<p>
					<strong>Notes</strong>
				</p>
				<div
					style={{
						fontSize: 'xx-small',
						width: '50%',
					}}
				>
					{footnote_ids.map((id) => {
						const note = footnotes[id];
						if (!note) {
							const log = { footnotes, footnote_ids, id };
							throw new Error(
								`footnote error: ${JSON.stringify(log, null, '\t')}`,
							);
						}
						return (
							<div className="mt-1" key={id} id={`details-${id}`}>
								<div style={{ display: 'inline-flex' }}>
									<a
										href={`#footnote-${id}`}
										style={{ textDecoration: 'none' }}
									>
										^{_getFootnotePos({ id })}
									</a>
									{left_padding}
									{note}
								</div>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
	return {
		FootnoteLink,
		FootnoteList,
	};
}

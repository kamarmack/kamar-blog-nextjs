declare global {
	interface Window {
		gtag: (arg1: 'config' | 'event', ...rest: unknown[]) => unknown;
	}
}

window.gtag =
	window.gtag ||
	function () {
		return void 0;
	};

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';
export function pageview(url: string) {
	window.gtag('config', GA_TRACKING_ID, {
		page_path: url,
	});
}

type EventParams = {
	action: string;
	category?: string;
	label: string;
	value: number;
};
export function event({ action, category, label, value }: EventParams) {
	window.gtag('event', action, {
		event_category: category,
		event_label: label,
		value,
	});
}

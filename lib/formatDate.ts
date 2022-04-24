import { parseISO, format } from 'date-fns';

export const formatDate = (date: string): string => {
	try {
		return format(parseISO(date), 'MMMM dd, yyyy');
	} catch {
		return date;
	}
};

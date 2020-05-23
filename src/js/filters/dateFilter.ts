export default function dateFilter(date: Date): string {
    const now = new Date(date);
    return now.toLocaleDateString('ru', {
		day: 'numeric',
		month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
	});
}
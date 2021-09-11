export function timeString(date, lang = 'en') {
    return date.toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit', hourCycle: 'h24' });
};

export function monthDay(date, lang = 'en') {
    return date.toLocaleDateString(lang, { month: 'long', day: 'numeric' });
}

export function weekDay(dateString, lang = 'en') {
    const date = new Date(dateString);
    return date.toLocaleDateString(lang, { weekday: 'long' });
}
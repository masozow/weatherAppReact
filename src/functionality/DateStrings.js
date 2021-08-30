import { monthNameLocales, weekdaysLocales } from "./LocaleStrings";

export function weekdays(day = 0, locale = 'en', weekDaysStrings = weekdaysLocales) {
    if (day >= 0 && day < 7) {
        if (weekDaysStrings[locale][day]) {
            return weekDaysStrings[locale][day];
        }
        else {
            return 'Invalid languaje';
        }
    }
    else {
        return 'Inalid day number';
    }
};

export function monthName(month = 0, locale = 'en', monthNameStrings = monthNameLocales) {
    if (month >= 0 && month < 12) {
        if (monthNameStrings[locale][month]) {
            return monthNameStrings[locale][month];
        }
        else {
            return 'Invalid languaje';
        }
    }
    else {
        return 'Invalid month number';
    }
}
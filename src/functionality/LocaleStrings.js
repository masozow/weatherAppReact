const weekdaysLocales = {
    'en': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    'es': ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
}

const monthNameLocales = {
    'en': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    'es': ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
}

export function weekdays(day, locale = 'en', weekDaysStrings = weekdaysLocales) {
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


export function monthName(month, locale = 'en', monthNameStrings = monthNameLocales) {
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
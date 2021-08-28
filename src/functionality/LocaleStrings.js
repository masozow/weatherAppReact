const weekdaysLocales = {
    'en': ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    'es': ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
}

const monthNameLocales = {
    'en': ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    'es': ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
}
export function weekdays(day, locale = 'en') {
    if (day >= 0 && day < 7) {
        if (weekdaysLocales[locale][day]) {
            return weekdaysLocales[locale][day];
        }
        else {
            return 'Invalid languaje';
        }
    }
    else {
        return 'Inalid day number ' + day;
    }
};


export function monthName(month, locale = 'en') {
    if (month >= 0 && month < 12) {
        if (monthNameLocales[locale][month]) {
            return monthNameLocales[locale][month];
        }
        else {
            return 'Invalid languaje';
        }
    }
    else {
        return 'Invalid month number ' + month;
    }
}
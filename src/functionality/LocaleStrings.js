export function weekdays(day = 0, locale = 'en') {
    const weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    switch (locale) {
        case 'en':
            return weekday[day];
        case 'es' | 'sp':
            return diasSemana[day];
        default:
            return 'Inalid day number';
    }
};

export function monthName(month = 0, locale = 'en') {
    const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const mesNombre = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    switch (locale) {
        case 'en':
            return monthName[month];
        case 'es' | 'sp':
            return mesNombre[month];
        default:
            return 'Invalid month number';
    }
}
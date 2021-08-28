import { monthName, weekdays } from "./LocaleStrings";

function formattedDateTime(dateTimeText = '', lang = 'en') {
    const date = new Date(dateTimeText);
    const month = monthName(parseInt(date.getMonth()), lang);
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${month} ${day}, ${hours === 0 ? '00' : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
}

function formattedWeekDay(dateTimeText = '', lang = 'en') {
    const date = new Date(dateTimeText);
    return weekdays(parseInt(date.getDay()), lang)
}

function firstCharToUpper(dataString = '') {
    return dataString.charAt(0).toUpperCase() + dataString.slice(1);
}

function formattedTemperature(temp = 0, tempUnit = 'C') {
    return `${temp} °${tempUnit}`;
}

export function Clean5DaysForecastData(data, tempUnit = 'C', lang = 'en') {
    const city = formattedCity(data.city);
    const dataLength = data.list.length;
    const filteredList = [];
    for (let index = 0; index < dataLength; index += 8) {
        const singleData = {};
        singleData['description'] = firstCharToUpper(data.list[index].weather[0].description);
        singleData['temperature'] = formattedTemperature(data.list[index].main.temp, tempUnit);
        singleData['dateTime'] = formattedDateTime(data.list[index].dt_txt, lang);
        singleData['weekDay'] = formattedWeekDay(data.list[index].dt_txt, lang);
        singleData['icon'] = data.list[index].weather[0].icon;
        filteredList.push(singleData);
    }
    //This part costs more computing time 
    // const filteredList = data.list.filter((value, index) => {
    //     return index % 8 === 0;
    // });
    return [city, filteredList];
}

function formattedCity(data = '') {
    return data.name + ', ' + data.country;
}
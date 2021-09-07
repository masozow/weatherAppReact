import { monthDay, timeString, weekDay } from "./DateStrings";

function formattedDateTime(dateTimeText, lang = 'en', formattingDateFunction = monthDay, formattingTimeFunction = timeString) {
    const date = new Date(dateTimeText);
    const monthDayString = monthDay(date, lang);
    const time = timeString(date, lang);
    return `${monthDayString}, ${time}`;
}

function firstCharToUpper(dataString = '') {
    return dataString.charAt(0).toUpperCase() + dataString.slice(1);
}

const unitSystems = {
    metric: 'C',
    imperial: 'F'
}

function formattedTemperature(temp = 0, unitSystem = 'metric', unitSystemsArray = unitSystems) {
    return `${temp} °${unitSystemsArray[unitSystem]}`;
}

function formattedCity(data = '') {
    return data.name + ', ' + data.country;
}

export function Clean5DaysForecastData(data, lang = 'en', unitSystem = unitSystems['metric']) {
    const city = formattedCity(data.city);
    const dataLength = data.list.length;
    const filteredList = [];
    for (let index = 0; index < dataLength; index += 8) {
        const singleData = {};
        singleData['description'] = firstCharToUpper(data.list[index].weather[0].description);
        singleData['temperature'] = formattedTemperature(data.list[index].main.temp, unitSystem);
        singleData['dateTime'] = formattedDateTime(data.list[index].dt * 1000, lang);
        singleData['weekDay'] = firstCharToUpper(weekDay(data.list[index].dt * 1000, lang));
        singleData['icon'] = data.list[index].weather[0].icon;
        singleData['dateTimeOriginal'] = (new Date(data.list[index].dt * 1000)).toDateString();
        filteredList.push(singleData);
    }
    //This part costs more computing time 
    // const filteredList = data.list.filter((value, index) => {
    //     return index % 8 === 0;
    // });
    return [city, filteredList];
}


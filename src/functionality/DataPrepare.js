import { monthDay, timeString, weekDay } from "./DateStrings";

function formattedDateTime(dateTimeText, lang = 'en', formattingDateFunction = monthDay, formattingTimeFunction = timeString) {
    const date = new Date(dateTimeText);
    const monthDayString = monthDay(date, lang);
    const time = timeString(date, lang);
    return `${monthDayString}, ${time}`;
}

export function firstCharToUpper(dataString = '') {
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

export function clean5DaysForecastData(data, lang = 'en', unitSystem = unitSystems['metric']) {
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

export function cleanHourlyData(data = [], comparingDateString = '', lang = 'en', unitSystem = 'imperial') {
    const len = data.hourly.length;
    const filteredData = [];
    for (let index = 0; index < len; index++) {
        const realDateTime = new Date(data.hourly[index].dt * 1000);
        if (realDateTime.toDateString() === comparingDateString) {
            const singleItem = {
                time: realDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                description: firstCharToUpper(data.hourly[index].weather[0].description),
                temperature: formattedTemperature(data.hourly[index].temp, unitSystem),
                feelsLike: formattedTemperature(data.hourly[index].feels_like, unitSystem),
                humidity: data.hourly[index].humidity + '%',
                clouds: data.hourly[index].clouds + '%',
                icon: data.hourly[index].weather[0].icon
            }
            filteredData.push(singleItem);
        }
    }
    // const filteredData = data.hourly.filter(item => (new Date(item.dt * 1000)).toDateString() === comparingDateString);

    return [
        {
            sunrise: (new Date(data.current.sunrise * 1000)).toLocaleTimeString(),
            sunset: (new Date(data.current.sunset * 1000)).toLocaleTimeString()
        }, filteredData];

}

export function hourlyTitle(date = '', lan = 'en') {
    const monthDayName = firstCharToUpper(monthDay(date, lan));
    const weekDayName = firstCharToUpper(weekDay(date, lan));
    return `${weekDayName}, ${monthDayName}`;
}
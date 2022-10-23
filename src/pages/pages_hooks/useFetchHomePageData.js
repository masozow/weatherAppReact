import { useContext, useEffect, useState } from "react";
import WeatherContext from "../../store/WheaterContext";
import { APIKey } from "../../functionality/APIKey";
import { clean5DaysForecastData } from "../../functionality/DataPrepare";

// const [apiCallCondition, setApiCallCondition] = useState('lat=40.776676&lon=-73.971321');
//you can use the ID from the city in apiCallCondition, but only for the Forecast call to the API,
//for the OneCall call, latitude and longitude are needed, and the Forecast call accepts that data too

const useFetchHomePageData = (language, unitSystem, timer) => {
    const [city, setCity] = useState('');
    const [list, setList] = useState([]);
    const weatherContext = useContext(WeatherContext);
    useEffect(() => {
        //ny: 5128581
        //quet: 3590979
        fetch(`https://api.openweathermap.org/data/2.5/forecast?${weatherContext.apiCallCondition}&appid=${APIKey}&units=${unitSystem}&lang=${language}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const [cityData, listData] = clean5DaysForecastData(data, language, unitSystem);
                console.log('city: ', cityData);
                console.log('list: ', listData);
                console.log('timer: ', timer);
                setCity(cityData);
                setList(listData);
            })

    }, [setCity, setList, language, unitSystem, weatherContext, timer]);

    return [city, list];
}

export default useFetchHomePageData;
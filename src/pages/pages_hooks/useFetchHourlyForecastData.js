import { useContext, useEffect, useState } from "react";
import { cleanHourlyData } from "../../functionality/DataPrepare";
import WeatherContext from "../../store/WheaterContext";
import { APIKey } from "../../functionality/APIKey";

const useFetchHourlyForecastData = (params) => {
    const [sunData, setSunData] = useState({});
    const [receivedData, setReceivedData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const weatherContext = useContext(WeatherContext);
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?${params.coords}&exclude=minutely,alerts&appid=${APIKey}&units=${weatherContext.unitSystem}&lang=${weatherContext.language}`)
            .then(response => response.json())
            .then(data => {
                const [sun, hourlyData] = cleanHourlyData(data, params.day, weatherContext.language, weatherContext.unitSystem);
                setSunData(sun);
                setReceivedData(hourlyData);
                setIsLoading(false);
            });
    }, [weatherContext.language, params, weatherContext.unitSystem])

    return [sunData, receivedData, isLoading];
}

export default useFetchHourlyForecastData;
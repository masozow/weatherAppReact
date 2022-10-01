import { useContext, useEffect, useState } from "react";
import DailyWeather from "../components/daily-weather/DailyWeather";
import Card from "../components/layout/Card";
import styles from './HomePage.module.css';
import { homePageTitle } from "../functionality/LocaleStrings";
import WeatherContext from "../store/WheaterContext";
import { NavLink } from "react-router-dom";
import { clean5DaysForecastData } from "../functionality/DataPrepare";
import { APIKey } from '../functionality/APIKey';
import Timer from "../components/timer/Timer";

function HomePage(props) {
    const [city, setCity] = useState('');
    const [list, setList] = useState([]);
    // const [apiCallCondition, setApiCallCondition] = useState('lat=40.776676&lon=-73.971321');
    //you can use the ID from the city in apiCallCondition, but only for the Forecast call to the API,
    //for the OneCall call, latitude and longitude are needed, and the Forecast call accepts that data too
    const weatherContext = useContext(WeatherContext);
    const [timer, setTimer] = useState(0);
    const language = weatherContext.language;
    const unitSystem = weatherContext.unitSystem;

    function timerHandler() {
        setTimer(timer + 1);
    }

    useEffect(() => {
        if ("geolocation" in navigator && !weatherContext.overrideGeolocation) {
            //trying to solve geolocation problem with options
            const options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };
            navigator.geolocation.getCurrentPosition((position) => {
                weatherContext.changeApiCallCondition(`lat=${position.coords.latitude}&lon=${position.coords.longitude}`);
            }, (error) => {
                console.log(error)
            },
                options);
        }
    }, [weatherContext])

    useEffect(() => {
        //ny: 5128581
        //quet: 3590979       
        fetch(`https://api.openweathermap.org/data/2.5/forecast?${weatherContext.apiCallCondition}&appid=${APIKey}&units=${unitSystem}&lang=${language}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const [cityData, listData] = clean5DaysForecastData(data, language, unitSystem);
                setCity(cityData);
                setList(listData);
            })

    }, [setCity, setList, language, unitSystem, weatherContext, timer]);

    return (
        <>
            <h1 className={styles.title}>{homePageTitle[language]}</h1>
            <Timer setTimer={timerHandler} timer={timer} />
            <Card themeSelector={weatherContext.theme} >
                <h3 className={styles.subTitle}>{city}</h3>
                {

                    list.map((item, idx) => {
                        return (
                            <NavLink
                                key={idx}
                                to={`/hourlyForecast/${item.dateTimeOriginal}/${weatherContext.apiCallCondition}`}
                                style={{ textDecoration: 'none', color: 'inherit' }}
                            >
                                <DailyWeather
                                    weekDay={item.weekDay}
                                    dateTime={item.dateTime}
                                    icon={item.icon}
                                    description={item.description}
                                    temperature={item.temperature}
                                    themeSelector={weatherContext.theme}
                                />
                            </NavLink>
                        )
                    })
                }
            </Card>
        </>
    );
}

export default HomePage;
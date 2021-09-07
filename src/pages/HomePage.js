import { useContext, useEffect, useState } from "react";
import DailyWeather from "../components/daily-weather/DailyWeather";
import Card from "../components/layout/Card";
import styles from './HomePage.module.css';
import { Clean5DaysForecastData } from "../functionality/DataPrepare";
import { homePageTitle } from "../functionality/LocaleStrings";
import WeatherContext from "../store/WheaterContext";
import { NavLink } from "react-router-dom";

function HomePage(props) {
    const [city, setCity] = useState('');
    const [list, setList] = useState([]);
    const [apiCallCondition, setApiCallCondition] = useState('id=5128581');

    const weatherContext = useContext(WeatherContext);

    const language = weatherContext.languaje;
    const unitSystem = weatherContext.unitSystem;
    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setApiCallCondition(`lat=${position.coords.latitude}&lon=${position.coords.longitude}`);
            });
        }
    }, [])
    useEffect(() => {
        //ny: 5128581
        //quet: 3590979
        fetch(`https://api.openweathermap.org/data/2.5/forecast?${apiCallCondition}&appid=d35ffbb008d9cbfc7bec181cf4685403&units=${unitSystem}&lang=${language}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const [cityData, listData] = Clean5DaysForecastData(data, language, unitSystem);
                setCity(cityData);
                setList(listData);
            });
    }, [setCity, setList, setApiCallCondition, language, unitSystem, apiCallCondition]);
    return (
        <>
            <h1 className={styles.title}>{homePageTitle[language]}</h1>
            <Card themeSelector={weatherContext.theme} >
                <h3 className={styles.subTitle}>{city}</h3>
                {

                    list.map((item, idx) => {
                        return (
                            <NavLink
                                key={idx}
                                to={`/hourlyForecast/${item.dateTimeOriginal}`}
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
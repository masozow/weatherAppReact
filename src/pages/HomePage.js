import { useContext, useEffect, useState } from "react";
import DailyWeather from "../components/daily-weather/DailyWeather";
import Card from "../components/layout/Card";
import styles from './HomePage.module.css';
import { homePageTitle } from "../functionality/LocaleStrings";
import WeatherContext from "../store/WheaterContext";
import { NavLink } from "react-router-dom";
import { clean5DaysForecastData } from "../functionality/DataPrepare";
import { APIKey } from '../functionality/APIKey';

function HomePage(props) {
    const [city, setCity] = useState('');
    const [list, setList] = useState([]);
    const [apiCallCondition, setApiCallCondition] = useState('lat=40.776676&lon=-73.971321');
    //you can use the ID from the city in apiCallCondition, but only for the Forecast call to the API,
    //for the OneCall call, latitude and longitude are needed, and the Forecast call accepts that data too
    const weatherContext = useContext(WeatherContext);

    const language = weatherContext.language;
    const unitSystem = weatherContext.unitSystem;

    useEffect(() => {
        if ("geolocation" in navigator) {
            //trying to solve geolocation problem with options
            const options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };
            navigator.geolocation.getCurrentPosition((position) => {
                setApiCallCondition(`lat=${position.coords.latitude}&lon=${position.coords.longitude}`);
                console.log(position);
            }, (error) => {
                // alert('location services unavailable');
                console.log(error)
            },
                options);
        }
        console.log(navigator.geolocation)
    }, [setApiCallCondition])

    useEffect(() => {
        //ny: 5128581
        //quet: 3590979       
        // const interval = setInterval(() => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?${apiCallCondition}&appid=${APIKey}&units=${unitSystem}&lang=${language}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const [cityData, listData] = clean5DaysForecastData(data, language, unitSystem);
                setCity(cityData);
                setList(listData);
                // console.log('data changed: ', new Date());
            })
        // }
        //     , 600000);

        // return () => {
        //     clearInterval(interval);
        // }
    }, [setCity, setList, language, unitSystem, apiCallCondition]);

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
                                to={`/hourlyForecast/${item.dateTimeOriginal}/${apiCallCondition}`}
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
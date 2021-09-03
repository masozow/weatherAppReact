import { useContext, useEffect, useState } from "react";
import DailyWeather from "../components/daily-weather/DailyWeather";
import Card from "../components/layout/Card";
import styles from './HomePage.module.css';
import { Clean5DaysForecastData } from "../functionality/DataPrepare";
import { homePageTitle } from "../functionality/LocaleStrings";
import WeatherContext from "../store/WheaterContext";

function HomePage(props) {
    const [city, setCity] = useState('');
    const [list, setList] = useState([]);
    const weatherContext = useContext(WeatherContext);

    const language = weatherContext.languaje;
    const unitSystem = weatherContext.unitSystem;
    useEffect(() => {
        //ny: 5128581
        //quet: 3590979
        fetch(`https://api.openweathermap.org/data/2.5/forecast?id=3590979&appid=d35ffbb008d9cbfc7bec181cf4685403&units=${unitSystem}&lang=${language}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const [cityData, listData] = Clean5DaysForecastData(data, language, unitSystem);
                setCity(cityData);
                setList(listData);
            });
    }, [setCity, setList, language, unitSystem]);

    // useEffect(() => {
    //     console.log(list);
    //     console.log(city);
    //     console.log(languaje);
    // }, [list, city, languaje])

    return (
        <>
            <h1 className={styles.title}>{homePageTitle[language]}</h1>
            <Card >
                <h3 className={styles.subTitle}>{city}</h3>

                {
                    list.map((item, idx) => {
                        return (
                            <DailyWeather
                                key={idx}
                                weekDay={item.weekDay}
                                dateTime={item.dateTime}
                                icon={item.icon}
                                description={item.description}
                                temperature={item.temperature}
                            />
                        )
                    })
                }

            </Card>
        </>
    );
}

export default HomePage;
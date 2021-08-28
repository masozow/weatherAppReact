import { useEffect, useState } from "react";
import DailyWeather from "../components/daily-weather/DailyWeather";
import Card from "../components/layout/Card";
import styles from './HomePage.module.css';
import { Clean5DaysForecastData } from "../functionality/DataPrepare";

function HomePage(props) {
    const [city, setCity] = useState('');
    const [list, setList] = useState([]);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?id=3590979&appid=d35ffbb008d9cbfc7bec181cf4685403&units=${'metric'}&lang=${'en'}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const [cityData, listData] = Clean5DaysForecastData(data, 'C', 'en');
                setCity(cityData);
                setList(listData);
            }).catch((error) => {
                setCity('unknown');
                setList([
                    {
                        dateTime: 'unknown',
                        description: 'unknown',
                        icon: 'none',
                        temperature: 'unknown',
                        weekDay: 'unknown'
                    }
                ]);
            });
    }, [setCity, setList]);

    useEffect(() => {
        console.log(list);
        console.log(city);
    }, [list, city])

    return (
        <>
            <h1 className={styles.title}>Next 5 days forecast</h1>
            <Card >
                {/* <h3 className={styles.subTitle}>{city}</h3> */}
                <ul>
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
                </ul>
            </Card>
        </>
    );
}

export default HomePage;
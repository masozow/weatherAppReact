import { useContext, useState } from "react";
import DailyWeather from "../components/daily-weather/DailyWeather";
import Card from "../components/layout/Card";
import styles from './HomePage.module.css';
import { homePageTitle } from "../functionality/LocaleStrings";
import WeatherContext from "../store/WheaterContext";
import { NavLink } from "react-router-dom";
import useGeolocation from "./pages_hooks/useGeolocation";
import useFetchHomePageData from "./pages_hooks/useFetchHomePageData";
import useTimer from "./pages_hooks/useTimer";

function HomePage(props) {
    const weatherContext = useContext(WeatherContext);
    const [timer, setTimer] = useState(0);
    const language = weatherContext.language;
    const unitSystem = weatherContext.unitSystem;

    function timerHandler() {
        setTimer(timer + 1);
    }

    useGeolocation();
    const [city, list] = useFetchHomePageData(language, unitSystem, timer);
    useTimer(timer, timerHandler);

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
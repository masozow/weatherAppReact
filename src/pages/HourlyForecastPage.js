import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/layout/Card";
import Table from "../components/table/Table";
import { cleanHourlyData, hourlyTitle } from "../functionality/DataPrepare";
import WeatherContext from "../store/WheaterContext";
import styles from './HourlyForecastPage.module.css';
import { alternativeMessages } from '../functionality/LocaleStrings';
import { APIKey } from '../functionality/APIKey';

function HourlyForecastPage(props) {
    const weatherContext = useContext(WeatherContext);
    const [sunData, setSunData] = useState({});
    const [receivedData, setReceivedData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const params = useParams();
    const actualDate = new Date(params.day);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?${params.coords}&exclude=minutely,alerts&appid=${APIKey}&units=${weatherContext.unitSystem}&lang=${weatherContext.language}`)
            .then(response => response.json())
            .then(data => {
                const [sun, hourlyData] = cleanHourlyData(data, params.day, weatherContext.language, weatherContext.unitSystem);
                setSunData(sun);
                setReceivedData(hourlyData);
                setIsLoading(false);
            });
    }, [weatherContext.language, weatherContext.unitSystem, params.day, params.coords])

    const content = receivedData.length === 0 && !isLoading ?
        <div className={styles.loading}>{alternativeMessages.unavailableData[weatherContext.language]}</div>
        :
        <>
            <div>
                <h1>{hourlyTitle(actualDate, weatherContext.language)} </h1>
                <div className={styles.subTitleRow}>
                    <div>
                        <FontAwesomeIcon icon={faSun} style={{ fontSize: '2rem' }} />
                        &nbsp;
                        {sunData.sunrise}
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faMoon} style={{ fontSize: '2rem' }} />
                        &nbsp;
                        {sunData.sunset}
                    </div>
                </div>
            </div>
            <div>
                <Card themeSelector={weatherContext.theme}>
                    <Table data={receivedData} />
                </Card>
            </div>
        </>;
    const alternative = <div className={styles.loading}>{alternativeMessages.loading[weatherContext.language]}...</div>;
    return (
        <>
            {isLoading ? alternative : content}
        </>
    );
}
export default HourlyForecastPage;
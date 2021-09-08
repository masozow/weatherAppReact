import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Table from "../components/table/Table";
import { cleanHourlyData, firstCharToUpper, hourlyTitle } from "../functionality/DataPrepare";
import { monthDay, weekDay } from "../functionality/DateStrings";
import WeatherContext from "../store/WheaterContext";
import styles from './HourlyForecastPage.module.css';

function HourlyForecastPage(props) {
    const weatherContext = useContext(WeatherContext);
    const [sunData, setSunData] = useState({});
    const [receivedData, setReceivedData] = useState([]);
    const params = useParams();
    const actualDate = new Date(params.day);
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=15.594288299999999&lon=-90.14949879999999&exclude=minutely,alerts&appid=d35ffbb008d9cbfc7bec181cf4685403&units=metric`)
            .then(response => response.json())
            .then(data => {
                const [sun, hourlyData] = cleanHourlyData(data, params.day, weatherContext.language, weatherContext.unitSystem);
                console.log(sun);
                setSunData(sun);
                setReceivedData(hourlyData);
                console.log(hourlyData);

            });
    }, [weatherContext.language, weatherContext.unitSystem, params.day])
    return (
        <>
            <div >
                <h1>{hourlyTitle(actualDate, weatherContext.language)} </h1>
                <div className={styles.subTitleRow}>
                    <div>
                        {`Sunrise: ${sunData.sunrise}`}
                    </div>
                    <div>
                        {`Sunset: ${sunData.sunset}`}
                    </div>
                </div>
            </div>
            <div>
                <Table data={receivedData} />
            </div>
        </>
    );
}
export default HourlyForecastPage;
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/layout/Card";
import Table from "../components/table/Table";
import { hourlyTitle } from "../functionality/DataPrepare";
import WeatherContext from "../store/WheaterContext";
import styles from './HourlyForecastPage.module.css';
import { alternativeMessages } from '../functionality/LocaleStrings';
import useFetchHourlyForecastData from "./pages_hooks/useFetchHourlyForecastData";

function HourlyForecastPage(props) {
    const weatherContext = useContext(WeatherContext);
    const params = useParams();
    const actualDate = new Date(params.day);
    const [sunData, receivedData, isLoading] = useFetchHourlyForecastData(params);

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
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './DailyWeather.module.css';

function DailyWeather(props) {
    return (
        <div className={styles.dailyWeatherCard}>
            <h3>Monday</h3>
            <p>March 1st, 1:00pm</p>
            <FontAwesomeIcon icon={faCloud} style={{ fontSize: '5rem' }} />
            <h2>25 °C</h2>
            <h4>Clear sky</h4>
        </div>
    );
}

export default DailyWeather;
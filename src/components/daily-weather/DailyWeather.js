import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './DailyWeather.module.css';
import { iconNameSelection } from "../../functionality/IconNameSelection";

function DailyWeather(props) {
    return (
        <div className={styles.dailyWeatherCard}>
            <h3>{props.weekDay}</h3>
            <p>{props.dateTime}</p>
            <FontAwesomeIcon icon={iconNameSelection(props.icon)} style={{ fontSize: '5rem' }} />
            <h2>{props.temperature}</h2>
            <h4>{props.description}</h4>
        </div>
    );
}

export default DailyWeather;
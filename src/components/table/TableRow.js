import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { iconNameSelection } from "../../functionality/IconNameSelection";
import WeatherContext from "../../store/WheaterContext";
import styles from './TableRow.module.css';

function TableRow(props) {
    const weatherContext = useContext(WeatherContext);

    return (
        <tr className={weatherContext.theme ? styles.rowLightTheme : styles.row}>
            <td>
                {props.time}
            </td>
            <td className={styles.contentCell}>
                <p>Temperature:</p>
                <p>Feels like:</p>
                <p>{props.description} </p>
            </td>
            <td className={styles.contentCell}>
                <p>{props.temperature}</p>
                <p>{props.feelsLike}</p>
                <p>{<FontAwesomeIcon icon={iconNameSelection(props.icon)} style={{ fontSize: '1rem' }} />}</p>
            </td>
            <td className={styles.contentCell}>
                <p>Humidity:</p>
                <p>Clouds:</p>
            </td>
            <td className={styles.contentCell}>
                <p> {props.humidity}</p>
                <p> {props.clouds}</p>
            </td>
        </tr>
    );
}
export default TableRow;
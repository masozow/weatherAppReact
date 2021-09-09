import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { iconNameSelection } from "../../functionality/IconNameSelection";
import { hourlyStrings } from "../../functionality/LocaleStrings";
import WeatherContext from "../../store/WheaterContext";
import styles from './TableRow.module.css';

function TableRow(props) {
    const weatherContext = useContext(WeatherContext);
    const strings = hourlyStrings.tableStrings;
    const language = weatherContext.language;
    // const rowClassnames = classNames(styles.row, { [styles.rowLightTheme]: !weatherContext.theme })
    return (
        <div className={`${styles.row} ${weatherContext.theme ? styles.rowLightTheme : ''}`}>
            <div className={styles.hourSection}>
                {props.time}
            </div>
            <div className={styles.dataSection}>
                <div className={styles.column}>
                    <div className={styles.dataCell}>
                        <p>{strings[language][0]}:</p>
                        <p>{strings[language][1]}:</p>
                        <p>{strings[language][2]}:</p>
                    </div>
                    <div className={styles.dataCell}>
                        <p>{props.temperature}</p>
                        <p>{props.feelsLike}</p>
                        <p>{props.description} {<FontAwesomeIcon icon={iconNameSelection(props.icon)} style={{ fontSize: '1rem' }} />}</p>
                    </div>
                </div>
                <div className={styles.column}>
                    <div className={styles.dataCell}>
                        <p>{strings[language][3]}:</p>
                        <p>{strings[language][4]}:</p>
                    </div>
                    <div className={styles.dataCell}>
                        <p> {props.humidity}</p>
                        <p> {props.clouds}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TableRow;
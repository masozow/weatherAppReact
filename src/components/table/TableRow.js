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
                <div className={styles.columnSmall}>
                    <div className={styles.dataCell}>
                        <div className={styles.column}>
                            <div className={styles.p}>{strings[language][0]}:</div>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.p}>{props.temperature}</div>
                        </div>
                    </div>
                    <div className={styles.dataCell}>
                        <div className={styles.column}>
                            <div className={styles.p}>{strings[language][1]}:</div>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.p}>{props.feelsLike}</div>
                        </div>
                    </div>
                    <div className={styles.dataCell}>
                        <div className={styles.column}>
                            <div className={styles.p}>{strings[language][2]}:</div>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.p}>{props.description} {<FontAwesomeIcon icon={iconNameSelection(props.icon)} style={{ fontSize: '1rem' }} />}</div>
                        </div>
                    </div>
                    {/* <div className={styles.dataCell}>

                    </div> */}
                </div>
                <div className={styles.columnSmall}>
                    <div className={styles.dataCell}>
                        <div className={styles.column}>
                            <div className={styles.p}>{strings[language][3]}:</div>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.p}> {props.humidity}</div>
                        </div>
                    </div>
                    <div className={styles.dataCell}>
                        <div className={styles.column}>
                            <div className={styles.p}>{strings[language][4]}:</div>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.p}> {props.clouds}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default TableRow;
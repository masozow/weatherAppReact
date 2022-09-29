import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import WeatherContext from "../../store/WheaterContext";
import styles from './MenuButton.module.css';

function MenuButton(props) {
    const weatherContext = useContext(WeatherContext);
    const theme = weatherContext.theme;
    return (
        <div className={styles.menuButtonContainer}>
            {
                props.isOpen ?
                    <FontAwesomeIcon size='lg' color={theme ? 'black' : 'white'} icon={faTimes} style={{ filter: 'drop-shadow(0 0 2px white)' }} onClick={props.handleClick} /> :
                    <FontAwesomeIcon size='lg' color={theme ? 'black' : 'white'} icon={faBars} onClick={props.handleClick} />
            }
        </div>
    );
}

export default MenuButton;
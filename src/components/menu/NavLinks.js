import classNames from "classnames";
import { useContext } from "react";
import { navBarStrings } from "../../functionality/LocaleStrings";
import WeatherContext from "../../store/WheaterContext";
import ToggleButton from "../toggle-button/ToggleButton";
import styles from './NavLinks.module.css';

function NavLinks(props) {
    const weatherContext = useContext(WeatherContext);
    const classes = classNames({ [styles.navBarButtonsContainerActive]: props.isOpen, [styles.navBarButtonsContainer]: !props.isOpen });
    return (
        <div className={classes}>
            <div className={styles.navBarButton}>
                <ToggleButton key={'nvt1'} text={navBarStrings.toggleLanguage[weatherContext.languaje]} leftOption={'EN'} rightOption={'ES'} callbackFunction={weatherContext.changeLanguaje} />
            </div>
            <div className={styles.navBarButton}>
                <ToggleButton key={'nvt2'} text={navBarStrings.toggleTemperature[weatherContext.languaje]} leftOption={'°F'} rightOption={'°C'} callbackFunction={weatherContext.changeUnitSystem} />
            </div>
            <div className={styles.navBarButton}>
                <ToggleButton key={'nvt3'} text={navBarStrings.toggleTheme[weatherContext.languaje]} leftOption={'Dark'} rightOption={'Light'} callbackFunction={weatherContext.changeTheme} />
            </div>
        </div>
    );
}
export default NavLinks;
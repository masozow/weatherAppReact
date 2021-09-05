import classNames from "classnames";
import { useContext } from "react";
import { navBarStrings } from "../../functionality/LocaleStrings";
import WeatherContext from "../../store/WheaterContext";
import ToggleButton from "../toggle-button/ToggleButton";
import styles from './NavLinks.module.css';

function NavLinks(props) {
    const weatherContext = useContext(WeatherContext);
    const classes = classNames({ [styles.navBarButtonsContainerActive]: props.isOpen, [styles.navBarButtonsContainer]: !props.isOpen, [styles.navBarButtonsContainerActiveLightTheme]: props.themeSelector });
    return (
        <div className={classes}>
            <div className={styles.navBarButton}>
                <ToggleButton key={'nvt1'} text={navBarStrings.toggleLanguage[weatherContext.languaje]} defaultOption={'EN'} alternativeOption={'ES'} callbackFunction={weatherContext.changeLanguaje} themeSelector={weatherContext.theme} />
            </div>
            <div className={styles.navBarButton}>
                <ToggleButton key={'nvt2'} text={navBarStrings.toggleTemperature[weatherContext.languaje]} defaultOption={'°F'} alternativeOption={'°C'} callbackFunction={weatherContext.changeUnitSystem} themeSelector={weatherContext.theme} />
            </div>
            <div className={styles.navBarButton}>
                <ToggleButton key={'nvt3'} text={navBarStrings.toggleTheme[weatherContext.languaje]} defaultOption={'Dark'} alternativeOption={'Light'} callbackFunction={weatherContext.changeTheme} themeSelector={weatherContext.theme} />
            </div>
        </div>
    );
}
export default NavLinks;
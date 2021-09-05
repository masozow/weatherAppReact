import NavBar from "./NavBar";
import styles from './Layout.module.css';
import { useContext } from "react";
import WeatherContext from "../../store/WheaterContext";
import classNames from "classnames";
import BodyStyling from "../body/BodyStyling";

function Layout(props) {
    const weatherContext = useContext(WeatherContext);
    const mainClasses = classNames(styles.main, { [styles.mainLightTheme]: weatherContext.theme })
    return (
        <>
            <BodyStyling themeSelector={weatherContext.theme} />
            <NavBar themeSelector={weatherContext.theme} />
            <main className={mainClasses}>
                {props.children}
            </main>
        </>
    );

}
export default Layout;
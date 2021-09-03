import { useContext } from "react";
import { navBarStrings } from "../../functionality/LocaleStrings";

import WeatherContext from "../../store/WheaterContext";
import ToggleButton from "../toggle-button/ToggleButton";

function NavLinks(props) {
    const weatherContext = useContext(WeatherContext);
    return (
        <>
            {/* <label htmlFor="change_languaje">Change languaje</label>
            <input type="checkbox" id="change_languaje" onChange={weatherContext.changeLanguaje} /> */}
            <ToggleButton key={'nvt1'} text={navBarStrings.toggleLanguage[weatherContext.languaje]} leftOption={'EN'} rightOption={'ES'} callbackFunction={weatherContext.changeLanguaje} />
            <ToggleButton key={'nvt2'} text={navBarStrings.toggleTemperature[weatherContext.languaje]} leftOption={'°F'} rightOption={'°C'} callbackFunction={weatherContext.changeUnitSystem} />
            <ToggleButton key={'nvt3'} text={navBarStrings.toggleTheme[weatherContext.languaje]} leftOption={'Dark'} rightOption={'Light'} callbackFunction={weatherContext.changeTheme} />
        </>
    );
}
export default NavLinks;
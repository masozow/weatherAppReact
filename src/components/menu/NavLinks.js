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
            <ToggleButton text={navBarStrings.toggleLanguage[weatherContext.languaje]} leftOption={'EN'} rightOption={'ES'} callbackFunction={weatherContext.changeLanguaje} />
        </>
    );
}
export default NavLinks;
import { useContext, useEffect } from "react";
import WeatherContext from "../../store/WheaterContext";

const useGeolocation = (props) => {
    const weatherContext = useContext(WeatherContext);
    useEffect(() => {
        if ("geolocation" in navigator && !weatherContext.overrideGeolocation) {
            //trying to solve geolocation problem with options
            const options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };
            navigator.geolocation.getCurrentPosition((position) => {
                weatherContext.changeApiCallCondition(`lat=${position.coords.latitude}&lon=${position.coords.longitude}`);
            }, (error) => {
                console.log(error)
            },
                options);
        }
    }, [weatherContext])
}

export default useGeolocation;
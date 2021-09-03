import { createContext, useState } from "react";

const WeatherContext = createContext(
    {
        weatherData: [],
        unitSystem: 'imperial',
        languaje: 'en',
        theme: false,
        changeTheme: () => { },
        changeLanguaje: () => { },
        changeUnitSystem: () => { },
        changeWeatherData: () => { }
    }
);
export function WeatherContextProvider(props) {
    const [userUnitSystem, setUserUnitSystem] = useState('imperial');
    const [userLanguaje, setUserLanguaje] = useState('en');
    const [userTheme, setUserTheme] = useState(false);
    const [userWeatherData, setUserWeatherData] = useState([]);

    function handleSetUnitSystem() {
        if (userUnitSystem === 'imperial')
            setUserUnitSystem('metric');
        else
            setUserUnitSystem('imperial');
    }

    function handleSetLanguaje() {
        if (userLanguaje === 'en')
            setUserLanguaje('es');
        else
            setUserLanguaje('en');
    }
    function handleSetTheme() {
        setUserTheme(!userTheme);
    }
    function handleSetWeatherData(receviedWeatherData = []) {
        setUserWeatherData(receviedWeatherData);
    }

    const context = {
        weatherData: userWeatherData,
        theme: userTheme,
        languaje: userLanguaje,
        unitSystem: userUnitSystem,
        changeTheme: handleSetTheme,
        changeUnitSystem: handleSetUnitSystem,
        changeLanguaje: handleSetLanguaje,
        changeWeatherData: handleSetWeatherData
    }

    return (
        <WeatherContext.Provider value={context}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherContext;
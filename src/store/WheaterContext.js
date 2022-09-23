import { createContext, useState } from "react";

const WeatherContext = createContext(
    {
        unitSystem: 'imperial',
        language: 'en',
        theme: false,
        apiCallCondition: 'lat=40.776676&lon=-73.971321',
        overrideGeolocation: false,
        changeTheme: () => { },
        changeLanguage: () => { },
        changeUnitSystem: () => { },
        changeApiCallCondition: () => { },
        changeOverrideGeolocation: () => { }
    }
);
export function WeatherContextProvider(props) {
    const [userUnitSystem, setUserUnitSystem] = useState('imperial');
    const [userLanguage, setUserLanguage] = useState('en');
    const [userTheme, setUserTheme] = useState(false);
    const [userApiCallCondition, setUserApiCallCondition] = useState('lat=40.776676&lon=-73.971321')
    const [userOverrideGeolocation, setUserOverrideGeolocation] = useState(false);

    function handleSetUnitSystem() {
        if (userUnitSystem === 'imperial')
            setUserUnitSystem('metric');
        else
            setUserUnitSystem('imperial');
    }

    function handleSetLanguage() {
        if (userLanguage === 'en')
            setUserLanguage('es');
        else
            setUserLanguage('en');
    }

    function handleSetTheme() {
        setUserTheme(!userTheme);
    }

    function handleSetApiCallCondition(data) {
        setUserApiCallCondition(data);
        setUserOverrideGeolocation(true);
    }
    const context = {
        theme: userTheme,
        language: userLanguage,
        unitSystem: userUnitSystem,
        apiCallCondition: userApiCallCondition,
        overrideGeolocation: userOverrideGeolocation,
        changeTheme: handleSetTheme,
        changeUnitSystem: handleSetUnitSystem,
        changeLanguage: handleSetLanguage,
        changeApiCallCondition: handleSetApiCallCondition
    }

    return (
        <WeatherContext.Provider value={context}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherContext;
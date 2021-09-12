import { createContext, useState } from "react";

const WeatherContext = createContext(
    {
        unitSystem: 'imperial',
        language: 'en',
        theme: false,
        changeTheme: () => { },
        changeLanguage: () => { },
        changeUnitSystem: () => { }
    }
);
export function WeatherContextProvider(props) {
    const [userUnitSystem, setUserUnitSystem] = useState('imperial');
    const [userLanguage, setUserLanguage] = useState('en');
    const [userTheme, setUserTheme] = useState(false);

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

    const context = {
        theme: userTheme,
        language: userLanguage,
        unitSystem: userUnitSystem,
        changeTheme: handleSetTheme,
        changeUnitSystem: handleSetUnitSystem,
        changeLanguage: handleSetLanguage
    }

    return (
        <WeatherContext.Provider value={context}>
            {props.children}
        </WeatherContext.Provider>
    )
}

export default WeatherContext;
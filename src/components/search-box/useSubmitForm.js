import { useContext } from 'react';
import { OpenCageGeocodingAPIKey } from '../../functionality/APIKey';
import { alternativeMessages } from '../../functionality/LocaleStrings';
import WeatherContext from '../../store/WheaterContext';


export function useHandleSubmit(event, searchQuery, language, handleModalShow, handleTextBoxShow, textBoxShown, handleFormSubmit, handleUserData) {
    const weatherContext = useContext(WeatherContext);
    event.preventDefault();
    if (!handleModalShow)
        handleTextBoxShow(true);
    if (textBoxShown && searchQuery.trim().length !== 0) {
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${searchQuery}&key=${OpenCageGeocodingAPIKey}&language=${language}&pretty=1`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                switch (data.results.length) {
                    case 1:
                        weatherContext.changeApiCallCondition(`lat=${data.results[0].geometry.lat}&lon=${data.results[0].geometry.lng}`)
                        handleFormSubmit(true);
                        break;
                    case 0:
                        handleUserData(alternativeMessages.cityDataUnavailable[language]);
                        handleModalShow(true);
                        break;
                    default:
                        handleUserData(data.results);
                        handleModalShow(true);
                        break;
                }
            });
    }
}
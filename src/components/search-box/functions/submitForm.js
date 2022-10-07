import { OpenCageGeocodingAPIKey } from '../../../functionality/APIKey';
import { alternativeMessages } from '../../../functionality/LocaleStrings';

export function submitForm(searchQuery, language, modalIsShown, handleModalShow, handleTextBoxShow, textBoxShown, handleFormSubmit, handleUserData, weatherContext) {
    if (!modalIsShown)
        handleTextBoxShow();
    if (textBoxShown && searchQuery.trim().length !== 0) {
        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${searchQuery}&key=${OpenCageGeocodingAPIKey}&language=${language}&pretty=1`)
            .then((response) => {
                return response.json();
            }).then((data) => {
                switch (data.results.length) {
                    case 1:
                        weatherContext.changeApiCallCondition(`lat=${data.results[0].geometry.lat}&lon=${data.results[0].geometry.lng}`)
                        handleFormSubmit();
                        break;
                    case 0:
                        handleUserData(alternativeMessages.cityDataUnavailable[language]);
                        handleModalShow();
                        break;
                    default:
                        handleUserData(data.results);
                        handleModalShow();
                        break;
                }
            });
    }
}
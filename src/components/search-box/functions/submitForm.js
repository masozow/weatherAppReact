import { alternativeMessages } from '../../../functionality/LocaleStrings';

export function submitForm(data, handleModalShow, handleFormSubmit, handleUserData, weatherContext) {
    if (data.results) {
        switch (data.results.length) {
            case 1:
                weatherContext.changeApiCallCondition(`lat=${data.results[0].geometry.lat}&lon=${data.results[0].geometry.lng}`)
                handleFormSubmit();
                break;
            case 0:
                handleUserData(alternativeMessages.cityDataUnavailable[weatherContext.language]);
                handleModalShow();
                break;
            default:
                handleUserData(data.results);
                handleModalShow();
                break;
        }

    }
}
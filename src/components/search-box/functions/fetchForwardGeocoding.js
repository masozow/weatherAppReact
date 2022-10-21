import { OpenCageGeocodingAPIKey } from "../../../functionality/APIKey";

export async function fetchForwardGeocoding(searchQuery, language) {
    return fetch(`https://api.opencagedata.com/geocode/v1/json?q=${searchQuery}&key=${OpenCageGeocodingAPIKey}&language=${language}&pretty=1`)
        .then((response) => {
            return response.json();
        }).then((data) => {
            return data;
        }).catch((error) => {
            console.log('Fetching error: ', error);
        });
}
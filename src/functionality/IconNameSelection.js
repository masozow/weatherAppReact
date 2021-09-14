import { faSun, faCloudSun, faCloud, faCloudRain, faCloudSunRain, faCloudMoonRain, faPooStorm, faSnowflake, faSmog, faRainbow, faMoon, faCloudMoon } from "@fortawesome/free-solid-svg-icons";
///iconRelations keys according to openweather API available icons, and values
///according to  available icons in fontawesome free package
const iconRelations = {
    '01d': faSun,
    '01n': faMoon,
    '02d': faCloudSun,
    '02n': faCloudMoon,
    '03d': faCloud,
    '03n': faCloud,
    '04d': faCloud,
    '04n': faCloud,
    '09d': faCloudRain,
    '09n': faCloudRain,
    '10d': faCloudSunRain,
    '10n': faCloudMoonRain,
    '11d': faPooStorm,
    '11n': faPooStorm,
    '13d': faSnowflake,
    '13n': faSnowflake,
    '50d': faSmog,
    '50n': faSmog,
    'default': faRainbow
}
export function iconNameSelection(iconName = '', icons = iconRelations) {
    if (icons[iconName] && iconName !== 'default') {
        return icons[iconName];
    }
    else {
        return icons['default'];
    }
}

/*
    icons:
    openweather=fontAwesome
    01d=faSun
    02d=faCloudSun
    03d=03n=faCloud
    04d=04n=faClouds(just faCloud, bc faClouds is pro)
    09d=09n=faCloudRain
    10d=faCloudSunRain
    11d=11n=faPooStorm
    13d=13n=faSnowFlake
    50d=50n=faSmog (bc fog is pro)
    01n=faMoon
    02n=faCloudMoon
    10n=faCloudMoonRain
*/
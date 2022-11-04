import { APIs } from "../data/APIs.js";

export const weatherSaved = async () => {
    const { userDates, userWeather } = APIs
    const { url, key, referenceDates } = userWeather
    const { lat, lon, appId, units } = referenceDates
    const { latitude, longitude } = await (await fetch(userDates.url)).json();
    const weatherUrlComplet: string = url + lat + latitude + lon + longitude + appId + key + units
    return await (await fetch(weatherUrlComplet)).json();
}
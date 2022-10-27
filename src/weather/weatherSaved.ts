import { APIs } from "../data/APIs.js";

export const weatherSaved = async () => {
    const { userDates, userWeather } = APIs
    const { url, key, referenceDates } = userWeather
    const { latitude, longitude } = await (await fetch(userDates.url)).json();
    const weatherUrlComplet: string = url + referenceDates.latitude + latitude + referenceDates.longitude + longitude + referenceDates.appId + key + referenceDates.units
    return await (await fetch(weatherUrlComplet)).json();
}
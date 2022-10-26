import { weatherIcons } from "../data/weatherIcons"
import { weatherSaved } from "./weatherSaved"

export const printWeather = async () => {
    const weatherUser = await weatherSaved()
    const currentlyIcon = weatherIcons.find(icons => icons.listIcon.find
        (icon => icon === weatherUser.weather[0].icon))
    
    const activeIconWeather = document.getElementById(currentlyIcon.id)
    activeIconWeather.classList.remove('invisible')
    
    document.querySelector(`#text_${currentlyIcon.id}`).innerHTML = `${Math.round(weatherUser.main.temp)}°C`
}
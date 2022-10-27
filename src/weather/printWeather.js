var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { weatherIcons } from "../data/weatherIcons.js";
import { weatherSaved } from "./weatherSaved.js";
export const printWeather = () => __awaiter(void 0, void 0, void 0, function* () {
    const weatherUser = yield weatherSaved();
    const currentlyIcon = weatherIcons.find(icons => icons.listIcon.find(icon => icon === weatherUser.weather[0].icon));
    const activeIconWeather = document.getElementById(currentlyIcon.id);
    activeIconWeather.classList.remove('invisible');
    document.querySelector(`#text_${currentlyIcon.id}`).innerHTML = `${Math.round(weatherUser.main.temp)}°C`;
});

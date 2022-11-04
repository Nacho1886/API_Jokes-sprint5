var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { APIs } from "../data/APIs.js";
export const weatherSaved = () => __awaiter(void 0, void 0, void 0, function* () {
    const { userDates, userWeather } = APIs;
    const { url, key, referenceDates } = userWeather;
    const { lat, lon, appId, units } = referenceDates;
    const { latitude, longitude } = yield (yield fetch(userDates.url)).json();
    const weatherUrlComplet = url + lat + latitude + lon + longitude + appId + key + units;
    return yield (yield fetch(weatherUrlComplet)).json();
});

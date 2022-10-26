"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const constructionAnswer_1 = require("./jokes/constructionAnswer");
const Joke_1 = require("./jokes/Joke");
const jokeSelecter_1 = require("./jokes/jokeSelecter");
const printFinishJoke_1 = require("./jokes/printFinishJoke");
const printJoke_1 = require("./jokes/printJoke");
const constants_1 = require("./variables/constants");
const printWeather_1 = require("./weather/printWeather");
window.addEventListener('load', printWeather_1.printWeather);
constants_1.newJoke.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    constants_1.firstPartJoke.classList.add('invisible');
    constants_1.buttonResponse.classList.add('invisible');
    const joke = yield (0, jokeSelecter_1.jokeSelecter)();
    (0, constructionAnswer_1.constructionAnswer)(joke);
}));
constants_1.buttonResponse.addEventListener('click', () => {
    constants_1.buttonResponse.setAttribute('disabled', '');
    (0, printFinishJoke_1.printFinishJoke)(printJoke_1.finalJoke[1]);
});
constants_1.reviews.forEach(buttonReview => {
    buttonReview.addEventListener('click', () => {
        constants_1.newJoke.removeAttribute('disabled');
        const dataValue = buttonReview.getAttribute('data-funcion');
        constants_1.reportJokes.push(new Joke_1.Joke(printJoke_1.finalJoke, Number(dataValue)));
        constants_1.reviews.forEach(review => review.setAttribute('disabled', ''));
        console.log(constants_1.reportJokes);
    });
});

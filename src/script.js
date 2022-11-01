var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { constructionAnswer } from "./jokes/constructionAnswer.js";
import { displayingPage } from "./jokes/displayingPage.js";
import { Joke } from "./jokes/Joke.js";
import { jokeSelecter } from "./jokes/jokeSelecter.js";
import { printFinishJoke } from "./jokes/printFinishJoke.js";
import { finalJoke } from "./jokes/printJoke.js";
import { buttonResponse, firstJoke, newJoke, reportJokes, reviews } from "./variables/constants.js";
import { printWeather } from "./weather/printWeather.js";
window.addEventListener('load', printWeather);
firstJoke.addEventListener('click', displayingPage);
newJoke.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    // firstPartJoke.classList.add('invisible')
    buttonResponse.classList.add('invisible');
    const joke = yield jokeSelecter();
    console.log("🚀 ~ file: script.ts ~ line 21 ~ newJoke.addEventListener ~ joke", joke);
    constructionAnswer(joke);
}));
buttonResponse.addEventListener('click', () => {
    buttonResponse.setAttribute('disabled', '');
    printFinishJoke(finalJoke[1]);
});
reviews.forEach(buttonReview => {
    buttonReview.addEventListener('click', () => {
        newJoke.removeAttribute('disabled');
        const dataValue = buttonReview.getAttribute('data-funcion');
        reportJokes.push(new Joke(finalJoke, Number(dataValue)));
        reviews.forEach(review => review.setAttribute('disabled', ''));
        console.log(reportJokes);
    });
});

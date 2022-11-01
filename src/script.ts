import { constructionAnswer } from "./jokes/constructionAnswer.js"
import { displayingPage } from "./jokes/displayingPage.js"
import { Joke } from "./jokes/Joke.js"
import { jokeSelecter } from "./jokes/jokeSelecter.js"
import { printFinishJoke } from "./jokes/printFinishJoke.js"
import { finalJoke } from "./jokes/printJoke.js"
import { buttonResponse, firstJoke, firstPartJoke, newJoke, reportJokes, reviews } from "./variables/constants.js"
import { printWeather } from "./weather/printWeather.js"



window.addEventListener('load', printWeather)

firstJoke.addEventListener('click', displayingPage)

newJoke.addEventListener('click', async () => {
    // firstPartJoke.classList.add('invisible')
    buttonResponse.classList.add('invisible')

    const joke = await jokeSelecter()
    console.log("🚀 ~ file: script.ts ~ line 21 ~ newJoke.addEventListener ~ joke", joke)
    constructionAnswer(joke);
})

buttonResponse.addEventListener('click', () => {
    buttonResponse.setAttribute('disabled', '')

    printFinishJoke(finalJoke[1])
})

reviews.forEach(buttonReview => {
    buttonReview.addEventListener('click', () => {
        newJoke.removeAttribute('disabled');

        const dataValue = buttonReview.getAttribute('data-funcion');

        reportJokes.push(new Joke(finalJoke, Number(dataValue)));
        reviews.forEach(review => review.setAttribute('disabled', ''));

        console.log(reportJokes);
    })
})
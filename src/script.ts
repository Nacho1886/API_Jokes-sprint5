import { constructionAnswer } from "./jokes/constructionAnswer"
import { Joke } from "./jokes/Joke"
import { jokeSelecter } from "./jokes/jokeSelecter"
import { printFinishJoke } from "./jokes/printFinishJoke"
import { finalJoke } from "./jokes/printJoke"
import { buttonResponse, firstPartJoke, newJoke, reportJokes, reviews } from "./variables/constants"
import { printWeather } from "./weather/printWeather"

window.addEventListener('load', printWeather)

newJoke.addEventListener('click', async () => {
    firstPartJoke.classList.add('invisible')
    buttonResponse.classList.add('invisible')

    const joke = await jokeSelecter()
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
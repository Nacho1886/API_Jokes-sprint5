import { animationsSecondPart } from "./jokes/animationsSecondPart.js"
import { animationsSendReview } from "./jokes/animationsSendReview.js"
import { displayingPage } from "./jokes/displayingPage.js"
import { getNewJoke } from "./jokes/getNewJoke.js"
import { Joke } from "./jokes/Joke.js"
import { printFinishJoke } from "./jokes/printFinishJoke.js"
import { finalJoke } from "./jokes/printJoke.js"
import { buttonResponse, firstJoke, newJoke, reportJokes, reviews } from "./variables/constants.js"
import { printWeather } from "./weather/printWeather.js"



window.addEventListener('load', printWeather)

firstJoke.addEventListener('click', () => {
    getNewJoke()
    displayingPage()
})

newJoke.addEventListener('click', getNewJoke)

buttonResponse.addEventListener('click', () => {
    animationsSecondPart()
    printFinishJoke(finalJoke[1])
})

reviews.forEach(buttonReview => {
    buttonReview.addEventListener('click', () => {
        const dataValue = buttonReview.getAttribute('data-funcion');
        
        reportJokes.push(new Joke(finalJoke, Number(dataValue)));
        
        console.log(reportJokes);

        animationsSendReview()
    })

})
import { displayingPage } from "./jokes/displayingPage.js"
import { getNewJoke } from "./jokes/getNewJoke.js"
import { Joke } from "./jokes/Joke.js"
import { printFinishJoke } from "./jokes/printFinishJoke.js"
import { finalJoke } from "./jokes/printJoke.js"
import { buttonResponse, firstJoke, firstPart, newJoke, reportJokes, reviews, secondPart } from "./variables/constants.js"
import { printWeather } from "./weather/printWeather.js"



window.addEventListener('load', printWeather)

firstJoke.addEventListener('click', () => {
    getNewJoke()
    displayingPage()
})

newJoke.addEventListener('click', getNewJoke)

buttonResponse.addEventListener('click', () => {
    
    newJoke.classList.remove('buttonToLeft')
    buttonResponse.classList.remove('buttonToRight')
    newJoke.classList.add('buttonToLeftReverse')
    buttonResponse.classList.add('buttonToRightReverse')

    printFinishJoke(finalJoke[1])
})

reviews.forEach(buttonReview => {
    
    buttonReview.addEventListener('click', () => {
        
        const dataValue = buttonReview.getAttribute('data-funcion');
        
        reportJokes.push(new Joke(finalJoke, Number(dataValue)));
        
        console.log(reportJokes);

        reviews.forEach(e => e.classList.add('notActivate'))
        newJoke.classList.remove('notActivate')
        firstPart.classList.remove('show')
        secondPart.classList.remove('show')
        firstPart.classList.add('hide')
        secondPart.classList.add('hide')
    })

})
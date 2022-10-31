import { newJoke } from "../variables/constants.js";
import { printComplexJoke } from "./printComplexJoke.js";
import { printFinishJoke } from "./printFinishJoke.js";


export let finalJoke: object[]

export const printJoke = joke => {
    newJoke.setAttribute('disabled', '');

    finalJoke = joke
    
// reviews.forEach(review => review.classList.remove('invisible'));
    if (finalJoke.length === 2) return printComplexJoke(finalJoke)
    return printFinishJoke(finalJoke)
}
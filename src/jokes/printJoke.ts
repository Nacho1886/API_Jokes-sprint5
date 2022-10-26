import { newJoke, reviews } from "../variables/constants";
import { printComplexJoke } from "./printComplexJoke";
import { printFinishJoke } from "./printFinishJoke";


export let finalJoke: object[]

export const printJoke = joke => {
    newJoke.setAttribute('disabled', '');

    finalJoke = joke
    
reviews.forEach(review => review.classList.remove('invisible'));
    if (finalJoke.length === 2) return printComplexJoke(finalJoke)
    return printFinishJoke(finalJoke)
}
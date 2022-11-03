import { printComplexJoke } from "./printComplexJoke.js";
import { printFinishJoke } from "./printFinishJoke.js";


export let finalJoke: object[]

export const printJoke = joke => {
    finalJoke = joke
    
    if (finalJoke.length === 2) return printComplexJoke(finalJoke)
    return printFinishJoke(finalJoke)
}
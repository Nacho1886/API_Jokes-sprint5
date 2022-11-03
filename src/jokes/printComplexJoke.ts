import { firstPartJoke } from "../variables/constants.js"
import { animationsComplexJoke } from "./animations/animationsComplexJoke.js"

export const printComplexJoke = joke => {
    animationsComplexJoke()
    firstPartJoke.innerHTML = joke[0]
}
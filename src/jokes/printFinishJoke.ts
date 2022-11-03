import { result, reviews, secondPart } from "../variables/constants.js";

export const printFinishJoke = joke => {
    result.innerHTML = joke

    reviews.forEach(e => e.classList.remove('notActivate'))
    secondPart.classList.add('show')

}
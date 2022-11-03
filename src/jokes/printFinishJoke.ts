import { result, reviews } from "../variables/constants.js";

export const printFinishJoke = joke => {

    reviews.forEach(e => e.classList.remove('notActivate'))

    result.innerHTML = joke
}
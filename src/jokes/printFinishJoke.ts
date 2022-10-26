import { result, reviews } from "../variables/constants";

export const printFinishJoke = joke => {
    reviews.forEach(review => review.removeAttribute('disabled'));
    result.classList.remove('invisible')

    result.innerHTML = joke
}
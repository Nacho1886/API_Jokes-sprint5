import { result, reviews, secondSpan } from "../variables/constants.js";
export const printFinishJoke = joke => {
    result.innerHTML = joke;
    reviews.forEach(e => e.classList.remove('notActivate'));
    secondSpan.classList.remove('closeWindow');
    secondSpan.classList.add('openWindow');
};

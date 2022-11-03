import { reviews, secondSpan } from "../../variables/constants.js";
export const animationsFinishJoke = () => {
    reviews.forEach(e => e.classList.remove('notActivate'));
    secondSpan.classList.remove('closeWindow');
    secondSpan.classList.add('openWindow');
};

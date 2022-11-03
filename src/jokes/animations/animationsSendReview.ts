import { firstSpan, newJoke, reviews, secondSpan } from "../../variables/constants.js"


export const animationsSendReview = () => {
    reviews.forEach(e => e.classList.add('notActivate'))
    newJoke.classList.remove('notActivate')
    firstSpan.classList.remove('openWindow')
    secondSpan.classList.remove('openWindow')
    firstSpan.classList.add('closeWindow')
    secondSpan.classList.add('closeWindow')
}
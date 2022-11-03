import { firstPart, newJoke, reviews, secondPart } from "../variables/constants.js"


export const animationsSendReview = () => {
    reviews.forEach(e => e.classList.add('notActivate'))
    newJoke.classList.remove('notActivate')
    firstPart.classList.remove('show')
    secondPart.classList.remove('show')
    firstPart.classList.add('hide')
    secondPart.classList.add('hide')
}
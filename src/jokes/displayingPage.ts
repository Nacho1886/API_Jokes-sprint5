import { firstJoke, spanBottom, spanLeft, spanRight, spanTop } from "../variables/constants.js"


export const displayingPage = () => {
    firstJoke.classList.add('buttomToTop')
    firstJoke.id = 'newJoke';
    spanLeft.classList.add('spanToLeft')
    spanRight.classList.add('spanToRight')
    spanTop.classList.add('spanToTop')
    spanBottom.classList.add('spanToBottom')
}
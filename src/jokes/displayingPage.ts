import { firstJoke, newJoke, spanBottom, spanLeft, spanRight, spanTop } from "../variables/constants.js"


export const displayingPage = () => {
    firstJoke.classList.add('buttonToTopDisappear')
    newJoke.classList.add('buttonToTopAppear')
    // buttonTopJoke.id = 'newJoke';
    // buttonTopJoke.innerHTML = 'New joke'
    spanLeft.classList.add('spanToLeft')
    spanRight.classList.add('spanToRight')
    spanTop.classList.add('spanToTop')
    spanBottom.classList.add('spanToBottom')
}
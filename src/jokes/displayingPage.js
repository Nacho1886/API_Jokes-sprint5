import { buttonTopJoke, spanBottom, spanLeft, spanRight, spanTop } from "../variables/constants.js";
export const displayingPage = () => {
    buttonTopJoke.classList.add('buttonToTop');
    buttonTopJoke.id = 'newJoke';
    // buttonTopJoke.innerHTML = 'New joke'
    spanLeft.classList.add('spanToLeft');
    spanRight.classList.add('spanToRight');
    spanTop.classList.add('spanToTop');
    spanBottom.classList.add('spanToBottom');
};

import { buttonResponse, newJoke, secondSpan } from "../variables/constants.js";
export const animationsSecondPart = () => {
    newJoke.classList.remove('buttonToLeft');
    buttonResponse.classList.remove('buttonToRight');
    newJoke.classList.add('buttonToLeftReverse');
    buttonResponse.classList.add('buttonToRightReverse');
    secondSpan.classList.remove('closeWindow');
    secondSpan.classList.add('openWindow');
};

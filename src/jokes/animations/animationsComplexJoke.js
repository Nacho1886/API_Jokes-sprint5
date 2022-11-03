import { buttonResponse, firstSpan, newJoke } from "../../variables/constants.js";
export const animationsComplexJoke = () => {
    newJoke.classList.remove('buttonToLeftReverse');
    buttonResponse.classList.remove('buttonToRightReverse');
    newJoke.classList.add('buttonToLeft');
    buttonResponse.classList.add('buttonToRight');
    firstSpan.classList.remove('closeWindow');
    firstSpan.classList.add('openWindow');
};

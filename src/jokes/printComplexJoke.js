import { buttonResponse, firstPartJoke, newJoke } from "../variables/constants.js";
export const printComplexJoke = joke => {
    newJoke.classList.remove('buttonToLeftReverse');
    buttonResponse.classList.remove('buttonToRightReverse');
    newJoke.classList.add('buttonToLeft');
    buttonResponse.classList.add('buttonToRight');
    firstPartJoke.innerHTML = joke[0];
};

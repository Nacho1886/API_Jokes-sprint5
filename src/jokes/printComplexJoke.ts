import { buttonResponse, firstPartJoke, newJoke, result } from "../variables/constants.js"

export const printComplexJoke = joke => {
    // newJoke.classList.remove('buttonToTopAppear')
    newJoke.classList.add('buttonToLeft')
    buttonResponse.classList.add('buttonToRight')
    // firstPartJoke.classList.remove('invisible')
    buttonResponse.removeAttribute('disabled')
    buttonResponse.classList.remove('invisible')
    result.classList.add('invisible')

    firstPartJoke.innerHTML = joke[0]
}
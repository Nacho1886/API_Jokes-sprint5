import { buttonResponse, firstPartJoke, result } from "../variables/constants.js"

export const printComplexJoke = joke => {
    firstPartJoke.innerHTML = joke[0]

    // firstPartJoke.classList.remove('invisible')
    buttonResponse.removeAttribute('disabled')
    buttonResponse.classList.remove('invisible')
    result.classList.add('invisible')
}
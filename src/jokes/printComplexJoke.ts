import { buttonResponse, firstPartJoke, result } from "../variables/constants"

export const printComplexJoke = joke => {
    firstPartJoke.innerHTML = joke[0]

    firstPartJoke.classList.remove('invisible')
    buttonResponse.removeAttribute('disabled')
    buttonResponse.classList.remove('invisible')
    result.classList.add('invisible')
}
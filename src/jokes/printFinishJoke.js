import { result } from "../variables/constants.js";
import { animationsFinishJoke } from "./animations/animationsFinishJoke.js";
export const printFinishJoke = joke => {
    result.innerHTML = joke;
    animationsFinishJoke();
};

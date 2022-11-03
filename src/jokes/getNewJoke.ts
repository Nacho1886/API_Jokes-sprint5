import { newJoke } from "../variables/constants.js";
import { constructionAnswer } from "./constructionAnswer.js";
import { jokeSelecter } from "./jokeSelecter.js";

export const getNewJoke = async () => {
    newJoke.classList.add('notActivate')
    const joke = await jokeSelecter()
    console.log("🚀 ~ file: script.ts ~ line 21 ~ newJoke.addEventListener ~ joke", joke)
    constructionAnswer(joke);
}
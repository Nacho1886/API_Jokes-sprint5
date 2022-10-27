import { printJoke } from "./printJoke.js";
import { validateJokeType } from "./validateJokeType.js";

export const constructionAnswer = jsonReturn => printJoke(validateJokeType(jsonReturn))
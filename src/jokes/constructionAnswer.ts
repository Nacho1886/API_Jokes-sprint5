import { printJoke } from "./printJoke";
import { validateJokeType } from "./validateJokeType";

export const constructionAnswer = jsonReturn => printJoke(validateJokeType(jsonReturn))
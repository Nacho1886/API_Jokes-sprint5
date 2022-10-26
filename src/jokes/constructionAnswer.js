"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constructionAnswer = void 0;
const printJoke_1 = require("./printJoke");
const validateJokeType_1 = require("./validateJokeType");
const constructionAnswer = jsonReturn => (0, printJoke_1.printJoke)((0, validateJokeType_1.validateJokeType)(jsonReturn));
exports.constructionAnswer = constructionAnswer;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJokeType = void 0;
const validateJokeType = joke => {
    if (joke.type === "twopart") {
        return [joke.setup, joke.delivery];
    }
    return [joke.joke];
};
exports.validateJokeType = validateJokeType;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Joke = void 0;
class Joke {
    constructor(joke, score) {
        this.joke = joke;
        this.score = score;
        this.date = new Date().toISOString();
    }
}
exports.Joke = Joke;

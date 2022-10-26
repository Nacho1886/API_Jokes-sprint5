"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jokeSelecter = void 0;
const APIs_1 = require("../data/APIs");
const jokeSelecter = () => __awaiter(void 0, void 0, void 0, function* () {
    const randomNumber = Math.round(Math.random());
    const firstJoke = yield (yield fetch(APIs_1.APIs.jokes1.url, APIs_1.APIs.jokes1.options)).json();
    const secondJoke = yield (yield fetch(APIs_1.APIs.jokes3.url, APIs_1.APIs.jokes3.options)).json();
    const randomJoke = randomNumber === 0 ? firstJoke : secondJoke;
    return randomJoke;
});
exports.jokeSelecter = jokeSelecter;

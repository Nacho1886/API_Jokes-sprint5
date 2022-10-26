"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printJoke = exports.finalJoke = void 0;
const constants_1 = require("../variables/constants");
const printComplexJoke_1 = require("./printComplexJoke");
const printFinishJoke_1 = require("./printFinishJoke");
const printJoke = joke => {
    constants_1.newJoke.setAttribute('disabled', '');
    exports.finalJoke = joke;
    constants_1.reviews.forEach(review => review.classList.remove('invisible'));
    if (exports.finalJoke.length === 2)
        return (0, printComplexJoke_1.printComplexJoke)(exports.finalJoke);
    return (0, printFinishJoke_1.printFinishJoke)(exports.finalJoke);
};
exports.printJoke = printJoke;

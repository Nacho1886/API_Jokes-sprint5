"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printFinishJoke = void 0;
const constants_1 = require("../variables/constants");
const printFinishJoke = joke => {
    constants_1.reviews.forEach(review => review.removeAttribute('disabled'));
    constants_1.result.classList.remove('invisible');
    constants_1.result.innerHTML = joke;
};
exports.printFinishJoke = printFinishJoke;

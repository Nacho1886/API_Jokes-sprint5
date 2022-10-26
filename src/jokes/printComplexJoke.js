"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printComplexJoke = void 0;
const constants_1 = require("../variables/constants");
const printComplexJoke = joke => {
    constants_1.firstPartJoke.innerHTML = joke[0];
    constants_1.firstPartJoke.classList.remove('invisible');
    constants_1.buttonResponse.removeAttribute('disabled');
    constants_1.buttonResponse.classList.remove('invisible');
    constants_1.result.classList.add('invisible');
};
exports.printComplexJoke = printComplexJoke;

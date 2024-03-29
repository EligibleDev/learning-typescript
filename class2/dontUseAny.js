"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var number;
var getNumber = function () {
    return 5;
};
number = getNumber();
console.log(number);
// now the upper code will not give a error if I return a boolean or a string. because the variable number has the type any.
var developer;
var getDeveloper = function () {
    return "mikail";
};
developer = getDeveloper();
console.log(developer);

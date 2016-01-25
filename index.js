"use strict";
var assert = require("assert");


function isNth(nth, value) {
    return typeof nth === "number" && typeof value == "number" && nth <= value && value % nth === 0;
}

function everyNth(nth, callback) {
    return function(value) {
        if(value === 0 || isNth(nth, value))
            return callback(value, value + nth - 1);
    };
}

module.exports.isNth = isNth;
module.exports.everyNth = everyNth;


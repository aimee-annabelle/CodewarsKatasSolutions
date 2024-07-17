"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doubleChar = doubleChar;
exports.updateLight = updateLight;
function doubleChar(str) {
    const double = str.split('').map(el => el.repeat(2)).join('');
    return double;
}
doubleChar("abcd");
var lights;
(function (lights) {
    lights["green"] = "green";
    lights["yellow"] = "yellow";
    lights["red"] = "red";
})(lights || (lights = {}));
function updateLight(current) {
    switch (current) {
        case lights.green:
            return lights.yellow;
        case lights.yellow:
            return lights.red;
        case lights.red:
            return lights.green;
        default:
            const _exhaustiveCheck = current;
            return _exhaustiveCheck;
    }
}

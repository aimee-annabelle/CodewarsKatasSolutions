"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rgb = rgb;
function rgb(r, g, b) {
    r = r < 0 ? 0 : r > 255 ? 255 : r;
    g = g < 0 ? 0 : g > 255 ? 255 : g;
    b = b < 0 ? 0 : b > 255 ? 255 : b;
    const [xHex, yHex] = [Math.floor(r / 16), r % 16];
    const [x1Hex, y1Hex] = [Math.floor(g / 16), g % 16];
    const [x2Hex, y2Hex] = [Math.floor(b / 16), b % 16];
    const hexConvertArr = [xHex, yHex, x1Hex, y1Hex, x2Hex, y2Hex];
    const hex = hexConvertArr.map((h) => {
        switch (h) {
            case 10:
                return "A";
            case 11:
                return "B";
            case 12:
                return "c";
            case 13:
                return "D";
            case 14:
                return "E";
            case 15:
                return "F";
            default:
                return h.toString();
        }
    });
    return hex.join("");
}
rgb(0, 0, 0); // "000000"
rgb(0, 0, -20); // "000000"
rgb(300, 255, 255); // "FFFFFF"
rgb(173, 255, 47); // "ADFF2F"
function generateHashtag(str) {
    const arr = str
        .split(/\s+/)
        .filter((word) => word !== "")
        .map((word) => word[0].toUpperCase() + word.split("").slice(1).join(""));
    return arr.length > 0 && arr.join("").length < 140
        ? `#${arr.join("")}`
        : false;
}
console.log(generateHashtag(" Hello there thanks for trying my Kata")); //  =>  "#HelloThereThanksForTryingMyKata"
console.log(generateHashtag("    Hello     World   ")); //                  =>  "#HelloWorld"
console.log(generateHashtag("")); //                                        =>  false

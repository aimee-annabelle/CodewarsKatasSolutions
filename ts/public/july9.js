"use strict";
/**Build a square */
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateShape = generateShape;
exports.smaller = smaller;
exports.sumDigits = sumDigits;
function generateShape(int) {
    let output = "";
    for (let i = 1; i <= int; i++) {
        output += i === int ? "+".repeat(int) : "+".repeat(int) + "\n";
    }
    return output;
}
/** How many are smaller than me?*/
function smaller(nums) {
    return nums.map((el, idx) => nums.filter((item, i) => i > idx && item < el).length);
}
// Summing a number's digits
function sumDigits(n) {
    let arr = n
        .toString()
        .split("")
        .filter((el) => el !== "-")
        .map((el) => Number(el));
    return arr.reduce((curr, acc) => curr + acc);
}

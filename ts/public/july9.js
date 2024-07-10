"use strict";
/**Build a square */
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateShape = generateShape;
exports.smaller = smaller;
exports.sumDigits = sumDigits;
exports.arr2bin = arr2bin;
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
// Arguments to Binary addition
function arr2bin(arr) {
    console.log(arr);
    let sum = arr.reduce((acc, curr) => {
        if (isNaN(parseInt(curr)) && !Number.isNaN(curr)) {
            return acc + 0;
        }
        else {
            return acc + curr;
        }
    }, 0);
    console.log(sum.toString(2));
    return sum.toString(2);
}
arr2bin([NaN]);
arr2bin([9, NaN]);

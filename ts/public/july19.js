"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.likes = exports.findOdd = void 0;
exports.countBits = countBits;
exports.duplicateCount = duplicateCount;
// finding the odd occurences
const findOdd = (xs) => {
    const obj = {};
    let result = 0;
    xs.map((el) => (el in obj ? (obj[el] += 1) : (obj[el] = 1)));
    for (const key in obj) {
        if (obj[key] % 2 !== 0)
            result = +key;
    }
    return result;
};
exports.findOdd = findOdd;
(0, exports.findOdd)([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]); // => 5
//   count bits
function countBits(n) {
    const tens = Array.from(n.toString(2));
    return tens.filter((x) => +x === 1).length;
}
countBits(10); // => 2
//who likes
const likes = (a) => {
    switch (a.length) {
        case 0:
            return "no one likes this";
        case 1:
            return a.toString() + " likes this";
        case 2:
            return a.join(" and ") + " like this";
        case 3:
            return `${a[0]}, ${a[1]} and ${a[2]} like this`;
        default:
            return `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;
    }
};
exports.likes = likes;
// counting duplicates
function duplicateCount(text) {
    const arr = text.toLowerCase().split('');
    const set = new Set();
    arr.filter(x => arr.indexOf(x) !== arr.lastIndexOf(x)).map(el => set.add(el));
    return set.size;
}
duplicateCount('abcde');
console.log(duplicateCount("aabBcde"));

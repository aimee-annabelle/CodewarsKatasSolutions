"use strict";
// Count Odd Numbers below n
function oddCount(n) {
    if (n < 1)
        return 0;
    return Math.floor(n / 2);
}
oddCount(7);
// Hidden "Cubic" numbers
function isSumOfCubes(s) {
    let result = "";
    let numbers = s
        .split(/\D+/g)
        .filter(Boolean)
        .map((el) => (el.length > 3 ? el.match(/.{1,3}/g) : el));
    let flattened = [].concat(...numbers);
    console.log(flattened);
    flattened.map((s) => {
        let sum = s.split('').map(element => +element).reduce((curr, acc) => curr + Math.pow(acc, 3));
        console.log(sum);
        if (parseInt(s) === sum)
            result += s + " ";
    });
    console.log(result);
    return "";
}
// isSumOfCubes(
//   "Once upon a midnight dreary, while100 I pondered, 9026315weak and weary -827&()"
// );
isSumOfCubes("&z371 upon 407298a --- dreary, ###100.153 I thought, 9926315strong and weary -127&() 1");

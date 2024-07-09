function combine() {
  let newObj = {};

  for (let argument of arguments) {
    for (let key in argument) {
      if (argument.hasOwnProperty(key)) {
        if (newObj.hasOwnProperty(key)) {
          newObj[key] += argument[key];
        } else {
          newObj[key] = argument[key];
        }
      }
    }
  }

  return newObj;
}
const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };
console.log(combine(objA, objB));
console.log(combine(objA, objC));

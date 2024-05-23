function combine() {
  let newObj = {};
  let objArr = [];
  for (let argument of arguments) {
    objArr.push({ ...argument });
  }
  objArr.reduce((curr, acc) => {});
  console.log(objArr);
  return newObj;
}
const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };
console.log(combine(objA, objB));
// console.log(combine(objA, objC))

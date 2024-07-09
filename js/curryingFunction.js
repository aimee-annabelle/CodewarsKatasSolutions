function multiplyAll(arr) {
  return function arrMulti(m) {
    return arr.map((a) => a * m);
  };
}
console.log(multiplyAll([1, 2, 3])(2));

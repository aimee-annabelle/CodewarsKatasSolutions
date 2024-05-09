Array.prototype.square = function () {
  return this.map((el) => Math.pow(el, 2));
};
Array.prototype.cube = function () {
  return this.map((el) => Math.pow(el, 3));
};
Array.prototype.average = function () {
  let sum = this.reduce((curr, acc) => {
    return (curr += acc);
  }, 0);
  return sum / this.length;
};
Array.prototype.sum = function () {
  return this.reduce((curr, acc) => {
    return curr + acc;
  });
};
Array.prototype.even = function () {
  return this.filter((e) => e % 2 === 0);
};
Array.prototype.odd = function () {
  return this.filter((e) => e % 2 !== 0);
};

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.square());
console.log(numbers.cube());
console.log(numbers.average());
console.log(numbers.sum());
console.log(numbers.even());
console.log(numbers.odd());

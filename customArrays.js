Array.prototype.even = function () {
  return this.filter((x) => Number.isInteger(x) && x % 2 === 0);
};

Array.prototype.odd = function () {
  return this.filter((x) => Number.isInteger(x) && x % 2 !== 0);
};

Array.prototype.under = function (x) {
  return this.filter((a) => Number.isInteger(a) && a < x);
};

Array.prototype.over = function (x) {
  return this.filter((a) => Number.isInteger(a) && a > x);
};

Array.prototype.inRange = function (min, max) {
  return this.filter((a) => Number.isInteger(a) && a >= min && a <= max);
};

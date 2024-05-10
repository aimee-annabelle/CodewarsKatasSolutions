function gcdi(a, b) {
  for (let temp = b; b !== 0; ) {
    b = a % b;
    a = temp;
    temp = b;
  }
  return a;
}
function lcmu(a, b) {
  let lar = Math.max(a, b);
  let small = Math.min(a, b);
  for (i = lar; ; i += lar) {
    if (i % small == 0) return i;
  }
}
function som(a, b) {
  return a + b;
}
function maxi(a, b) {
  return a > b ? a : b;
}
function mini(a, b) {
  return a < b ? a : b;
}
function operArray(fct, arr, init) {
  return arr.reduce((acc, curr, idx) => {
    const initial = idx === 0 ? init : acc[idx - 1];
    const result = fct(initial, curr);
    acc.push(result);
    return acc;
  }, []);
}

let a = [18, 69, -90, -78, 65, 40];
console.log(operArray(gcdi, a, a[0])); // => [18, 3, 3, 3, 1, 1]
console.log(operArray(lcmu, a, a[0])); // => [18, 414, 2070, 26910, 26910, 107640]
console.log(operArray(som, a, 0)); // => [18, 87, -3, -81, -16, 24]
console.log(operArray(mini, a, a[0])); // => [18, 18, -90, -90, -90, -90]
console.log(operArray(maxi, a, a[0])); // => [18, 69, 69, 69, 69, 69]

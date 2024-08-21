function differenceOfSquares(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  let squareSum = Math.pow(
    arr.reduce((curr, acc) => curr + acc),
    2
  );
  let sumSquare = arr.reduce((curr, acc) => curr + Math.pow(acc, 2));
  return squareSum - sumSquare;
}

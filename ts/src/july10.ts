// Count Odd Numbers below n

function oddCount(n: number): number {
  if (n < 1) return 0;
  return Math.floor(n / 2);
}

oddCount(7);

// Hidden "Cubic" numbers
function isSumOfCubes(s: string): string {
  let result: string = "";
  let numbers = s
    .split(/\D+/g)
    .filter(Boolean)
    .map((el) => (el.length > 3 ? (el.match(/.{1,3}/g) as string[]) : el));
  let flattened = ([] as string[]).concat(...(numbers as string[]));
  console.log(flattened);

  flattened.map((s) => {
    let sum = s
      .split("")
      .map((element) => +element)
      .reduce((curr, acc) => curr + Math.pow(acc, 3));
    console.log(sum);

    if (parseInt(s) === sum) result += s + " ";
  });
  console.log(result);

  return "";
}

// isSumOfCubes(
//   "Once upon a midnight dreary, while100 I pondered, 9026315weak and weary -827&()"
// );

// isSumOfCubes(
//   "&z371 upon 407298a --- dreary, ###100.153 I thought, 9926315strong and weary -127&() 1"
// );

// Difference Of Squares

function differenceOfSquares(n: number): number {
  let arr: number[] = [];
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

console.log(differenceOfSquares(5));

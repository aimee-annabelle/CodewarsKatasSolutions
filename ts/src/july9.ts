/**Build a square */

export function generateShape(int: number): string {
  let output: string = "";
  for (let i = 1; i <= int; i++) {
    output += i === int ? "+".repeat(int) : "+".repeat(int) + "\n";
  }
  return output;
}

/** How many are smaller than me?*/

export function smaller(nums: number[]): number[] {
  return nums.map(
    (el, idx) => nums.filter((item, i) => i > idx && item < el).length
  );
}

// Summing a number's digits

export function sumDigits(n: number): number {
  let arr = n
    .toString()
    .split("")
    .filter((el) => el !== "-")
    .map((el) => Number(el));
  return arr.reduce((curr, acc) => curr + acc);
}

// Arguments to Binary addition

export function arr2bin(arr: any[]): string {
  console.log(arr);
  let sum = arr.reduce((acc, curr) => {
    if (isNaN(parseInt(curr)) && !Number.isNaN(curr)) {
      return acc + 0;
    } else {
      return acc + curr;
    }
  }, 0);
  console.log(sum.toString(2));

  return sum.toString(2);
}

arr2bin([NaN]);
arr2bin([9, NaN]);

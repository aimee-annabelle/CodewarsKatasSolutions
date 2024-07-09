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
  return nums.map((el,idx) => nums.filter((item,i) => i > idx && item < el).length)
}
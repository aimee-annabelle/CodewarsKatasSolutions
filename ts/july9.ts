/**Build a square */

export function generateShape(int: number): string {
  let output: string = "";
  for (let i = 1; i <= int; i++) {
    output += i === int ? "+".repeat(int) : "+".repeat(int) + "\n";
  }
  return output;
}

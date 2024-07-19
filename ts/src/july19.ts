// finding the odd occurences
export const findOdd = (xs: number[]): number => {
  interface Occurrences {
    [x: number]: number;
  }
  const obj: Occurrences = {};
  let result: number = 0;
  xs.map((el) => (el in obj ? (obj[el] += 1) : (obj[el] = 1)));
  for (const key in obj) {
    if (obj[key] % 2 !== 0) result = +key;
  }
  return result;
};
findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]); // => 5

//   count bits

export function countBits(n: number): number {
  const tens = Array.from(n.toString(2));
  return tens.filter((x) => +x === 1).length;
}
countBits(10); // => 2

//who likes

export const likes = (a: string[]): string => {
  switch (a.length) {
    case 0:
      return "no one likes this";
    case 1:
      return a.toString() + " likes this";
    case 2:
      return a.join(" and ") + " like this";
    case 3:
      return `${a[0]}, ${a[1]} and ${a[2]} like this`;

    default:
      return `${a[0]}, ${a[1]} and ${a.length - 2} others like this`;
  }
};

// counting duplicates
export function duplicateCount(text: string): number{
    const arr:string[] = text.toLowerCase().split('')
    const set = new Set()
    arr.filter(x => arr.indexOf(x)!== arr.lastIndexOf(x)).map(el => set.add(el))
    return set.size;
  }

duplicateCount('abcde')
console.log(duplicateCount("aabBcde"));

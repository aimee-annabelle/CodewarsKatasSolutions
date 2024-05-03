/**
 * Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.
 *
 *     When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.
 *
 *     nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
 *     nextItem("testing", "t") # "e"
 */

function nextItem(xs, item) {
  let ret = Array.isArray(xs) ? xs.indexOf(item) : xs.split("").indexOf(item);
  return ret !== xs.length - 1 && ret !== -1 ? xs[ret + 1] : undefined;
}

console.log(nextItem([1, 2, 3, 4, 5, 6, 7, 8], 5));
console.log(nextItem(["a", "b", "c"], "d"));
console.log(nextItem(["a", "b", "c"], "c"));
console.log(nextItem("testing", "t"));

function* countFrom(n) {
  for (let i = n; ; ++i) yield i;
}
let newN = countFrom(1);
console.log(newN);
console.log(typeof newN);
// console.log(nextItem(countFrom(1), 12));

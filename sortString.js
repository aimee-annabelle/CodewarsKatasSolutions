function sort(str) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  let strArr = Array.from(str).filter((a) => a !== " " && a !== "\n");
  const sortedAlpha = strArr
    .filter((a) => alphabets.includes(a.toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { caseFirst: "upper" }));
  const sortedNums = strArr
    .filter((a) => typeof +a === "number" && !isNaN(a))
    .sort();
  const sortedChars = strArr
    .filter((a) => !sortedNums.includes(a) && !sortedAlpha.includes(a))
    .sort();

  return [...sortedAlpha, ...sortedNums, ...sortedChars].join("");
}
sort("The cat sat on the mat");
sort("“Happy 21st Birthday!”");
sort("I often see the time 11:11 or 12:34 on clocks.");

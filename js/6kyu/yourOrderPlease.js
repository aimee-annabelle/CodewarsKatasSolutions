function order(words) {
  let result = "";
  const numToWordObj = {};
  words.split(" ").map((word) => {
    const temporaryKey = word.match(/[0-9]/g).toString();
    numToWordObj[temporaryKey] = word;
  });
  for (const key in numToWordObj) {
    result += numToWordObj[key] + " ";
  }
  return result.trim();
}

order("is2 Thi1s T4est 3a");
//   "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"

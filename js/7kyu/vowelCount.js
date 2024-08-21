function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  str.split("").map((vowel) => (vowels.includes(vowel) ? count++ : count));
  return count;
}

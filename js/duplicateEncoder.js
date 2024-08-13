function duplicateEncode(word) {
  const wordLower = word.toLowerCase().split("");
  const duplicates = wordLower.filter(
    (char) =>
      wordLower.indexOf(char.toLowerCase()) !==
      wordLower.lastIndexOf(char.toLowerCase())
  );
  const result = wordLower
    .map((char) => (duplicates.includes(char) ? `)` : `(`))
    .join("");
  return result;
}

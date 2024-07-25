function rot13(message) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const messageArr = message.split("");
  const newWordArr = messageArr.map((char, idx) => {
    if (alphabets.includes(char.toLowerCase())) {
      const index = alphabets.indexOf(char.toLowerCase());
      
      let isLower = char.toLowerCase() === char;
      let i =
        index + 13 > alphabets.length-1
          ? index + 13 - alphabets.length
          : index + 13;
    console.log(i);
      return isLower ? alphabets[i] : alphabets[i].toUpperCase();
    } else {
      return char;
    }
  });
  console.log(newWordArr.join(""));
  return newWordArr.join("");
}
rot13("abcdefghijklmnopqrstuvwxyz");

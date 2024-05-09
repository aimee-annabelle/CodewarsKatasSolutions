/*
Write a class that, when given a string, will return an uppercase string with each letter shifted
 forward in the alphabet by however many spots the cipher was initialized to.

For example:

var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
c.encode('Codewars'); // returns 'HTIJBFWX'
c.decode('BFKKQJX'); // returns 'WAFFLES'
If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
The shift will always be in range of [1, 26].
*/

class CaesarCipher {
  constructor(shift) {
    this.shift = shift;
    this.alphabets = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
  }
  encode(str) {
    return str
      .split("")
      .map((char) => {
        if (this.alphabets.includes(char.toUpperCase())) {
          let index = this.alphabets.indexOf(char.toUpperCase());
          let newIndex = (index + this.shift) % 26;
          return char === char.toUpperCase()
            ? this.alphabets[newIndex].toUpperCase()
            : this.alphabets[newIndex].toUpperCase();
        } else {
          return char;
        }
      })
      .join("");
  }
  decode(str) {
    return str
      .split("")
      .map((char) => {
        if (this.alphabets.includes(char.toUpperCase())) {
          let index = this.alphabets.indexOf(char.toUpperCase());
          let newIndex = (index - this.shift + 26) % 26;
          return char === char.toUpperCase()
            ? this.alphabets[newIndex].toUpperCase()
            : this.alphabets[newIndex].toUpperCase();
        } else {
          return char.toUpperCase();
        }
      })
      .join("");
  }
}
var c = new CaesarCipher(5);
console.log(c.encode("Codewars"));
console.log(c.decode("BFKKQJX"));

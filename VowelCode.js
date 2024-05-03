/**
 * Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:
 *
 *     a -> 1
 *     e -> 2
 *     i -> 3
 *     o -> 4
 *     u -> 5
 *     For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.
 *
 *     Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.
 *
 *     For example, decode("h3 th2r2") would return "hi there".
 *
 */

function encode(string) {
  let vowels = "aeiou";
  let strArr = string.split(" ").map((x) => {
    let char = x.split("").map((y) => {
      if (vowels.includes(y)) {
        switch (y) {
          case "a":
            y = "1";
            break;
          case "e":
            y = "2";
            break;
          case "i":
            y = "3";
            break;
          case "o":
            y = "4";
            break;
          case "u":
            y = "5";
            break;
          default:
            break;
        }
      }
      return y;
    });
    return char.join("");
  });
  return strArr.join(" ");
}

function decode(string) {
  let numbers = "12345";
  let strArr = string.split(" ").map((x) => {
    let char = x.split("").map((y) => {
      if (numbers.includes(y)) {
        switch (y) {
          case "1":
            y = "a";
            break;
          case "2":
            y = "e";
            break;
          case "3":
            y = "i";
            break;
          case "4":
            y = "o";
            break;
          case "5":
            y = "u";
            break;
          default:
            break;
        }
      }
      return y;
    });
    return char.join("");
  });
  return strArr.join(" ");
}
console.log(decode("h3 th2r2"));

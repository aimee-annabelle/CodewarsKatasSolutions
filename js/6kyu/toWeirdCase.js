function toWeirdCase(string) {
  const stringArray = string.split(" ");
  const modifiedArray = stringArray.map((word) => {
    let modified = word
      .split("")
      .map((char, idx, arr) =>
        idx % 2 === 0
          ? (arr[idx] = char.toUpperCase())
          : (arr[idx] = char.toLowerCase())
      );

    return modified.join("");
  });
  return modifiedArray.join(" ");
}

toWeirdCase("Weird string case");

//   "Weird string case" => "WeIrD StRiNg CaSe"

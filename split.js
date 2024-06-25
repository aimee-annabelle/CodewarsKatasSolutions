function multipleSplit(string, delimiters = []) {
  const tempChar = delimiters[0];
  delimiters.forEach((d) => (string = string.split(d).join(tempChar)));
  return string.split(tempChar).filter((a) => a !== "");
}

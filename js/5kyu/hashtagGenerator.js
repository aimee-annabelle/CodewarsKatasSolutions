function generateHashtag(str) {
  const arr = str
    .split(/\s+/)
    .filter((word) => word !== "")
    .map((word) => word[0].toUpperCase() + word.split("").slice(1).join(""));
  return arr.length > 0 && arr.join("").length < 140
    ? `#${arr.join("")}`
    : false;
}

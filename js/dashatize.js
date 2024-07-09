function dashatize(num) {
  const numArr = Array.from(num.toString()).filter((a) => a !== "-");
  const resultArr = [];
  if (numArr.length === 1) return numArr.toString();
  numArr.forEach((e, idx) => {
    if (idx === 0 && e % 2 !== 0) {
      resultArr.push(e, "-");
    }
    if (idx !== 0 && e % 2 !== 0) {
      if (idx !== numArr.length - 1) {
        resultArr[resultArr.length - 1] !== "-"
          ? resultArr.push("-", e, "-")
          : resultArr.push(e, "-");
      } else {
        resultArr[resultArr.length - 1] !== "-"
          ? resultArr.push("-", e)
          : resultArr.push(e);
      }
    } else if (e % 2 === 0) {
      resultArr.push(e);
    }
  });
  return resultArr.join("");
}

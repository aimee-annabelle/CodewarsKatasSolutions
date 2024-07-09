function findOutlier(integers) {
  let evenCount = 0;
  let oddCount = 0;
  let result = 0;
  integers.forEach((i) => (i % 2 === 0 ? evenCount++ : oddCount++));
  result =
    evenCount > 1
      ? integers.filter((x) => x % 2 !== 0)
      : (result = integers.filter((x) => x % 2 === 0));
  return Number(result.join());
}

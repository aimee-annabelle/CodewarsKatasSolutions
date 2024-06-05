function moreZeros(s) {
  let binary = [];
  let newarr = [];
  let zeros = 0;
  let ones = 0;
  if (s.length > 0) {
    for (var s1 of s) {
      binary.push(s1.charCodeAt().toString(2));
    }
    for (let b1 of binary) {
      for (let b2 of b1) {
        b2 == 0 ? zeros++ : ones++;
      }
      if (zeros > ones) {
        if (!newarr.includes(String.fromCharCode(parseInt(b1, 2))))
          newarr.push(String.fromCharCode(parseInt(b1, 2)));
      }
      zeros = 0;
      ones = 0;
    }
  }
  return newarr;
}

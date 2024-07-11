// Credit Card Mask

function maskify(cc: string): string {
  if (cc.length < 4) {
    return cc;
  } else {
    let replaced = cc
      .split("")
      .slice(0, cc.length - 4)
      .map((el) => (el = "#"))
      .join("");
    return (
      replaced +
      cc
        .split("")
        .slice(cc.length - 4)
        .join("")
    );
  }
}

// 3 powers of 2
/** Write a function three_powers() to accept a number, 
 * to check can it represent as sum of 3 powers of 2.
 * (n == 2**i + 2**j + 2**k, i, j, k >= 0)
 * */ 

function threePowers(n:number):boolean {
    return false
  }
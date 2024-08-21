function goodVsEvil(good, evil) {
  const goodCount = good.split(" ").reduce((prev, curr, idx) => {
    let worth = 0;
    switch (idx) {
      case 0:
        worth = 1 * curr;
        break;
      case 1:
        worth = 2 * curr;
        break;
      case 2:
        worth = 3 * curr;
        break;

      case 3:
        worth = 3 * curr;
        break;
      case 4:
        worth = 4 * curr;
        break;
      case 5:
        worth = 10 * curr;
        break;
      default:
        break;
    }
    return prev + worth;
  }, 0);
  const evilCount = evil.split(" ").reduce((prev, curr, idx) => {
    let worth = 0;
    switch (idx) {
      case 0:
        worth = 1 * curr;
        break;
      case 1:
        worth = 2 * curr;
        break;
      case 2:
        worth = 2 * curr;
        break;

      case 3:
        worth = 2 * curr;
        break;
      case 4:
        worth = 3 * curr;
        break;
      case 5:
        worth = 5 * curr;
        break;
      case 6:
        worth = 10 * curr;
      default:
        break;
    }
    return prev + worth;
  }, 0);
  return `Battle Result: ${
    goodCount > evilCount
      ? "Good triumphs over Evil"
      : evilCount > goodCount
      ? "Evil eradicates all trace of Good"
      : "No victor on this battle field"
  }`;
}

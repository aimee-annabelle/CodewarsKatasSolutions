export function doubleChar(str: string): string {
  const double = str
    .split("")
    .map((el) => el.repeat(2))
    .join("");
  return double;
}
doubleChar("abcd");

enum lights {
  green = "green",
  yellow = "yellow",
  red = "red",
}
export function updateLight(current: lights): string {
  switch (current) {
    case lights.green:
      return lights.yellow;
    case lights.yellow:
      return lights.red;
    case lights.red:
      return lights.green;
    default:
      const _exhaustiveCheck: never = current;
      return _exhaustiveCheck;
  }
}

function oneLine(points: [number, number][]) {
  const uniquePoints = points.filter(
    (point, index, self) =>
      index === self.findIndex((p) => p[0] === point[0] && p[1] === point[1])
  );

  if (uniquePoints.length < 3) {
    return true;
  }

  const x = uniquePoints[0];
  const y = uniquePoints[1];

  for (let i = 2; i < uniquePoints.length; i++) {
    const z = uniquePoints[i];
    if ((y[0] - x[0]) * (z[1] - x[1]) !== (y[1] - x[1]) * (z[0] - x[0])) {
      return false;
    }
  }
  return true;
}
console.log(
  oneLine([
    [1, 2],
    [7, 4],
    [22, 9],
  ])
);
console.log(
  oneLine([
    [74, 6],
    [4, -1],
    [-96, -11],
    [14, 0],
    [-76, -9],
    [-106, -12],
    [44, 3],
  ])
);
console.log(
  oneLine([
    [1, 1],
    [1, 1],
    [0, 0],
    [1, -1],
  ])
);

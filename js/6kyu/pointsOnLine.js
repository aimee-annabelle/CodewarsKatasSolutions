function onLine(points) {
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

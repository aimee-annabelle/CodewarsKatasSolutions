class Cube {
  constructor(length) {
    this.length = length;
  }
  get surfaceArea() {
    return 6 * Math.pow(this.length, 2);
  }
  get volume() {
    return Math.pow(this.length, 3);
  }
  set surfaceArea(area) {
    this.length = Math.sqrt(area / 6);
  }
  set volume(volume) {
    this.length = Math.cbrt(volume);
  }
}
let cube = new Cube(1);
console.log(cube.length);
cube.surfaceArea = 54;
console.log(cube.length);

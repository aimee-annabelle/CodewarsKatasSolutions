class Cuboid {
  constructor(length, width, height) {
    this.length = length;
    this.width = width;
    this.height = height;
  }
  surfaceArea() {
    return (
      2 *
      (this.length * this.width +
        this.width * this.height +
        this.height * this.length)
    );
  }
  volume() {
    return this.length * this.width * this.height;
  }
}
class Cube extends Cuboid {
  constructor(length) {
    super(length, length, length);
    this.length = length;
  }
}

var cuboid = new Cuboid(1, 2, 3);
console.log(cuboid.volume());
var cube = new Cube(10);
console.log(cube);

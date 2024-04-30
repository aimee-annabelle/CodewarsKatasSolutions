/* Basic subclasses - Adam and Eve

According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.

*/

class God {
  /**
   * @returns Human[]
   */
  static create() {
    // code
    let humans = [];
    let man = new Man(undefined, "Adam");
    let woman = new Woman(undefined, "Eve");
    console.log(man);
    humans.push(man);
    humans.push(woman);
    return humans;
  }
}
class Human {
  constructor() {
    this.being = "human";
  }
}

class Man extends Human {
  constructor(being, name) {
    super(being);
    this.name = name;
  }
}
class Woman extends Human {
  constructor(being, name) {
    super(being);
    this.name = name;
  }
}

let humans = God.create();

console.log(humans);

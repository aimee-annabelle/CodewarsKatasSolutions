class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "shark", status);
    this.name = name;
    this.age = age;
    this.status = status;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
    this.name = name;
    this.age = age;
    this.status = status;
  }
  introduce() {
    super.introduce();
    return `Hello, my name is ${this.name} and I am ${this.age} years old.  Meow meow!`;
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.name = name;
    this.age = age;
    this.status = status;
    this.master = master;
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}

let shark = new Cat("Billy", 3, "Alive and well");
console.log(shark.introduce());

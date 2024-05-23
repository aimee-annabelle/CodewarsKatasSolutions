function* generator(a) {
  let b = 1;
  while (true) {
    yield `${a} x ${b} = ${a * b}`;
    b++;
  }
}

let gen = generator(1);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

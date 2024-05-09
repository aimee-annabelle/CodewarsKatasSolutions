class File {
  constructor(fullName, contents) {
    this._fullName = fullName;
    this._fileName = fullName.split(".").slice(0, -1).join(".");
    this._extension = fullName.split(".").slice(-1).toString();
    this._contents = contents;
    this._wordIndex = 0;
    this._charIndex = 0;
  }

  get fullName() {
    return this._fullName;
  }

  get fileName() {
    return this._fileName;
  }

  get extension() {
    return this._extension;
  }

  getContents() {
    return this._contents;
  }

  write(str) {
    if (this._contents.length === 0) {
      this._contents += str;
    } else {
      this._contents += `\n${str}`;
    }
  }

  gets() {
    if (this._contents.length === 0) {
      return "";
    }
    const string = this._contents.split("\n")[this._wordIndex];
    this._wordIndex++;
    return string;
  }

  getc() {
    if (this._contents.length === 0) {
      return "";
    }
    const char = this._contents[this._charIndex];
    this._charIndex++;
    return char;
  }
}

let example = new File("example.txt", "An example file");
console.log(example.fullName === "example.txt", "log 1");
console.log(example.fileName === "example", "log 2");
console.log(example.extension === "txt", "log 3");
example.fullName = "modified.txt";
console.log(example.fullName != "modified.txt", "log 4");
example.filename = "hacked";
console.log(example.fileName != "hacked", "log 5");
console.log(example.fileName === "example", "log 6");
example.extension = "locky";
console.log(example.extension != "locky", "log 7");
console.log(example.extension === "txt", "log 8");
console.log(example.getContents() === "An example file", "log 9");
example.write("Hello World");
console.log(example.getContents() === "An example file\nHello World", "log 10");
example.write("This is an example file provided to you by the Kata author");
console.log(
  example.getContents() ===
    "An example file\nHello World\nThis is an example file provided to you by the Kata author",
  "log 11"
);
example.write("This example file is used as an example test case.");
console.log(
  example.getContents() ===
    "An example file\nHello World\nThis is an example file provided to you by the Kata author\nThis example file is used as an example test case.",
  "log 12"
);
console.log(example.gets() === "An example file", "log 13");
console.log(example.gets() === "Hello World", "log 14");
console.log(
  example.gets() ===
    "This is an example file provided to you by the Kata author",
  "log 15"
);
console.log(
  example.gets() === "This example file is used as an example test case.",
  "log 16"
);
console.log(example.gets() === undefined);
console.log(example.gets() === undefined);
console.log(example.gets() === undefined);
console.log(example.getc() === "A");
console.log(example.getc() === "n");
console.log(example.getc() === " ");
console.log(example.getc() === "e");
console.log(example.getc() === "x");
console.log(example.getc() === "a");
console.log(example.getc() === "m");
console.log(example.getc() === "p");
console.log(example.getc() === "l");
console.log(example.getc() === "e");
for (let i = 0; i < 1000; i++) {
  example.getc();
}
console.log(example.getc() === undefined, example.getc());
console.log(example.getc() === undefined);
console.log(example.getc() === undefined);

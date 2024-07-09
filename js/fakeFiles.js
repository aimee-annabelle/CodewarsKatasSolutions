class File {
  #fullName = "";
  #fileName = "";
  #extension = "";
  constructor(fullName, contents) {
    this.#fullName = fullName;
    this.#fileName = fullName.substring(0, fullName.lastIndexOf("."));
    this.#extension = fullName.substring(fullName.lastIndexOf(".") + 1);
    this.contents = contents;
    this.stringCounter = 0;
    this.charCounter = 0;
  }
  get fullName() {
    return this.#fullName;
  }
  get fileName() {
    return this.#fileName;
  }
  get extension() {
    return this.#extension;
  }
  getContents() {
    return this.contents;
  }
  write(str) {
    this.contents += this.contents.length === 0 ? str : `\n ${str}`;
  }
  gets() {
    const line = this.contents.split("\n")[this.stringCounter];
    this.stringCounter++;
    return line;
  }
  getc() {
    const char = Array.from(this.contents)[this.charCounter];
    this.charCounter++;
    return char;
  }
}

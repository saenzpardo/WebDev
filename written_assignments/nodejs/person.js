// wrapper function
// (function (exports, require, module, __filename, __dirname) {
//  });

// console.log(__dirname, __filename);

// class example
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age}`);
  }
}

// object example
const personObject = {
  name: "John Doe",
  age: 30,
};

module.exports = Person;

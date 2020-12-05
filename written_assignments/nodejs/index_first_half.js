/*
    Node.js crash course
*/

// common JS
const Person = require("./person");

//ES6 - not ready yet
// import Person from './person';

const person1 = new Person("John Doe", 30);

person1.greeting();

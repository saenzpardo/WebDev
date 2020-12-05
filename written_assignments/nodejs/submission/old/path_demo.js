
// path module
const path = require('path');

// Base file name
console.log(__filename); //gives complete path
console.log(path.basename(__filename)); //gives just base file name

// Just Directory Name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename).base);

// Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html')); //join paths and solves delimmiter issues

// file system demo

const fs = require("fs");
const path = require("path");

// Create folder - takes in folder you want to create for first parameter,
//                  options for second parameter and callback for third.

// fs.mkdir(path.join(__dirname, '/test'), {}, function(err){
//     if(err) throw err;
//     console.log('Foler created..');
// });

// same as above with arrow function
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//   if (err) throw err;
//   console.log("Folder created..");
// });

// Create and write to file
// Similar to previous, but add in file you want to create/write after folder
// 2nd parameter is text you want to write
// fs.writeFile(
//   path.join(__dirname, "/test", "hello.txt"),
//   "Hello World!",
//   (err) => {
//     if (err) throw err;
//     console.log("File written to");

//     // append to file
//     fs.appendFile(
//       path.join(__dirname, "/test", "hello.txt"),
//       " I love Node.JS",
//       (err) => {
//         if (err) throw err;
//         console.log("File written to");
//       }
//     );
//   }
// );

// Read file
// fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err) => {
    if (err) throw err;
    console.log('File renamed');
  });
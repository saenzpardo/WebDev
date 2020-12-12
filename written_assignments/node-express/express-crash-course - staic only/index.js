// use nodemom to keep server looking for changes and reload page
// use -D flag for development
// npm install -D nodemon

const express = require('express');
// use path to handle file paths
const path = require('path');

const app = express();

// // routing - the below method works, but isn't
// // ideal because you would have to route every
// // single page you wanted on the site. 
// // Express comes with static server support

// // GET request at root with arrow function to handle
// // request and response
// app.get('/', (req, res) => {
//     // sendFile method to push to browser
//     // path.join to join file paths
//     // __dirname to get current directory
//     // public to find public folder
//     // index.html --> end file we want to push to browser
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// Set static folder - this accomplishes the same as
// the code above, but names static folder to make
// routing more simple.
app.use(express.static(path.join(__dirname, 'public')));

// use process.env.PORT because when we deploy, the server will 
// name environment port.  5000 is for dev port
const PORT = process.env.PORT || 5000;

// listen for PORT variable and provide callback arrow function to log
// to the console our port number.  Callback function is after comma
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// stopped at 21:46
// use nodemom to keep server looking for changes and reload page
// use -D flag for development
// npm install -D nodemon
const express = require("express");
// use path to handle file paths
const path = require("path");
// import logger
const logger = require("./middleware/logger");

// sets up app
const app = express();

// // init middleware
// app.use(logger);

// Body Parser Middleware
app.use(express.json());
// For form submission
app.use(express.urlencoded({ extended: false}));

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Members API routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


// stopped at 40:39
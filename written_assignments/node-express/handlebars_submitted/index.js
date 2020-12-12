// use nodemom to keep server looking for changes and reload page
// use -D flag for development
// npm install -D nodemon
const express = require("express");
// use path to handle file paths
const path = require("path");
// import logger
const logger = require("./middleware/logger");
// import handlebars
const exphbs = require('express-handlebars');
// Members file
const members = require('./Members');

// sets up app
const app = express();

// // init middleware
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
// For form submission
app.use(express.urlencoded({ extended: false}));

// Homepage route
app.get('/', (req, res) => res.render('index', {
    title: 'Member App',
    members
})); // shows first because it's listed first

// Set Static Folder
app.use(express.static(path.join(__dirname, "public")));

// Members API routes
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));



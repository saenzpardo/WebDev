
const url = require('url');

// instantiate new url
const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');


// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());
// Host (root domain)
console.log(myUrl.host)
// Hostname (does not get port)
console.log(myUrl.hostname);
// Pathname
console.log(myUrl.pathname);
// Serialized Query - query parameters
console.log(myUrl.search);
// Search params object
console.log(myUrl.searchParams);
// Add params
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);
// Loop through params and display in a key/value pair format
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
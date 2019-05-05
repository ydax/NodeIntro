// Node Modules

// Third-party Packages
const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('This will trigger on any page!');
    next();
})

app.use('/add-product', (req, res, next) => {
    console.log('In the second middleware!');
    res.send('<h1>The "Add Product" Page</h1>');
})

app.use('/', (req, res, next) => {
    //   ^--- This filters for anything that starts with a slash... so... everything
    console.log('In the second middleware!');
    res.send('<h1>Hello from express!</h1>');
})

/* The code below this comment replaces the long-hand 
declaration of the server through express.js

const server = http.createServer(app);
server.listen(3000); 
*/

app.listen(3000); // same functionality as commented code
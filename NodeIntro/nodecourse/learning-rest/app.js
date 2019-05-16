const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const feedRoutes = require('./routes/feed');

const app = express();

app.use(bodyParser.json()); // uses body-parser to extract JSON data

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // allows any domain -------------------------^
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes)

mongoose.connect('')
app.listen(8080);
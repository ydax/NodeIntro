const express = require('express');

const app = express();

const homeRoutes = require('./routes/home');
const userRoutes = require('./routes/users');

app.use('/users', userRoutes);
app.use(homeRoutes);

app.listen(3001);
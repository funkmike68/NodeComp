const express = require('express');

const app = express();

app.use('/', (req, res, next) => {
    console.log('This always runs!');
    next();
});

app.use('/add-city', (req, res, next) => {
    console.log('In yet another middleware');
    res.send('<h1>The "Add A City" Page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In yet another middleware');
    res.send('<h1>Hola from Express!</h1>');
});

app.listen(3000);
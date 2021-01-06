// Create an npm project and install Express.js and Nodemon

/*
Create an Express app which funnels through 2 middleware functions
that log something to the console and return one response.
console.log('Hola');
*/

/*
Handle requests to "/" and "/users" such that each request only has one handler/middleware that 
does something with it (e.g. send dummy response.).
*/

const express =  require('express');

const app = express();

/*
app.use((req, res, next) => {
    console.log('Learning Node.js with Max is cool!');
    next();
});
*/

app.use('/users', (req, res, next) => {
    console.log('Learning Node.js with Max is all right!');
    res.send('<h1>This the Node.js Assignment 2 Page!</h1>');
});

app.use('/', (req, res, next) => {
    console.log('Learning Node.js with Max is cool!');
    res.send('<h1>Learning Node is fun!</h1>');
});

/*
app.use((req, res, next) => {
    console.log('Learning Node.js with Max is all right!');
    res.send('<h1>This the Node.js Assignment 2 Page</h1>');
});
*/

app.listen(3000);
console.log('Now listening on port 3000!');
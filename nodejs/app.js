const http = require('http');

//arrow function
const server = http.createServer((res, req) => {
    console.log(req);
});

server.listen(3000);
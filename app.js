const http = require('http'); // like a PHP require

// require is more or less the same as JS import
// const hostname = '127.0.0.1'; // this is localhost
const port = process.env.PORT || 3000; // localhost:3000

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Sup World, HOW U DOIN');
});

server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`); //react whenever it gets a ping from the server
});

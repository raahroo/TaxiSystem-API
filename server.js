// You need to create a js file server with Node.js.
// It's is not PHP that you can have something like Wamp.

const http = require('http'); //This is the only import syntax for Node.js
const app = require('./app');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);

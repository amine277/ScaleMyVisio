

var http = require('http');
var fs = require('fs');

// Constants
const PORT = 8080;

var server = http.createServer(function (request, response) {

    if (request.url === "/") {
        fs.readFile("src/index.html", function (error, pgResp) {
            if (error) {
                response.writeHead(404);
                response.write('Page is not found');
            } else {
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.write(pgResp);
            }

            response.end();
        });
    } else {

        response.writeHead(200, { 'Content-Type': 'text/html' });
        response.write('<h1>Default Content</h1>');
        response.end();
    }
});

server.listen(PORT);

console.log(`Nodejs Running on http://localhost:3000`);
console.log(`PHPMyAdmin Running on http://localhost:3001`);
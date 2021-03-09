

/*var http = require('http');
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
console.log(`PHPMyAdmin Running on http://localhost:3001`);*/


const express = require("express")
const app = express()




app.use(express.static(__dirname + '/src'));

/*app.put('/products/:number/:name/:prix', (req, res) => {

    products[req.params.number]={name:req.params.name, prix:req.params.prix};
    res.json(products);
});
app.post("/products", function(req, res) {
    products.push({"name": req.query.name , "prix":req.query.prix });
    res.status(201).json(product);
  });*/

/*app.post('/products/', (req, res) => {

    products.push({"name": req.query.name , "prix":req.query.prix });
    res.send(products);
});*/

/*app.get('/:file', (req, res) => {/*
    res.send(req.params.file);
});*/

app.listen(8080, () => {
  console.log("En attente de requêtes...")
})
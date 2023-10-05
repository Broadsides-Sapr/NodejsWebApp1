'use strict';

const cohere = require("cohere-ai");

var http = require('http');
var port = process.env.PORT || 1337;

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);



// Create a new instance of the cohere client
cohere.init("YOUR_API_KEY");

// "Call the endpoint function you'd like to hit to interact with the Cohere API"
// 'cohere.generate("MODEL_NAME", config);'

// 'cohere.generate("gpt3", config);'
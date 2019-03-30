var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    console.log(req);
    console.log(res);
    console.log(document);
    res.write('Hello World!');
    res.end();
}).listen(8080);
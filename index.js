var http = require('http');

var server = http.createServer(function (req, res) {
    if (req.url == '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is the Default Page of thie site of owner of aws.If You have not specified anything or a Address, this page should be invisible.This is the update on 12-october-2023</p></body></html>');
        res.end();

    }
    else if (req.url == "/home") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is Home Page. Hello All And Good Afternoon. This page was added some content by AWS Code Pipeline. </p></body></html>');
        res.end();

    }
    else if (req.url == "/dashboard") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is Dashboard Page. Hello All And Good Morning. Iam again adding code format copy.</p></body></html>');
        res.end();
    }
    else if (req.url == "/error") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is Error Page. Hello All And Good Morning.</p></body></html>');
        res.end();
    }
    else
        res.end('Invalid Request!');
});

server.listen(5000);
console.log('Node.js web server at port 5000 is running..')

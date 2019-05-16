const http = require('http');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    const users = ['<li>Davis Jones</li>', '<li>Ludell Jones</li>'];

    if (url === '/' || '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Welcome to my Page!</title></head>');
        res.write('<body><form action = "/create-user" method="POST"><input type="text" name="message"><button type="submit">Add User</button></form></body>');
        res.write('<body><h1>Here are our current users:</h1></body>');
        res.write(`<ul>${users}</ul>`);
    }
};

const server = http.createServer(requestHandler);

server.listen(3000);
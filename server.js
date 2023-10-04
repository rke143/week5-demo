const http = require('http');
const fs = require('fs');
const url = require('url');
const port = 3000;

const server = http.createServer((req, res) => {
    const requestUrl = url.parse(req.url).pathname;
    res.writeHead(200, {'Content-type':'text/html'});

    if(requestUrl === '/') {
        fs.readFile('index.html', (error, data) => {
            if(error) {
                res.writeHead(404);
                res.write('Error. File not found.');
            } else {
                res.write(data);
            }
            res.end();
        });
    } else {
        res.write('Error. Page not found.');
        res.end();
    }
    
});

server.listen(port, error => {
    if(error) {
        console.log(error);
    } else {
        console.log(`Server is listening on port ${port}.`);
    }
});
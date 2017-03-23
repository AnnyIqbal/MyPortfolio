var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    if(req.url === '/') {
        res.writeHead(202, {'Content-Type': 'text/html'});
        fs.readFile(`src/index.html`, 'utf8', function(err, data) {
            // if(err) throw err;
            console.log(data);
            res.end(data);
        });
    }
    // res.end('abc');
});
server.listen(3000, function() {
    console.log('server is running on port 3000');
});

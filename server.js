// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function(req, res) {
//     if(req.url === '/') {
//         res.writeHead(202, {'Content-Type': 'text/html'});
//         fs.readFile(`dist/index.html`, 'utf8', function(err, data) {
//             // if(err) throw err;
//             console.log(data);
//             res.end(data);
//         });
//     }
//     // res.end('abc');
// });
// server.listen(3000, function() {
//     console.log('server is running on port 3000');
// });


var express = require('express');

var app = express();

app.use(express.static('./app'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/src/index.html');
});
app.get('/about', function(req, res) {
    res.send('this is about page');
});

app.listen(3000); // Loading ...

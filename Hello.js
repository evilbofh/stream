var os = require('os');
var http = require('http');
port = 9000;
var bindip = "127.0.0.3";
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World from ' + os.hostname() +'!\n');
}).listen(port);
require('dns').lookup(require('os').hostname(), function (err, add, fam) {
console.log('Server running at http://' + add + ':' + port + '/');
});

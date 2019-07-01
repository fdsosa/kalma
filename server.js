var express = require('express');
var server = express();
var path = require('path');
var port = process.env.PORT || 8080;
var env = process.env.ENV || 'DEV';
var folderBuild = env == 'PROD' ? '/dist/' : '/.temp/';

server.use(express.static(path.join(__dirname, folderBuild)));

server.get('/', function (req, res) {
  return res.sendFile(path.join(__dirname, folderBuild, 'index.html'));
});

server.get('/home', function (req, res) {
  return res.sendFile(path.join(__dirname, folderBuild, 'index.html'));
});

server.listen(port, function () {
  console.log('Mi servidor esta en linea en el puerto ' + port);
});

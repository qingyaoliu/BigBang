const express = require('express');
const app = express();

var ipAddr = '127.0.0.1';
var port = '8080';

app.use(express.static(__dirname + "/html"));
app.use('/design',express.static(__dirname + '/design') )
app.use('/img',express.static(__dirname + '/img') )
app.use('/javascript', express.static(__dirname + '/javascript'))

//Webserver auf den Port schalten
var server = app.listen(port ,function(){
    console.log(' listening at ' + ipAddr + ":" +port);
});

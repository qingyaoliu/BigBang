var app = require("express");
var conf = require('./config.json');

var ipAddr = '127.0.0.1';
var port = '8080';


app.configure(function(){
	// statische Dateien ausliefern
	app.use(express.static(__dirname + '/public'));
});

app.use(bodyParser.json({limit: '1mb'}));
app.use('/home.html',express.static(__dirname + '/home') )
app.use('/index.html',express.static(__dirname + '/index') )
app.use('/players.html', express.static(__dirname + '/players'))

//Webserver auf den Port schalten
var server = app.listen(port ,host, function(){
    console.log('%s listening at %s ', app.name , app.url);
});

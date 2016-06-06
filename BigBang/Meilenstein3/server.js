
var playersAll = require('.data/playersAll.json');
var playersFav = require('.data/playersFav.json');
var http = require("http");            
var express = require('express');
var app = express();
var ipAddr = '127.0.0.1';
var port = '8080';
var server = http.createServer(app);

app.use(bodyParser.json({limit: '1mb'}));

app.get("/", function(req, res){
	res.send("Hello GET!");
});

app.post("/", function(req, res){
	res.send("Hello POST!");
});

app.get('/api/players', (req, res)=>{
	var query = req.params.favorites || 'false';

	if(query === 'true'){
		res.json(200, playersFav);
	} else if(query === 'false'){
		res.json(200, playersAll);
	} else {
		res.json(404, {message: 'FAIL'});
	}
});

app.get('/api/players', (req, res)=>{
	var query = req.params.name;

	if(query.indexOf(0) === '/[A-Z]'){
		res.json(200, playersAll);
	else {
		res.json(404, {message: 'The player was not found!'});
	}
});

app.delete('/api/players/:id',(req,res))=>{
	var id = req.params._id;
	if(id){
	res.json(200,{message: 'Player with the ID'+id+'has been deleted!'});
	}
});

app.post('/api/players', (req, res)=>{
	if(req.body) {
		return res.json(200, { message: 'success' });
	}

	res.json(404, { message: 'Empty body is not allowed.' });
});

app.put('/api/players/:id', (req, res)=>{
	var id = req.params._id;
	if(id){
	res.json(200,{message: 'Player with the ID'+id+' has been successfully updated'});
	}
});


server.listen(port ,ipAddr, function(){
    console.log('%s listening at %s ', server.name , server.url);
});

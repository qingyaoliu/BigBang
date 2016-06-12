const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const fs = require('fs');

const localhost = '127.0.0.1';
const port = '8080';

//statische Dateien ausliefern
app.use(express.static(__dirname + '/html'));
app.use('/design', express.static(__dirname + '/design'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/javascript', express.static(__dirname + '/javascript'));


function f(req, res) { 
  fs.readFile(__dirname + 'http/chat.html', (err, data) =>{
    if (err) { 
        res.writeHead(500);
        return res.end('Error cannot find chat.html'); 
    }
    res.writeHead(200);
    res.end(data); 
  });
}

io.sockets.on('connection', socket=> {
 socket.on('addme',username=> {
   socket.username = username;
   socket.emit('chat', 'SERVER', 'welcome '+username); 
   socket.broadcast.emit('chat', 'SERVER', username + ' joined');
 });
 socket.on('sendchat', data=> { 
   io.sockets.emit('chat', socket.username, data);
 });

 socket.on('disconnect', ()=>{
   io.sockets.emit('chat', 'SERVER', socket.username + ' left');
 });
 
});



var players = require('./players.json');

app.get('/api/players', (req, res) => {
	if (req.query.favorites === 'true') {
        console.log("Get nur die Favoriten");
        return res.status(200).json(players.filter(p => p.favorit));
    }
	else if (typeof req.query.search != "undefined") {
        console.log("Suche nach einem Player mit dem Anfangsbuchstaben vom Nachname: " + req.query.search)
        return res.status(200).json(players.filter(p => p.name.charAt(0).toUpperCase() === req.query.search.toUpperCase()));
    }
	else
        console.log("Get alle Player");
        return res.status(200).json(players)
});
 
 
app.post('/api/players', (req, res) => {
    console.log('Got a POST request');
    if (req.body) {
        res.status(200).json({'message': 'Spieler wurde erfolgreich gespeichert'})
    }
    else
        res.status(404).json({'message': 'Error'})
});


app.put('/api/players/:id', (req, res) => {
    console.log('Got a PUT request for Player: ' + req.params.id);
    res.status(200).json({'message': 'Spieler mit der ID' + req.params.id + 'wurde erfolgreich geupdateed'})
});

	
app.delete('/api/players/:id', (req, res) => {
    console.log('Got a DELETE request');
	res.status(200).json(players.filter(p => p._id !== req.params.id))
});


http.listen(port ,localhost,function(){
    console.log('Server runs at ' + localhost + ":" +port);
});
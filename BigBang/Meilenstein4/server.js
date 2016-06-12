var   express = require('express');
var   app = express();
var   server = require('http').createServer(app);
var   io = require('socket.io').listen(server);
var   host = '127.0.0.1';
var   port = '8080';

server.listen(port);

	// statische Dateien ausliefern
	app.use(express.static(__dirname + '/public'));

	
app.get('/', (req, res)=>{
	// chat.html wird ausgegeben
	res.sendFile(__dirname + '/public/chat.html');
});



io.sockets.on('connection', function (socket) {
	// der Client ist verbunden
	socket.emit('chat', { zeit: new Date(), text: 'Du bist nun mit dem Server verbunden!' });
	// wenn ein Benutzer einen Text senden
	socket.on('chat', function (data) {
		// so wird dieser Text an alle anderen Benutzer gesendet
		io.sockets.emit('chat', { zeit: new Date(), name: data.name || 'Anonym', text: data.text });
	});
});



// Portnummer in die Konsole schreiben

	console.log('Der Server läuft nun unter http://127.0.0.1:' + port + '/');

	

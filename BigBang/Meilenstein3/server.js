const express = require('express');
const app = express();

const localhost = '127.0.0.1';
const port = '8080';

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


app.listen(port ,localhost,function(){
    console.log('Server runs at ' + localhost + ":" +port);
});
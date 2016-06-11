module.exports = function(app){
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());

var data = require('./players.json');

app.get("/", (req, res)=>{
	res.end("Hello GET!");
});

app.post("/", (req, res)=>{
	res.end("Hello POST!");
});

app.get('/api/players', (req, res)=>{
	var query = req.params.favorites || 'false';

	if(query === 'true'){
		res.json(200, (players.filter(f=>f.favorit)));
	} else if(query === 'false'){
		res.json(200, players);
	} else {
		res.json(404, {message: 'FAIL'});
	}
});

app.get('/api/players', (req, res)=>{
	var query = req.params.name;
	
	if(typeof req.query.search != "undefined"){
		res.json(200, players.filter((n)=>{n.name.charAt(0).toUpperCase()=== req.query.search.toUpperCase()}));
	}else{
		res.json(404, {message: 'The player was not found!'});
	
	}
});

app.delete('/api/players/:id',(req,res)=>{
	var id = req.params.id;
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

}

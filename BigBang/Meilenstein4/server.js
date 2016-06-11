var   express = require('express');
var   app = express();
var   http = require('http').Server(app);
var   io = require('socket.io').http;

var   ipAddr = '127.0.0.1';
var   port = '8080';



	
app.get('/', (req, res)=>{
	// chat.html wird ausgegeben
	res.sendfile(__dirname + '/public/chat.html');
});



io.sockets.on('connection', (socket)=>{
	// der Client ist verbunden
	socket.emit('Willkommen, bitte gebe deinen Usernamen ein!');
	
	var client={
    socket:socket,
    name:false
	}
	
	socket.on('chat message',(msg)=>{
        console.log('chat message:'+msg);
        var obj={time:getTime()}; 
         
       
        if(!client.name){
            client.name=msg;
            obj['text']=client.name;
            obj['author']='Sys';
            obj['type']='welcome';
            socket.name=client.name; 
            if(!onlineUsers.hasOwnProperty(client.name)){
                onlineUsers[client.name]=client.name;
            }
			socket.emit('system',obj); 
		}else{
			obj['text']=msg;
            obj['author']=client.name;
            obj['type']='message';
            console.log(client.name+' say:'+msg);
			//die Nachricht, die von sich selbst geschrieben wurde,ausdrücken
			socket.emit('chat message',obj);
		}
	});
	// wenn ein Benutzer einen Text senden
	socket.on('chat', (data)=>{
		// so wird dieser Text an alle anderen Benutzer gesendet
		io.sockets.emit('chat', { text: "Willkommen ", name: data.name});
	});
	
});



// Portnummer in die Konsole schreiben
http.listen(port,()=>{
	console.log('Der Server läuft nun unter http://127.0.0.1:' + port + '/');
});
	
var getTime=()=>{
  var date = new Date();
  return date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
}

const socket = io.connect('http://localhost:8080'); 
  socket.on('connect', ()=> {
    socket.emit('addme', prompt('Willkommen, bitte gebe deinen Username ein')); 
  });
  socket.on('chat',(username, data)=>{ 
    let p = document.createElement('p'); 
    p.innerHTML = username + ': ' + data;
    document.getElementById('output').appendChild(p); 
  });
  window.addEventListener('load',()=> { 
    document.getElementById('sendtext').addEventListener('click',function() {
        let text = document.getElementById('data').value; 
        socket.emit('sendchat', text);
    }, false); 
  }, false);

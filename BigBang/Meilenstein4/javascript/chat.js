$(document).ready(() =>{
    var socket = io();
    var username;
    var input = $('#msg');
    var box = $('#messages');

        function addUser() {
            username = input.val();
            if (username) {
                input.val('');
                socket.emit('add user', username);
            }
        }

        function sendMessage() {
            message = input.val();
            if (message && username) {
                input.val('');
                socket.emit('new message', message);
            }
        }

        $('form').submit( (e)=> {
            e.preventDefault();

            if (username) {
                sendMessage();
            } else {
                addUser();
            }
         });
		 

		function scrollToBottom(area) {
            area.scrollTop(area[0].scrollHeight);
        }

        
        socket.on('new message',  (data)  => {
            box.append(data.username + ": " + data.message + "\n");
            scrollToBottom(box);
        });

        socket.on('user joined',  (data)  =>  {
            box.append('welcome ' + data.username + "\n");
            scrollToBottom(box);
        });
});

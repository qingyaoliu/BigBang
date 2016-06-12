(document).ready(function(){
    // WebSocket
    var socket = io.connect();
    // neue Nachricht
    socket.on('chat', function (data) {
        ('#content').append(
            ('<li></li>').append(
                // Uhrzeit
                ('<span>').text:getTime();
                ),
                // Name
                ('<b>').text(typeof(data.name) != 'undefined' ? data.name + ': ' : ''),
                // Text
                ('<span>').text(data.text))
        );
        // nach unten scrollen
        ('body').scrollTop(('body')[0].scrollHeight);
    });
    // Nachricht senden
    function senden(){
        // Eingabefelder auslesen
        var name = ('#name').val();
        var text = ('#text').val();
        // Socket senden
        socket.emit('chat', { name: name, text: text });
        // Text-Eingabe leeren
        ('#text').val('');
    }
    // bei einem Klick
    ('#senden').click(senden);
    // oder mit der Enter-Taste
    ('#text').keypress(e =>{
        if (e.which == 13) {
            senden();
        }
    });
});
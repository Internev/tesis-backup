// Created by Duncan on 12.29.2016
// Methods for main_content.vu

module.exports = {
  // Function adds each charactor to input
  update(e) {
    this.input = e.target.value
  },
  // On each keyup counts amount of words on document
  wordCounter() {
    this.count = this.input.split(' ').length;
  }
}


/*
 basic setup for socket io using jquery

<script src="bower_components/underscore/underscore.js"></script>
<script src="http://localhost:3000/socket.io/socket.io.js"></script>
<script src></script>
<script>
  var socket = io.connect('http://localhost:3000');
  $('form').submit(function() {
    socket.emit('chat message', $('#message').val());
    $('#message').val('');
    return false;
  });
  socket.on('chat message', function(msg) {
    $('#messages').append($('<li>').text(msg));
  });
</script>

*/
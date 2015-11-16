/**
 * Created by PC on 2015/11/16.
 */
$(document).ready(function() {
    var socket = io.connect();
    socket.on('news', function (data) {
        var dom = document.getElementById("contents");
        dom.innerText = data.hello;
        console.log(data);
        socket.emit('my other event', { my: 'data' });
    });
});
/**
 * Created by PC on 2015/11/16.
 */
$(document).ready(function() {
    var socket = io.connect();
    var from = $.cookie('user');
    var contents = $('#contents');
    socket.emit('online',{user:from});
    socket.on('online',function(data){
        var message = $('<div>');
        message.css('color','#f00').text("("+ $.getNow()+"): "+data.user+"进入了聊天室");
        $('#contents').append(message).append('<br/>');
    });

    socket.on('chat',function(data){
        var message = $('<div>');
        var start = $('<div>');
        message.html(data.user+"("+ $.getNow()+")说: "+data.msg);
        contents.append(start).append(message).append('<br/>');
        //使页面滚动到'start'处
        start[0].scrollIntoView();
    });

    var callback = function(){
        var msg = $('#input_content').html();
        if(msg == ""){
            return;
        }
        socket.emit('chat',{msg:msg,user:from});
        $("#input_content").html("").focus();
    };

    $("#say").click(callback);

    $("#input_content").keydown(function(event){
        if(event.keyCode==13){
            callback();
        }
    });
});

$.extend({
    getNow: function (){
        var date = new Date();
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' +
            date.getHours() + ':' + (date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()) + ":" + (date.getSeconds() < 10 ? ('0' + date.getSeconds()) : date.getSeconds());
    }
});

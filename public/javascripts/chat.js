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
        var start = $('<div>');
        message.css('color','#f00').text("("+ $.getNow()+"): "+data.user+"进入了聊天室");
        $('#contents').append(start).append(message).append('<br/>');
        start[0].scrollIntoView();
        flushUsers(data.users);
    });

    socket.on('offline',function(data){
        var message = $('<div>');
        var start = $('<div>');
        message.css('color','#f00').text("("+ $.getNow()+"): "+data.user+"下线了");
        $('#contents').append(start).append(message).append('<br/>');
        start[0].scrollIntoView();
        flushUsers(data.users);
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
        if(msg == "" || msg == "请输入..."){
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
    }).focus(function(){
        $("#input_content").empty();
    }).blur(function(){
        $("#input_content").html("请输入...");
    });

    function flushUsers(users){
        $('#list').empty();
        for(var i in users){
            $('#list').append($('<li>').text(i));
        }
    };
});

$.extend({
    getNow: function (){
        var date = new Date();
        return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' +
            date.getHours() + ':' + (date.getMinutes() < 10 ? ('0' + date.getMinutes()) : date.getMinutes()) + ":" + (date.getSeconds() < 10 ? ('0' + date.getSeconds()) : date.getSeconds());
    }
});

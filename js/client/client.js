var Client = {};

Client.socket = io.connect();

Client.send_log = function(){
    Client.socket.emit('newlogin',{
        username : Login.username_input.text.text,  
        password : Login.password_input.text.text
    });
};

Client.send_register = function(){
    Client.socket.emit('newregister',{
        username : Register.username_input.text.text,  
        password : Register.password_input.text.text
    });
};

Client.socket.on('loginsucceed',function(data){
    Client.username = data.username;
    Client.userid = data.userid;
    game.state.start('Home');
});

Client.socket.on('loginfailed',function(){
    Bubble.displayBubble('incorrect username or password',1235,450);
});

Client.send_register = function(){
    Client.socket.emit('newregister',{
        username : Register.username_input.text.text,  
        password : Register.password_input.text.text
    });
};

Client.socket.on('registerfailed',function(){
    Bubble.displayBubble('username already existed',1235,450);
});

Client.socket.on('registersucceed',function(){
    Bubble.displayBubble('register succeed',1235,450);
    setTimeout("game.state.start('Login')",3000);
});

Client.send_newroom_request = function(){
    Client.socket.emit('newroom');
};

Client.socket.on('roomset',function(){
    game.state.start('Room');
});

Client.send_joinroom_request = function(){
    Client.socket.emit('joinroom');
};

Client.socket.on('roomfull',function(data){
    if(Client.username == data.master)
        Room.display_guest(data.guest);
    else
        game.state.start('Guestroom');
    });

Client.send_text_master_request = function(){
    Client.socket.emit('requestformasterid');
};

Client.socket.on('masteridresponse',function(data){
    Guestroom.display_master(data);
});

Client.send_start_request = function(){
    Client.socket.emit('gamestartrequest');
};

Client.socket.on('gamestart',function(data){
    if(Client.userid == data)
        game.state.start('Board');
    else
        game.state.start('Guestboard');
});

Client.send_guest_exit = function(){
    game.state.start('Home');
    Client.socket.emit('roomexit');
};

Client.socket.on('guestleave',function(){
    Room.remove_guest();
});

Client.send_master_exit = function(){
    game.state.start('Home');
    Client.socket.emit('roomterminate');
};

Client.socket.on('roomterminate',function(){
    game.state.start('Home');
    Client.socket.emit('guestroomterminate');
});

Client.send_roominfo_request = function(){
    Client.socket.emit('roominforequest');
};

Client.socket.on('roominfo',function(data){
    if(Client.username == data.master)
        Board.guest_display(data);
    else
        Guestboard.master_display(data);
});

Client.send_master_status_check_request = function(){
    Client.socket.emit('masterstatuscheck',Client.username);
};

Client.socket.on('masteruserstatus',function(data){
    if(data != 'disable'){
        Board.display_input();
        Board.display_confirm_button();
    }
});




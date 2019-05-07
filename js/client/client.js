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
        username : Login.username_input.text.text,  
        password : Login.password_input.text.text
    });
};

Client.socket.on('loginsucceed',function(){
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
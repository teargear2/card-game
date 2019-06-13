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

Client.socket.on('loginsucceed',function(data){
    Client.username = data.username;
    Client.userid = data.userid;
    game.state.start('Information');
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

Client.send_username_modify = function(){
    Client.socket.emit('usernamemodify',{
        oldusername : Client.username,
        newusername : Information.username_input.text.text
    });
};

Client.send_password_modify = function(){
    Client.socket.emit('passwordmodify',{
        username : Client.username,
        newpassword : Information.password_input.text.text
    });
};

Client.send_userbirth_modify = function(){
    Client.socket.emit('userbirthmodify',{
        username : Client.username,
        newuserbirth : Information.userbirth_input.text.text
    });
};

Client.send_usergender_modify = function(){
    Client.socket.emit('usergendermodify',{
        username : Client.username,
        newusergender : Information.usergender_input.text.text
    });
};

Client.send_userintro_modify = function(){
    Client.socket.emit('userintromodify',{
        username : Client.username,
        newuserintro : Information.userintro_input.text.text
    });
};

Client.socket.on('modificationsucceed',function(){
    Bubble.displayBubble('Modification Succeed',1235,450);
});

Client.socket.on('infosend',function(data){
    Information.display_info(data);
});


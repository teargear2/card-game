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
<<<<<<< HEAD
        username : Register.username_input.text.text,  
        password : Register.password_input.text.text
    });
};

Client.socket.on('loginsucceed',function(data){
    Client.username = data.username;
    Client.userid = data.userid;
=======
        username : Login.username_input.text.text,  
        password : Login.password_input.text.text
    });
};

<<<<<<< HEAD
Client.socket.on('loginsucceed',function(data){
    Client.username = data.username;
    Client.userid = data.userid;
    game.state.start('Information');
=======
Client.socket.on('loginsucceed',function(){
>>>>>>> 841487779c4311a1692a8fd0028a3a6fbf853364
    game.state.start('Home');
>>>>>>> 81df588bef5a4ed5680cbd57699e56daee8c4871
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
<<<<<<< HEAD
});

=======
<<<<<<< HEAD
});

Client.send_newroom_request = function(){
    Client.status = 'master';
    Client.socket.emit('newroom');
};

Client.socket.on('roomset',function(){
    game.state.start('Room');
});

Client.send_joinroom_request = function(){
    Client.status = 'guest';
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

Client.send_guest_status_check_request = function(){
    Client.socket.emit('gueststatuscheck',Client.username);
};

Client.socket.on('guestuserstatus',function(data){
    if(data != 'disable'){
        Guestboard.display_input();
        Guestboard.display_confirm_button();
    }
});

Client.send_message = function(data){
    Client.socket.emit('sendmessage',data);
};

Client.socket.on('newmessage',function(data){
    if(Client.userid == data.id)
        Bubble.displayBigBubble(data.message,1400,700);
    else
        Bubble.displayBigBubble(data.message,1400,250);
});

/*Client.socket.on('gamemessage',function(data){
    if(Client.status == 'master')
        Board.process(data);
    else
        Guestboard.process(data);
});*/

//游戏逻辑部分
Client.socket.on('receivepile0',function(data){
    Guestboard.receive_pile(data);
    
});

Client.socket.on('receivefirstturn0',function(data){
    Guestboard.receive_firstturn(data);
});

Client.socket.on('receiveopplayedcardmessage',function(data){
    if(data.status == 'master')
        Guestboard.receive_opplayedcard(data);
    else
        Board.receive_opplayedcard(data);
});

Client.socket.on('receiveopplayedcardtype',function(data){
    if(data.status == 'master')
        Guestboard.receive_opplayedcardtype(data);
    else
        Board.receive_opplayedcardtype(data);
});

Client.socket.on('receiveopplayedcardnum',function(data){
    if(Client.status == 'master')
        Guestboard.receive_numopplayedcard(data);
    else
        Board.receive_numopplayedcard(data);
});

Client.socket.on('receiveturn',function(data){
    if(Client.status == 'master')
        Guestboard.receive_turn(data);
    else
        Board.receive_turn(data);
});

//资料部分
>>>>>>> 81df588bef5a4ed5680cbd57699e56daee8c4871
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

<<<<<<< HEAD
=======
//管理员
// send infoManage
Client.send_infoManage1 = function(){
    Client.socket.emit('newinfoManage1',{
        username : InfoManage.username1_input.text.text 
       
    });
};

Client.send_infoManage2 = function(){
    Client.socket.emit('newinfoManage2',{
         
        username : InfoManage.username2_input.text.text
    });
};

Client.send_infoManage3 = function(){
    Client.socket.emit('newinfoManage3',{
         
        username : InfoManage.username3_input.text.text,
        password : InfoManage.password3_input.text.text
    });
};

Client.send_ModifyInfo = function(){
    Client.socket.emit('modify',{
         
        username : ModifyInfo.username_input.text.text,
        password : ModifyInfo.password_input.text.text,
        status : ModifyInfo.status_input.text.text
    });
};

//login 
Client.socket.on('manageloginsucceed',function(){
    game.state.start('InfoManage');
});

Client.socket.on('manageloginfailed',function(){
    Bubble.displayBubble('incorrect username or password',1235,450);
});

//infomanage

Client.socket.on('user1',function(doc){
    Bubble.displayBubble(doc.username,1335,450);
    Bubble.displayBubble(doc.password,1335,500);
});

Client.socket.on('failed1',function(){
    Bubble.displayBubble('wrong username',1335,450);
});
Client.socket.on('user2',function(doc){
    Bubble.displayBubble(doc.username,1335,550);
    Bubble.displayBubble(doc.password,1335,600);
});

Client.socket.on('failed2',function(){
    Bubble.displayBubble('wrong username',1235,550);
});
Client.socket.on('user3',function(data){
    Bubble.displayBubble('更改成功',1335,650);
   
});

Client.socket.on('failed3',function(){
    Bubble.displayBubble('更改用户信息失败',1335,650);
});
Client.socket.on('user4',function(data){
    Bubble.displayBubble('更改成功',1335,650);
   
});

Client.socket.on('failed4',function(){
    Bubble.displayBubble('更改用户信息失败',1335,650);
});



Client.socket.on('gameisover',function(){
    console.log('emmm');
    if(Client.status == 'master')
        Board.last();
    else
        Guestboard.last();
});








=======
});
>>>>>>> 841487779c4311a1692a8fd0028a3a6fbf853364
>>>>>>> 81df588bef5a4ed5680cbd57699e56daee8c4871

var Board = {};

Board.init = function(){
    Board.add.plugin(Fabrique.Plugins.InputField);
};

Board.preload = function(){
    game.load.image('board_background','assets/pic/gamebg.jpg');
    game.load.image('head_icon','assets/pic/masterhead.jpg');
    game.load.image('btn','assets/pic/confirm.png');
    Maingame.preload();
};

Board.create = function(){
    Board.bg = game.add.tileSprite(0, 0, 1920, 1080, 'board_background');
    Board.master_icon = game.add.sprite(20, 800, 'head_icon');
    Board.text_master = game.add.text(50, 970, Client.username, { font: "48px Arial", fill: "#ff0044", align:"center"});
    Board.status_check();
    Board.guest_display_request();
    setTimeout("Maingame.pretostart()",3000);
};

Board.guest_display_request = function(){
    Client.send_roominfo_request();
};

Board.guest_display = function(data){
    Board.guest_icon = game.add.sprite(20, 20, 'head_icon');
    Board.text_guest = game.add.text(50, 190, data.guest, { font: "48px Arial", fill: "#ff0044", align:"center"});
};

Board.status_check = function(){
    Client.send_master_status_check_request();
};

Board.display_input = function(){
    Board.conversation_input = game.add.inputField(1370, 850,{
        width: 300,
        padding: 10,
        fill: '#000',
        stroke: '#fff',
        backgroundColor: '#d0cdba',
        borderWidth: 2,
        borderColor: '#b2af9b',
        borderRadius: 3,
        font: '18px pixel',
        placeHolder: 'your comment',
        placeHolderColor: '#b2af9b',
        cursorColor: '#b2af9b',
        max: 200
    });
};

Board.display_confirm_button = function(){
    Board.confirm_button = game.add.button(1720,850,'btn',function(){
        Client.send_message(Board.conversation_input.text.text);
    });
};

/*Board.send_game_message = function(data){
    Client.socket.emit('gamemessage',data);
};*/

Board.send_pile_message = function(data){
    Client.socket.emit('pilemessage0',data);
   
};

Board.send_firstturn = function(data){
    Client.socket.emit('firstturn0',data);
};

Board.send_playedcardmessage = function(data){
    Client.socket.emit('playedcardmessage',{carddata : data,status : Client.status});
};
Board.send_playedcardtype = function(data){
    Client.socket.emit('playedcardtype',{cardtypedata:data,status: Client.status});
};
Board.send_numplayedcard = function(data){
    Client.socket.emit('numplayedcard',{numdata:data,status:Client.status});
};
Board.send_turn = function(data){
    Client.socket.emit('turn',{turndata:data,status:Client.status});
};

Board.receive_opplayedcard= function(data){
    Maingame.opplayedcard=data.carddata;
};

Board.receive_opplayedcardtype= function(data){
    Maingame.opplayedcardtype=data.cardtypedata;
};

Board.receive_numopplayedcard= function(data){
    Maingame.numopplayedcard=data.numdata;
};

Board.receive_turn= function(data){
    Maingame.whooseturn=data.turndata;
    Maingame.start();//game start
};

Board.endgame = function(){
    Board.wintext = game.add.text(540, 860, 'You Win', { font: "48px Arial", fill: "#ff0044", align:"center"});
    Maingame.clear();//game data reset
    setTimeout("game.state.start('Home')",3000);
    Client.socket.emit('mastergameover');
};

Board.last = function(){
    Board.losetext = game.add.text(300, 500, 'You Lose', { font: "48px Arial", fill: "#ff0044", align:"center"});
    Maingame.clear();//game data reset
    setTimeout("game.state.start('Home')",3000);
    Client.socket.emit('killme');
};
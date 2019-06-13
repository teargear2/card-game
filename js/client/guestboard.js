var Guestboard = {};

Guestboard.init = function(){
    Guestboard.add.plugin(Fabrique.Plugins.InputField);
};

Guestboard.preload = function(){
    game.load.image('board_background','assets/pic/gamebg.jpg');
    game.load.image('head_icon','assets/pic/masterhead.jpg');
    game.load.image('btn','assets/pic/confirm.png');
    game.load.audio('intro','assets/music/intro.mp3');
    //game.load.image('log_background','assets/pic/background3.jpg');
    game.load.image('musiconbtn','assets/pic/musicon.jpg');
    game.load.image('musicoffbtn','assets/pic/musicoff.jpg');
    game.load.image('pokerback','assets/pic/poker_back.png');
    game.load.image('ready','assets/pic/ready.png');
    game.load.image('tick','assets/pic/tick.png');
    game.load.image('playcardbtn','assets/pic/playcard.png');
    game.load.image('endturnbtn','assets/pic/endturn.png');
    game.load.image('10','assets/pic/10.jpg');
    game.load.image('11','assets/pic/11.jpg');
    game.load.image('12','assets/pic/12.jpg');
    game.load.image('13','assets/pic/13.jpg');
    game.load.image('20','assets/pic/20.jpg');
    game.load.image('21','assets/pic/21.jpg');
    game.load.image('22','assets/pic/22.jpg');
    game.load.image('23','assets/pic/23.jpg');
    game.load.image('30','assets/pic/30.jpg');
    game.load.image('31','assets/pic/31.jpg');
    game.load.image('32','assets/pic/32.jpg');
    game.load.image('33','assets/pic/33.jpg');
    game.load.image('40','assets/pic/40.jpg');
    game.load.image('41','assets/pic/41.jpg');
    game.load.image('42','assets/pic/42.jpg');
    game.load.image('43','assets/pic/43.jpg');
    game.load.image('50','assets/pic/50.jpg');
    game.load.image('51','assets/pic/51.jpg');
    game.load.image('52','assets/pic/52.jpg');
    game.load.image('53','assets/pic/53.jpg');
    game.load.image('60','assets/pic/60.jpg');
    game.load.image('61','assets/pic/61.jpg');
    game.load.image('62','assets/pic/62.jpg');
    game.load.image('63','assets/pic/63.jpg');
    game.load.image('70','assets/pic/70.jpg');
    game.load.image('71','assets/pic/71.jpg');
    game.load.image('72','assets/pic/72.jpg');
    game.load.image('73','assets/pic/73.jpg');
    game.load.image('80','assets/pic/80.jpg');
    game.load.image('81','assets/pic/81.jpg');
    game.load.image('82','assets/pic/82.jpg');
    game.load.image('83','assets/pic/83.jpg');
    game.load.image('90','assets/pic/90.jpg');
    game.load.image('91','assets/pic/91.jpg');
    game.load.image('92','assets/pic/92.jpg');
    game.load.image('93','assets/pic/93.jpg');
    game.load.image('100','assets/pic/100.jpg');
    game.load.image('101','assets/pic/101.jpg');
    game.load.image('102','assets/pic/102.jpg');
    game.load.image('103','assets/pic/103.jpg');
    game.load.image('110','assets/pic/110.jpg');
    game.load.image('111','assets/pic/111.jpg');
    game.load.image('112','assets/pic/112.jpg');
    game.load.image('113','assets/pic/113.jpg');
    game.load.image('120','assets/pic/120.jpg');
    game.load.image('121','assets/pic/121.jpg');
    game.load.image('122','assets/pic/122.jpg');
    game.load.image('123','assets/pic/123.jpg');
    game.load.image('130','assets/pic/130.jpg');
    game.load.image('131','assets/pic/131.jpg');
    game.load.image('132','assets/pic/132.jpg');
    game.load.image('133','assets/pic/133.jpg');
    game.load.spritesheet('bubble', 'assets/sprites/prompt.png',5,5);
};

Guestboard.create = function(){
    Guestboard.bg = game.add.tileSprite(0, 0, 1920, 1080, 'board_background');
    Guestboard.guest_icon = game.add.sprite(20, 800, 'head_icon');
    Guestboard.text_guest = game.add.text(50, 970, Client.username, { font: "48px Arial", fill: "#ff0044", align:"center"});
    Guestboard.status_check();
    Guestboard.master_display_request();
};

Guestboard.master_display_request = function(){
    Client.send_roominfo_request();
};

Guestboard.master_display = function(data){
    Guestboard.guest_icon = game.add.sprite(20, 20, 'head_icon');
    Guestboard.text_guest = game.add.text(50, 190, data.master, { font: "48px Arial", fill: "#ff0044", align:"center"});
};

Guestboard.status_check = function(){
    Client.send_guest_status_check_request();
};

Guestboard.display_input = function(){
    Guestboard.conversation_input = game.add.inputField(1370, 850,{
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

Guestboard.display_confirm_button = function(){
    Guestboard.confirm_button = game.add.button(1720,850,'btn',function(){
        Client.send_message(Guestboard.conversation_input.text.text);
    });
};

/*Guestboard.send_game_message = function(data){
    Client.socket.emit('gamemessage',data);
};*/

Guestboard.receive_pile = function(data){
    var i;
    for(i = 0; i < 16; i++)
    {
        Maingame.pile0[i] = data[i];
    }
   
};

Guestboard.receive_firstturn = function(data){
    Maingame.whooseturn=data;
    Maingame.start();
};

Guestboard.send_playedcardmessage = function(data){
    Client.socket.emit('playedcardmessage',{carddata:data,status: Client.status});
};
Guestboard.send_playedcardtype = function(data){
    Client.socket.emit('playedcardtype',{cardtypedata:data,status: Client.status});
};
Guestboard.send_numplayedcard = function(data){
    Client.socket.emit('numplayedcard',{numdata:data,status:Client.status});
};
Guestboard.send_turn = function(data){
    Client.socket.emit('turn',{turndata:data,status:Client.status});
};

Guestboard.receive_opplayedcard= function(data){
    Maingame.opplayedcard=data.carddata;
};

Guestboard.receive_opplayedcardtype= function(data){
    Maingame.opplayedcardtype=data.cardtypedata;
};

Guestboard.receive_numopplayedcard= function(data){
    Maingame.numopplayedcard=data.numdata;
};

Guestboard.receive_turn= function(data){
    Maingame.whooseturn=data.turndata;
    Maingame.start();//game start
};

Guestboard.endgame = function(){
    Guestboard.wintext = game.add.text(540, 860, 'You Win', { font: "48px Arial", fill: "#ff0044", align:"center"});
    Maingame.clear();//game data reset
    setTimeout("game.state.start('Home')",3000);
    Client.socket.emit('guestgameover');
};

Guestboard.last = function(){
    Guestboard.losetext = game.add.text(300, 500, 'You Lose', { font: "48px Arial", fill: "#ff0044", align:"center"});
    Maingame.clear();//game data reset
    setTimeout("game.state.start('Home')",3000);
    Client.socket.emit('killme');
    
};
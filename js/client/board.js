var Board = {};

Board.init = function(){
    Board.add.plugin(Fabrique.Plugins.InputField);
};

Board.preload = function(){
    game.load.image('board_background','assets/pic/Room.png');
    game.load.image('head_icon','assets/pic/head.jpg');
};

Board.create = function(){
    Board.bg = game.add.tileSprite(0, 0, 1920, 1080, 'room_background');
    Board.master_icon = game.add.sprite(0, 0, 'head_icon');
    Board.text_master = game.add.text(0, 500, Client.username, { font: "48px Arial", fill: "#ff0044", align:"center"});
    Board.status_check();
    Board.guest_display_request();
};

Board.guest_display_request = function(){
    Client.send_roominfo_request();
};

Board.guest_display = function(data){
    Board.guest_icon = game.add.sprite(500, 0, 'head_icon');
    Board.text_guest = game.add.text(500, 500, data.guest, { font: "48px Arial", fill: "#ff0044", align:"center"});
};

Board.status_check = function(){
    Client.send_master_status_check_request();
};

Board.display_input = function(){
    Board.conversation_input = game.add.inputField(0, 700,{
        width: 300,
        padding: 10,
        fill: '#000',
        stroke: '#fff',
        backgroundColor: '#d0cdba',
        borderWidth: 2,
        borderColor: '#b2af9b',
        borderRadius: 3,
        font: '18px pixel',
        placeHolder: 'Your username',
        placeHolderColor: '#b2af9b',
        cursorColor: '#b2af9b',
        max: 200
    });
};

Board.display_confirm_button = function(){
    Board.confirm_button = game.add.button(200,700,'btn',function(){
        Client.send_master_message();
    });
};
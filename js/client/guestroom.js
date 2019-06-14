var Guestroom = {};

var quit;
var waiting;
var fight2;
Guestroom.init = function(){
    game.add.plugin(Fabrique.Plugins.InputField);
};

Guestroom.preload = function(){
    game.load.image('room_background','assets/pic/Room.jpg');
    game.load.image('head_icon','assets/pic/masterhead.jpg');
};

Guestroom.create = function(){
    Guestroom.bg = game.add.tileSprite(0, 0, 1920, 1080, 'room_background');
    Guestroom.guest_icon = game.add.sprite(310, 400, 'head_icon');
    Guestroom.text_guest = game.add.text(320, 580, Client.username+"\n(我)", { font: "48px Arial", fill: "#ff0044", align:"center"});
    Guestroom.display_button();
    Guestroom.text_master_request();
    Guestroom.display_input();
};

Guestroom.display_input = function(){
  quit = game.add.text(420,860,"退出房间",textStyle);
  quit.anchor.set(0,0);
  waiting = game.add.text(320,230,"正在等待房主开始游戏……", { font: "48px Arial", fill: "#ff0044", align:"center"});
  waiting.anchor.set(0,0);

}


Guestroom.display_button = function(){
    Guestroom.exit_button = game.add.button(420,800,'btn',Client.send_guest_exit);
};

Guestroom.display_master = function(data){
    Guestroom.guest_icon = game.add.sprite(610, 400, 'head_icon');
    Guestroom.text_guest = game.add.text(640, 580, data+ "\n房主", { font: "48px Arial", fill: "#ff0044", align:"center"});
    fight2 = game.add.text(510,450,"VS", { font: "48px Arial", fill: "#ff0044", align:"center"});
}

Guestroom.text_master_request = function(){
    Client.send_text_master_request();
};
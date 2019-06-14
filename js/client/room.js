var Room = {};
var cancel;
var kaishi;
var fight;

Room.init = function(){
    game.add.plugin(Fabrique.Plugins.InputField);
};

Room.preload = function(){
    game.load.image('room_background','assets/pic/Room.jpg');
    game.load.image('head_icon','assets/pic/masterhead.jpg');
};

Room.create = function(){
    Room.bg = game.add.tileSprite(0, 0, 1920, 1080, 'room_background');
    Room.master_icon = game.add.sprite(450, 480, 'head_icon');
    Room.text_master = game.add.text(450, 350, Client.username+"\n房主(我)", { font: "48px Arial", fill: "#ff0044", align:"center"});
    Room.display_button();
    Room.display_input();
};

Room.display_input = function(){
    kaishi = game.add.text(300,860,"开始游戏",textStyle);
    kaishi.anchor.set(0,0);
    cancel = game.add.text(300,960,"退出房间",textStyle);
    cancel.anchor.set(0,0);
}

Room.display_button = function(){
    Room.start_button = game.add.button(300,800,'btn',Client.send_start_request);
    Room.exit_button = game.add.button(300,900,'btn',Client.send_master_exit);
};

Room.display_guest = function(data){
    Room.guest_icon = game.add.sprite(750, 480, 'head_icon');
    Room.text_guest = game.add.text(750, 350, data, { font: "48px Arial", fill: "#ff0044", align:"center"});
    fight = game.add.text(650,530,"VS", { font: "48px Arial", fill: "#ff0044", align:"center"});
}

Room.remove_guest = function(){
    Room.guest_icon.kill();
    Room.text_guest.kill();
};


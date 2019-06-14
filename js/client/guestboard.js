var Guestboard = {};

Guestboard.init = function(){
    Guestboard.add.plugin(Fabrique.Plugins.InputField);
};

Guestboard.preload = function(){
    game.load.image('board_background','assets/pic/Room.jpg');
    game.load.image('head_icon','assets/pic/masterhead.jpg');
};

Guestboard.create = function(){
    Guestboard.bg = game.add.tileSprite(0, 0, 1920, 1080, 'room_background');
    Guestboard.guest_icon = game.add.sprite(0, 0, 'head_icon');
    Guestboard.text_guest = game.add.text(0, 500, Client.username, { font: "48px Arial", fill: "#ff0044", align:"center"});
    Guestboard.master_display_request();
};

Guestboard.master_display_request = function(){
    Client.send_roominfo_request();
};

Guestboard.master_display = function(data){
    Guestboard.guest_icon = game.add.sprite(500, 0, 'head_icon');
    Guestboard.text_guest = game.add.text(500, 500, data.master, { font: "48px Arial", fill: "#ff0044", align:"center"});
};
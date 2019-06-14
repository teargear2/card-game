var Home = {};
var textStyle = {front: "48px Arial",fill:"#ff0044",align:"center"}
var newroom;
var joinroom;
var infor;
Home.init = function(){
    game.add.plugin(Fabrique.Plugins.InputField);
};

Home.preload = function(){
    game.load.image('home_background','assets/pic/home_background.jpg');
  
};

Home.create = function(){
    Home.bg = game.add.tileSprite(0, 0, 1192, 670, 'home_background');
    Home.display_input();
    Home.display_button();
};


Home.display_input = function(){
newroom = game.add.text(250,500,"加入房间",textStyle);
newroom.anchor.set(0,0);
joinroom =  game.add.text(540,500,"创建房间",textStyle);
joinroom.anchor.set(0,0);
infor = game.add.text(850,500,"个人资料",textStyle);
infor.anchor.set(0,0);
};


Home.display_button = function(){
    Home.joinroom_button = game.add.button(250,440,'btn',Client.send_joinroom_request);//加入
    Home.set_newroom_button = game.add.button(540,440,'btn',Client.send_newroom_request);//创建
    Home.infor_button = game.add.button(850,440,'btn',function(){});//资料
};


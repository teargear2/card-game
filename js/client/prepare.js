var prepare ={};
prepare.init = function(){
    game.add.plugin(Fabrique.Plugins.InputField);
};

prepare.preload = function(){
    game.load.image('pre_background','assets/pic/pre_background.jpg')
    game.load.image('start_pre','assets/pic/start_pre.png');
    game.load.spritesheet('bubble', 'assets/sprites/prompt.png',5,5);
};

prepare.create = function(){
    Login.bg = game.add.tileSprite(0, 0, 1920, 1080, 'pre_background');
    Login.display_input();
    Login.display_button();
};

prepare.display_input = function(){

};

prepare.display_button = function(){
    prepare.login_button = game.add.button(1200,500,'start_pre',Client.send_log);
    game.state.start('prepare')
};



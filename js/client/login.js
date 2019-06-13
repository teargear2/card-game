var Login = {};

Login.init = function(){
    game.add.plugin(Fabrique.Plugins.InputField);
};

Login.preload = function(){
    game.load.audio('intro','assets/music/intro.mp3');
    game.load.image('log_background','assets/pic/background1.jpg');
<<<<<<< HEAD
    game.load.image('signin-button','assets/pic/signin.png');
    game.load.image('signup-button','assets/pic/signup.png');
=======
    game.load.image('btn','assets/pic/start-button.png');
>>>>>>> 841487779c4311a1692a8fd0028a3a6fbf853364
    game.load.spritesheet('bubble', 'assets/sprites/prompt.png',5,5);
};

Login.create = function(){
    Login.music = game.add.audio('intro');
    Login.music.play();
    Login.bg = game.add.tileSprite(0, 0, 1920, 1080, 'log_background');
    Login.display_input();
    Login.display_button();
};

Login.display_input = function(){
<<<<<<< HEAD
    Login.username_input = game.add.inputField(400, 300,{
=======
    Login.username_input = game.add.inputField(1200, 300,{
>>>>>>> 841487779c4311a1692a8fd0028a3a6fbf853364
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
        max: 20
    });
<<<<<<< HEAD
    Login.password_input = game.add.inputField(400, 400,{
=======
    Login.password_input = game.add.inputField(1200, 400,{
>>>>>>> 841487779c4311a1692a8fd0028a3a6fbf853364
        width: 300,
        padding: 10,
        fill: '#000',
        stroke: '#fff',
        backgroundColor: '#d0cdba',
        borderWidth: 2,
        borderColor: '#b2af9b',
        borderRadius: 3,
        font: '18px pixel',
        placeHolder: 'Your password',
        placeHolderColor: '#b2af9b',
        cursorColor: '#b2af9b',
        max: 20
    });
};

Login.display_button = function(){
<<<<<<< HEAD
    Login.login_button = game.add.button(400,500,'signin-button',Client.send_log);
    Login.register_button = game.add.button(625,500,'signup-button',function(){
=======
    Login.login_button = game.add.button(1200,500,'btn',Client.send_log);
    Login.register_button = game.add.button(1425,500,'btn',function(){
>>>>>>> 841487779c4311a1692a8fd0028a3a6fbf853364
        game.state.start('Register');
    });
};



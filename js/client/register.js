var Register = {};

Register.init = function(){
    game.add.plugin(Fabrique.Plugins.InputField);
};

Register.preload = function(){
    game.load.image('register_background','assets/pic/background2.jpg');
<<<<<<< HEAD
    game.load.image('back-button','assets/pic/back.png');
    game.load.image('confirm-button','assets/pic/confirm.png');
=======
>>>>>>> 841487779c4311a1692a8fd0028a3a6fbf853364
};

Register.create = function(){
    Register.bg = game.add.tileSprite(0,0,1920,1080,'register_background');
    Register.display_input();
    Register.display_button();
};

Register.display_input = function(){
<<<<<<< HEAD
    Register.username_input = game.add.inputField(400, 300,{
=======
    Register.username_input = game.add.inputField(1200, 300,{
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
    Register.password_input = game.add.inputField(400, 400,{
=======
    Register.password_input = game.add.inputField(1200, 400,{
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

Register.display_button = function(){
<<<<<<< HEAD
    Register.confirm_button = game.add.button(400,500,'confirm-button',Client.send_register);
    Register.back_button = game.add.button(625,500,'back-button',function(){
=======
    Register.confirm_button = game.add.button(1200,500,'btn',Client.send_register);
    Register.back_button = game.add.button(1425,500,'btn',function(){
>>>>>>> 841487779c4311a1692a8fd0028a3a6fbf853364
        game.state.start('Login');
    });
};
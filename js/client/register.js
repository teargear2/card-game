var Register = {};

Register.init = function(){
    game.add.plugin(Fabrique.Plugins.InputField);
};

Register.preload = function(){
    game.load.image('register_background','assets/pic/background2.jpg');
};

Register.create = function(){
    Register.bg = game.add.tileSprite(0,0,1920,1080,'register_background');
    Register.display_input();
    Register.display_button();
};

Register.display_input = function(){
    Register.username_input = game.add.inputField(1200, 300,{
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
    Register.password_input = game.add.inputField(1200, 400,{
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
    Register.confirm_button = game.add.button(1200,500,'btn',Client.send_register);
    Register.back_button = game.add.button(1425,500,'btn',function(){
        game.state.start('Login');
    });
};
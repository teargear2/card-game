var Information = {};

var username;
var password;
var userbirth;
var usergender;
var userintro;

var textStyle = { font: "48px Arial", fill: "#ff0044", align:"center" };

var group;

Information.init = function(){
    game.add.plugin(Fabrique.Plugins.InputField);
};

Information.preload = function(){
    game.load.audio('information_bgm','assets/music/information_bgm.mp3')
    game.load.image('information_background','assets/pic/background3.jpg');
    game.load.image('save_btn','assets/pic/save-button.png');
    game.load.image('back_btn','assets/pic/back-button.png');
    game.load.image('modify_btn','assets/pic/start-button.png');
};

Information.create = function(){
    Information.music = game.add.audio('information_bgm');
    Information.music.play();
    Information.bg = game.add.tileSprite(0,0,1920,1080,'information_background');
    Information.display_input_request();
    Information.display_button();
};

Information.display_input_request = function(){
    Client.socket.emit('inforequest',Client.username);
};

Information.display_info = function(data){
    username = game.add.text(240,150,"Username: "+data.username,textStyle);
    username.anchor.set(0,0);
    
    password = game.add.text(240,250,"Password: "+data.password,textStyle);
    password.anchor.set(0,0);

    userbirth = game.add.text(240,350,"Birth: "+data.birth,textStyle);
    userbirth.anchor.set(0,0);

    usergender = game.add.text(240,450,"Gender: "+data.gender,textStyle);
    usergender.anchor.set(0,0);

    userintro = game.add.text(100,800,"Introduction: "+data.intro,textStyle);
    userintro.anchor.set(0,0);                                                                                                 
};

Information.display_button = function(){
    Information.back_button = game.add.button(1540,950,'back_btn',function(){
        game.state.start('Home');
    });
    Information.modify_username_button = game.add.button(840,150,'modify_btn',function(){
        Information.username_input = game.add.inputField(240, 150,{
            width: 250,
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
        username.visible = false;
        Information.modify_username_button.visible = false;
        Information.username_save_button = game.add.button(840,150,'save_btn',function(){
            Client.send_username_modify();
            Client.username = Information.username_input.text.text;
            username = game.add.text(240,150,"Username: "+Client.username,textStyle);
            Information.modify_username_button.visible = true;
            Information.username_save_button.visible = false;
            Information.username_input.visible = false;
            username.visible = true;
        });
    });
    Information.modify_password_button = game.add. button(840,250,'modify_btn',function(){
        Information.password_input = game.add.inputField(240, 250,{
            width: 250,
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
        password.visible = false;
        Information.modify_password_button.visible = false;
        Information.password_save_button = game.add.button(840,250,'save_btn',function(){
            Client.send_password_modify();
            Client.password = Information.password_input.text.text;
            password = game.add.text(240,250,"Password: "+Client.password,textStyle);
            Information.modify_password_button.visible = true;
            Information.password_save_button.visible = false;
            Information.password_input.visible = false;
            password.visible = true;
        });
    });
    Information.modify_userbirth_button = game.add. button(840,350,'modify_btn',function(){
        Information.userbirth_input = game.add.inputField(240, 350,{
            width: 250,
            padding: 10,
            fill: '#000',
            stroke: '#fff',
            backgroundColor: '#d0cdba',
            borderWidth: 2,
            borderColor: '#b2af9b',
            borderRadius: 3,
            font: '18px pixel',
            placeHolder: 'Your birthday',
            placeHolderColor: '#b2af9b',
            cursorColor: '#b2af9b',
            max: 20
        });
        userbirth.visible = false;
        Information.modify_userbirth_button.visible = false;
        Information.userbirth_save_button = game.add.button(840,350,'save_btn',function(){
            Client.send_userbirth_modify();
            Client.birth = Information.userbirth_input.text.text;
            userbirth = game.add.text(240,350,"Birth: "+Client.birth,textStyle);
            Information.modify_userbirth_button.visible = true;
            Information.userbirth_save_button.visible = false;
            Information.userbirth_input.visible = false;
            userbirth.visible = true;
        });
    });
    Information.modify_usergender_button = game.add. button(840,450,'modify_btn',function(){
        Information.usergender_input = game.add.inputField(240, 450,{
            width: 250,
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
        usergender.visible = false;
        Information.modify_usergender_button.visible = false;
        Information.usergender_save_button = game.add.button(840,450,'save_btn',function(){
            Client.send_usergender_modify();
            Client.gender = Information.usergender_input.text.text;
            usergender = game.add.text(240,450,"Gender: "+Client.gender,textStyle);
            Information.modify_usergender_button.visible = true;
            Information.usergender_save_button.visible = false;
            Information.usergender_input.visible = false;
            usergender.visible = true;
        });
    });
    Information.modify_userintro_button = game.add. button(900,800,'modify_btn',function(){
        Information.userintro_input = game.add.inputField(100, 800,{
            width: 550,
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
        userintro.visible = false;
        Information.modify_userintro_button.visible = false;
        Information.userintro_save_button = game.add.button(900,800,'save_btn',function(){
            Client.send_userintro_modify();
            Client.intro = Information.userintro_input.text.text;
            userintro = game.add.text(100,800,"Introduction: "+Client.intro,textStyle);
            Information.modify_userintro_button.visible = true;
            Information.userintro_save_button.visible = false;
            Information.userintro_input.visible = false;
            userintro.visible = true;
        });
    });
};


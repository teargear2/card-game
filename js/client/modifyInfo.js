var ModifyInfo = {};

ModifyInfo.init = function(){
    game.add.plugin(Fabrique.Plugins.InputField);
};

ModifyInfo.preload = function(){
    game.load.image('ModifyInfo_background','assets/pic/background2.jpg');
    
};

ModifyInfo.create = function(){
    ModifyInfo.bg = game.add.tileSprite(0,0,1920,1080,'ModifyInfo_background');
    ModifyInfo.display_input();
    ModifyInfo.display_button();
};

ModifyInfo.display_input = function(){
    ModifyInfo.username_input = game.add.inputField(1200, 300,{
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
    ModifyInfo.password_input = game.add.inputField(1200, 400,{
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

ModifyInfo.display_button = function(){
    ModifyInfo.confirm_button = game.add.button(1200,500,'6',Client.send_ModifyInfo);
    ModifyInfo.back_button = game.add.button(1425,500,'11',function(){
        game.state.start('InfoManage');
    });
};
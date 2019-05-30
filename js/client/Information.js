var Information = {};

Information.init = function(){
    game.add.plugin(Fabrique.Plugins.InputField);
};

Information.preload = function(){
    game.load.audio('information_bgm','assets/music/information_bgm')
    game.load.image('information_background','assets/pic/background3.jpg');
    game.load.image('save_btn','assets/pic/save-button.png');
    game.load.image('back_btn','assets/pic/back-button.png');
};

Information.create = function(){
    Information.music = game.add.audio('information_bgm');
    Information.music.play();
    Information.bg = game.add.tileSprite(0,0,1920.1080,'informaiton_background');
    Information.display_input();
    Information.display_button();
};

Information.display_input = function(){
    Information.username_input = game.add.inputField(1200,300,{
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
    });                                                                 //显示位置暂未修改
    Information.userrealname_input = game.add.inputField(1200,300,{
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
    });                                                                 //显示位置暂未修改
    Information.userintro_input = game.add.inputField(1200,300,{
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
    });                                                                 //显示位置暂未修改
    Information.userbirth_input = game.add.inputField(1200,300,{
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
    });                                                                 //显示位置暂未修改
    Information.usergender_input = game.add.inputField(1200,300,{
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
    });                                                                 //显示位置暂未修改
};

Information.display_button = function(){
    Information.save_button = game.add.button
};

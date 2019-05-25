var Information = {};

Information.init = function(){
    game.add.plugin(Fabrique.Plugins.InputField);
};

Information.preload = function(){
    game.load.audio()
    game.load.image('information_background','assets/pic/background3.jpg');
};

Information.create = function(){
    Information.music = game.add.audio
    Information.music.play();
    Information.bg = game.add.tileSprite(0,0,1920.1080,'informaiton_background');
};

Information.display_input = function(){
    Information.userid_input = game.add.inputField(1200,300,{
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
    Information.userintro_input = game.add.inputField();
};

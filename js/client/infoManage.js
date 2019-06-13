var InfoManage = {};

InfoManage.init = function(){
    game.add.plugin(Fabrique.Plugins.InputField);
};
InfoManage.preload = function(){
    game.load.image('infoManage_background','assets/pic/infoManage.jpg');
};

InfoManage.create = function(){
    InfoManage.music = game.add.audio('intro');                                 //导入音乐
    InfoManage.music.play();                                                  //播放音乐
    InfoManage.bg = game.add.tileSprite(0, 0, 1920, 1080, 'infoManage_background');//设置登录图片长宽
    InfoManage.display_input();//显示输入框
    InfoManage.display_button();//显示按钮
};

InfoManage.display_input = function(){
    InfoManage.username1_input = game.add.inputField(800, 300,{
        width: 300,
        padding: 10,
        fill: '#000',
        stroke: '#fff',
        backgroundColor: '#d0cdba',
        borderWidth: 2,
        borderColor: '#b2af9b',
        borderRadius: 3,
        font: '18px pixel',
        placeHolder: 'username1',
        placeHolderColor: '#b2af9b',
        cursorColor: '#b2af9b',
        max: 20
    });
    
    
};

InfoManage.display_button = function(){
    InfoManage.confirm_button1 = game.add.button(800,400,'1',Client.send_infoManage1);
    InfoManage.back_button1 = game.add.button(1025,400,'9',function(){
        game.state.start('ModifyInfo');
    });
   

};
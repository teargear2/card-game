var Information = {};

Information.init = function(){
    game.add.plugin(Fabrique.Plugins.InputField);
};

Information.preload = function(){
    game.load.audio
    game.load.image
};

Information.create = function(){};

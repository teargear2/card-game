var game = new Phaser.Game(1920, 1080, Phaser.AUTO, document.getElementById('game'),null,true,false);

game.state.add('Login',Login);
game.state.add('Register',Register);
game.state.add('Home',Home);
game.state.add('Information',Information);
<<<<<<< HEAD
game.state.add('InfoManage',InfoManage);
game.state.add('ModifyInfo',ModifyInfo);
game.state.add('Room',Room);
game.state.add('Guestroom',Guestroom);
game.state.add('Board',Board);
game.state.add('Guestboard',Guestboard);
game.state.start('Login');
=======
game.state.add('prepare',prepare);

game.state.start('Information');

>>>>>>> 841487779c4311a1692a8fd0028a3a6fbf853364

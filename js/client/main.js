var game = new Phaser.Game(1920, 1080, Phaser.AUTO, document.getElementById('game'),null,true,false);

game.state.add('Login',Login);
game.state.add('Register',Register);
game.state.add('Home',Home);
game.state.add('Room',Room);
game.state.add('Guestroom',Guestroom);
game.state.add('Board',Board);
game.state.add('Guestboard',Guestboard);
game.state.start('Login');
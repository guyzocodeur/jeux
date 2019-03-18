var game = new Phaser.Game(800, 600);

var Guyzo = {
    preload: function(){
        //chargement images et sons
        game.load.image('image', 'assets/image.jpg');
    },
    create: function(){
        //setup + affichage
        game.add.sprite(0, 0, 'image');
    },
    update: function(){
        //logique du jeu
    }
};
game.state.add('Guyzo', Guyzo);
game.state.start('Guyzo');
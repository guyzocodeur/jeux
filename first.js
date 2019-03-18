var game = new Phaser.Game(800, 600);

var Guyzo = {
    preload: function(){
        //chargement images et sons
        game.load.image('image', 'assets/image.jpg');
        game.load.image('brave', 'assets/brave.png');
        game.load.image('ball2', 'assets/ball2.png');
        game.load.image('bandit', 'assets/bandit.png');
    },
    create: function(){
        //setup + affichage
        //joueurs
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.world.enableBody = true;
        game.add.image(0, 0, 'image');
        this.brave = game.add.image(game.width/2, game.height-50, 'brave');    
        this.brave.body.collideWorldBounds = true;
        this.left = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.right = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
        this.brave.body.imovable = true;

        game.add.image(0, 0, 'image');
        this.bandit = game.add.image(game.width/2, 40, 'bandit');    
        this.bandit.body.collideWorldBounds = true;
        this.left2 = game.input.keyboard.addKey(Phaser.Keyboard.A);
        this.right2 = game.input.keyboard.addKey(Phaser.Keyboard.Z);
        this.bandit.body.imovable = true;


        //ballon
        this.ball2 = game.add.sprite(game.width/2, game.height/2, 'ball2');
        this.ball2.body.collideWorldBounds = true;
        this.ball2.body.velocity.x = 300;
        this.ball2.body.velocity.y = 300;
        this.ball2.body.bounce.setTo(1);
    },
    update: function(){
        //logique du jeu
        game.physics.arcade.collide(this.brave,this.bandit, this.ball2);
        if (this.ball2.y > this.brave.y+10) {
            game.state.start('Guyzo');
        }
        if (this.ball2.y < this.bandit.y-10) {
            game.state.start('Guyzo');
        }
        if (this.left.isDown) {
            this.brave.body.velocity.x = -300;
        }
        else if (this.right.isDown) {
            this.brave.body.velocity.x = 300;
        }
        else{
            this.brave.body.velocity.x = 0;
        }
        if (this.left2.isDown) {
            this.brave.body.velocity.x = -300;
        }
        else if (this.right2.isDown) {
            this.brave.body.velocity.x = 300;
        }
        else{
            this.brave.body.velocity.x = 0;
        }
    }
};
game.state.add('Guyzo', Guyzo);
game.state.start('Guyzo');
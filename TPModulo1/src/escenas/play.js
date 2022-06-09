var player;
var stars;
var stars2;
var bombs;
var platforms;
var cursors;
var score;
var gameOver;
var scoreText;

export class Play extends Phaser.Scene {
    constructor() {
      super("Play");
    }
    
    create () {
    
        gameOver = false;
        score = 0;

    
        this.add.image(400, 300, 'sky');
        platforms = this.physics.add.staticGroup();
        platforms.create(400, 568, 'ground').setScale(2).refreshBody();

        platforms.create(650, 450, 'ground');
        platforms.create(25, 350, 'ground');
        platforms.create(500, 165, 'ground');

        player = this.physics.add.sprite(100, 450, 'dude');

        player.setBounce(0.2);
        player.setCollideWorldBounds(true);

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('dude', { start: 0, end: 3 }),
            frameRate: 10,
            repeat: -1
        });

        this.anims.create({
            key: 'turn',
            frames: [ { key: 'dude', frame: 4 } ],
            frameRate: 20
        });

        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('dude', { start: 5, end: 8 }),
            frameRate: 10,
            repeat: -1
        });

        cursors = this.input.keyboard.createCursorKeys();

        stars = this.physics.add.group({
            key: 'star', 
            repeat: 11,
            setXY: { x: 12, y: 0, stepX: 70 }
        });
        
        stars2 = this.physics.add.group({
            key: 'star2', 
            repeat: 5,
            setXY: { x: 120, y: 0, stepX: 140 }
        });
        
        stars.children.iterate(function (child){
            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.8));
        });
    
        stars2.children.iterate(function (child){

            child.setBounceY(Phaser.Math.FloatBetween(0.4, 0.2));
            });

        bombs = this.physics.add.group();

        scoreText = this.add.text(575,560, 'score: 0', {fontSize: '27px', fill: '#000' });

        this.physics.add.collider(player, platforms);
        this.physics.add.collider(stars, platforms);
        this.physics.add.collider(bombs, platforms);
        this.physics.add.collider(stars2, platforms);

        this.physics.add.overlap(player, stars, collectStar, null, this);
        this.physics.add.overlap(player, stars2, collectStar2, null, this);

        this.physics.add.collider(player, bombs, hitBomb, null, this);
    }

    update () {
        if (gameOver){
            return; 
        }

        if (cursors.left.isDown) {
            player.setVelocityX(-160);
            player.anims.play('left', true);
        }
        else if (cursors.right.isDown) {
            player.setVelocityX(160);
            player.anims.play('right', true);
        }
        else {
            player.setVelocityX(0);
            player.anims.play('turn');
        }

        if (cursors.up.isDown && player.body.touching.down) {
            player.setVelocityY(-330);
        }
    }

    collectStar (player, star) {
        star.disableBody(true, true);
        score += 10;
        scoreText.setText('Score: ' + score);

        
        if (stars.countActive(true) === 0) {
            stars.children.iterate(function (child) {
                child.enableBody(true, child.x, 0, true, true);
            });
        

            var x = (player.x < 400) ? Phaser.Math.Between(400, 800) : Phaser.Math.Between(0, 400);
            var bomb = bombs.create(x, 16, 'bomb');
            bomb.setBounce(1);
            bomb.setCollideWorldBounds(true);
            bomb.setVelocity(Phaser.Math.Between(-200, 200), 20);
        }
    }

    collectStar2 (player, star2) {
        star2.disableBody(true, true);
        score += 15;
        scoreText.setText('Score: ' + score);

        
        if (stars2.countActive(true) === 0) {
            stars2.children.iterate(function (child) {
                child.enableBody(true, child.x, 0, true, true);
                });
            }   
        }

    hitBomb(player, bomb) 
    {
        this.physics.pause();
        player.setTint(0xff0000);
        player.anims.play("turn");
        gameOver = true;
        setTimeout(() => {
        this.scene.start("Retry", { score: score });
        }, 1000);
    }
}

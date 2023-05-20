class Platform extends Phaser.Scene {
    constructor() {
        super('platform');
    }

    create() {
        this.border1 =this.physics.add.existing(this.add.rectangle(400, 400, 1600, 10, 0xFFFFFF), true);
        this.border2 =this.physics.add.existing(this.add.rectangle(400, 799, 1600, 10, 0xFFFFFF), true);
        this.player1 = this.physics.add.existing(this.add.ellipse(100, 300, 20, 40, 0xFF0000))
        this.player1.body.setCollideWorldBounds(true);
        this.player2 = this.physics.add.existing(this.add.ellipse(100, 700, 20, 40, 0x00FF00))
        this.player2.body.setCollideWorldBounds(true);

        this.physics.add.collider(this.player1, this.border1);
        this.physics.add.collider(this.player2, this.border2);
        this.cursors = this.input.keyboard.createCursorKeys();

        this.input.on('pointerdown', () => {this.scene.start('top')});
    }

    update() {
        const { left, right, up } = this.cursors;

        if (left.isDown)
        {
            this.player1.body.setVelocityX(-160);
            this.player2.body.setVelocityX(-160);

        }
        else if (right.isDown)
        {
            this.player1.body.setVelocityX(160);
            this.player2.body.setVelocityX(160);
        }
        else
        {
            this.player1.body.setVelocityX(0);
            this.player2.body.setVelocityX(0);

        }

        if (up.isDown && this.player1.body.touching.down)
        {
            this.player1.body.setVelocityY(-330);
        }

        if (up.isDown && this.player2.body.touching.down)
        {
            this.player2.body.setVelocityY(-330);
        }

    }

}

class Top extends Phaser.Scene {
    constructor() {
        super('top');
    }

    create() {
        this.physics.world.gravity.y = 0;
        this.border1 =this.physics.add.existing(this.add.rectangle(400, 400, 1600, 10, 0xFFFFFF), true);
        this.border2 =this.physics.add.existing(this.add.rectangle(400, 799, 1600, 10, 0xFFFFFF), true);
        this.player1 = this.physics.add.existing(this.add.ellipse(100, 300, 20, 20, 0xFF0000))
        this.player1.body.setCollideWorldBounds(true);
        this.player2 = this.physics.add.existing(this.add.ellipse(100, 700, 20, 20, 0x00FF00))
        this.player2.body.setCollideWorldBounds(true);

        this.physics.add.collider(this.player1, this.border1);
        this.physics.add.collider(this.player2, this.border2);
        this.cursors = this.input.keyboard.createCursorKeys();

        this.input.on('pointerdown', () => {this.scene.start('platform')});
    }

    update() {
        const { left, right, up, down } = this.cursors;

        if (left.isDown) {
            this.player1.body.setVelocityX(-160);
            this.player2.body.setVelocityX(-160);

        } else if (right.isDown) {
            this.player1.body.setVelocityX(160);
            this.player2.body.setVelocityX(160);
        } else {
            this.player1.body.setVelocityX(0);
            this.player2.body.setVelocityX(0);
        }
        if (up.isDown) {
            this.player1.body.setVelocityY(-160);
            this.player2.body.setVelocityY(-160);
        } else if (down.isDown) {
            this.player1.body.setVelocityY(160);
            this.player2.body.setVelocityY(160);
        } else {
            this.player1.body.setVelocityY(0);
            this.player2.body.setVelocityY(0);
        }
    }
}

let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 800,
    backgroundColor: 0x000000,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 300},
            debug: false
        }
    },
    scene: [Platform, Top]
}

let game = new Phaser.Game(config);
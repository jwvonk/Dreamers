class Platform extends Phaser.Scene {
    constructor() {
        super('platform');
    }

    preload() {
        this.load.image('bg', './assets/bg placeholder.jpg');
        this.load.image('pc', './assets/pc_placeholder.png');
    }

    create() {

        this.w = this.game.config.width;
        this.h = this.game.config.height;
        this.s = this.game.config.width * 0.01;

        this.cam1 = this.cameras.main;
        this.cam1.setSize(this.w, this.h / 2)
        this.cam1.setBounds(0, 0, this.w * 2, this.h / 2)

        this.cam2 = this.cameras.add(0, this.h / 2, this.w, this.h / 2);
        this.cam2.scrollY = this.h / 2;
        this.cam2.setBounds(0, this.h/2, this.w * 2, this.h / 2)

        this.add.image(0, 0, 'bg').setOrigin(0, 0)
        this.add.image(this.w, 0, 'bg').setOrigin(0, 0)
        this.add.image(0, 600, 'bg').setOrigin(0, 0)
        this.add.image(this.w, 600, 'bg').setOrigin(0, 0)

        this.border1 = this.physics.add.existing(this.add.rectangle(0, this.h / 2, this.w * 4, 10, 0x000000).setOrigin(0, 1), true);
        this.border2 = this.physics.add.existing(this.add.rectangle(0, this.h, this.w * 4, 10, 0x00000).setOrigin(0, 1), true);
        this.player1 = this.physics.add.image(150, 200, 'pc');
        this.player2 = this.physics.add.image(150, 800, 'pc').setTintFill(0x00FF00);


        this.cam1.startFollow(this.player1, false, 1, 1, 0, 213);
        this.cam2.startFollow(this.player2, false, 1, 1, 0, 213);

        this.cam1.setDeadzone(500, this.h / 2);
        this.cam2.setDeadzone(500, this.h / 2);

        this.physics.add.collider(this.player1, this.border1);
        this.physics.add.collider(this.player2, this.border2);
        this.physics.add.collider(this.player2, this.border1);
        this.cursors = this.input.keyboard.createCursorKeys();

        
    }

    update() {
        const { left, right, up } = this.cursors;

        if (left.isDown) {
            this.player1.body.setVelocityX(-500);
            this.player2.body.setVelocityX(-500);

        }
        else if (right.isDown)
        {
            this.player1.body.setVelocityX(500);
            this.player2.body.setVelocityX(500);
        }
        else
        {
            this.player1.body.setVelocityX(0);
            this.player2.body.setVelocityX(0);

        }

        if (up.isDown && this.player1.body.touching.down)
        {
            this.player1.body.setVelocityY(-600);
        }

        if (up.isDown && this.player2.body.touching.down)
        {
            this.player2.body.setVelocityY(-600);
        }

    }

}


let config = {
    type: Phaser.WEBGL,
    width: 1920,
    height: 1200,
    backgroundColor: 0x000000,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {y: 1200},
            debug: true
        }
    },
    scene: [Platform]
}

let game = new Phaser.Game(config);
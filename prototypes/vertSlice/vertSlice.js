class Platform extends Phaser.Scene {
    constructor() {
        super('platform');
    }

    preload() {
        this.load.image('bg', '../../assets/bg placeholder.jpg');
        this.load.image('pc', '../../assets/pc_placeholder.png');
    }

    create() {
        // All dimensions/scales should be written in terms of these
        this.w = this.game.config.width;
        this.h = this.game.config.height;
        this.s = this.game.config.width * 0.01;

        // Set up background image instances
        this.add.image(0, 0, 'bg').setOrigin(0, 0) // Top left
        this.add.image(this.w, 0, 'bg').setOrigin(0, 0) // Top Right
        this.add.image(0, this.h / 2, 'bg').setOrigin(0, 0) // Bottom Left
        this.add.image(this.w, this.h / 2, 'bg').setOrigin(0, 0) // Bottom Right

        // Set up cameras
        this.cam1 = this.cameras.main; // Top camera
        this.cam1.setSize(this.w, this.h / 2) // Restrict view to top half
        this.cam1.setBounds(0, 0, this.w * 2, this.h / 2) // Prevent from following players off screen

        this.cam2 = this.cameras.add(0, this.h / 2, this.w, this.h / 2); // Bottom camera
        this.cam2.scrollY = this.h / 2; // Restrict view to bottom half
        this.cam2.setBounds(0, this.h/2, this.w * 2, this.h / 2) // Prevent from following players off screen

        // Borders for both halves
        this.border  = this.physics.add.group({allowGravity: false, immovable: true});
        this.border.add(this.add.rectangle(0, this.h, this.w * 4, 10, 0x00000).setOrigin(0, 1));
        this.border.add(this.add.rectangle(0, this.h / 2, this.w * 4, 10, 0x000000).setOrigin(0, 0.5));
        this.border.add(this.add.rectangle(0, 0, this.w * 4, 10, 0x000000).setOrigin(0, 0));
        this.border.add(this.add.rectangle(0, 0, 10, this.h * 2, 0x000000).setOrigin(0, 0));
        this.border.add(this.add.rectangle(this.w * 2, 0, 10, this.h * 2, 0x000000).setOrigin(1, 0));

        // Obstacles
        this.obstacles = this.physics.add.group({allowGravity: false, immovable: true})
        this.obstacles.add(this.add.rectangle(this.w / 2, this.h / 2, 100, 100, 0x000FF).setOrigin(0, 1));

        // Players
        this.players = this.physics.add.group();
        this.player1 = this.players.create(150, 200, 'pc')
        this.player2 = this.players.create(150, 800, 'pc').setTintFill(0x00FF00)

        // Tell cameras to follow players
        this.cam1.startFollow(this.player1, false, 1, 1, 0, 106);
        this.cam2.startFollow(this.player2, false, 1, 1, 0, 106);

        // Allow players to move in center of screen w/o camera follow
        this.cam1.setDeadzone(250, this.h / 2);
        this.cam2.setDeadzone(250, this.h / 2);

        // Collissions
        this.physics.add.collider(this.players, this.border);
        this.physics.add.collider(this.players, this.obstacles);

        // Register Keyboard Controls
        this.cursors = this.input.keyboard.createCursorKeys();
        
    }

    update() {
        const { left, right, up } = this.cursors;

        if (left.isDown) {
            this.players.setVelocityX(-500); // Move left
        }
        else if (right.isDown) {
            this.players.setVelocityX(500); // Move right
        }
        else {
            this.players.setVelocityX(0); // Stand Still
        }

        if (up.isDown && this.player1.body.touching.down) // Player1 Grounded Check
        {
            this.player1.setVelocityY(-600); // Jump
        }

        if (up.isDown && this.player2.body.touching.down) // Player2 Grounded Check
        {
            this.player2.setVelocityY(-600); // Jump
        }
    }
}


let config = {
    type: Phaser.WEBGL,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1200
    },
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
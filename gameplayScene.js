class GameplayScene extends Phaser.Scene {
    constructor() {
        super('gameplay');
    }

    preload() {
        this.load.image('bg', './assets/bg placeholder.jpg');

        // TODO: Change file name in path
        this.load.spritesheet("p1", "./assets/characterA-spritesheet.tps", {frameWidth: 40, frameHeight: 40});

        this.load.image('pc', './assets/CharacterA-0 copy.png');
        this.load.image('star', './assets/star_placeholder.png');

    }

    create() {
        // TODO: test each sprite in sheet by changing last number below
        this.add.sprite(400, 300, "p1", 1);

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
        this.border.add(this.add.rectangle(this.w * 2 + 150, 0, 10, this.h * 2, 0x000000).setOrigin(1, 0));

        // all stars
        this.stars = this.physics.add.group({allowGravity: false});
        // Collectable stars for top half
        this.topStars = this.physics.add.group({allowGravity: false});
        // Collectable stars from bottom half
        this.bottomStars = this.physics.add.group({allowGravity: false});

        // Players
        this.players = this.physics.add.group();
        this.player1 = this.players.create(150, 200, 'pc').setOffset(10, 7).setScale(6).setSize(75/6, 150/6, false);
        this.player2 = this.players.create(150, 800, 'pc').setOffset(10, 7).setScale(6).setSize(75/6, 150/6, false).setTint(0x87cdFF);

        // Tell cameras to follow players
        this.cam1.startFollow(this.player1, false, 1, 1, 0, 106);
        this.cam2.startFollow(this.player2, false, 1, 1, 0, 106);

        // Allow players to move in center of screen w/o camera follow
        this.cam1.setDeadzone(250, this.h / 2);
        this.cam2.setDeadzone(250, this.h / 2);

        // Obstacles
        this.obstacles = this.physics.add.group({allowGravity: false, immovable: true});

        //Exit gates
        this.gates = this.physics.add.group({allowGravity: false, immovable: true});
        this.gate1 = this.add.rectangle(this.w * 2 - 100, 0, 10, this.h / 2, 0xFF0000).setOrigin(1, 0);
        this.gate2 = this.add.rectangle(this.w * 2 - 100, this.h / 2, 10, this.h / 2, 0x00FF00).setOrigin(1, 0);
        this.gates.addMultiple([this.gate1, this.gate2]);

        // Collisions
        this.physics.add.collider(this.players, this.border);
        this.physics.add.collider(this.players, this.obstacles);
        this.physics.add.collider(this.players, this.gates);

        this.physics.add.overlap(this.players, this.stars, this.collectStar, null, this);
        // Register Keyboard Controls
        this.cursors = this.input.keyboard.createCursorKeys();
        // console.log(this.width * 2 - 100);
        this.onEnter();
    }

    addStar(x, y, side) {
        let star = this.stars.create(x, y, 'star');
        if (side == "top") {
            this.topStars.add(star);
        } else if (side == "bottom") {
            this.bottomStars.add(star);
        }
    }

    collectStar(player, star) {
        star.disableBody(true, true);
        if (this.topStars.contains(star) && this.topStars.countActive() == 0) {
            this.gates.remove(this.gate2, true, true);
        }
        else if (this.bottomStars.contains(star) && this.topStars.countActive() == 0) {
            this.gates.remove(this.gate1, true, true);
        }
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

        if (this.topStars.countActive() == 0) { // All top stars collected check
            // console.log("removed");
            // this.gates.remove(this.gate2, true, true); // Open bottom gate
            // this.gate2.destroy();
        }

        if (this.topStars.countActive() == 0) { // All bottom stars collected check
            // this.gate1.disableBody(true, true); // Open top gate
        }

        // If players are both off screen, proceed to narrative scene
        if (this.player1.x > this.w * 2 + 100 && this.player2.x > this.w * 2 - 100) { 
            this.scene.start('narrative');
        }
    }

    onEnter() {
        console.warn('This GameplayScene did not implement onEnter():', this.constructor.name);
    }
}


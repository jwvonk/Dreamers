class Narrative extends Phaser.Scene {
    constructor() {
        super('narrative');
    }
    create() {
        this.text = this.add.text(50, 50, "Blah Blah Blah").setFontSize(50);
        this.add.text(50, 100, "Click to proceed.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('gameplay'));
    }
}

class Gameplay extends Phaser.Scene {
    constructor() {
        super('gameplay')
    }
    create() {
        config.backgroundColor = 0x000099;
        this.add.text(50, 300, "[Press S to Solve Puzzle]")
        this.input.keyboard.on('keydown-S', () => this.scene.start('narrative'));
    }
}

let config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 800,
    backgroundColor: 0x000000,
    scene: [Narrative, Gameplay],
}

let game = new Phaser.Game(config);
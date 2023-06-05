class NarrativeScene extends Phaser.Scene {
    constructor(key) {
        super(key);
    }
    create() {
        this.add.text(50, 200, "Click to proceed.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('gameplay'), this);
    }
}

// class Dialoge1 extends NarrativeScene {
//     constructor() {
//         super("dialogue1")
//     }
//     this.text = this.add.text(50, 50, "Blah Blah Blah\nBlah Blah Blah").setFontSize(50);
//     const fx = this.text.preFX.addReveal(.1, 0, 1);

//     this.tweens.add({
//         targets: fx,
//         progress: 1,
//         hold: 500,
//         duration: 3000
//     });

// }
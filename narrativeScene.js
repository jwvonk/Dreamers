class NarrativeScene extends Phaser.Scene {
    constructor(key) {
        super(key);
    }
    create() {
        this.add.text(50, 1150, "Click to proceed.").setFontSize(20);
        this.onEnter();
    }
    onEnter() {}
}

class Intro extends NarrativeScene {
    constructor() {
        super("intro")
    }
    onEnter() {
        this.text = this.add.text(50, 50, '\"Why am I here? Who……?\"\n\n\"What brought me… no… us… here?\"\n\n\"ho the hell are you?\"\n\n\"Why do I need to be trapped here with someone else?\"'
        ).setFontSize(50);
        const fx = this.text.preFX.addReveal(.1, 0, 1);

        this.tweens.add({
            targets: fx,
            progress: 1,
            duration: 6000
        });

        this.input.on('pointerdown', () => this.scene.start('level1'), this);
    }

}
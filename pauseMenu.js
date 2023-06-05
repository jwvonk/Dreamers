class Pause extends Phaser.Scene {
    constructor() {
        super("pause");
    }

    preload() {
        this.load.path = "assets/";
        this.load.image('pause', 'pause-button-200px.png');
    }
    
    create() {
        this.cameras.main.setAlpha(.5)
        this.add.rectangle(0, 0, 1920, 1200, 0x000000).setOrigin(0, 0);
        this.add.text(1920/2, 1200/2, "Paused").setFontSize(400).setOrigin(.5, .5);
        this.input.keyboard.on("keydown-P", () => {
            this.scene.resume('gameplay');
            this.scene.stop();
        });
    }

}
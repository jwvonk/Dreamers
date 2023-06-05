class Pause extends Phaser.Scene {
    constructor() {
        super('pause');
    }

    init (data) {
        this.from = data.from;
    }

    preload() {
        this.load.path = "assets/";
        this.load.image('pause', 'pause-button-200px.png');
    }
    
    create() {
        this.bgm = false;
        if (g_bgm.isPlaying) {
            g_bgm.pause();
            this.bgm = true;
        }
        this.cameras.main.setAlpha(.5)
        this.add.rectangle(0, 0, 1920, 1200, 0x000000).setOrigin(0, 0);
        this.add.text(1920/2, 1200/2, "Paused").setFontSize(400).setOrigin(.5, .5);
        this.input.keyboard.on("keydown-P", () => {
            this.scene.resume(this.from);
            if (this.bgm) {
                g_bgm.resume();
            }
            this.scene.stop();
        });
    }

}
class NarrativeScene extends Phaser.Scene {
    constructor(key) {
        super(key);
    }
    create() {
        this.add.text(50, 1150, "Click to proceed.").setFontSize(20);
        this.onEnter();
        this.input.keyboard.on('keydown-P', () => {
            this.scene.pause();
            this.scene.launch('pause');
        });

        this.input.keyboard.on('keydown-R', () => {
            this.scene.restart();
        });

        this.input.keyboard.on('keydown-Q', () => {
            this.scene.start("level1");
        });

        this.input.keyboard.on('keydown-W', () => {
            this.scene.start("level2");
        });

        this.input.keyboard.on('keydown-E', () => {
            this.scene.start("level3");
        });
    }
    onEnter() {}
}

class Title extends NarrativeScene {
    constructor() {
        super("title")
    }
    preload() {
        this.load.path = "assets/";
        this.load.image("title", "purple and blue sky clouds-600px.png");
    }
    onEnter() {
        this.add.image(1920/2, 1200/2, "title").setOrigin(.5, .5).setScale(3.2);
        this.input.on('pointerdown', () => this.scene.start('intro'), this);
    }

}

class Intro extends NarrativeScene {
    constructor() {
        super("intro")
    }
    onEnter() {

        this.text = this.add.text(50, 50, '\"Why am I here? Who……?\"\n\n\"What brought me… no… us… here?\"\n\n\"Who the hell are you?\"\n\n\"Why do I need to be trapped here with someone else?\"'
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

class Dialogue1 extends NarrativeScene {
    constructor() {
        super("dialogue1")
    }
    onEnter() {
        this.text = this.add.text(50, 50, '\"What kind of sick joke is this?\nWhy am I forced to help you?\n\n\"Who the hell came up with this idea?\nWhy does my life depend on others?\"'
        ).setFontSize(50);
        const fx = this.text.preFX.addReveal(.1, 0, 1);

        this.tweens.add({
            targets: fx,
            progress: 1,
            duration: 6000
        });

        this.input.on('pointerdown', () => this.scene.start('level2'), this);
    }
}

class Dialogue2 extends NarrativeScene {
    constructor() {
        super("dialogue2")
    }
    onEnter() {
        this.text = this.add.text(50, 50, '\"Why do you get to stand still while I need to do all the work?\"\n\n\"So that I\'ll inevitably have to do all the work for you later on!\"'
        ).setFontSize(50);
        const fx = this.text.preFX.addReveal(.1, 0, 1);

        this.tweens.add({
            targets: fx,
            progress: 1,
            duration: 6000
        });

        this.input.on('pointerdown', () => this.scene.start('level3'), this);
    }
}

class Dialogue3 extends NarrativeScene {
    constructor() {
        super("dialogue3")
    }
    onEnter() {
        this.text = this.add.text(50, 50, '\"That was tricky……\"\n\n\"Luckily I\'m smart enough……\"\n\n\"Well… thanks for helping me…\"\n\n\"What was that?\"\n\n\"I don\'t like repeating myself.\"'
        ).setFontSize(50);
        const fx = this.text.preFX.addReveal(.1, 0, 1);

        this.tweens.add({
            targets: fx,
            progress: 1,
            duration: 6000
        });

        this.input.on('pointerdown', () => this.scene.start('end'), this);
    }
}

class End extends NarrativeScene {
    constructor() {
        super("end")
    }
    onEnter() {
        this.text = this.add.text(50, 50, '\"Finally, we\'re out…\"\n\n\"We were so close to getting killed.\"\n\n\"Uhh… It feels so weird saying that… but good job…\"\n\n\"Yeah, extremely strange for me but…… thanks…”\n\nThe End'
        ).setFontSize(50);
        const fx = this.text.preFX.addReveal(.1, 0, 1);

        this.tweens.add({
            targets: fx,
            progress: 1,
            duration: 6000
        });

        this.input.on('pointerdown', () => this.scene.start('title'), this);
    }
}
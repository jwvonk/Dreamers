class Level3 extends GameplayScene {
    constructor() {
        super('level3');
    }

    onEnter() {
        this.border.add(this.add.rectangle(0, this.h / 2, 800, 250, 0x000000).setOrigin(0, 1));
        this.border.add(this.add.rectangle(1400, this.h / 2, 100, 250, 0x000000).setOrigin(0, 1));
        this.border.add(this.add.rectangle(1600, this.h / 2, 100, 250, 0x000000).setOrigin(0, 1));
        this.border.add(this.add.rectangle(1800, this.h / 2, 1000, 250, 0x000000).setOrigin(0, 1));
        this.border.add(this.add.rectangle(2800, this.h / 2, 125, 125, 0x000000).setOrigin(0, 1));


        this.border.add(this.add.rectangle(0, this.h, 800, 250, 0x000000).setOrigin(0, 1));
        this.border.add(this.add.rectangle(1400, this.h, 100, 250, 0x000000).setOrigin(0, 1));
        this.border.add(this.add.rectangle(1600, this.h, 100, 250, 0x000000).setOrigin(0, 1));
        this.border.add(this.add.rectangle(1800, this.h, 1000, 250, 0x000000).setOrigin(0, 1));
        this.border.add(this.add.rectangle(2800, this.h, 125, 125, 0x000000).setOrigin(0, 1));


        let topOb1 = this.addObstacle(630, 200, 2).setTint(0x7775ff);
        this.extendObstacle(topOb1);
        let botOb1 = this.addObstacle(570, this.h - 250, 1).setTint(0x7775ff);
        this.setFollow(topOb1, botOb1);
        let botGate1 = this.addObstacle(720, this.h - 260, 2.3).setTint(0xff8b6e);
        this.setFollow(topOb1, botGate1);



        let topOb2 = this.addObstacle(1900, 200, 1, false).setTint(0x75ff7a);
        this.addObstacle(1900, this.h - 250, 1, false);

        this.addPlate(2200, this.h / 2 - 250, [topOb2], ["raise"], [150], true).setTint(0x75ff7a);

        let topOb3 = this.addObstacle(2400, 200, 2, false).setTint(0x7775ff);
        this.addObstacle(2400, this.h - 250, 1, false);

        this.addPlate(300, this.h - 250, [botGate1, topOb3], ["lower", "lower"], [341, 150], true).setTint(0xff8b6e);

        this.addPlate(2600, this.h / 2 - 250, [botOb1], ["raise"], [150], true).setTint(0x7775ff);
    }
    onTick() {
        if (this.player1.x > this.w * 2 + 100 && this.player2.x > this.w * 2 - 100) { 
            this.scene.start('dialogue3');
        }
    }
}
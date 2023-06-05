class Level2 extends GameplayScene {
    constructor() {
        super('level2');
    }

    onEnter() {
        this.border.add(this.add.rectangle(0, this.h / 2, 800, 250, 0x000000).setOrigin(0, 1));
        this.border.add(this.add.rectangle(1400, this.h / 2, 100, 250, 0x000000).setOrigin(0, 1));
        this.border.add(this.add.rectangle(1600, this.h / 2, 100, 250, 0x000000).setOrigin(0, 1));
        this.border.add(this.add.rectangle(1800, this.h / 2, 1000, 250, 0x000000).setOrigin(0, 1));

        this.border.add(this.add.rectangle(0, this.h, 800, 250, 0x000000).setOrigin(0, 1));
        this.border.add(this.add.rectangle(1400, this.h, 100, 250, 0x000000).setOrigin(0, 1));
        this.border.add(this.add.rectangle(1600, this.h, 100, 250, 0x000000).setOrigin(0, 1));
        this.border.add(this.add.rectangle(1800, this.h, 1000, 250, 0x000000).setOrigin(0, 1));

        let topOb1 = this.addObstacle(500, 200, 2);
        let botOb1 = this.addObstacle(570, this.h - 250, 1/3);
        this.setFollow(topOb1, botOb1);

        let botGate1 = this.addGate(720, this.h - 250);

        let topOb2 = this.addObstacle(1900, 200, 1, false);
        this.addObstacle(1900, this.h - 250, 1, false);

        this.addPlate(2200, this.h / 2 - 250, [topOb2], "raise", true);

        let topOb3 = this.addObstacle(2400, 200, 2, false);
        this.addObstacle(2400, this.h - 250, 2, false);

        this.addPlate(300, this.h - 250, [botGate1, topOb3], "lower", true);

        this.addPlate(2600, this.h / 2 - 250, [botOb1], "raise", true);


    }

}
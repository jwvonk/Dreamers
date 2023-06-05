class Level2 extends GameplayScene {
    constructor() {
        super('level2');
    }

    onEnter() {
        this.border.add(this.add.rectangle(1100, this.h / 2, 600, 150, 0x000000).setOrigin(0, 1));
        this.border.add(this.add.rectangle(1100, this.h, 600, 150, 0x000000).setOrigin(0, 1));

        // this.border.add(this.add.rectangle(0, this.h, 800, 250, 0x000000).setOrigin(0, 1));
        // this.border.add(this.add.rectangle(1400, this.h, 100, 250, 0x000000).setOrigin(0, 1));
        // this.border.add(this.add.rectangle(1600, this.h, 100, 250, 0x000000).setOrigin(0, 1));
        // this.border.add(this.add.rectangle(1800, this.h, 1000, 250, 0x000000).setOrigin(0, 1));

        let topOb1 = this.addObstacle(800, 200, 1);
        let botOb1 = this.addObstacle(800, this.h - 250, 2);
        this.setFollow(botOb1, topOb1);

        let topGate = this.addObstacle(1500, this.h / 2 - 150, .1, false);

        this.addPlate(500, this.h - 10, [topGate, botOb1], ["raise", "lower"], [350, 150], true);

        let topOb2 = this.addObstacle(1250, this.h/2 - 150, 1);
        let botOb2 = this.addObstacle(1250, this.h - 150, 1);
        this.setFollow(topOb2, botOb2);

        this.addPlate(1900, this.h / 2 + 5, [botOb2], ["raise"], [150], true);

        let topOb3 = this.addObstacle(2600, this.h / 2 + 5, 3, false);

        this.addPlate(2100, this.h + 10, [topOb3], ["lower"], [445], false);




        // let botGate1 = this.addGate(720, this.h - 250);

        // let topOb2 = this.addObstacle(1900, 200, 1, false);
        // this.addObstacle(1900, this.h - 250, 1, false);

        // this.addPlate(2200, this.h / 2 - 250, [topOb2], "raise", true);

        // let topOb3 = this.addObstacle(2400, 200, 2, false);
        // this.addObstacle(2400, this.h - 250, 2, false);

        // this.addPlate(300, this.h - 250, [botGate1, topOb3], "lower", true);

        // this.addPlate(2600, this.h / 2 - 250, [botOb1], "raise", true);



    }
    onTick() {
        if (this.player1.x > this.w * 2 + 100 && this.player2.x > this.w * 2 - 100) { 
            this.scene.start('level2');
        }
    }
}
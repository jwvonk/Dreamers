class Level1 extends GameplayScene {
    constructor() {
        super('level1');
    }

    onEnter() {
        // this.scene.start('level3')
        let topOb1 = this.addObstacle(700, this.h / 2  - 5, 2).setTint(0x75ff7a);
        let botOb1 = this.addObstacle(600, this.h - 10, 1).setTint(0x75ff7a);
        this.setFollow(botOb1, topOb1);

        let botGate1 = this.addObstacle(1300, this.h - 10, 3, false).setTint(0xff8b6e);

        this.addPlate(400, this.h / 2  - 5, [botGate1], ["lower"], [450], false).setTint(0xff8b6e);

        this.addPlate(1600, this.h - 10, [topOb1], ["lower"], [150], true).setTint(0x75ff7a);

        this.addObstacle(2000, this.h / 2  - 5, 1, false);

        this.addObstacle(2000, this.h - 10, 1, false);

        let topOb2 = this.addObstacle(2600, this.h / 2  - 5, 1).setTint(0x7775ff);
        let botOb2 = this.addObstacle(2600, this.h - 10, 2).setTint(0x7775ff);
        this.setFollow(topOb2, botOb2);

    }

    onTick() {
        if (this.player1.x > this.w * 2 + 100 && this.player2.x > this.w * 2 - 100) { 
            this.scene.start('dialogue1');
        }
    }
}
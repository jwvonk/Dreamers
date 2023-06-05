class Level1 extends GameplayScene {
    constructor() {
        super('level1');
    }

    onEnter() {
        let topOb1 = this.addObstacle(700, 1, "top");
        let botOb1 = this.addObstacle(600, 1, "bottom");
        this.setFollow(botOb1, topOb1);

        let botGate1 = this.addGate(1300, "bottom");

        this.addPlate(400, "top", botGate1, "lower", false);

        this.addPlate(1600, "bottom", topOb1, "raise", true);

        this.addObstacle(2000, 1, "top", false);

        this.addObstacle(2000, 1, "bottom", false);

        let topOb2 = this.addObstacle(2500, 1, "top");
        let botOb2 = this.addObstacle(2500, 2, "bottom");
        this.setFollow(topOb2, botOb2);

    }
}
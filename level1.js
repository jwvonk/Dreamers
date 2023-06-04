class Level1 extends GameplayScene {
    constructor() {
        super('level1');
    }

    onEnter() {
        let a = this.addGate(500, "top");
        let b = this.addObstacle(750, 2, "bottom");

        // this.setFollow(b, a);

        this.addPlate(500, "bottom", a, "lower", false);

    }
}
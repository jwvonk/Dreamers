class Level1 extends GameplayScene {
    constructor() {
        super('level1');
    }

    onEnter() {
        let a = this.addObstacle(500, 2, "top");
        let b = this.addObstacle(750, 2, "bottom");

        this.setFollow(b, a);

        this.addPlate(500, "bottom", a, "raise", false);





    }
}
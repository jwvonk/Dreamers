class Level1 extends GameplayScene {
    constructor() {
        super('level1');
    }

    onEnter() {
        this.obstacles.add(this.add.rectangle(this.w / 2, this.h / 2, 100, 100, 0x000FF).setOrigin(0, 1));

        this.addStar(500, 400, "top");
        this.addStar(500, 900, "bottom");
    }
}
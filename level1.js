class Level1 extends GameplayScene {
    constructor() {
        super('level1');
    }

    onEnter() {
        this.obstacles = this.physics.add.group({allowGravity: false, immovable: true});
        this.obstacles.add(this.add.rectangle(this.w / 2, this.h / 2, 100, 100, 0x000FF).setOrigin(0, 1));
    }
}
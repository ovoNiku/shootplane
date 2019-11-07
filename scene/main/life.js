class Life extends NikuImage {
    constructor(game, x) {
        super(game, 'life')
        this.x = x
        this.setup()
    }

    setup() {
        this.y = 900
        this.w = 100
        this.h = 100
    }

    update() {
        super.update();
    }
}


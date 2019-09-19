class Cloud extends NikuImage {
    constructor(game) {
        var type = randomBetween(0, 2)
        var name = 'cloud' + type
        super(game, name)
        this.setup()
    }

    setup() {
        this.speed = randomBetween(1, 3)
        this.x = randomBetween(0, 400)
        this.y = randomBetween(0, -300)
    }

    update() {
        this.y += this.speed
        if (this.y > 1000) {
            this.setup()
        }
    }
}


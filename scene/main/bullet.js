class Bullet extends NikuImage {
    constructor(game) {
        super(game, 'bullet')
        this.setup()
    }

    setup() {
        this.speed = 5
        this.valid = false
    }

    update() {
        this.y -= this.speed
    }
}


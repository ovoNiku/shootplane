class Bullet extends NikuImage {
    constructor(game, type) {
        var name = 'bullet1'
        if (type === 'plane') {
            name = 'bullet0'
        }
        super(game, name)
        this.type = type
        this.setup()
    }

    setup() {
        this.speed = 5
        this.valid = false
    }

    update() {
        if (this.type === 'plane') {
            this.y -= this.speed
        } else {
            this.y += this.speed
        }
    }
}


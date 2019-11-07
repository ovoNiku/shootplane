class Enemy extends NikuImage {
    constructor(game) {
        var type = randomBetween(0, 2)
        var name = 'enemy' + type
        super(game, name)
        this.type = type
        this.setup()
    }

    setup() {
        this.speed = randomBetween(2, 5)
        this.x = randomBetween(50, 700)
        this.y = randomBetween(0, -400)
        this.cooldown = 0
        this.bullets = []
    }

    fire() {
        if (this.cooldown === 0) {
            this.cooldown = 100
            var b = new Bullet(this.game, 'enemy')
            b.x = this.x + this.w / 2
            b.y = this.y + this.h
            this.scene.addElements(b)
            this.bullets.push(b)
        }
    }

    update() {
        this.y += this.speed
        if (this.y > 1000) {
            this.setup()
        }
        if (this.cooldown > 0) {
            this.cooldown--
        }
        this.bullets = this.bullets.filter(b => b.valid === false)
    }
}


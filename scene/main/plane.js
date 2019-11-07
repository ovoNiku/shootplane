class Plane extends NikuImage {
    constructor(game) {
        super(game, 'plane')
        this.setup()
    }

    setup() {
        this.speed = 10
        this.x = 300
        this.y = 500
        this.cooldown = 0
        this.bullets = []
    }

    move() {
        if (this.x < 0) {
            this.x = 0
        }
        if (this.x > 600 + this.w / 2) {
            this.x = 600 + this.w / 2
        }
        if (this.y < 0) {
            this.y = 0
        }
        if (this.y > 900 - this.h / 2) {
            this.y = 900 - this.h / 2
        }
    }

    update() {
        if (this.cooldown > 0) {
            this.cooldown--
        }
        this.bullets = this.bullets.filter(b => b.valid === false)
    }

    fire() {
        if (this.cooldown === 0) {
            this.cooldown = 10
            var x = this.x + this.w / 2
            var y = this.y
            var b = new Bullet(this.game, 'plane')
            b.x = x
            b.y = y
            this.scene.addElements(b)
            this.bullets.push(b)
        }
    }

    moveLeft() {
        this.move(this.x -= this.speed)
    }

    moveRight() {
        this.move(this.x += this.speed)
    }

    moveUp() {
        this.move(this.y -= this.speed)
    }

    moveDown() {
        this.move(this.y += this.speed)
    }
}


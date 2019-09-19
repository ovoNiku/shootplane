class Enemy extends NikuImage {
    constructor(game) {
        var type = randomBetween(0, 5)
        var name = 'enemy' + type
        super(game, name)
        this.setup()
        this.booms = []
    }

    setup() {
        this.speed = randomBetween(2, 5)
        this.x = randomBetween(0, 400)
        this.y = randomBetween(0, -200)
        this.alive = true
    }

    killed() {
        this.alive = false
        var boom = new Boom(this.game)
        boom.x = this.x
        boom.y = this.y
        this.scene.addElements(boom)
        this.booms.push(boom)
        // this.booms = this.booms.filter(b => b.alive === false)
        setTimeout(function () {
            for (let i = 0; i < this.booms.length; i++) {
                this.scene.removeElements(this.booms[i])
            }
        }, 3000)
    }

    update() {
        this.y += this.speed
        if (this.y > 1000) {
            this.setup()
        }

    }
}


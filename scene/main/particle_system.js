class ParticleSystem {
    constructor(game, x, y) {
        this.game = game
        this.x = x
        this.y = y
        this.setup()
    }

    setup() {
        this.particles = []
        this.particleNum = 20
        this.duration = 30
    }

    update() {
        this.duration--
        //添加
        if (this.particles.length < this.particleNum) {
            var p = new Particle(this.game)
            var s = 0.5
            var vx = randomBetween(-s, s)
            var vy = randomBetween(-s, s)
            p.init(this.x, this.y, vx, vy)
            this.particles.push(p)
        }
        //更新
        for (var p of this.particles) {
            p.update()
        }
        //删除
        this.particles = this.particles.filter(p => p.life > 0)
    }

    draw() {
        if (this.duration < 0) {
            return
        }
        for (var p of this.particles) {
            p.draw()
        }
    }
}

class Scene extends BaseScene {
    constructor(game) {
        super(game)
        this.score = 0
        this.setup()
        this.setupInputs()
    }

    setup() {
        this.numberOfEnemies = 10
        this.numberOfcloud = 5
        this.bg = new NikuImage(this.game, 'bg1')
        this.bg.w = 800
        this.bg.h = 1000
        this.plane = new Plane(this.game)

        this.addElements(this.bg)
        this.addEnemies()
        this.addElements(this.plane)
    }

    addEnemies() {
        for (let i = 0; i < this.numberOfcloud; i++) {
            var c = new Cloud(this.game)
            this.addElements(c)
        }

        var es = []
        for (let i = 0; i < this.numberOfEnemies; i++) {
            var e = new Enemy(this.game)
            es.push(e)
            this.addElements(e)
        }
        this.enemies = es
    }

    setupInputs() {
        this.game.registerAction('a', () => {
            this.plane.moveLeft()
        })
        this.game.registerAction('d', () => {
            this.plane.moveRight()
        })
        this.game.registerAction('w', () => {
            this.plane.moveUp()
        })
        this.game.registerAction('s', () => {
            this.plane.moveDown()
        })
        this.game.registerAction(' ', () => {
            this.plane.fire()
        })
    }

    draw() {
        super.draw()
        this.game.context.font = "80pt Georgia";
        this.game.context.fillStyle = "white";
        this.game.context.fillText('score: ' + this.score, 20, 80, 200)
    }

    update() {
        super.update()
        this.enemies = this.enemies.filter(e => e.alive === true)
        var ps = []
        for (var b of this.plane.bullets) {
            for (var e of this.enemies) {
                if (e.collide(b)) {
                    this.removeElements(e)
                    this.removeElements(b)
                    b.valid = true
                    e.killed()
                    //敌机消灭产生火花
                    var p = new ParticleSystem(this.game, e.x + e.w / 2, e.y + e.h / 2)
                    ps.push(p)
                    this.addElements(p)
                    this.score += 100
                }
            }
        }
        this.particles = ps
        for (var p of this.particles) {
            if (p.duration < 0) {
                this.removeElements(p)
            }
        }
    }
}



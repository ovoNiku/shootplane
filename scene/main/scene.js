class Scene extends BaseScene {
    constructor(game) {
        super(game)
        this.score = 0
        this.setup()
        this.setupInputs()
    }

    setup() {
        this.numberOfEnemies = 10
        // this.numberOfcloud = 5
        this.numberOflives = 3
        this.bg = new NikuImage(this.game, 'bg')
        this.bg.w = 800
        this.bg.h = 1000
        this.plane = new Plane(this.game)
        this.addElements(this.bg)
        this.addEnemies()
        this.addElements(this.plane)
    }

    addEnemies() {
        var ls = []
        for (let i = 0; i < this.numberOflives; i++) {
            var l = new Life(this.game, 700 - i * 70)
            ls.push(l)
            this.addElements(l)
        }
        this.lives = ls
        // for (let i = 0; i < this.numberOfcloud; i++) {
        //     var c = new Cloud(this.game)
        //     this.addElements(c)
        // }
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
        this.game.context.font = "60pt Georgia";
        this.game.context.fillStyle = "black";
        this.game.context.fillText('score: ' + this.score, 20, 80, 200)
    }

    update() {
        super.update()
        // 类型为 2 的敌机会发射子弹
        var firedEnemies = this.enemies.filter(e => e.type === 2)
        for (let i = 0; i < firedEnemies.length; i++) {
            firedEnemies[i].fire()
        }
        var ps = []
        // 玩家子弹与敌机相撞
        for (var b of this.plane.bullets) {
            for (var e of this.enemies) {
                if (e.collide(b)) {
                    this.removeElements(b)
                    b.valid = true
                    //敌机消灭产生火花
                    var p = new ParticleSystem(this.game, e.x + e.w / 4, e.y + e.h / 2)
                    ps.push(p)
                    this.addElements(p)
                    // 重置敌机位置
                    e.y += 1000
                    this.score += 100
                }
            }
        }
        // 敌机子弹与玩家相撞
        for (var e of firedEnemies) {
            for (var b of e.bullets) {
                if (b.collide(this.plane)) {
                    this.removeElements(b)
                    b.valid = true
                    // 扣除生命值
                    var l = this.lives.pop()
                    this.removeElements(l)
                }
            }
        }
        // 玩家与敌机相撞
        for (var e of this.enemies) {
            if (e.collide(this.plane)) {
                // 扣除生命值
                var l = this.lives.pop()
                this.removeElements(l)
                var p = new ParticleSystem(this.game, e.x + e.w / 4, e.y + e.h / 2)
                ps.push(p)
                this.addElements(p)
                e.y += 1000
            }
        }


        this.particles = ps
        for (var p of this.particles) {
            if (p.duration < 0) {
                this.removeElements(p)
            }
        }

        // 生命值扣完结束游戏
        if (this.lives.length === 0) {
            var s = new EndScene(this.game)
            this.game.replaceScene(s)
        }
    }
}



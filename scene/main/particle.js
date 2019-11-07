class Particle extends NikuImage {
    constructor(game) {
        super(game, 'particle')
        this.setup()
    }

    setup() {
        this.life = 10
        this.vx = randomBetween(-2, 2)
        this.vy = randomBetween(-2, 2)
    }

    init(x, y) {
        this.x = x
        this.y = y
        this.w = 100
        this.h = 100
    }

    update() {
        this.life--
        this.x += this.vx
        this.y += this.vy
        var factor = 0.2
        this.vx += factor * this.vx
        this.vy += factor * this.vy
    }
}
// class Particle extends Game {
//     constructor(game) {
//         super(game)
//         var randomNumber = Math.floor((Math.random() * 4));
//         var colorArray = ['#272F32', '#9DBDC6', '#FF3D2E', '#DAEAEF']
//         this.color = colorArray[randomNumber];
//         this.setup()
//     }
//
//     setup() {
//         this.life = 10
//         this.radius = randomBetween(4, 10)
//         this.vx = randomBetween(-2, 2)
//         this.vy = randomBetween(-2, 2)
//     }
//
//     init(x, y) {
//         this.x = x
//         this.y = y
//     }
//
//     update() {
//         this.life--
//         this.x += this.vx
//         this.y += this.vy
//         var factor = 0.2
//         this.vx += factor * this.vx
//         this.vy += factor * this.vy
//     }
//
//     draw() {
//         this.drawCircle()
//     }
// }
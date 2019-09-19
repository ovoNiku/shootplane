class Boom extends NikuImage {
    constructor(game) {
        super(game, 'boom')
        this.setup()
    }

    setup() {
        this.alive = true
    }


    update() {
        // setTimeout(function () {
        //     this.alive = false
        // }, 3000)
    }
}
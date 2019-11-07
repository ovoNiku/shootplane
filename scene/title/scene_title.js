class TitleScene extends BaseScene {
    constructor(game) {
        super(game)
        game.registerAction('Enter', () => {
            var s = new Scene(game)
            game.replaceScene(s)
        })
        this.setup()
    }

    setup() {
        this.bg = new NikuImage(this.game, 'bg')
        this.title = new NikuImage(this.game, 'title')
        this.bg.w = 800
        this.bg.h = 1000
        this.title.x = 120
        this.title.y = 300
        this.addElements(this.bg)
        this.addElements(this.title)
    }

    draw() {
        super.draw()
        this.game.context.font = "30pt Georgia";            //设置文本大小 + 字体
        this.game.context.fillStyle = "black";
        this.game.context.fillText("按 Enter 开始游戏", 250, 470, 300)
    }
}
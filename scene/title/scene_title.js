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
        this.bg = new NikuImage(this.game, 'bg0')
        this.bg.w = 800
        this.bg.h = 1000
        this.addElements(this.bg)
    }

    draw() {
        super.draw()
        this.game.context.font = "70pt Georgia";            //设置文本大小 + 字体
        this.game.context.fillStyle = "white";
        this.game.context.fillText("开始游戏 Enter", 300, 400, 300)
    }
}